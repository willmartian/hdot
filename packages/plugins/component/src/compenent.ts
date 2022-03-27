import {
  Observable,
  mergeMap,
  of,
  EMPTY,
  BehaviorSubject,
  fromEvent,
  tap,
  Subscription
} from "rxjs";
import { Renderer } from "./render";

export const register = (tagName: string, component: (el: HTMLElement) => string, options?: ElementDefinitionOptions) => {

  const el = class extends HTMLElement {
    
    #subscription: Subscription;
    
    #renderer: Renderer;

    constructor() {
      super();

      this.attachShadow({ mode: 'open' });

      this.#renderer = new Renderer({
        rootNode: this.shadowRoot,
      });
    }

    connectedCallback() {
      const [initialHTML, tasks] = component(this);

      this.shadowRoot.innerHTML = initialHTML;

      // this.#subscription = tasks.subscribe(
      //   this.#renderer.push.bind(this.#renderer)
      // );
    }

    disconnectedCallback() {
      this.#subscription.unsubscribe();
    }
  };

  if (!window.customElements.get(tagName)) {
    window.customElements.define(tagName, el, options);
  }

  return el;
};

/**
 * 
 * @param {HTMLElement} target 
 * @param {MutationObserverInit} config 
 * @returns {Observable<MutationRecord[]>}
 */
 export const fromMutation = (target, config) => {
  return new Observable((observer) => {
    // Is there a way to share this MutatioObserver?
    const mutation = new MutationObserver((mutations, instance) => {
      observer.next(mutations);
    });
    mutation.observe(target, config);
    const unsubscribe = () => {
      mutation.disconnect();
    };
    return unsubscribe;
  });
};

export const fromAttribute = (target: HTMLElement, name: string): BehaviorSubject<any> => {
  name = sanitizeName(target, name);
  const sub = new BehaviorSubject(target.getAttribute(name));

  fromMutation(target, { attributes: true })
    .pipe(
      mergeMap((val) =>
        val[0].attributeName === name ? of(target.getAttribute(name)) : EMPTY
      )
    )
    .subscribe(sub);

  return sub;
};

export const upgrade = (el: HTMLElement, component) => {
  const renderer = new Renderer({
    rootNode: el
  });

  const [initialHTML, tasks] = component(el);
  el.innerHTML = initialHTML;
  tasks.subscribe(
    renderer.push.bind(renderer)
  );
}

export const setAttribute = (el: HTMLElement, name: string) => {
  name = sanitizeName(el, name);
  return tap((val: string) => el.setAttribute(name, val));
}

export const setProperty = (el: HTMLElement, name: string) => {
  return tap((val: any) => el[name] = val);
}


/**
 * For non custom elements, 
 * if the attribute "<name>" does not exist in the element, 
 * return "data-<name>" instead.
 */
const sanitizeName = (el: HTMLElement, name: string): string => {
  if (el.tagName.includes('-')) {
    return name;
  }

  // TODO: check attributes support vs props
  if (name in el) {
    return name;
  }

  return `data-${name}`;
}