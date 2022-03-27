

export type RenderTask = {
  selector: string;
  name: string;
  action: "ATTRIBUTE" | "PROPERTY" | "EVENT" | "CHILD";
  value: any;
}

export type RendererOptions = {
  rootNode?: Element | ShadowRoot | string;
  ws?: string;
}

export class Renderer {

  #renderQueue: Map<string, RenderTask> = new Map();
  #eventCache: Map<any, any> = new Map();
  #selectors: Map<string, Node> = new Map();
  #options: RendererOptions;
  #rootNode: Element | ShadowRoot;
  #walker: TreeWalker;

  constructor(options: RendererOptions) {
    this.#options = options;
    if (options.rootNode) {
      this.#rootNode =
        typeof options.rootNode === "string"
          ? document.querySelector(options.rootNode)
          : options.rootNode;
    } else {
      this.#rootNode = document.body;
    }

    this.#walker = document.createTreeWalker(
      this.#rootNode,
      129 /* Elements and Comments */
    );

    this.#listen();
  }

  push({ selector, name, action, value }: RenderTask) {
    selector = selector.toLowerCase();
    if (selector && !this.#selectors.get(selector)) {
      this.#selectors.set(selector, null);
    }
    this.#renderQueue.set(`${selector}.${name}`, {
      selector,
      name,
      action,
      value,
    });
    if (this.#renderQueue.size === 1) {
      queueMicrotask(this.#render.bind(this));
    }
  }


  #listen() {
    if (this.#options.ws) {
      const ws = new WebSocket(this.#options.ws);
      ws.onmessage = (ev) => {
        const task = JSON.parse(ev.data);
        this.push(task);
      };
    }
  }

  #render() {
    this.#setSelectors();
    this.#renderQueue.forEach((v, _k) => {
      this.#processAction(v.selector, v.name, v.action, v.value);
    });
    this.#renderQueue.clear();
  }

  #processAction(selector, name, type, value) {
    const target = this.#selectors.get(selector) as HTMLElement;
    switch (type) {
      case "EVENT":
        const prevListener = this.#eventCache.get({ selector, name });
        if (prevListener) {
          target.removeEventListener(name, prevListener);
        }
        target.addEventListener(name, value);
        this.#eventCache.set({ selector, name }, value);
        break;
      case "PROPERTY":
        target[name] = value;
        break;
      case "ATTRIBUTE":
        target.setAttribute(name, value);
        break;
      case "CHILD":
        // const templateEl = document.createElement('template');
        // templateEl.innerHTML = value;
        // target.deleteContents();
        // target.insertNode(templateEl.content); 
        break;
    }
  }

  #setSelectors() {
    let currentNode = /** @type {HTMLElement} */ (this.#walker.currentNode);
    while (currentNode) {
      this.#selectors.forEach((v, k) => {
        /**
         * If the key already has a value, skip.
         */
        if (v !== null) {
          return;
        }

        /**
         * The first time we hit a range start comment, store it as `start-<key>`.
         * When we hit the end range comment, store the Range() as `<key>`
         */
        if (k.includes('range-havarti') && (currentNode).textContent.includes(k)) {
          const startSelector = `start-${k}`;
          const start = this.#selectors.get(startSelector);
          if (!start) {
            this.#selectors.set(startSelector, currentNode);
            return;
          }
          const range = new Range();
          range.setStartAfter(start);
          range.setEndBefore(currentNode);
          this.#selectors.set(k, range);
          this.#selectors.delete(startSelector);

          /**
           * We are dealing with a data attribute, not html range
           */
        } else if (k.includes('data-havarti') && currentNode instanceof HTMLElement) {
          if (currentNode.hasAttribute(k)) {
            this.#selectors.set(k, currentNode);
          }
        }
      });
      currentNode = /** @type {HTMLElement} */ (this.#walker.nextNode());
    }
    this.#walker.currentNode = this.#rootNode;
  }
}
