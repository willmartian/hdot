
import { HTMLElement } from "../hdot";
import { DomTypeMap } from "./attributeTypes";
export type ElementMap = {
  /** The <a> HTML element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address. */
  "a": aElement;
  /** The <abbr> HTML element represents an abbreviation or acronym; the optional title attribute can provide an expansion or description for the abbreviation. If present, title must contain this full description and nothing else. */
  "abbr": abbrElement;
  /** @deprecated The <acronym> HTML element allows authors to clearly indicate a sequence of characters that compose an acronym or abbreviation for a word. */
  "acronym": acronymElement;
  /** The <address> HTML element indicates that the enclosed HTML provides contact information for a person or people, or for an organization. */
  "address": addressElement;
  /** @deprecated The obsolete HTML Applet Element (<applet>) embeds a Java applet into the document; this element has been deprecated in favor of <object>. */
  "applet": appletElement;
  /** The <area> HTML element defines an area inside an image map that has predefined clickable areas. An image map allows geometric areas on an image to be associated with hypertext link. */
  "area": areaElement;
  /** The <article> HTML element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include: a forum post, a magazine or newspaper article, or a blog entry, a product card, a user-submitted comment, an interactive widget or gadget, or any other independent item of content. */
  "article": articleElement;
  /** The <aside> HTML element represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes. */
  "aside": asideElement;
  /** The <audio> HTML element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream. */
  "audio": audioElement;
  /** The <b> HTML element is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance. This was formerly known as the Boldface element, and most browsers still draw the text in boldface. However, you should not use <b> for styling text; instead, you should use the CSS font-weight property to create boldface text, or the <strong> element to indicate that text is of special importance. */
  "b": bElement;
  /** The <base> HTML element specifies the base URL to use for all relative URLs in a document. There can be only one <base> element in a document. */
  "base": baseElement;
  /** @deprecated The <basefont> HTML element is deprecated. It sets a default font face, size, and color for the other elements which are descended from its parent element. With this set, the font's size can then be varied relative to the base size using the <font> element. */
  "basefont": basefontElement;
  /** The <bdi> HTML element tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text. It's particularly useful when a website dynamically inserts some text and doesn't know the directionality of the text being inserted. */
  "bdi": bdiElement;
  /** The <bdo> HTML element overrides the current directionality of text, so that the text within is rendered in a different direction. */
  "bdo": bdoElement;
  /** @deprecated The <bgsound> HTML element is deprecated. It sets up a sound file to play in the background while the page is used; use <audio> instead. */
  "bgsound": bgsoundElement;
  /** @deprecated The <big> HTML deprecated element renders the enclosed text at a font size one level larger than the surrounding text (medium becomes large, for example). The size is capped at the browser's maximum permitted font size. */
  "big": bigElement;
  /** @deprecated The <blink> HTML element is a non-standard element which causes the enclosed text to flash slowly. */
  "blink": blinkElement;
  /** The <blockquote> HTML element indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the <cite> element. */
  "blockquote": blockquoteElement;
  /** The <body> HTML element represents the content of an HTML document. There can be only one <body> element in a document. */
  "body": bodyElement;
  /** The <br> HTML element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant. */
  "br": brElement;
  /** The <button> HTML element represents a clickable button, used to submit forms or anywhere in a document for accessible, standard button functionality. */
  "button": buttonElement;
  /** Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations. */
  "canvas": canvasElement;
  /** The <caption> HTML element specifies the caption (or title) of a table. */
  "caption": captionElement;
  /** @deprecated The <center> HTML element is a block-level element that displays its block-level or inline contents centered horizontally within its containing element. The container is usually, but isn't required to be, <body>. */
  "center": centerElement;
  /** The <cite> HTML element is used to describe a reference to a cited creative work, and must include the title of that work. The reference may be in an abbreviated form according to context-appropriate conventions related to citation metadata. */
  "cite": citeElement;
  /** The <code> HTML element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code. By default, the content text is displayed using the user agent's default monospace font. */
  "code": codeElement;
  /** The <col> HTML element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element. */
  "col": colElement;
  /** The <colgroup> HTML element defines a group of columns within a table. */
  "colgroup": colgroupElement;
  /** @deprecated The <content> HTML element—an obsolete part of the Web Components suite of technologies—was used inside of Shadow DOM as an insertion point, and wasn't meant to be used in ordinary HTML. It has now been replaced by the <slot> element, which creates a point in the DOM at which a shadow DOM can be inserted. */
  "content": contentElement;
  /** The <data> HTML element links a given piece of content with a machine-readable translation. If the content is time- or date-related, the <time> element must be used. */
  "data": dataElement;
  /** The <datalist> HTML element contains a set of <option> elements that represent the permissible or recommended options available to choose from within other controls. */
  "datalist": datalistElement;
  /** The <dd> HTML element provides the description, definition, or value for the preceding term (<dt>) in a description list (<dl>). */
  "dd": ddElement;
  /** The <del> HTML element represents a range of text that has been deleted from a document. This can be used when rendering "track changes" or source code diff information, for example. The <ins> element can be used for the opposite purpose: to indicate text that has been added to the document. */
  "del": delElement;
  /** The <details> HTML element creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label must be provided using the <summary> element. */
  "details": detailsElement;
  /** The <dfn> HTML element is used to indicate the term being defined within the context of a definition phrase or sentence. The <p> element, the <dt>/<dd> pairing, or the <section> element which is the nearest ancestor of the <dfn> is considered to be the definition of the term. */
  "dfn": dfnElement;
  /** The <dialog> HTML element represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow. */
  "dialog": dialogElement;
  /** @deprecated The <dir> HTML element is used as a container for a directory of files and/or folders, potentially with styles and icons applied by the user agent. Do not use this obsolete element; instead, you should use the <ul> element for lists, including lists of files. */
  "dir": dirElement;
  /** The <div> HTML element is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g. styling is directly applied to it, or some kind of layout model like Flexbox is applied to its parent element). */
  "div": divElement;
  /** The <dl> HTML element represents a description list. The element encloses a list of groups of terms (specified using the <dt> element) and descriptions (provided by <dd> elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs). */
  "dl": dlElement;
  /** The <dt> HTML element specifies a term in a description or definition list, and as such must be used inside a <dl> element. It is usually followed by a <dd> element; however, multiple <dt> elements in a row indicate several terms that are all defined by the immediate next <dd> element. */
  "dt": dtElement;
  /** The <em> HTML element marks text that has stress emphasis. The <em> element can be nested, with each level of nesting indicating a greater degree of emphasis. */
  "em": emElement;
  /** The <embed> HTML element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in. */
  "embed": embedElement;
  /** The <fieldset> HTML element is used to group several controls as well as labels (<label>) within a web form. */
  "fieldset": fieldsetElement;
  /** The <figcaption> HTML element represents a caption or legend describing the rest of the contents of its parent <figure> element. */
  "figcaption": figcaptionElement;
  /** The <figure> HTML element represents self-contained content, potentially with an optional caption, which is specified using the <figcaption> element. The figure, its caption, and its contents are referenced as a single unit. */
  "figure": figureElement;
  /** @deprecated The <font> HTML element defines the font size, color and face for its content. */
  "font": fontElement;
  /** The <footer> HTML element represents a footer for its nearest sectioning content or sectioning root element. A <footer> typically contains information about the author of the section, copyright data or links to related documents. */
  "footer": footerElement;
  /** The <form> HTML element represents a document section containing interactive controls for submitting information. */
  "form": formElement;
  /** @deprecated The <frame> HTML element defines a particular area in which another HTML document can be displayed. A frame should be used within a <frameset>. */
  "frame": frameElement;
  /** @deprecated The <frameset> HTML element is used to contain <frame> elements. */
  "frameset": framesetElement;
  /** The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest. */
  "h1": h1Element;
  /** The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest. */
  "h2": h2Element;
  /** The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest. */
  "h3": h3Element;
  /** The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest. */
  "h4": h4Element;
  /** The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest. */
  "h5": h5Element;
  /** The <head> HTML element contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets. */
  "head": headElement;
  /** The <header> HTML element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements. */
  "header": headerElement;
  /** The <hgroup> HTML element represents a multi-level heading for a section of a document. It groups a set of <h1>–<h6> elements. */
  "hgroup": hgroupElement;
  /** The <hr> HTML element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section. */
  "hr": hrElement;
  /** The <html> HTML element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element. */
  "html": htmlElement;
  /** The <i> HTML element represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, taxonomical designations, among others. Historically, these have been presented using italicized type, which is the original source of the <i> naming of this element. */
  "i": iElement;
  /** The <iframe> HTML element represents a nested browsing context, embedding another HTML page into the current one. */
  "iframe": iframeElement;
  /** @deprecated The <image> HTML element is an ancient and poorly supported precursor to the <img> element. It should not be used. */
  "image": imageElement;
  /** The <img> HTML element embeds an image into the document. */
  "img": imgElement;
  /** The <input> HTML element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The <input> element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes. */
  "input": inputElement;
  /** The <ins> HTML element represents a range of text that has been added to a document. You can use the <del> element to similarly represent a range of text that has been deleted from the document. */
  "ins": insElement;
  /** Element is entirely obsolete, and must not be used by authors. */
  "isindex": isindexElement;
  /** The <kbd> HTML element represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device. By convention, the user agent defaults to rendering the contents of a <kbd> element using its default monospace font, although this is not mandated by the HTML standard. */
  "kbd": kbdElement;
  /** @deprecated The <keygen> HTML element exists to facilitate generation of key material, and submission of the public key as part of an HTML form. This mechanism is designed for use with Web-based certificate management systems. It is expected that the <keygen> element will be used in an HTML form along with other information needed to construct a certificate request, and that the result of the process will be a signed certificate. */
  "keygen": keygenElement;
  /** The <label> HTML element represents a caption for an item in a user interface. */
  "label": labelElement;
  /** The <legend> HTML element represents a caption for the content of its parent <fieldset>. */
  "legend": legendElement;
  /** The <li> HTML element is used to represent an item in a list. It must be contained in a parent element: an ordered list (<ol>), an unordered list (<ul>), or a menu (<menu>). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter. */
  "li": liElement;
  /** The <link> HTML element specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things. */
  "link": linkElement;
  /** Element is entirely obsolete, and must not be used by authors. */
  "listing": listingElement;
  /** The <main> HTML element represents the dominant content of the <body> of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application. */
  "main": mainElement;
  /** The <map> HTML element is used with <area> elements to define an image map (a clickable link area). */
  "map": mapElement;
  /** The <mark> HTML element represents text which is marked or highlighted for reference or notation purposes, due to the marked passage's relevance or importance in the enclosing context. */
  "mark": markElement;
  /** @deprecated The <marquee> HTML element is used to insert a scrolling area of text. You can control what happens when the text reaches the edges of its content area using its attributes. */
  "marquee": marqueeElement;
  /** The <menu> HTML element is a semantic alternative to <ul>. It represents an unordered list of items (represented by <li> elements), each of these represent a link or other command that the user can activate. */
  "menu": menuElement;
  /** @deprecated The <menuitem> HTML element represents a command that a user is able to invoke through a popup menu. This includes context menus, as well as menus that might be attached to a menu button. */
  "menuitem": menuitemElement;
  /** The <meta> HTML element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>. */
  "meta": metaElement;
  /** The <meter> HTML element represents either a scalar value within a known range or a fractional value. */
  "meter": meterElement;
  /** Element is entirely obsolete, and must not be used by authors. */
  "multicol": multicolElement;
  /** The <nav> HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes. */
  "nav": navElement;
  /** Element is entirely obsolete, and must not be used by authors. */
  "nextid": nextidElement;
  /** @deprecated The <nobr> HTML element prevents the text it contains from automatically wrapping across multiple lines, potentially resulting in the user having to scroll horizontally to see the entire width of the text. */
  "nobr": nobrElement;
  /** @deprecated The <noembed> HTML element is an obsolete, non-standard way to provide alternative, or "fallback", content for browsers that do not support the <embed> element or do not support the type of embedded content an author wishes to use. This element was deprecated in HTML 4.01 and above in favor of placing fallback content between the opening and closing tags of an <object> element. */
  "noembed": noembedElement;
  /** @deprecated The <noframes> HTML element provides content to be presented in browsers that don't support (or have disabled support for) the <frame> element. Although most commonly-used browsers support frames, there are exceptions, including certain special-use browsers including some mobile browsers, as well as text-mode browsers. */
  "noframes": noframesElement;
  /** The <noscript> HTML element defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser. */
  "noscript": noscriptElement;
  /** The <object> HTML element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin. */
  "object": objectElement;
  /** The <ol> HTML element represents an ordered list of items — typically rendered as a numbered list. */
  "ol": olElement;
  /** The <optgroup> HTML element creates a grouping of options within a <select> element. */
  "optgroup": optgroupElement;
  /** The <option> HTML element is used to define an item contained in a <select>, an <optgroup>, or a <datalist> element. As such, <option> can represent menu items in popups and other lists of items in an HTML document. */
  "option": optionElement;
  /** The <output> HTML element is a container element into which a site or app can inject the results of a calculation or the outcome of a user action. */
  "output": outputElement;
  /** The <p> HTML element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields. */
  "p": pElement;
  /** The <param> HTML element defines parameters for an <object> element. */
  "param": paramElement;
  /** The <picture> HTML element contains zero or more <source> elements and one <img> element to offer alternative versions of an image for different display/device scenarios. */
  "picture": pictureElement;
  /** @deprecated The <plaintext> HTML element renders everything following the start tag as raw text, ignoring any following HTML. There is no closing tag, since everything after it is considered raw text. */
  "plaintext": plaintextElement;
  /** The <portal> HTML element enables the embedding of another HTML page into the current one for the purposes of allowing smoother navigation into new pages. */
  "portal": portalElement;
  /** The <pre> HTML element represents preformatted text which is to be presented exactly as written in the HTML file. The text is typically rendered using a non-proportional, or "monospaced, font. Whitespace inside this element is displayed as written. */
  "pre": preElement;
  /** The <progress> HTML element displays an indicator showing the completion progress of a task, typically displayed as a progress bar. */
  "progress": progressElement;
  /** The <q> HTML element indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks. This element is intended for short quotations that don't require paragraph breaks; for long quotations use the <blockquote> element. */
  "q": qElement;
  /** @deprecated The <rb> HTML element is used to delimit the base text component of a <ruby> annotation, i.e. the text that is being annotated. One <rb> element should wrap each separate atomic segment of the base text. */
  "rb": rbElement;
  /** The <rp> HTML element is used to provide fall-back parentheses for browsers that do not support display of ruby annotations using the <ruby> element. One <rp> element should enclose each of the opening and closing parentheses that wrap the <rt> element that contains the annotation's text. */
  "rp": rpElement;
  /** The <rt> HTML element specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The <rt> element must always be contained within a <ruby> element. */
  "rt": rtElement;
  /** @deprecated The <rtc> HTML element embraces semantic annotations of characters presented in a ruby of <rb> elements used inside of <ruby> element. <rb> elements can have both pronunciation (<rt>) and semantic (<rtc>) annotations. */
  "rtc": rtcElement;
  /** The <ruby> HTML element represents small annotations that are rendered above, below, or next to base text, usually used for showing the pronunciation of East Asian characters. It can also be used for annotating other kinds of text, but this usage is less common. */
  "ruby": rubyElement;
  /** The <s> HTML element renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate. However, <s> is not appropriate when indicating document edits; for that, use the <del> and <ins> elements, as appropriate. */
  "s": sElement;
  /** The <samp> HTML element is used to enclose inline text which represents sample (or quoted) output from a computer program. Its contents are typically rendered using the browser's default monospaced font (such as Courier or Lucida Console). */
  "samp": sampElement;
  /** The <script> HTML element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code. The <script> element can also be used with other languages, such as WebGL's GLSL shader programming language and JSON. */
  "script": scriptElement;
  /** The <section> HTML element represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions. */
  "section": sectionElement;
  /** The <select> HTML element represents a control that provides a menu of options: */
  "select": selectElement;
  /** @deprecated The <shadow> HTML element—an obsolete part of the Web Components technology suite—was intended to be used as a shadow DOM insertion point. You might have used it if you have created multiple shadow roots under a shadow host. It is not useful in ordinary HTML. */
  "shadow": shadowElement;
  /** The <slot> HTML element—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together. */
  "slot": slotElement;
  /** The <small> HTML element represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font-size smaller, such as from small to x-small. */
  "small": smallElement;
  /** The <source> HTML element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element. It is an empty element, meaning that it has no content and does not have a closing tag. It is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for image file formats and media file formats. */
  "source": sourceElement;
  /** @deprecated The <spacer> HTML element is an obsolete HTML element which allowed insertion of empty spaces on pages. It was devised by Netscape to accomplish the same effect as a single-pixel layout image, which was something web designers used to use to add white spaces to web pages without actually using an image. However, <spacer> no longer supported by any major browser and the same effects can now be achieved using simple CSS. */
  "spacer": spacerElement;
  /** The <span> HTML element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. <span> is very much like a <div> element, but <div> is a block-level element whereas a <span> is an inline element. */
  "span": spanElement;
  /** @deprecated The <strike> HTML element places a strikethrough (horizontal line) over text. */
  "strike": strikeElement;
  /** The <strong> HTML element indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type. */
  "strong": strongElement;
  /** The <style> HTML element contains style information for a document, or part of a document. It contains CSS, which is applied to the contents of the document containing the <style> element. */
  "style": styleElement;
  /** The <sub> HTML element specifies inline text which should be displayed as subscript for solely typographical reasons. Subscripts are typically rendered with a lowered baseline using smaller text. */
  "sub": subElement;
  /** The <summary> HTML element specifies a summary, caption, or legend for a <details> element's disclosure box. Clicking the <summary> element toggles the state of the parent <details> element open and closed. */
  "summary": summaryElement;
  /** The <sup> HTML element specifies inline text which is to be displayed as superscript for solely typographical reasons. Superscripts are usually rendered with a raised baseline using smaller text. */
  "sup": supElement;
  /** The <table> HTML element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data. */
  "table": tableElement;
  /** The <tbody> HTML element encapsulates a set of table rows (<tr> elements), indicating that they comprise the body of the table (<table>). */
  "tbody": tbodyElement;
  /** The <td> HTML element defines a cell of a table that contains data. It participates in the table model. */
  "td": tdElement;
  /** The <template> HTML element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript. */
  "template": templateElement;
  /** The <textarea> HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form. */
  "textarea": textareaElement;
  /** The <tfoot> HTML element defines a set of rows summarizing the columns of the table. */
  "tfoot": tfootElement;
  /** The <th> HTML element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes. */
  "th": thElement;
  /** The <thead> HTML element defines a set of rows defining the head of the columns of the table. */
  "thead": theadElement;
  /** The <time> HTML element represents a specific period in time. It may include the datetime attribute to translate dates into machine-readable format, allowing for better search engine results or custom features such as reminders. */
  "time": timeElement;
  /** The <title> HTML element defines the document's title that is shown in a browser's title bar or a page's tab. It only contains text; tags within the element are ignored. */
  "title": titleElement;
  /** The <tr> HTML element defines a row of cells in a table. The row's cells can then be established using a mix of <td> (data cell) and <th> (header cell) elements. */
  "tr": trElement;
  /** The <track> HTML element is used as a child of the media elements, <audio> and <video>. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks. */
  "track": trackElement;
  /** @deprecated The <tt> HTML element creates inline text which is presented using the user agent's default monospace font face. This element was created for the purpose of rendering text as it would be displayed on a fixed-width display such as a teletype, text-only screen, or line printer. */
  "tt": ttElement;
  /** The <u> HTML element represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation. This is rendered by default as a simple solid underline, but may be altered using CSS. */
  "u": uElement;
  /** The <ul> HTML element represents an unordered list of items, typically rendered as a bulleted list. */
  "ul": ulElement;
  /** The <var> HTML element represents the name of a variable in a mathematical expression or a programming context. It's typically presented using an italicized version of the current typeface, although that behavior is browser-dependent. */
  "var": varElement;
  /** The <video> HTML element embeds a media player which supports video playback into the document. You can use <video> for audio content as well, but the <audio> element may provide a more appropriate user experience. */
  "video": videoElement;
  /** The <wbr> HTML element represents a word break opportunity—a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location. */
  "wbr": wbrElement;
  /** @deprecated The <xmp> HTML element renders text between the start and end tags without interpreting the HTML in between and using a monospaced font. The HTML2 specification recommended that it should be rendered wide enough to allow 80 characters per line. */
  "xmp": xmpElement;
}
type aElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"a">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"a">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"a">;
  /** @deprecated Hinted at the character encoding of the linked URL. Note: This attribute is deprecated and should not be used by authors. Use the HTTP Content-Type header on the linked URL. */
  "charset": (val: DomTypeMap["Any"]) => HTMLElement<"a">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"a">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"a">;
  /** @deprecated Used with the shape attribute. A comma-separated list of coordinates. */
  "coords": (val: DomTypeMap["Any"]) => HTMLElement<"a">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"a">;
  /** Prompts the user to save the linked URL instead of navigating to it. Can be used with or without a value: Without a value, the browser will suggest a filename/extension, generated from various sources: The Content-Disposition HTTP header The final segment in the URL path The media type (from the Content-Type header, the start of a data: URL, or Blob.type for a blob: URL) Defining a value suggests it as the filename. / and \ characters are converted to underscores (_). Filesystems may forbid other characters in filenames, so browsers will adjust the suggested name if necessary. Note: download only works for same-origin URLs, or the blob: and data: schemes. If the Content-Disposition header has different information from the download attribute, resulting behavior may differ: If the header specifies a filename, it takes priority over a filename specified in the download attribute. If the header specifies a disposition of inline, Chrome, and Firefox 82 and later, prioritize the attribute and treat it as a download. Firefox versions before 82 prioritize the header and will display the content inline. */
  "download": (val: DomTypeMap["Any"]) => HTMLElement<"a">;
  "draggable": (val: "true" | "false") => HTMLElement<"a">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"a">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"a">;
  /** The URL that the hyperlink points to. Links are not restricted to HTTP-based URLs — they can use any URL scheme supported by browsers: Sections of a page with fragment URLs Pieces of media files with media fragments Telephone numbers with tel: URLs Email addresses with mailto: URLs While web browsers may not support other URL schemes, web sites can with registerProtocolHandler() */
  "href": (val: DomTypeMap["URL"]) => HTMLElement<"a">;
  /** Hints at the human language of the linked URL. No built-in functionality. Allowed values are the same as the global lang attribute. */
  "hreflang": (val: DomTypeMap["BCP47"]) => HTMLElement<"a">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"a">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"a">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"a">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"a">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"a">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"a">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"a">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"a">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"a">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"a">;
  /** @deprecated Was required to define a possible target location in a page. In HTML 4.01, id and name could both be used on <a>, as long as they had identical values. Note: Use the global attribute id instead. */
  "name": (val: DomTypeMap["Any"]) => HTMLElement<"a">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"a">;
  /** A space-separated list of URLs. When the link is followed, the browser will send POST requests with the body PING to the URLs. Typically for tracking. */
  "ping": (val: DomTypeMap[`{"token":"HTTPSchemaURL","separator":"space"}`]) => HTMLElement<"a">;
  /** How much of the referrer to send when following the link. no-referrer: The Referer header will not be sent. no-referrer-when-downgrade: The Referer header will not be sent to origins without TLS (HTTPS). origin: The sent referrer will be limited to the origin of the referring page: its scheme, host, and port. origin-when-cross-origin: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path. same-origin: A referrer will be sent for same origin, but cross-origin requests will contain no referrer information. strict-origin: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP). strict-origin-when-cross-origin (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP). unsafe-url: The referrer will include the origin and the path (but not the fragment, password, or username). This value is unsafe, because it leaks origins and paths from TLS-protected resources to insecure origins. */
  "referrerpolicy": (val: "" | "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url") => HTMLElement<"a">;
  /** The relationship of the linked URL as space-separated link types. */
  "rel": (val: DomTypeMap[`{"token":{"enum":["alternate","author","bookmark","external","help","license","next","nofollow","noopener","noreferrer","opener","prev","search","tag"]},"unique":true,"separator":"space"}`]) => HTMLElement<"a">;
  /** @deprecated Specified a reverse link; the opposite of the rel attribute. Deprecated for being very confusing. */
  "rev": (val: DomTypeMap["Any"]) => HTMLElement<"a">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"a">;
  /** @deprecated The shape of the hyperlink's region in an image map. Note: Use the <area> element for image maps instead. */
  "shape": (val: DomTypeMap["Any"]) => HTMLElement<"a">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"a">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"a">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"a">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"a">;
  /** Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>). The following keywords have special meanings for where to load the URL: _self: the current browsing context. (Default) _blank: usually a new tab, but users can configure browsers to open a new window instead. _parent: the parent browsing context of the current one. If no parent, behaves as _self. _top: the topmost browsing context (the "highest" context that's an ancestor of the current one). If no ancestors, behaves as _self. Note: Setting target="_blank" on <a> elements implicitly provides the same rel behavior as setting rel="noopener" which does not set window.opener. See browser compatibility for support status. */
  "target": (val: DomTypeMap["BrowsingContextNameOrKeyword"]) => HTMLElement<"a">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"a">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"a">;
  /** Hints at the linked URL's format with a MIME type. No built-in functionality. */
  "type": (val: DomTypeMap["MIMEType"]) => HTMLElement<"a">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"a">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"a">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"a">;
  allowedChildren: any;
}
type abbrElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"abbr">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"abbr">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"abbr">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"abbr">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"abbr">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"abbr">;
  "draggable": (val: "true" | "false") => HTMLElement<"abbr">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"abbr">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"abbr">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"abbr">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"abbr">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"abbr">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"abbr">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"abbr">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"abbr">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"abbr">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"abbr">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"abbr">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"abbr">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"abbr">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"abbr">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"abbr">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"abbr">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"abbr">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"abbr">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"abbr">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"abbr">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"abbr">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"abbr">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"abbr">;
  allowedChildren: any;
}
type acronymElement = {
  allowedChildren: any;
}
type addressElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"address">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"address">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"address">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"address">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"address">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"address">;
  "draggable": (val: "true" | "false") => HTMLElement<"address">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"address">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"address">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"address">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"address">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"address">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"address">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"address">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"address">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"address">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"address">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"address">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"address">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"address">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"address">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"address">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"address">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"address">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"address">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"address">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"address">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"address">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"address">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"address">;
  allowedChildren: any;
}
type appletElement = {
  /** This attribute is used to position the applet on the page relative to content that might flow around it. The HTML 4.01 specification defines values of bottom, left, middle, right, and top, whereas Microsoft and Netscape also might support absbottom, absmiddle, baseline, center, and texttop. */
  "align": (val: DomTypeMap["Any"]) => HTMLElement<"applet">;
  /** This attribute causes a descriptive text alternate to be displayed on browsers that do not support Java. Page designers should also remember that content enclosed within the <applet> element may also be rendered as alternative text. */
  "alt": (val: DomTypeMap["Any"]) => HTMLElement<"applet">;
  /** This attribute refers to an archived or compressed version of the applet and its associated class files, which might help reduce download time. */
  "archive": (val: DomTypeMap["Any"]) => HTMLElement<"applet">;
  /** This attribute specifies the URL of the applet's class file to be loaded and executed. Applet filenames are identified by a .class filename extension. The URL specified by code might be relative to the codebase attribute. */
  "code": (val: DomTypeMap["Any"]) => HTMLElement<"applet">;
  /** This attribute gives the absolute or relative URL of the directory where applets' .class files referenced by the code attribute are stored. */
  "codebase": (val: DomTypeMap["Any"]) => HTMLElement<"applet">;
  /** This attribute, supported by Internet Explorer 4 and higher, specifies the column name from the data source object that supplies the bound data. This attribute might be used to specify the various <param> elements passed to the Java applet. */
  "datafld": (val: DomTypeMap["Any"]) => HTMLElement<"applet">;
  /** Like datafld, this attribute is used for data binding under Internet Explorer 4. It indicates the id of the data source object that supplies the data that is bound to the <param> elements associated with the applet. */
  "datasrc": (val: DomTypeMap["Any"]) => HTMLElement<"applet">;
  /** This attribute specifies the height, in pixels, that the applet needs. */
  "height": (val: DomTypeMap["Any"]) => HTMLElement<"applet">;
  /** This attribute specifies additional horizontal space, in pixels, to be reserved on either side of the applet. */
  "hspace": (val: DomTypeMap["Any"]) => HTMLElement<"applet">;
  /** In the Netscape implementation, this attribute allows access to an applet by programs in a scripting language embedded in the document. */
  "mayscript": (val: DomTypeMap["Any"]) => HTMLElement<"applet">;
  /** This attribute assigns a name to the applet so that it can be identified by other resources; particularly scripts. */
  "name": (val: DomTypeMap["Any"]) => HTMLElement<"applet">;
  /** This attribute specifies the URL of a serialized representation of an applet. */
  "object": (val: DomTypeMap["Any"]) => HTMLElement<"applet">;
  /** As defined for Internet Explorer 4 and higher, this attribute specifies a URL for an associated file for the applet. The meaning and use is unclear and not part of the HTML standard. */
  "src": (val: DomTypeMap["Any"]) => HTMLElement<"applet">;
  /** This attribute specifies additional vertical space, in pixels, to be reserved above and below the applet. */
  "vspace": (val: DomTypeMap["Any"]) => HTMLElement<"applet">;
  /** This attribute specifies in pixels the width that the applet needs. */
  "width": (val: DomTypeMap["Any"]) => HTMLElement<"applet">;
  allowedChildren: any;
}
type areaElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"area">;
  "alt": (val: DomTypeMap["Any"]) => HTMLElement<"area">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"area">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"area">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"area">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"area">;
  "coords": (val: DomTypeMap[`{"token":"Number","disallowToSurroundBySpaces":true,"separator":"comma"}`]) => HTMLElement<"area">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"area">;
  /** This attribute, if present, indicates that the author intends the hyperlink to be used for downloading a resource. See <a> for a full description of the download attribute. */
  "download": (val: DomTypeMap["Any"]) => HTMLElement<"area">;
  "draggable": (val: "true" | "false") => HTMLElement<"area">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"area">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"area">;
  /** The hyperlink target for the area. Its value is a valid URL. This attribute may be omitted; if so, the <area> element does not represent a hyperlink. */
  "href": (val: DomTypeMap["URL"]) => HTMLElement<"area">;
  /** Indicates the language of the linked resource. Allowed values are defined by RFC 5646: Tags for Identifying Languages (also known as BCP 47). Use this attribute only if the href attribute is present. */
  "hreflang": (val: DomTypeMap["BCP47"]) => HTMLElement<"area">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"area">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"area">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"area">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"area">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"area">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"area">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"area">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"area">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"area">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"area">;
  /** @deprecated Define a names for the clickable area so that it can be scripted by older browsers. */
  "name": (val: DomTypeMap["Any"]) => HTMLElement<"area">;
  /** @deprecated Indicates that no hyperlink exists for the associated area. Note: Since HTML5, omitting the href attribute is sufficient. */
  "nohref": (val: DomTypeMap["Any"]) => HTMLElement<"area">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"area">;
  /** Contains a space-separated list of URLs to which, when the hyperlink is followed, POST requests with the body PING will be sent by the browser (in the background). Typically used for tracking. */
  "ping": (val: DomTypeMap[`{"token":"HTTPSchemaURL","separator":"space"}`]) => HTMLElement<"area">;
  /** A string indicating which referrer to use when fetching the resource: no-referrer: The Referer header will not be sent. no-referrer-when-downgrade: The Referer header will not be sent to origins without TLS (HTTPS). origin: The sent referrer will be limited to the origin of the referring page: its scheme, host, and port. origin-when-cross-origin: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path. same-origin: A referrer will be sent for same origin, but cross-origin requests will contain no referrer information. strict-origin: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP). strict-origin-when-cross-origin (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP). unsafe-url: The referrer will include the origin and the path (but not the fragment, password, or username). This value is unsafe, because it leaks origins and paths from TLS-protected resources to insecure origins. */
  "referrerpolicy": (val: "" | "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url") => HTMLElement<"area">;
  /** For anchors containing the href attribute, this attribute specifies the relationship of the target object to the link object. The value is a space-separated list of link types values. The values and their semantics will be registered by some authority that might have meaning to the document author. The default relationship, if no other is given, is void. Use this attribute only if the href attribute is present. */
  "rel": (val: DomTypeMap[`{"token":{"enum":["alternate","author","bookmark","external","help","license","next","nofollow","noopener","noreferrer","opener","prev","search","tag"]},"unique":true,"separator":"space"}`]) => HTMLElement<"area">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"area">;
  "shape": (val: "rect" | "circle" | "poly" | "default") => HTMLElement<"area">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"area">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"area">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"area">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"area">;
  /** A keyword or author-defined name of the browsing context to display the linked resource. The following keywords have special meanings: _self (default): Show the resource in the current browsing context. _blank: Show the resource in a new, unnamed browsing context. _parent: Show the resource in the parent browsing context of the current one, if the current page is inside a frame. If there is no parent, acts the same as _self. _top: Show the resource in the topmost browsing context (the browsing context that is an ancestor of the current one and has no parent). If there is no parent, acts the same as _self. Use this attribute only if the href attribute is present. Note: Setting target="_blank" on <area> elements implicitly provides the same rel behavior as setting rel="noopener" which does not set window.opener. See browser compatibility for support status. */
  "target": (val: DomTypeMap["BrowsingContextNameOrKeyword"]) => HTMLElement<"area">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"area">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"area">;
  /** @deprecated Hint for the type of the referenced resource. Ignored by browsers. */
  "type": (val: DomTypeMap["MIMEType"]) => HTMLElement<"area">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"area">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"area">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"area">;
  allowedChildren: any;
}
type articleElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"article">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"article">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"article">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"article">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"article">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"article">;
  "draggable": (val: "true" | "false") => HTMLElement<"article">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"article">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"article">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"article">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"article">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"article">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"article">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"article">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"article">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"article">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"article">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"article">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"article">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"article">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"article">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"article">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"article">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"article">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"article">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"article">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"article">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"article">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"article">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"article">;
  allowedChildren: any;
}
type asideElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"aside">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"aside">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"aside">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"aside">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"aside">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"aside">;
  "draggable": (val: "true" | "false") => HTMLElement<"aside">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"aside">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"aside">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"aside">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"aside">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"aside">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"aside">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"aside">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"aside">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"aside">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"aside">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"aside">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"aside">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"aside">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"aside">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"aside">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"aside">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"aside">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"aside">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"aside">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"aside">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"aside">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"aside">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"aside">;
  allowedChildren: any;
}
type audioElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"audio">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"audio">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"audio">;
  /** A Boolean attribute: if specified, the audio will automatically begin playback as soon as it can do so, without waiting for the entire audio file to finish downloading. Note: Sites that automatically play audio (or videos with an audio track) can be an unpleasant experience for users, so should be avoided when possible. If you must offer autoplay functionality, you should make it opt-in (requiring a user to specifically enable it). However, this can be useful when creating media elements whose source will be set at a later time, under user control. See our autoplay guide for additional information about how to properly use autoplay. */
  "autoplay": (val: DomTypeMap["Boolean"]) => HTMLElement<"audio">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"audio">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"audio">;
  /** If this attribute is present, the browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback. */
  "controls": (val: DomTypeMap["Boolean"]) => HTMLElement<"audio">;
  /** This enumerated attribute indicates whether to use CORS to fetch the related audio file. CORS-enabled resources can be reused in the <canvas> element without being tainted. The allowed values are: anonymous Sends a cross-origin request without a credential. In other words, it sends the Origin: HTTP header without a cookie, X.509 certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (by not setting the Access-Control-Allow-Origin: HTTP header), the image will be tainted, and its usage restricted. use-credentials Sends a cross-origin request with a credential. In other words, it sends the Origin: HTTP header with a cookie, a certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (through Access-Control-Allow-Credentials: HTTP header), the image will be tainted and its usage restricted. When not present, the resource is fetched without a CORS request (i.e. without sending the Origin: HTTP header), preventing its non-tainted used in <canvas> elements. If invalid, it is handled as if the enumerated keyword anonymous was used. See CORS settings attributes for additional information. */
  "crossorigin": (val: "" | "anonymous" | "use-credentials") => HTMLElement<"audio">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"audio">;
  /** A Boolean attribute used to disable the capability of remote playback in devices that are attached using wired (HDMI, DVI, etc.) and wireless technologies (Miracast, Chromecast, DLNA, AirPlay, etc). See this proposed specification for more information. Note: In Safari, you can use x-webkit-airplay="deny" as a fallback. */
  "disableremoteplayback": (val: DomTypeMap["Any"]) => HTMLElement<"audio">;
  "draggable": (val: "true" | "false") => HTMLElement<"audio">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"audio">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"audio">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"audio">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"audio">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"audio">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"audio">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"audio">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"audio">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"audio">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"audio">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"audio">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"audio">;
  /** A Boolean attribute: if specified, the audio player will automatically seek back to the start upon reaching the end of the audio. */
  "loop": (val: DomTypeMap["Boolean"]) => HTMLElement<"audio">;
  /** A Boolean attribute that indicates whether the audio will be initially silenced. Its default value is false. */
  "muted": (val: DomTypeMap["Boolean"]) => HTMLElement<"audio">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"audio">;
  /** This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values: none: Indicates that the audio should not be preloaded. metadata: Indicates that only audio metadata (e.g. length) is fetched. auto: Indicates that the whole audio file can be downloaded, even if the user is not expected to use it. empty string: A synonym of the auto value. The default value is different for each browser. The spec advises it to be set to metadata. Note: The autoplay attribute has precedence over preload. If autoplay is specified, the browser would obviously need to start downloading the audio for playback. The browser is not forced by the specification to follow the value of this attribute; it is a mere hint. */
  "preload": (val: "none" | "metadata" | "auto") => HTMLElement<"audio">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"audio">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"audio">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"audio">;
  /** The URL of the audio to embed. This is subject to HTTP access controls. This is optional; you may instead use the <source> element within the audio block to specify the audio to embed. */
  "src": (val: DomTypeMap["URL"]) => HTMLElement<"audio">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"audio">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"audio">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"audio">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"audio">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"audio">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"audio">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"audio">;
  allowedChildren: any;
}
type bElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"b">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"b">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"b">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"b">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"b">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"b">;
  "draggable": (val: "true" | "false") => HTMLElement<"b">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"b">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"b">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"b">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"b">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"b">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"b">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"b">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"b">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"b">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"b">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"b">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"b">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"b">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"b">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"b">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"b">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"b">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"b">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"b">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"b">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"b">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"b">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"b">;
  allowedChildren: any;
}
type baseElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"base">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"base">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"base">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"base">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"base">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"base">;
  "draggable": (val: "true" | "false") => HTMLElement<"base">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"base">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"base">;
  /** The base URL to be used throughout the document for relative URLs. Absolute and relative URLs are allowed. */
  "href": (val: DomTypeMap["URL"]) => HTMLElement<"base">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"base">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"base">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"base">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"base">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"base">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"base">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"base">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"base">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"base">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"base">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"base">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"base">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"base">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"base">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"base">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"base">;
  /** A keyword or author-defined name of the default browsing context to show the results of navigation from <a>, <area>, or <form> elements without explicit target attributes. The following keywords have special meanings: _self (default): Show the result in the current browsing context. _blank: Show the result in a new, unnamed browsing context. _parent: Show the result in the parent browsing context of the current one, if the current page is inside a frame. If there is no parent, acts the same as _self. _top: Show the result in the topmost browsing context (the browsing context that is an ancestor of the current one and has no parent). If there is no parent, acts the same as _self. */
  "target": (val: DomTypeMap["BrowsingContextNameOrKeyword"]) => HTMLElement<"base">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"base">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"base">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"base">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"base">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"base">;
  allowedChildren: any;
}
type basefontElement = {
  /** This attribute sets the text color using either a named color or a color specified in the hexadecimal #RRGGBB format. */
  "color": (val: DomTypeMap["Any"]) => HTMLElement<"basefont">;
  /** This attribute contains a list of one or more font names. The document text in the default style is rendered in the first font face that the client's browser supports. If no font listed is installed on the local system, the browser typically defaults to the proportional or fixed-width font for that system. */
  "face": (val: DomTypeMap["Any"]) => HTMLElement<"basefont">;
  /** This attribute specifies the font size as either a numeric or relative value. Numeric values range from 1 to 7 with 1 being the smallest and 3 the default. */
  "size": (val: DomTypeMap["Any"]) => HTMLElement<"basefont">;
  allowedChildren: any;
}
type bdiElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"bdi">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"bdi">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"bdi">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"bdi">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"bdi">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"bdi">;
  "draggable": (val: "true" | "false") => HTMLElement<"bdi">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"bdi">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"bdi">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"bdi">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"bdi">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"bdi">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"bdi">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"bdi">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"bdi">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"bdi">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"bdi">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"bdi">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"bdi">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"bdi">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"bdi">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"bdi">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"bdi">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"bdi">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"bdi">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"bdi">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"bdi">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"bdi">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"bdi">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"bdi">;
  allowedChildren: any;
}
type bdoElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"bdo">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"bdo">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"bdo">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"bdo">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"bdo">;
  /** The direction in which text should be rendered in this element's contents. Possible values are: ltr: Indicates that the text should go in a left-to-right direction. rtl: Indicates that the text should go in a right-to-left direction. */
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"bdo">;
  "draggable": (val: "true" | "false") => HTMLElement<"bdo">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"bdo">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"bdo">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"bdo">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"bdo">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"bdo">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"bdo">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"bdo">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"bdo">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"bdo">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"bdo">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"bdo">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"bdo">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"bdo">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"bdo">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"bdo">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"bdo">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"bdo">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"bdo">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"bdo">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"bdo">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"bdo">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"bdo">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"bdo">;
  allowedChildren: any;
}
type bgsoundElement = {
  /** This attribute defines a number between -10,000 and +10,000 that determines how the volume will be divided between the speakers. */
  "balance": (val: DomTypeMap["Any"]) => HTMLElement<"bgsound">;
  /** This attribute indicates the number of times a sound is to be played and either has a numeric value or the keyword infinite. */
  "loop": (val: DomTypeMap["Any"]) => HTMLElement<"bgsound">;
  /** This attribute specifies the URL of the sound file to be played, which must be one of the following types: .wav, .au, or .mid. */
  "src": (val: DomTypeMap["Any"]) => HTMLElement<"bgsound">;
  /** This attribute defines a number between -10,000 and 0 that determines the loudness of a page's background sound. */
  "volume": (val: DomTypeMap["Any"]) => HTMLElement<"bgsound">;
  allowedChildren: any;
}
type bigElement = {
  allowedChildren: any;
}
type blinkElement = {
  allowedChildren: any;
}
type blockquoteElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"blockquote">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"blockquote">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"blockquote">;
  "cite": (val: DomTypeMap["URL"]) => HTMLElement<"blockquote">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"blockquote">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"blockquote">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"blockquote">;
  "draggable": (val: "true" | "false") => HTMLElement<"blockquote">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"blockquote">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"blockquote">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"blockquote">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"blockquote">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"blockquote">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"blockquote">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"blockquote">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"blockquote">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"blockquote">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"blockquote">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"blockquote">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"blockquote">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"blockquote">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"blockquote">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"blockquote">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"blockquote">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"blockquote">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"blockquote">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"blockquote">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"blockquote">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"blockquote">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"blockquote">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"blockquote">;
  allowedChildren: any;
}
type bodyElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"body">;
  /** @deprecated Color of text for hyperlinks when selected. This method is non-conforming, use CSS color property in conjunction with the :active pseudo-class instead. */
  "alink": (val: DomTypeMap["Any"]) => HTMLElement<"body">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"body">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"body">;
  /** @deprecated URI of a image to use as a background. This method is non-conforming, use CSS background property on the element instead. */
  "background": (val: DomTypeMap["Any"]) => HTMLElement<"body">;
  /** @deprecated Background color for the document. This method is non-conforming, use CSS background-color property on the element instead. */
  "bgcolor": (val: DomTypeMap["Any"]) => HTMLElement<"body">;
  /** @deprecated The margin of the bottom of the body. This method is non-conforming, use CSS margin-bottom property on the element instead. */
  "bottommargin": (val: DomTypeMap["Any"]) => HTMLElement<"body">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"body">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"body">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"body">;
  "draggable": (val: "true" | "false") => HTMLElement<"body">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"body">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"body">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"body">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"body">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"body">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"body">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"body">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"body">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"body">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"body">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"body">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"body">;
  /** @deprecated The margin of the left of the body. This method is non-conforming, use CSS margin-left property on the element instead. */
  "leftmargin": (val: DomTypeMap["Any"]) => HTMLElement<"body">;
  /** @deprecated Color of text for unvisited hypertext links. This method is non-conforming, use CSS color property in conjunction with the :link pseudo-class instead. */
  "link": (val: DomTypeMap["Any"]) => HTMLElement<"body">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"body">;
  /** Function to call when the user has moved forward in undo transaction history. */
  "onredo": (val: DomTypeMap["Any"]) => HTMLElement<"body">;
  /** Function to call when the user has moved backward in undo transaction history. */
  "onundo": (val: DomTypeMap["Any"]) => HTMLElement<"body">;
  /** @deprecated The margin of the right of the body. This method is non-conforming, use CSS margin-right property on the element instead. */
  "rightmargin": (val: DomTypeMap["Any"]) => HTMLElement<"body">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"body">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"body">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"body">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"body">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"body">;
  /** @deprecated Foreground color of text. This method is non-conforming, use CSS color property on the element instead. */
  "text": (val: DomTypeMap["Any"]) => HTMLElement<"body">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"body">;
  /** @deprecated The margin of the top of the body. This method is non-conforming, use CSS margin-top property on the element instead. */
  "topmargin": (val: DomTypeMap["Any"]) => HTMLElement<"body">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"body">;
  /** @deprecated Color of text for visited hypertext links. This method is non-conforming, use CSS color property in conjunction with the :visited pseudo-class instead. */
  "vlink": (val: DomTypeMap["Any"]) => HTMLElement<"body">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"body">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"body">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"body">;
  allowedChildren: any;
}
type brElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"br">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"br">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"br">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"br">;
  /** @deprecated Indicates where to begin the next line after the break. */
  "clear": (val: DomTypeMap["Any"]) => HTMLElement<"br">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"br">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"br">;
  "draggable": (val: "true" | "false") => HTMLElement<"br">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"br">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"br">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"br">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"br">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"br">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"br">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"br">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"br">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"br">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"br">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"br">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"br">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"br">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"br">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"br">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"br">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"br">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"br">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"br">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"br">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"br">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"br">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"br">;
  allowedChildren: any;
}
type buttonElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"button">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"button">;
  /** This attribute on a <button> is nonstandard and Firefox-specific. Unlike other browsers, Firefox persists the dynamic disabled state of a <button> across page loads. Setting autocomplete="off" on the button disables this feature; see bug 654072. */
  "autocomplete": (val: DomTypeMap["Any"]) => HTMLElement<"button">;
  /** This Boolean attribute specifies that the button should have input focus when the page loads. Only one element in a document can have this attribute. */
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"button">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"button">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"button">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"button">;
  /** This Boolean attribute prevents the user from interacting with the button: it cannot be pressed or focused. Firefox, unlike other browsers, persists the dynamic disabled state of a <button> across page loads. Use the autocomplete attribute to control this feature. */
  "disabled": (val: DomTypeMap["Boolean"]) => HTMLElement<"button">;
  "draggable": (val: "true" | "false") => HTMLElement<"button">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"button">;
  /** The <form> element to associate the button with (its form owner). The value of this attribute must be the id of a <form> in the same document. (If this attribute is not set, the <button> is associated with its ancestor <form> element, if any.) This attribute lets you associate <button> elements to <form>s anywhere in the document, not just inside a <form>. It can also override an ancestor <form> element. */
  "form": (val: DomTypeMap["DOMID"]) => HTMLElement<"button">;
  /** The URL that processes the information submitted by the button. Overrides the action attribute of the button's form owner. Does nothing if there is no form owner. */
  "formaction": (val: DomTypeMap["URL"]) => HTMLElement<"button">;
  /** If the button is a submit button (it's inside/associated with a <form> and doesn't have type="button"), specifies how to encode the form data that is submitted. Possible values: application/x-www-form-urlencoded: The default if the attribute is not used. multipart/form-data: Use to submit <input> elements with their type attributes set to file. text/plain: Specified as a debugging aid; shouldn't be used for real form submission. If this attribute is specified, it overrides the enctype attribute of the button's form owner. */
  "formenctype": (val: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain") => HTMLElement<"button">;
  /** If the button is a submit button (it's inside/associated with a <form> and doesn't have type="button"), this attribute specifies the HTTP method used to submit the form. Possible values: post: The data from the form are included in the body of the HTTP request when sent to the server. Use when the form contains information that shouldn't be public, like login credentials. get: The form data are appended to the form's action URL, with a ? as a separator, and the resulting URL is sent to the server. Use this method when the form has no side effects, like search forms. If specified, this attribute overrides the method attribute of the button's form owner. */
  "formmethod": (val: "post" | "get" | "dialog") => HTMLElement<"button">;
  /** If the button is a submit button, this Boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the novalidate attribute of the button's form owner. This attribute is also available on <input type="image"> and <input type="submit"> elements. */
  "formnovalidate": (val: DomTypeMap["Boolean"]) => HTMLElement<"button">;
  /** If the button is a submit button, this attribute is an author-defined name or standardized, underscore-prefixed keyword indicating where to display the response from submitting the form. This is the name of, or keyword for, a browsing context (a tab, window, or <iframe>). If this attribute is specified, it overrides the target attribute of the button's form owner. The following keywords have special meanings: _self: Load the response into the same browsing context as the current one. This is the default if the attribute is not specified. _blank: Load the response into a new unnamed browsing context — usually a new tab or window, depending on the user's browser settings. _parent: Load the response into the parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. */
  "formtarget": (val: DomTypeMap["BrowsingContextNameOrKeyword"]) => HTMLElement<"button">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"button">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"button">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"button">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"button">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"button">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"button">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"button">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"button">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"button">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"button">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"button">;
  /** The name of the button, submitted as a pair with the button's value as part of the form data, when that button is used to submit the form. */
  "name": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"button">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"button">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"button">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"button">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"button">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"button">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"button">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"button">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"button">;
  "type": (val: "submit" | "reset" | "button") => HTMLElement<"button">;
  "value": (val: DomTypeMap["Any"]) => HTMLElement<"button">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"button">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"button">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"button">;
  allowedChildren: any;
}
type canvasElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"canvas">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"canvas">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"canvas">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"canvas">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"canvas">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"canvas">;
  "draggable": (val: "true" | "false") => HTMLElement<"canvas">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"canvas">;
  "height": (val: DomTypeMap["Uint"]) => HTMLElement<"canvas">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"canvas">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"canvas">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"canvas">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"canvas">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"canvas">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"canvas">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"canvas">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"canvas">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"canvas">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"canvas">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"canvas">;
  /** @deprecated Lets the canvas know whether or not translucency will be a factor. If the canvas knows there's no translucency, painting performance can be optimized. This is only supported by Mozilla-based browsers; use the standardized canvas.getContext('2d', { alpha: false }) instead. */
  "moz-opaque": (val: DomTypeMap["Any"]) => HTMLElement<"canvas">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"canvas">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"canvas">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"canvas">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"canvas">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"canvas">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"canvas">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"canvas">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"canvas">;
  "width": (val: DomTypeMap["Uint"]) => HTMLElement<"canvas">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"canvas">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"canvas">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"canvas">;
  allowedChildren: any;
}
type captionElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"caption">;
  /** @deprecated This enumerated attribute indicates how the caption must be aligned with respect to the table. It may have one of the following values: left The caption is displayed to the left of the table. top The caption is displayed above the table. right The caption is displayed to the right of the table. bottom The caption is displayed below the table. Warning: Do not use this attribute, as it has been deprecated. The <caption> element should be styled using the CSS properties caption-side and text-align. */
  "align": (val: DomTypeMap["Any"]) => HTMLElement<"caption">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"caption">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"caption">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"caption">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"caption">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"caption">;
  "draggable": (val: "true" | "false") => HTMLElement<"caption">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"caption">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"caption">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"caption">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"caption">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"caption">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"caption">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"caption">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"caption">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"caption">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"caption">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"caption">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"caption">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"caption">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"caption">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"caption">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"caption">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"caption">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"caption">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"caption">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"caption">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"caption">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"caption">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"caption">;
  allowedChildren: any;
}
type centerElement = {
  allowedChildren: any;
}
type citeElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"cite">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"cite">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"cite">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"cite">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"cite">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"cite">;
  "draggable": (val: "true" | "false") => HTMLElement<"cite">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"cite">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"cite">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"cite">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"cite">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"cite">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"cite">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"cite">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"cite">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"cite">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"cite">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"cite">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"cite">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"cite">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"cite">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"cite">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"cite">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"cite">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"cite">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"cite">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"cite">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"cite">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"cite">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"cite">;
  allowedChildren: any;
}
type codeElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"code">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"code">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"code">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"code">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"code">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"code">;
  "draggable": (val: "true" | "false") => HTMLElement<"code">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"code">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"code">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"code">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"code">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"code">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"code">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"code">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"code">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"code">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"code">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"code">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"code">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"code">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"code">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"code">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"code">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"code">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"code">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"code">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"code">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"code">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"code">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"code">;
  allowedChildren: any;
}
type colElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"col">;
  /** @deprecated This enumerated attribute specifies how horizontal alignment of each column cell content will be handled. Possible values are: left, aligning the content to the left of the cell center, centering the content in the cell right, aligning the content to the right of the cell justify, inserting spaces into the textual content so that the content is justified in the cell If this attribute is not set, its value is inherited from the align of the <colgroup> element this <col> element belongs too. If there are none, the left value is assumed. Note: To achieve the same effect as the left, center, right or justify values, do not try to set the text-align property on a selector giving a <col> element. Because <td> elements are not descendant of the <col> element, they won't inherit it. If the table doesn't use a colspan attribute, use the td:nth-child(an+b) CSS selector. Set a to zero and b to the position of the column in the table, e.g. td:nth-child(2) { text-align: right; } to right-align the second column. If the table does use a colspan attribute, the effect can be achieved by combining adequate CSS attribute selectors like [colspan=n], though this is not trivial. */
  "align": (val: DomTypeMap["Any"]) => HTMLElement<"col">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"col">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"col">;
  /** @deprecated The background color of the table. It is a 6-digit hexadecimal RGB code, prefixed by a '#'. One of the predefined color keywords can also be used. To achieve a similar effect, use the CSS background-color property. */
  "bgcolor": (val: DomTypeMap["Any"]) => HTMLElement<"col">;
  /** @deprecated This attribute is used to set the character to align the cells in a column on. Typical values for this include a period (.) when attempting to align numbers or monetary values. If align is not set to char, this attribute is ignored. */
  "char": (val: DomTypeMap["Any"]) => HTMLElement<"col">;
  /** @deprecated This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the char attribute. */
  "charoff": (val: DomTypeMap["Any"]) => HTMLElement<"col">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"col">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"col">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"col">;
  "draggable": (val: "true" | "false") => HTMLElement<"col">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"col">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"col">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"col">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"col">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"col">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"col">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"col">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"col">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"col">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"col">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"col">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"col">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"col">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"col">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"col">;
  "span": (val: DomTypeMap[`{"type":"integer","gt":0,"lte":1000,"clampable":true}`]) => HTMLElement<"col">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"col">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"col">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"col">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"col">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"col">;
  /** @deprecated This attribute specifies the vertical alignment of the text within each cell of the column. Possible values for this attribute are: baseline, which will put the text as close to the bottom of the cell as it is possible, but align it on the baseline of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as bottom. bottom, which will put the text as close to the bottom of the cell as it is possible; middle, which will center the text in the cell; and top, which will put the text as close to the top of the cell as it is possible. Note: Do not try to set the vertical-align property on a selector giving a <col> element. Because <td> elements are not descendant of the <col> element, they won't inherit it. If the table doesn't use a colspan attribute, use the td:nth-child(an+b) CSS selector where a is the total number of the columns in the table and b is the ordinal position of the column in the table. Only after this selector the vertical-align property can be used. If the table does use a colspan attribute, the effect can be achieved by combining adequate CSS attribute selectors like [colspan=n], though this is not trivial. */
  "valign": (val: DomTypeMap["Any"]) => HTMLElement<"col">;
  /** @deprecated This attribute specifies a default width for each column in the current column group. In addition to the standard pixel and percentage values, this attribute might take the special form 0*, which means that the width of each column in the group should be the minimum width necessary to hold the column's contents. Relative widths such as 5* also can be used. */
  "width": (val: DomTypeMap["Any"]) => HTMLElement<"col">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"col">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"col">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"col">;
  allowedChildren: any;
}
type colgroupElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"colgroup">;
  /** @deprecated This enumerated attribute specifies how horizontal alignment of each column cell content will be handled. Possible values are: left, aligning the content to the left of the cell center, centering the content in the cell right, aligning the content to the right of the cell justify, inserting spaces into the textual content so that the content is justified in the cell char, aligning the textual content on a special character with a minimal offset, defined by the char and charoff attributes. If this attribute is not set, the left value is assumed. The descendant <col> elements may override this value using their own align attribute. Note: Do not try to set the text-align property on a selector giving a <colgroup> element. Because <td> elements are not descendant of the <colgroup> element, they won't inherit it. If the table doesn't use a colspan attribute, use one td:nth-child(an+b) CSS selector per column, where a is the total number of the columns in the table and b is the ordinal position of this column in the table. Only after this selector the text-align property can be used. If the table does use a colspan attribute, the effect can be achieved by combining adequate CSS attribute selectors like [colspan=n], though this is not trivial. */
  "align": (val: DomTypeMap["Any"]) => HTMLElement<"colgroup">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"colgroup">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"colgroup">;
  /** @deprecated The background color of the table. It is a 6-digit hexadecimal RGB code, prefixed by a '#'. One of the predefined color keywords can also be used. To achieve a similar effect, use the CSS background-color property. */
  "bgcolor": (val: DomTypeMap["Any"]) => HTMLElement<"colgroup">;
  /** @deprecated This attribute specifies the alignment of the content in a column group to a character. Typical values for this include a period (.) when attempting to align numbers or monetary values. If align is not set to char, this attribute is ignored, though it will still be used as the default value for the align of the <col> which are members of this column group. */
  "char": (val: DomTypeMap["Any"]) => HTMLElement<"colgroup">;
  /** @deprecated This attribute is used to indicate the number of characters to offset the column data from the alignment character specified by the char attribute. */
  "charoff": (val: DomTypeMap["Any"]) => HTMLElement<"colgroup">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"colgroup">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"colgroup">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"colgroup">;
  "draggable": (val: "true" | "false") => HTMLElement<"colgroup">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"colgroup">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"colgroup">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"colgroup">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"colgroup">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"colgroup">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"colgroup">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"colgroup">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"colgroup">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"colgroup">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"colgroup">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"colgroup">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"colgroup">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"colgroup">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"colgroup">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"colgroup">;
  "span": (val: DomTypeMap[`{"type":"integer","gt":0,"lte":1000,"clampable":true}`]) => HTMLElement<"colgroup">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"colgroup">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"colgroup">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"colgroup">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"colgroup">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"colgroup">;
  /** @deprecated This attribute specifies the vertical alignment of the text within each cell of the column. Possible values for this attribute are: baseline, which will put the text as close to the bottom of the cell as it is possible, but align it on the baseline of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as bottom. bottom, which will put the text as close to the bottom of the cell as it is possible; middle, which will center the text in the cell; and top, which will put the text as close to the top of the cell as it is possible. Note: Do not try to set the vertical-align property on a selector giving a <colgroup> element. Because <td> elements are not descendant of the <colgroup> element, they won't inherit it. If the table doesn't use a colspan attribute, use the td:nth-child(an+b) CSS selector per column, where a is the total number of the columns in the table and b is the ordinal position of the column in the table. Only after this selector the vertical-align property can be used. If the table does use a colspan attribute, the effect can be achieved by combining adequate CSS attribute selectors like [colspan=n], though this is not trivial. */
  "valign": (val: DomTypeMap["Any"]) => HTMLElement<"colgroup">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"colgroup">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"colgroup">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"colgroup">;
  allowedChildren: any;
}
type contentElement = {
  /** A comma-separated list of selectors. These have the same syntax as CSS selectors. They select the content to insert in place of the <content> element. */
  "select": (val: DomTypeMap["Any"]) => HTMLElement<"content">;
  allowedChildren: any;
}
type dataElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"data">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"data">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"data">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"data">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"data">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"data">;
  "draggable": (val: "true" | "false") => HTMLElement<"data">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"data">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"data">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"data">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"data">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"data">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"data">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"data">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"data">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"data">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"data">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"data">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"data">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"data">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"data">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"data">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"data">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"data">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"data">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"data">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"data">;
  "value": (val: DomTypeMap["Any"]) => HTMLElement<"data">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"data">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"data">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"data">;
  allowedChildren: any;
}
type datalistElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"datalist">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"datalist">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"datalist">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"datalist">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"datalist">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"datalist">;
  "draggable": (val: "true" | "false") => HTMLElement<"datalist">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"datalist">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"datalist">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"datalist">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"datalist">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"datalist">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"datalist">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"datalist">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"datalist">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"datalist">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"datalist">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"datalist">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"datalist">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"datalist">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"datalist">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"datalist">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"datalist">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"datalist">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"datalist">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"datalist">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"datalist">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"datalist">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"datalist">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"datalist">;
  allowedChildren: any;
}
type ddElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"dd">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"dd">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"dd">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"dd">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"dd">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"dd">;
  "draggable": (val: "true" | "false") => HTMLElement<"dd">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"dd">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"dd">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"dd">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"dd">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"dd">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"dd">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"dd">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"dd">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"dd">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"dd">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"dd">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"dd">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"dd">;
  /** If the value of this attribute is set to yes, the definition text will not wrap. The default value is no. */
  "nowrap": (val: DomTypeMap["Any"]) => HTMLElement<"dd">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"dd">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"dd">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"dd">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"dd">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"dd">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"dd">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"dd">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"dd">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"dd">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"dd">;
  allowedChildren: any;
}
type delElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"del">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"del">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"del">;
  "cite": (val: DomTypeMap["URL"]) => HTMLElement<"del">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"del">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"del">;
  "datetime": (val: DomTypeMap["DateTime"]) => HTMLElement<"del">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"del">;
  "draggable": (val: "true" | "false") => HTMLElement<"del">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"del">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"del">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"del">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"del">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"del">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"del">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"del">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"del">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"del">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"del">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"del">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"del">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"del">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"del">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"del">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"del">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"del">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"del">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"del">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"del">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"del">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"del">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"del">;
  allowedChildren: any;
}
type detailsElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"details">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"details">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"details">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"details">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"details">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"details">;
  "draggable": (val: "true" | "false") => HTMLElement<"details">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"details">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"details">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"details">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"details">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"details">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"details">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"details">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"details">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"details">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"details">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"details">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"details">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"details">;
  "open": (val: DomTypeMap["Boolean"]) => HTMLElement<"details">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"details">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"details">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"details">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"details">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"details">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"details">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"details">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"details">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"details">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"details">;
  allowedChildren: any;
}
type dfnElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"dfn">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"dfn">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"dfn">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"dfn">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"dfn">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"dfn">;
  "draggable": (val: "true" | "false") => HTMLElement<"dfn">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"dfn">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"dfn">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"dfn">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"dfn">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"dfn">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"dfn">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"dfn">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"dfn">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"dfn">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"dfn">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"dfn">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"dfn">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"dfn">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"dfn">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"dfn">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"dfn">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"dfn">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"dfn">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"dfn">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"dfn">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"dfn">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"dfn">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"dfn">;
  allowedChildren: any;
}
type dialogElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"dialog">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"dialog">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"dialog">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"dialog">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"dialog">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"dialog">;
  "draggable": (val: "true" | "false") => HTMLElement<"dialog">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"dialog">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"dialog">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"dialog">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"dialog">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"dialog">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"dialog">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"dialog">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"dialog">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"dialog">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"dialog">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"dialog">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"dialog">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"dialog">;
  "open": (val: DomTypeMap["Boolean"]) => HTMLElement<"dialog">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"dialog">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"dialog">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"dialog">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"dialog">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"dialog">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"dialog">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"dialog">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"dialog">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"dialog">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"dialog">;
  allowedChildren: any;
}
type dirElement = {
  /** This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn't work in all browsers. */
  "compact": (val: DomTypeMap["Any"]) => HTMLElement<"dir">;
  allowedChildren: any;
}
type divElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"div">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"div">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"div">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"div">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"div">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"div">;
  "draggable": (val: "true" | "false") => HTMLElement<"div">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"div">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"div">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"div">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"div">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"div">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"div">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"div">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"div">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"div">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"div">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"div">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"div">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"div">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"div">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"div">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"div">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"div">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"div">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"div">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"div">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"div">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"div">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"div">;
  allowedChildren: any;
}
type dlElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"dl">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"dl">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"dl">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"dl">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"dl">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"dl">;
  "draggable": (val: "true" | "false") => HTMLElement<"dl">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"dl">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"dl">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"dl">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"dl">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"dl">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"dl">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"dl">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"dl">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"dl">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"dl">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"dl">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"dl">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"dl">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"dl">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"dl">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"dl">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"dl">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"dl">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"dl">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"dl">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"dl">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"dl">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"dl">;
  allowedChildren: any;
}
type dtElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"dt">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"dt">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"dt">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"dt">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"dt">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"dt">;
  "draggable": (val: "true" | "false") => HTMLElement<"dt">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"dt">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"dt">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"dt">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"dt">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"dt">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"dt">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"dt">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"dt">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"dt">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"dt">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"dt">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"dt">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"dt">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"dt">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"dt">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"dt">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"dt">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"dt">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"dt">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"dt">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"dt">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"dt">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"dt">;
  allowedChildren: any;
}
type emElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"em">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"em">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"em">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"em">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"em">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"em">;
  "draggable": (val: "true" | "false") => HTMLElement<"em">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"em">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"em">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"em">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"em">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"em">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"em">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"em">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"em">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"em">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"em">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"em">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"em">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"em">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"em">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"em">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"em">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"em">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"em">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"em">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"em">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"em">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"em">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"em">;
  allowedChildren: any;
}
type embedElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"embed">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"embed">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"embed">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"embed">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"embed">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"embed">;
  "draggable": (val: "true" | "false") => HTMLElement<"embed">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"embed">;
  /** The displayed height of the resource, in CSS pixels. This must be an absolute value; percentages are not allowed. */
  "height": (val: DomTypeMap["Uint"]) => HTMLElement<"embed">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"embed">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"embed">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"embed">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"embed">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"embed">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"embed">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"embed">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"embed">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"embed">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"embed">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"embed">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"embed">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"embed">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"embed">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"embed">;
  "src": (val: DomTypeMap["URL"]) => HTMLElement<"embed">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"embed">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"embed">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"embed">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"embed">;
  "type": (val: DomTypeMap["MIMEType"]) => HTMLElement<"embed">;
  /** The displayed width of the resource, in CSS pixels. This must be an absolute value; percentages are not allowed. */
  "width": (val: DomTypeMap["Uint"]) => HTMLElement<"embed">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"embed">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"embed">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"embed">;
  allowedChildren: any;
}
type fieldsetElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"fieldset">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"fieldset">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"fieldset">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"fieldset">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"fieldset">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"fieldset">;
  /** If this Boolean attribute is set, all form controls that are descendants of the <fieldset>, are disabled, meaning they are not editable and won't be submitted along with the <form>. They won't receive any browsing events, like mouse clicks or focus-related events. By default browsers display such controls grayed out. Note that form elements inside the <legend> element won't be disabled. */
  "disabled": (val: DomTypeMap["Boolean"]) => HTMLElement<"fieldset">;
  "draggable": (val: "true" | "false") => HTMLElement<"fieldset">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"fieldset">;
  /** This attribute takes the value of the id attribute of a <form> element you want the <fieldset> to be part of, even if it is not inside the form. Please note that usage of this is confusing — if you want the <input> elements inside the <fieldset> to be associated with the form, you need to use the form attribute directly on those elements. You can check which elements are associated with a form via JavaScript, using HTMLFormElement.elements. */
  "form": (val: DomTypeMap["DOMID"]) => HTMLElement<"fieldset">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"fieldset">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"fieldset">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"fieldset">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"fieldset">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"fieldset">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"fieldset">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"fieldset">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"fieldset">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"fieldset">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"fieldset">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"fieldset">;
  /** The name associated with the group. Note: The caption for the fieldset is given by the first <legend> element nested inside it. */
  "name": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"fieldset">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"fieldset">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"fieldset">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"fieldset">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"fieldset">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"fieldset">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"fieldset">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"fieldset">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"fieldset">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"fieldset">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"fieldset">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"fieldset">;
  allowedChildren: any;
}
type figcaptionElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"figcaption">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"figcaption">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"figcaption">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"figcaption">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"figcaption">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"figcaption">;
  "draggable": (val: "true" | "false") => HTMLElement<"figcaption">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"figcaption">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"figcaption">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"figcaption">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"figcaption">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"figcaption">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"figcaption">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"figcaption">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"figcaption">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"figcaption">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"figcaption">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"figcaption">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"figcaption">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"figcaption">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"figcaption">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"figcaption">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"figcaption">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"figcaption">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"figcaption">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"figcaption">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"figcaption">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"figcaption">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"figcaption">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"figcaption">;
  allowedChildren: any;
}
type figureElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"figure">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"figure">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"figure">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"figure">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"figure">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"figure">;
  "draggable": (val: "true" | "false") => HTMLElement<"figure">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"figure">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"figure">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"figure">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"figure">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"figure">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"figure">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"figure">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"figure">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"figure">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"figure">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"figure">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"figure">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"figure">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"figure">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"figure">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"figure">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"figure">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"figure">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"figure">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"figure">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"figure">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"figure">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"figure">;
  allowedChildren: any;
}
type fontElement = {
  /** This attribute sets the text color using either a named color or a color specified in the hexadecimal #RRGGBB format. */
  "color": (val: DomTypeMap["Any"]) => HTMLElement<"font">;
  /** This attribute contains a comma-separated list of one or more font names. The document text in the default style is rendered in the first font face that the client's browser supports. If no font listed is installed on the local system, the browser typically defaults to the proportional or fixed-width font for that system. */
  "face": (val: DomTypeMap["Any"]) => HTMLElement<"font">;
  /** This attribute specifies the font size as either a numeric or relative value. Numeric values range from 1 to 7 with 1 being the smallest and 3 the default. It can be defined using a relative value, like +2 or -3, which set it relative to the value of the size attribute of the <basefont> element, or relative to 3, the default value, if none does exist. */
  "size": (val: DomTypeMap["Any"]) => HTMLElement<"font">;
  allowedChildren: any;
}
type footerElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"footer">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"footer">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"footer">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"footer">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"footer">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"footer">;
  "draggable": (val: "true" | "false") => HTMLElement<"footer">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"footer">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"footer">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"footer">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"footer">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"footer">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"footer">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"footer">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"footer">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"footer">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"footer">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"footer">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"footer">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"footer">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"footer">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"footer">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"footer">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"footer">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"footer">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"footer">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"footer">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"footer">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"footer">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"footer">;
  allowedChildren: any;
}
type formElement = {
  /** @deprecated Comma-separated content types the server accepts. Note: This attribute was removed in HTML5 and should not be used. Instead, use the accept attribute on <input type=file> elements. */
  "accept": (val: DomTypeMap["Any"]) => HTMLElement<"form">;
  "accept-charset": (val: "utf-8") => HTMLElement<"form">;
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"form">;
  "action": (val: DomTypeMap["URL"]) => HTMLElement<"form">;
  /** A nonstandard attribute used by iOS Safari that controls how textual form elements should be automatically capitalized. autocapitalize attributes on a form elements override it on <form>. Possible values: none: No automatic capitalization. sentences (default): Capitalize the first letter of each sentence. words: Capitalize the first letter of each word. characters: Capitalize all characters — that is, uppercase. */
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"form">;
  "autocomplete": (val: "on" | "off") => HTMLElement<"form">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"form">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"form">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"form">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"form">;
  "draggable": (val: "true" | "false") => HTMLElement<"form">;
  "enctype": (val: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain") => HTMLElement<"form">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"form">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"form">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"form">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"form">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"form">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"form">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"form">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"form">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"form">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"form">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"form">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"form">;
  "method": (val: "post" | "get" | "dialog") => HTMLElement<"form">;
  "name": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"form">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"form">;
  "novalidate": (val: DomTypeMap["Boolean"]) => HTMLElement<"form">;
  "rel": (val: DomTypeMap[`{"token":{"enum":["external","help","license","next","nofollow","noopener","noreferrer","opener","prev","search"]},"unique":true,"separator":"space"}`]) => HTMLElement<"form">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"form">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"form">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"form">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"form">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"form">;
  "target": (val: DomTypeMap["Target"]) => HTMLElement<"form">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"form">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"form">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"form">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"form">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"form">;
  allowedChildren: any;
}
type frameElement = {
  /** This attribute allows you to specify a frame's border. */
  "frameborder": (val: DomTypeMap["Any"]) => HTMLElement<"frame">;
  /** This attribute defines the height of the margin between frames. */
  "marginheight": (val: DomTypeMap["Any"]) => HTMLElement<"frame">;
  /** This attribute defines the width of the margin between frames. */
  "marginwidth": (val: DomTypeMap["Any"]) => HTMLElement<"frame">;
  /** This attribute is used for labeling frames. Without labeling, every link will open in the frame that it's in – the closest parent frame. See the target attribute for more information. */
  "name": (val: DomTypeMap["Any"]) => HTMLElement<"frame">;
  /** This attribute prevents resizing of frames by users. */
  "noresize": (val: DomTypeMap["Any"]) => HTMLElement<"frame">;
  /** This attribute defines the existence of a scrollbar. If this attribute is not used, the browser adds a scrollbar when necessary. There are two choices: "yes" for forcing a scrollbar even when it is not necessary and "no" for forcing no scrollbar even when it is necessary. */
  "scrolling": (val: DomTypeMap["Any"]) => HTMLElement<"frame">;
  /** This attribute specifies the document that will be displayed by the frame. */
  "src": (val: DomTypeMap["Any"]) => HTMLElement<"frame">;
  allowedChildren: any;
}
type framesetElement = {
  /** This attribute specifies the number and size of horizontal spaces in a frameset. */
  "cols": (val: DomTypeMap["Any"]) => HTMLElement<"frameset">;
  /** This attribute specifies the number and size of vertical spaces in a frameset. */
  "rows": (val: DomTypeMap["Any"]) => HTMLElement<"frameset">;
  allowedChildren: any;
}
type h1Element = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"h1">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"h1">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"h1">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"h1">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"h1">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"h1">;
  "draggable": (val: "true" | "false") => HTMLElement<"h1">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"h1">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"h1">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"h1">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"h1">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"h1">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"h1">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"h1">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"h1">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"h1">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"h1">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"h1">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"h1">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"h1">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"h1">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"h1">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"h1">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"h1">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"h1">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"h1">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"h1">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"h1">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"h1">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"h1">;
  allowedChildren: any;
}
type h2Element = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"h2">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"h2">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"h2">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"h2">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"h2">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"h2">;
  "draggable": (val: "true" | "false") => HTMLElement<"h2">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"h2">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"h2">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"h2">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"h2">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"h2">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"h2">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"h2">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"h2">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"h2">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"h2">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"h2">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"h2">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"h2">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"h2">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"h2">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"h2">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"h2">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"h2">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"h2">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"h2">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"h2">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"h2">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"h2">;
  allowedChildren: any;
}
type h3Element = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"h3">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"h3">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"h3">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"h3">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"h3">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"h3">;
  "draggable": (val: "true" | "false") => HTMLElement<"h3">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"h3">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"h3">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"h3">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"h3">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"h3">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"h3">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"h3">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"h3">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"h3">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"h3">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"h3">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"h3">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"h3">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"h3">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"h3">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"h3">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"h3">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"h3">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"h3">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"h3">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"h3">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"h3">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"h3">;
  allowedChildren: any;
}
type h4Element = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"h4">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"h4">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"h4">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"h4">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"h4">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"h4">;
  "draggable": (val: "true" | "false") => HTMLElement<"h4">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"h4">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"h4">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"h4">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"h4">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"h4">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"h4">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"h4">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"h4">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"h4">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"h4">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"h4">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"h4">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"h4">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"h4">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"h4">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"h4">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"h4">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"h4">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"h4">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"h4">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"h4">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"h4">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"h4">;
  allowedChildren: any;
}
type h5Element = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"h5">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"h5">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"h5">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"h5">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"h5">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"h5">;
  "draggable": (val: "true" | "false") => HTMLElement<"h5">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"h5">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"h5">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"h5">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"h5">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"h5">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"h5">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"h5">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"h5">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"h5">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"h5">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"h5">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"h5">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"h5">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"h5">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"h5">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"h5">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"h5">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"h5">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"h5">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"h5">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"h5">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"h5">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"h5">;
  allowedChildren: any;
}
type headElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"head">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"head">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"head">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"head">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"head">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"head">;
  "draggable": (val: "true" | "false") => HTMLElement<"head">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"head">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"head">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"head">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"head">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"head">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"head">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"head">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"head">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"head">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"head">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"head">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"head">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"head">;
  /** @deprecated The URIs of one or more metadata profiles, separated by white space. */
  "profile": (val: DomTypeMap["Any"]) => HTMLElement<"head">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"head">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"head">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"head">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"head">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"head">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"head">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"head">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"head">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"head">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"head">;
  allowedChildren: any;
}
type headerElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"header">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"header">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"header">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"header">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"header">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"header">;
  "draggable": (val: "true" | "false") => HTMLElement<"header">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"header">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"header">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"header">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"header">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"header">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"header">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"header">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"header">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"header">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"header">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"header">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"header">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"header">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"header">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"header">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"header">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"header">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"header">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"header">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"header">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"header">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"header">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"header">;
  allowedChildren: any;
}
type hgroupElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"hgroup">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"hgroup">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"hgroup">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"hgroup">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"hgroup">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"hgroup">;
  "draggable": (val: "true" | "false") => HTMLElement<"hgroup">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"hgroup">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"hgroup">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"hgroup">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"hgroup">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"hgroup">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"hgroup">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"hgroup">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"hgroup">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"hgroup">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"hgroup">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"hgroup">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"hgroup">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"hgroup">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"hgroup">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"hgroup">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"hgroup">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"hgroup">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"hgroup">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"hgroup">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"hgroup">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"hgroup">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"hgroup">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"hgroup">;
  allowedChildren: any;
}
type hrElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"hr">;
  /** @deprecated Sets the alignment of the rule on the page. If no value is specified, the default value is left. */
  "align": (val: DomTypeMap["Any"]) => HTMLElement<"hr">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"hr">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"hr">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"hr">;
  /** Sets the color of the rule through color name or hexadecimal value. */
  "color": (val: DomTypeMap["Any"]) => HTMLElement<"hr">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"hr">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"hr">;
  "draggable": (val: "true" | "false") => HTMLElement<"hr">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"hr">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"hr">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"hr">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"hr">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"hr">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"hr">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"hr">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"hr">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"hr">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"hr">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"hr">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"hr">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"hr">;
  /** @deprecated Sets the rule to have no shading. */
  "noshade": (val: DomTypeMap["Any"]) => HTMLElement<"hr">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"hr">;
  /** @deprecated Sets the height, in pixels, of the rule. */
  "size": (val: DomTypeMap["Any"]) => HTMLElement<"hr">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"hr">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"hr">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"hr">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"hr">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"hr">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"hr">;
  /** @deprecated Sets the length of the rule on the page through a pixel or percentage value. */
  "width": (val: DomTypeMap["Any"]) => HTMLElement<"hr">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"hr">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"hr">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"hr">;
  allowedChildren: any;
}
type htmlElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"html">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"html">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"html">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"html">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"html">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"html">;
  "draggable": (val: "true" | "false") => HTMLElement<"html">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"html">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"html">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"html">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"html">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"html">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"html">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"html">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"html">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"html">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"html">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"html">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"html">;
  /** @deprecated Specifies the URI of a resource manifest indicating resources that should be cached locally. */
  "manifest": (val: DomTypeMap["Any"]) => HTMLElement<"html">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"html">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"html">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"html">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"html">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"html">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"html">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"html">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"html">;
  /** @deprecated Specifies the version of the HTML Document Type Definition that governs the current document. This attribute is not needed, because it is redundant with the version information in the document type declaration. */
  "version": (val: DomTypeMap["Any"]) => HTMLElement<"html">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"html">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"html">;
  /** Specifies the XML Namespace of the document. Default value is "http://www.w3.org/1999/xhtml". This is required in documents parsed with XML parsers, and optional in text/html documents. */
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"html">;
  allowedChildren: any;
}
type iElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"i">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"i">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"i">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"i">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"i">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"i">;
  "draggable": (val: "true" | "false") => HTMLElement<"i">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"i">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"i">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"i">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"i">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"i">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"i">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"i">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"i">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"i">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"i">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"i">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"i">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"i">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"i">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"i">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"i">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"i">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"i">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"i">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"i">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"i">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"i">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"i">;
  allowedChildren: any;
}
type iframeElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"iframe">;
  /** @deprecated The alignment of this element with respect to the surrounding context. */
  "align": (val: DomTypeMap["Any"]) => HTMLElement<"iframe">;
  "allow": (val: DomTypeMap["SerializedPermissionsPolicy"]) => HTMLElement<"iframe">;
  "allowfullscreen": (val: DomTypeMap["Boolean"]) => HTMLElement<"iframe">;
  /** Set to true if a cross-origin <iframe> should be allowed to invoke the Payment Request API. Note: This attribute is considered a legacy attribute and redefined as allow="payment". */
  "allowpaymentrequest": (val: DomTypeMap["Any"]) => HTMLElement<"iframe">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"iframe">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"iframe">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"iframe">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"iframe">;
  /** A Content Security Policy enforced for the embedded resource. See HTMLIFrameElement.csp for details. */
  "csp": (val: DomTypeMap["Any"]) => HTMLElement<"iframe">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"iframe">;
  "draggable": (val: "true" | "false") => HTMLElement<"iframe">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"iframe">;
  /** @deprecated The value 1 (the default) draws a border around this frame. The value 0 removes the border around this frame, but you should instead use the CSS property border to control <iframe> borders. */
  "frameborder": (val: DomTypeMap["Any"]) => HTMLElement<"iframe">;
  /** The height of the frame in CSS pixels. Default is 150. */
  "height": (val: DomTypeMap["Uint"]) => HTMLElement<"iframe">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"iframe">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"iframe">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"iframe">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"iframe">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"iframe">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"iframe">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"iframe">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"iframe">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"iframe">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"iframe">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"iframe">;
  /** Indicates how the browser should load the iframe: eager: Load the iframe immediately, regardless if it is outside the visible viewport (this is the default value). lazy: Defer loading of the iframe until it reaches a calculated distance from the viewport, as defined by the browser. */
  "loading": (val: "lazy" | "eager") => HTMLElement<"iframe">;
  /** @deprecated A URL of a long description of the frame's content. Due to widespread misuse, this is not helpful for non-visual browsers. */
  "longdesc": (val: DomTypeMap["Any"]) => HTMLElement<"iframe">;
  /** @deprecated The amount of space in pixels between the frame's content and its top and bottom borders. */
  "marginheight": (val: DomTypeMap["Any"]) => HTMLElement<"iframe">;
  /** @deprecated The amount of space in pixels between the frame's content and its left and right borders. */
  "marginwidth": (val: DomTypeMap["Any"]) => HTMLElement<"iframe">;
  "name": (val: DomTypeMap["BrowsingContextName"]) => HTMLElement<"iframe">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"iframe">;
  /** Indicates which referrer to send when fetching the frame's resource: no-referrer: The Referer header will not be sent. no-referrer-when-downgrade: The Referer header will not be sent to origins without TLS (HTTPS). origin: The sent referrer will be limited to the origin of the referring page: its scheme, host, and port. origin-when-cross-origin: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path. same-origin: A referrer will be sent for same origin, but cross-origin requests will contain no referrer information. strict-origin: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP). strict-origin-when-cross-origin (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP). unsafe-url: The referrer will include the origin and the path (but not the fragment, password, or username). This value is unsafe, because it leaks origins and paths from TLS-protected resources to insecure origins. */
  "referrerpolicy": (val: "" | "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url") => HTMLElement<"iframe">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"iframe">;
  "sandbox": (val: DomTypeMap[`{"token":{"enum":["allow-forms","allow-modals","allow-orientation-lock","allow-pointer-lock","allow-popups","allow-popups-to-escape-sandbox","allow-presentation","allow-same-origin","allow-scripts","allow-top-navigation","allow-top-navigation-by-user-activation","allow-downloads","allow-custom-protocols-navigation"]},"caseInsensitive":true,"ordered":true,"unique":true,"separator":"space"}`]) => HTMLElement<"iframe">;
  /** @deprecated Indicates when the browser should provide a scrollbar for the frame: auto: Only when the frame's content is larger than its dimensions. yes: Always show a scrollbar. no: Never show a scrollbar. */
  "scrolling": (val: DomTypeMap["Any"]) => HTMLElement<"iframe">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"iframe">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"iframe">;
  "src": (val: DomTypeMap["URL"]) => HTMLElement<"iframe">;
  "srcdoc": (val: DomTypeMap["Any"]) => HTMLElement<"iframe">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"iframe">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"iframe">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"iframe">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"iframe">;
  /** The width of the frame in CSS pixels. Default is 300. */
  "width": (val: DomTypeMap["Uint"]) => HTMLElement<"iframe">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"iframe">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"iframe">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"iframe">;
  allowedChildren: any;
}
type imageElement = {
  allowedChildren: any;
}
type imgElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"img">;
  /** @deprecated Aligns the image with its surrounding context. Use the float and/or vertical-align CSS properties instead of this attribute. Allowed values: top Equivalent to vertical-align: top or vertical-align: text-top middle Equivalent to vertical-align: -moz-middle-with-baseline bottom The default, equivalent to vertical-align: unset or vertical-align: initial left Equivalent to float: left right Equivalent to float: right */
  "align": (val: DomTypeMap["Any"]) => HTMLElement<"img">;
  "alt": (val: DomTypeMap["Any"]) => HTMLElement<"img">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"img">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"img">;
  /** @deprecated The width of a border around the image. Use the border CSS property instead. */
  "border": (val: DomTypeMap["Any"]) => HTMLElement<"img">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"img">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"img">;
  /** Indicates if the fetching of the image must be done using a CORS request. Image data from a CORS-enabled image returned from a CORS request can be reused in the <canvas> element without being marked "tainted". If the crossorigin attribute is not specified, then a non-CORS request is sent (without the Origin request header), and the browser marks the image as tainted and restricts access to its image data, preventing its usage in <canvas> elements. If the crossorigin attribute is specified, then a CORS request is sent (with the Origin request header); but if the server does not opt into allowing cross-origin access to the image data by the origin site (by not sending any Access-Control-Allow-Origin response header, or by not including the site's origin in any Access-Control-Allow-Origin response header it does send), then the browser blocks the image from loading, and logs a CORS error to the devtools console. Allowed values: anonymous A CORS request is sent with credentials omitted (that is, no cookies, X.509 certificates, or Authorization request header). use-credentials The CORS request is sent with any credentials included (that is, cookies, X.509 certificates, and the Authorization request header). If the server does not opt into sharing credentials with the origin site (by sending back the Access-Control-Allow-Credentials: true response header), then the browser marks the image as tainted and restricts access to its image data. If the attribute has an invalid value, browsers handle it as if the anonymous value was used. See CORS settings attributes for additional information. */
  "crossorigin": (val: "" | "anonymous" | "use-credentials") => HTMLElement<"img">;
  "decoding": (val: "sync" | "async" | "auto") => HTMLElement<"img">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"img">;
  "draggable": (val: "true" | "false") => HTMLElement<"img">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"img">;
  /** The intrinsic height of the image, in pixels. Must be an integer without a unit. */
  "height": (val: DomTypeMap["Uint"]) => HTMLElement<"img">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"img">;
  /** @deprecated The number of pixels of white space on the left and right of the image. Use the margin CSS property instead. */
  "hspace": (val: DomTypeMap["Any"]) => HTMLElement<"img">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"img">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"img">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"img">;
  /** @deprecated This attribute tells the browser to ignore the actual intrinsic size of the image and pretend it's the size specified in the attribute. Specifically, the image would raster at these dimensions and naturalWidth/naturalHeight on images would return the values specified in this attribute. Explainer, examples */
  "intrinsicsize": (val: DomTypeMap["Any"]) => HTMLElement<"img">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"img">;
  "ismap": (val: DomTypeMap["Boolean"]) => HTMLElement<"img">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"img">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"img">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"img">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"img">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"img">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"img">;
  /** Indicates how the browser should load the image: eager: Loads the image immediately, regardless of whether or not the image is currently within the visible viewport (this is the default value). lazy: Defers loading the image until it reaches a calculated distance from the viewport, as defined by the browser. The intent is to avoid the network and storage bandwidth needed to handle the image until it's reasonably certain that it will be needed. This generally improves the performance of the content in most typical use cases. Note: Loading is only deferred when JavaScript is enabled. This is an anti-tracking measure, because if a user agent supported lazy loading when scripting is disabled, it would still be possible for a site to track a user's approximate scroll position throughout a session, by strategically placing images in a page's markup such that a server can track how many images are requested and when. */
  "loading": (val: "lazy" | "eager") => HTMLElement<"img">;
  /** @deprecated A link to a more detailed description of the image. Possible values are a URL or an element id. Note: This attribute is mentioned in the latest W3C version, HTML 5.2, but has been removed from the WHATWG's HTML Living Standard. It has an uncertain future; authors should use a WAI-ARIA alternative such as aria-describedby or aria-details. */
  "longdesc": (val: DomTypeMap["Any"]) => HTMLElement<"img">;
  /** @deprecated A name for the element. Use the id attribute instead. */
  "name": (val: DomTypeMap["Any"]) => HTMLElement<"img">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"img">;
  /** A string indicating which referrer to use when fetching the resource: no-referrer: The Referer header will not be sent. no-referrer-when-downgrade: The Referer header will not be sent to origins without TLS (HTTPS). origin: The sent referrer will be limited to the origin of the referring page: its scheme, host, and port. origin-when-cross-origin: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path. same-origin: A referrer will be sent for same origin, but cross-origin requests will contain no referrer information. strict-origin: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP). strict-origin-when-cross-origin (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP). unsafe-url: The referrer will include the origin and the path (but not the fragment, password, or username). This value is unsafe, because it leaks origins and paths from TLS-protected resources to insecure origins. */
  "referrerpolicy": (val: "" | "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url") => HTMLElement<"img">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"img">;
  /** One or more strings separated by commas, indicating a set of source sizes. Each source size consists of: A media condition. This must be omitted for the last item in the list. A source size value. Media Conditions describe properties of the viewport, not of the image. For example, (max-height: 500px) 1000px proposes to use a source of 1000px width, if the viewport is not higher than 500px. Source size values specify the intended display size of the image. User agents use the current source size to select one of the sources supplied by the srcset attribute, when those sources are described using width (w) descriptors. The selected source size affects the intrinsic size of the image (the image's display size if no CSS styling is applied). If the srcset attribute is absent, or contains no values with a width descriptor, then the sizes attribute has no effect. */
  "sizes": (val: DomTypeMap["SourceSizeList"]) => HTMLElement<"img">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"img">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"img">;
  "src": (val: DomTypeMap["URL"]) => HTMLElement<"img">;
  /** One or more strings separated by commas, indicating possible image sources for the user agent to use. Each string is composed of: A URL to an image Optionally, whitespace followed by one of: A width descriptor (a positive integer directly followed by w). The width descriptor is divided by the source size given in the sizes attribute to calculate the effective pixel density. A pixel density descriptor (a positive floating point number directly followed by x). If no descriptor is specified, the source is assigned the default descriptor of 1x. It is incorrect to mix width descriptors and pixel density descriptors in the same srcset attribute. Duplicate descriptors (for instance, two sources in the same srcset which are both described with 2x) are also invalid. The user agent selects any of the available sources at its discretion. This provides them with significant leeway to tailor their selection based on things like user preferences or bandwidth conditions. See our Responsive images tutorial for an example. */
  "srcset": (val: DomTypeMap["Srcset"]) => HTMLElement<"img">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"img">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"img">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"img">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"img">;
  "usemap": (val: DomTypeMap["HashName"]) => HTMLElement<"img">;
  /** @deprecated The number of pixels of white space above and below the image. Use the margin CSS property instead. */
  "vspace": (val: DomTypeMap["Any"]) => HTMLElement<"img">;
  /** The intrinsic width of the image in pixels. Must be an integer without a unit. */
  "width": (val: DomTypeMap["Uint"]) => HTMLElement<"img">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"img">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"img">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"img">;
  allowedChildren: any;
}
type inputElement = {
  "accept": (val: DomTypeMap[`{"token":"Accept","caseInsensitive":true,"unique":true,"separator":"comma"}`]) => HTMLElement<"input">;
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"input">;
  "alt": (val: DomTypeMap["Any"]) => HTMLElement<"input">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"input">;
  "autocomplete": (val: DomTypeMap["AutoComplete"]) => HTMLElement<"input">;
  /** A Safari extension, the autocorrect attribute is a string which indicates whether or not to activate automatic correction while the user is editing this field. Permitted values are: on Enable automatic correction of typos, as well as processing of text substitutions if any are configured. off Disable automatic correction and text substitutions. */
  "autocorrect": (val: DomTypeMap["Any"]) => HTMLElement<"input">;
  /** A Boolean attribute which, if present, indicates that the input should automatically have focus when the page has finished loading (or when the <dialog> containing the element has been displayed). Note: An element with the autofocus attribute may gain focus before the DOMContentLoaded event is fired. No more than one element in the document may have the autofocus attribute. If put on more than one element, the first one with the attribute receives focus. The autofocus attribute cannot be used on inputs of type hidden, since hidden inputs cannot be focused. Warning: Automatically focusing a form control can confuse visually-impaired people using screen-reading technology and people with cognitive impairments. When autofocus is assigned, screen-readers "teleport" their user to the form control without warning them beforehand. Use careful consideration for accessibility when applying the autofocus attribute. Automatically focusing on a control can cause the page to scroll on load. The focus can also cause dynamic keyboards to display on some touch devices. While a screen reader will announce the label of the form control receiving focus, the screen reader will not announce anything before the label, and the sighted user on a small device will equally miss the context created by the preceding content. */
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"input">;
  /** Introduced in the HTML Media Capture specification and valid for the file input type only, the capture attribute defines which media—microphone, video, or camera—should be used to capture a new file for upload with file upload control in supporting scenarios. See the file input type. */
  "capture": (val: DomTypeMap["Any"]) => HTMLElement<"input">;
  "checked": (val: DomTypeMap["Boolean"]) => HTMLElement<"input">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"input">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"input">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"input">;
  "dirname": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"input">;
  /** A Boolean attribute which, if present, indicates that the user should not be able to interact with the input. Disabled inputs are typically rendered with a dimmer color or using some other form of indication that the field is not available for use. Specifically, disabled inputs do not receive the click event, and disabled inputs are not submitted with the form. Note: Although not required by the specification, Firefox will by default persist the dynamic disabled state of an <input> across page loads. Use the autocomplete attribute to control this feature. */
  "disabled": (val: DomTypeMap["Boolean"]) => HTMLElement<"input">;
  "draggable": (val: "true" | "false") => HTMLElement<"input">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"input">;
  /** A string specifying the <form> element with which the input is associated (that is, its form owner). This string's value, if present, must match the id of a <form> element in the same document. If this attribute isn't specified, the <input> element is associated with the nearest containing form, if any. The form attribute lets you place an input anywhere in the document but have it included with a form elsewhere in the document. Note: An input can only be associated with one form. */
  "form": (val: DomTypeMap["DOMID"]) => HTMLElement<"input">;
  /** Valid for the image and submit input types only. See the submit input type for more information. */
  "formaction": (val: DomTypeMap["URL"]) => HTMLElement<"input">;
  /** Valid for the image and submit input types only. See the submit input type for more information. */
  "formenctype": (val: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain") => HTMLElement<"input">;
  /** Valid for the image and submit input types only. See the submit input type for more information. */
  "formmethod": (val: "post" | "get" | "dialog") => HTMLElement<"input">;
  /** Valid for the image and submit input types only. See the submit input type for more information. */
  "formnovalidate": (val: DomTypeMap["Boolean"]) => HTMLElement<"input">;
  /** Valid for the image and submit input types only. See the submit input type for more information. */
  "formtarget": (val: DomTypeMap["BrowsingContextNameOrKeyword"]) => HTMLElement<"input">;
  "height": (val: DomTypeMap["Uint"]) => HTMLElement<"input">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"input">;
  /** Global attribute valid for all elements, including all the input types, it defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking. The value is used as the value of the <label>'s for attribute to link the label with the form control. See <label>. */
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"input">;
  /** The Boolean attribute incremental is a WebKit and Blink extension (so supported by Safari, Opera, Chrome, etc.) which, if present, tells the user agent to process the input as a live search. As the user edits the value of the field, the user agent sends search events to the HTMLInputElement object representing the search box. This allows your code to update the search results in real time as the user edits the search. If incremental is not specified, the search event is only sent when the user explicitly initiates a search (such as by pressing the Enter or Return key while editing the field). The search event is rate-limited so that it is not sent more frequently than an implementation-defined interval. */
  "incremental": (val: DomTypeMap["Any"]) => HTMLElement<"input">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"input">;
  /** Global value valid for all elements, it provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element or its contents. Values include none, text, tel, url, email, numeric, decimal, and search. */
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"input">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"input">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"input">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"input">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"input">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"input">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"input">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"input">;
  "list": (val: DomTypeMap["DOMID"]) => HTMLElement<"input">;
  "max": (val: DomTypeMap[`["DateTime","Number"]`]) => HTMLElement<"input">;
  "maxlength": (val: DomTypeMap["Uint"]) => HTMLElement<"input">;
  "min": (val: DomTypeMap[`["DateTime","Number"]`]) => HTMLElement<"input">;
  "minlength": (val: DomTypeMap["Uint"]) => HTMLElement<"input">;
  /** A Mozilla extension, supported by Firefox for Android, which provides a hint as to what sort of action will be taken if the user presses the Enter or Return key while editing the field. This information is used to decide what kind of label to use on the Enter key on the virtual keyboard. Note: This has been standardized as the global attribute enterkeyhint, but is not yet widely implemented. To see the status of the change being implemented in Firefox, see bug 1490661. Permitted values are: go, done, next, search, and send. The browser decides, using this hint, what label to put on the enter key. */
  "mozactionhint": (val: DomTypeMap["Any"]) => HTMLElement<"input">;
  "multiple": (val: DomTypeMap["Boolean"]) => HTMLElement<"input">;
  /** A string specifying a name for the input control. This name is submitted along with the control's value when the form data is submitted. Consider the name a required attribute (even though it's not). If an input has no name specified, or name is empty, the input's value is not submitted with the form! (Disabled controls, unchecked radio buttons, unchecked checkboxes, and reset buttons are also not sent.) There are two special cases: _charset_ : If used as the name of an <input> element of type hidden, the input's value is automatically set by the user agent to the character encoding being used to submit the form. isindex: For historical reasons, the name isindex is not allowed. The name attribute creates a unique behavior for radio buttons. Only one radio button in a same-named group of radio buttons can be checked at a time. Selecting any radio button in that group automatically deselects any currently-selected radio button in the same group. The value of that one checked radio button is sent along with the name if the form is submitted, When tabbing into a series of same-named group of radio buttons, if one is checked, that one will receive focus. If they aren't grouped together in source order, if one of the group is checked, tabbing into the group starts when the first one in the group is encountered, skipping all those that aren't checked. In other words, if one is checked, tabbing skips the unchecked radio buttons in the group. If none are checked, the radio button group receives focus when the first button in the same name group is reached. Once one of the radio buttons in a group has focus, using the arrow keys will navigate through all the radio buttons of the same name, even if the radio buttons are not grouped together in the source order. When an input element is given a name, that name becomes a property of the owning form element's HTMLFormElement.elements property. If you have an input whose name is set to guest and another whose name is hat-size, the following code can be used: let form = document.querySelector("form"); let guestName = form.elements.guest; let hatSize = form.elements["hat-size"]; When this code has run, guestName will be the HTMLInputElement for the guest field, and hatSize the object for the hat-size field. Warning: Avoid giving form elements a name that corresponds to a built-in property of the form, since you would then override the predefined property or method with this reference to the corresponding input. */
  "name": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"input">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"input">;
  /** Similar to the -moz-orient non-standard CSS property impacting the <progress> and <meter> elements, the orient attribute defines the orientation of the range slider. Values include horizontal, meaning the range is rendered horizontally, and vertical, where the range is rendered vertically. */
  "orient": (val: DomTypeMap["Any"]) => HTMLElement<"input">;
  "pattern": (val: DomTypeMap["Pattern"]) => HTMLElement<"input">;
  "placeholder": (val: DomTypeMap["OneLineAny"]) => HTMLElement<"input">;
  "readonly": (val: DomTypeMap["Boolean"]) => HTMLElement<"input">;
  "required": (val: DomTypeMap["Boolean"]) => HTMLElement<"input">;
  /** The results attribute—supported only by Safari—is a numeric value that lets you override the maximum number of entries to be displayed in the <input> element's natively-provided drop-down menu of previous search queries. The value must be a non-negative decimal number. If not provided, or an invalid value is given, the browser's default maximum number of entries is used. */
  "results": (val: DomTypeMap["Any"]) => HTMLElement<"input">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"input">;
  "size": (val: DomTypeMap[`{"type":"integer","gt":0}`]) => HTMLElement<"input">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"input">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"input">;
  "src": (val: DomTypeMap["URL"]) => HTMLElement<"input">;
  "step": (val: DomTypeMap[`["Number",{"enum":["any"],"caseInsensitive":true}]`]) => HTMLElement<"input">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"input">;
  /** Global attribute valid for all elements, including all the input types, an integer attribute indicating if the element can take input focus (is focusable), if it should participate to sequential keyboard navigation. As all input types except for input of type hidden are focusable, this attribute should not be used on form controls, because doing so would require the management of the focus order for all elements within the document with the risk of harming usability and accessibility if done incorrectly. */
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"input">;
  /** Global attribute valid for all elements, including all input types, containing a text representing advisory information related to the element it belongs to. Such information can typically, but not necessarily, be presented to the user as a tooltip. The title should NOT be used as the primary explanation of the purpose of the form control. Instead, use the <label> element with a for attribute set to the form control's id attribute. See Labels below. */
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"input">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"input">;
  "type": (val: "hidden" | "text" | "search" | "tel" | "url" | "email" | "password" | "date" | "month" | "week" | "time" | "datetime-local" | "number" | "range" | "color" | "checkbox" | "radio" | "file" | "submit" | "image" | "reset" | "button") => HTMLElement<"input">;
  "value": (val: DomTypeMap["Any"]) => HTMLElement<"input">;
  /** The Boolean webkitdirectory attribute, if present, indicates that only directories should be available to be selected by the user in the file picker interface. See HTMLInputElement.webkitdirectory for additional details and examples. Though originally implemented only for WebKit-based browsers, webkitdirectory is also usable in Microsoft Edge as well as Firefox 50 and later. However, even though it has relatively broad support, it is still not standard and should not be used unless you have no alternative. */
  "webkitdirectory": (val: DomTypeMap["Any"]) => HTMLElement<"input">;
  "width": (val: DomTypeMap["Uint"]) => HTMLElement<"input">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"input">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"input">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"input">;
  allowedChildren: any;
}
type insElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"ins">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"ins">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"ins">;
  "cite": (val: DomTypeMap["URL"]) => HTMLElement<"ins">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"ins">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"ins">;
  "datetime": (val: DomTypeMap["DateTime"]) => HTMLElement<"ins">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"ins">;
  "draggable": (val: "true" | "false") => HTMLElement<"ins">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"ins">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"ins">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"ins">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"ins">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"ins">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"ins">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"ins">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"ins">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"ins">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"ins">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"ins">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"ins">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"ins">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"ins">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"ins">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"ins">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"ins">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"ins">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"ins">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"ins">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"ins">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"ins">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"ins">;
  allowedChildren: any;
}
type isindexElement = {
  allowedChildren: any;
}
type kbdElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"kbd">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"kbd">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"kbd">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"kbd">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"kbd">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"kbd">;
  "draggable": (val: "true" | "false") => HTMLElement<"kbd">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"kbd">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"kbd">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"kbd">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"kbd">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"kbd">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"kbd">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"kbd">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"kbd">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"kbd">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"kbd">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"kbd">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"kbd">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"kbd">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"kbd">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"kbd">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"kbd">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"kbd">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"kbd">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"kbd">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"kbd">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"kbd">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"kbd">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"kbd">;
  allowedChildren: any;
}
type keygenElement = {
  /** This Boolean attribute lets you specify that the control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the autofocus attribute, which is a Boolean. */
  "autofocus": (val: DomTypeMap["Any"]) => HTMLElement<"keygen">;
  /** A challenge string that is submitted along with the public key. Defaults to an empty string if not specified. */
  "challenge": (val: DomTypeMap["Any"]) => HTMLElement<"keygen">;
  /** This Boolean attribute indicates that the form control is not available for interaction. */
  "disabled": (val: DomTypeMap["Any"]) => HTMLElement<"keygen">;
  /** The form element that this element is associated with (its form owner). The value of the attribute must be an id of a <form> element in the same document. If this attribute is not specified, this element must be a descendant of a <form> element. This attribute enables you to place <keygen> elements anywhere within a document, not just as descendants of their form elements. */
  "form": (val: DomTypeMap["Any"]) => HTMLElement<"keygen">;
  /** The type of key generated. The default value is RSA. */
  "keytype": (val: DomTypeMap["Any"]) => HTMLElement<"keygen">;
  /** The name of the control, which is submitted with the form data. */
  "name": (val: DomTypeMap["Any"]) => HTMLElement<"keygen">;
  allowedChildren: any;
}
type labelElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"label">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"label">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"label">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"label">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"label">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"label">;
  "draggable": (val: "true" | "false") => HTMLElement<"label">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"label">;
  "for": (val: DomTypeMap["DOMID"]) => HTMLElement<"label">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"label">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"label">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"label">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"label">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"label">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"label">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"label">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"label">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"label">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"label">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"label">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"label">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"label">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"label">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"label">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"label">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"label">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"label">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"label">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"label">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"label">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"label">;
  allowedChildren: any;
}
type legendElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"legend">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"legend">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"legend">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"legend">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"legend">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"legend">;
  "draggable": (val: "true" | "false") => HTMLElement<"legend">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"legend">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"legend">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"legend">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"legend">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"legend">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"legend">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"legend">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"legend">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"legend">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"legend">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"legend">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"legend">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"legend">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"legend">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"legend">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"legend">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"legend">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"legend">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"legend">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"legend">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"legend">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"legend">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"legend">;
  allowedChildren: any;
}
type liElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"li">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"li">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"li">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"li">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"li">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"li">;
  "draggable": (val: "true" | "false") => HTMLElement<"li">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"li">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"li">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"li">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"li">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"li">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"li">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"li">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"li">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"li">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"li">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"li">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"li">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"li">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"li">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"li">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"li">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"li">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"li">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"li">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"li">;
  /** @deprecated This character attribute indicates the numbering type: a: lowercase letters A: uppercase letters i: lowercase Roman numerals I: uppercase Roman numerals 1: numbers This type overrides the one used by its parent <ol> element, if any. Note: This attribute has been deprecated; use the CSS list-style-type property instead. */
  "type": (val: DomTypeMap["Any"]) => HTMLElement<"li">;
  "value": (val: DomTypeMap["Int"]) => HTMLElement<"li">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"li">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"li">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"li">;
  allowedChildren: any;
}
type linkElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"link">;
  "as": (val: "fetch" | "audio" | "audioworklet" | "document" | "embed" | "font" | "frame" | "iframe" | "image" | "manifest" | "object" | "paintworklet" | "report" | "script" | "serviceworker" | "sharedworker" | "style" | "track" | "video" | "worker" | "xslt") => HTMLElement<"link">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"link">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"link">;
  "blocking": (val: "render") => HTMLElement<"link">;
  /** @deprecated This attribute defines the character encoding of the linked resource. The value is a space- and/or comma-delimited list of character sets as defined in RFC 2045. The default value is iso-8859-1. Note: To produce the same effect as this obsolete attribute, use the Content-Type HTTP header on the linked resource. */
  "charset": (val: DomTypeMap["Any"]) => HTMLElement<"link">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"link">;
  "color": (val: DomTypeMap["<color>"]) => HTMLElement<"link">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"link">;
  /** This enumerated attribute indicates whether CORS must be used when fetching the resource. CORS-enabled images can be reused in the <canvas> element without being tainted. The allowed values are: anonymous A cross-origin request (i.e. with an Origin HTTP header) is performed, but no credential is sent (i.e. no cookie, X.509 certificate, or HTTP Basic authentication). If the server does not give credentials to the origin site (by not setting the Access-Control-Allow-Origin HTTP header) the resource will be tainted and its usage restricted. use-credentials A cross-origin request (i.e. with an Origin HTTP header) is performed along with a credential sent (i.e. a cookie, certificate, and/or HTTP Basic authentication is performed). If the server does not give credentials to the origin site (through Access-Control-Allow-Credentials HTTP header), the resource will be tainted and its usage restricted. If the attribute is not present, the resource is fetched without a CORS request (i.e. without sending the Origin HTTP header), preventing its non-tainted usage. If invalid, it is handled as if the enumerated keyword anonymous was used. See CORS settings attributes for additional information. */
  "crossorigin": (val: "" | "anonymous" | "use-credentials") => HTMLElement<"link">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"link">;
  "disabled": (val: DomTypeMap["Boolean"]) => HTMLElement<"link">;
  "draggable": (val: "true" | "false") => HTMLElement<"link">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"link">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"link">;
  /** This attribute specifies the URL of the linked resource. A URL can be absolute or relative. */
  "href": (val: DomTypeMap["URL"]) => HTMLElement<"link">;
  /** This attribute indicates the language of the linked resource. It is purely advisory. Allowed values are specified by RFC 5646: Tags for Identifying Languages (also known as BCP 47). Use this attribute only if the href attribute is present. */
  "hreflang": (val: DomTypeMap["BCP47"]) => HTMLElement<"link">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"link">;
  "imagesizes": (val: DomTypeMap["SourceSizeList"]) => HTMLElement<"link">;
  "imagesrcset": (val: DomTypeMap["Srcset"]) => HTMLElement<"link">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"link">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"link">;
  "integrity": (val: DomTypeMap["Any"]) => HTMLElement<"link">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"link">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"link">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"link">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"link">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"link">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"link">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"link">;
  /** This attribute specifies the media that the linked resource applies to. Its value must be a media type / media query. This attribute is mainly useful when linking to external stylesheets — it allows the user agent to pick the best adapted one for the device it runs on. Note: In HTML 4, this can only be a simple white-space-separated list of media description literals, i.e., media types and groups, where defined and allowed as values for this attribute, such as print, screen, aural, braille. HTML5 extended this to any kind of media queries, which are a superset of the allowed values of HTML 4. Browsers not supporting CSS3 Media Queries won't necessarily recognize the adequate link; do not forget to set fallback links, the restricted set of media queries defined in HTML 4. */
  "media": (val: DomTypeMap["<media-query-list>"]) => HTMLElement<"link">;
  /** The value of this attribute provides information about the functions that might be performed on an object. The values generally are given by the HTTP protocol when it is used, but it might (for similar reasons as for the title attribute) be useful to include advisory information in advance in the link. For example, the browser might choose a different rendering of a link as a function of the methods specified; something that is searchable might get a different icon, or an outside link might render with an indication of leaving the current site. This attribute is not well understood nor supported, even by the defining browser, Internet Explorer 4. */
  "methods": (val: DomTypeMap["Any"]) => HTMLElement<"link">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"link">;
  /** Identifies a resource that might be required by the next navigation and that the user agent should retrieve it. This allows the user agent to respond faster when the resource is requested in the future. */
  "prefetch": (val: DomTypeMap["Any"]) => HTMLElement<"link">;
  /** A string indicating which referrer to use when fetching the resource: no-referrer means that the Referer header will not be sent. no-referrer-when-downgrade means that no Referer header will be sent when navigating to an origin without TLS (HTTPS). This is a user agent's default behavior, if no policy is otherwise specified. origin means that the referrer will be the origin of the page, which is roughly the scheme, the host, and the port. origin-when-cross-origin means that navigating to other origins will be limited to the scheme, the host, and the port, while navigating on the same origin will include the referrer's path. unsafe-url means that the referrer will include the origin and the path (but not the fragment, password, or username). This case is unsafe because it can leak origins and paths from TLS-protected resources to insecure origins. */
  "referrerpolicy": (val: "" | "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url") => HTMLElement<"link">;
  "rel": (val: DomTypeMap[`["Any",{"token":{"enum":["alternate","canonical","author","dns-prefetch","help","icon","manifest","modulepreload","license","next","pingback","preconnect","prefetch","preload","prerender","prev","search","stylesheet"]},"unique":true,"separator":"space"}]`]) => HTMLElement<"link">;
  /** @deprecated The value of this attribute shows the relationship of the current document to the linked document, as defined by the href attribute. The attribute thus defines the reverse relationship compared to the value of the rel attribute. Link type values for the attribute are similar to the possible values for rel. Note: Instead of rev, you should use the rel attribute with the opposite link type value. For example, to establish the reverse link for made, specify author. Also this attribute doesn't stand for "revision" and must not be used with a version number, even though many sites misuse it in this way. */
  "rev": (val: DomTypeMap["Any"]) => HTMLElement<"link">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"link">;
  "sizes": (val: DomTypeMap[`{"token":"IconSize","caseInsensitive":true,"ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"link">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"link">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"link">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"link">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"link">;
  /** Defines the frame or window name that has the defined linking relationship or that will show the rendering of any linked resource. */
  "target": (val: DomTypeMap["Any"]) => HTMLElement<"link">;
  /** The title attribute has special semantics on the <link> element. When used on a <link rel="stylesheet"> it defines a default or an alternate stylesheet. */
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"link">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"link">;
  /** This attribute is used to define the type of the content linked to. The value of the attribute should be a MIME type such as text/html, text/css, and so on. The common use of this attribute is to define the type of stylesheet being referenced (such as text/css), but given that CSS is the only stylesheet language used on the web, not only is it possible to omit the type attribute, but is actually now recommended practice. It is also used on rel="preload" link types, to make sure the browser only downloads file types that it supports. */
  "type": (val: DomTypeMap["MIMEType"]) => HTMLElement<"link">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"link">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"link">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"link">;
  allowedChildren: any;
}
type listingElement = {
  allowedChildren: any;
}
type mainElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"main">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"main">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"main">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"main">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"main">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"main">;
  "draggable": (val: "true" | "false") => HTMLElement<"main">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"main">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"main">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"main">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"main">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"main">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"main">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"main">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"main">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"main">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"main">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"main">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"main">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"main">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"main">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"main">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"main">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"main">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"main">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"main">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"main">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"main">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"main">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"main">;
  allowedChildren: any;
}
type mapElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"map">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"map">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"map">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"map">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"map">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"map">;
  "draggable": (val: "true" | "false") => HTMLElement<"map">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"map">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"map">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"map">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"map">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"map">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"map">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"map">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"map">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"map">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"map">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"map">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"map">;
  "name": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"map">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"map">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"map">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"map">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"map">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"map">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"map">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"map">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"map">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"map">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"map">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"map">;
  allowedChildren: any;
}
type markElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"mark">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"mark">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"mark">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"mark">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"mark">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"mark">;
  "draggable": (val: "true" | "false") => HTMLElement<"mark">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"mark">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"mark">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"mark">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"mark">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"mark">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"mark">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"mark">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"mark">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"mark">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"mark">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"mark">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"mark">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"mark">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"mark">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"mark">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"mark">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"mark">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"mark">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"mark">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"mark">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"mark">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"mark">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"mark">;
  allowedChildren: any;
}
type marqueeElement = {
  /** Sets how the text is scrolled within the marquee. Possible values are scroll, slide and alternate. If no value is specified, the default value is scroll. */
  "behavior": (val: DomTypeMap["Any"]) => HTMLElement<"marquee">;
  /** Sets the background color through color name or hexadecimal value. */
  "bgcolor": (val: DomTypeMap["Any"]) => HTMLElement<"marquee">;
  /** Sets the direction of the scrolling within the marquee. Possible values are left, right, up and down. If no value is specified, the default value is left. */
  "direction": (val: DomTypeMap["Any"]) => HTMLElement<"marquee">;
  /** Sets the height in pixels or percentage value. */
  "height": (val: DomTypeMap["Any"]) => HTMLElement<"marquee">;
  /** Sets the horizontal margin */
  "hspace": (val: DomTypeMap["Any"]) => HTMLElement<"marquee">;
  /** Sets the number of times the marquee will scroll. If no value is specified, the default value is −1, which means the marquee will scroll continuously. */
  "loop": (val: DomTypeMap["Any"]) => HTMLElement<"marquee">;
  /** Sets the amount of scrolling at each interval in pixels. The default value is 6. */
  "scrollamount": (val: DomTypeMap["Any"]) => HTMLElement<"marquee">;
  /** Sets the interval between each scroll movement in milliseconds. The default value is 85. Note that any value smaller than 60 is ignored and the value 60 is used instead, unlesstruespeedis specified. */
  "scrolldelay": (val: DomTypeMap["Any"]) => HTMLElement<"marquee">;
  /** By default,scrolldelayvalues lower than 60 are ignored. Iftruespeedis present, those values are not ignored. */
  "truespeed": (val: DomTypeMap["Any"]) => HTMLElement<"marquee">;
  /** Sets the vertical margin in pixels or percentage value. */
  "vspace": (val: DomTypeMap["Any"]) => HTMLElement<"marquee">;
  /** Sets the width in pixels or percentage value. */
  "width": (val: DomTypeMap["Any"]) => HTMLElement<"marquee">;
  allowedChildren: any;
}
type menuElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"menu">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"menu">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"menu">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"menu">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"menu">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"menu">;
  "draggable": (val: "true" | "false") => HTMLElement<"menu">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"menu">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"menu">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"menu">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"menu">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"menu">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"menu">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"menu">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"menu">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"menu">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"menu">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"menu">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"menu">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"menu">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"menu">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"menu">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"menu">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"menu">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"menu">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"menu">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"menu">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"menu">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"menu">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"menu">;
  allowedChildren: any;
}
type menuitemElement = {
  /** Boolean attribute which indicates whether the command is selected. May only be used when the type attribute is checkbox or radio. */
  "checked": (val: DomTypeMap["Any"]) => HTMLElement<"menuitem">;
  /** Specifies the ID of a separate element, indicating a command to be invoked indirectly. May not be used within a menu item that also includes the attributes checked, disabled, icon, label, radiogroup or type. */
  "command": (val: DomTypeMap["Any"]) => HTMLElement<"menuitem">;
  /** This Boolean attribute indicates use of the same command as the menu's subject element (such as a button or input). */
  "default": (val: DomTypeMap["Any"]) => HTMLElement<"menuitem">;
  /** Boolean attribute which indicates that the command is not available in the current state. Note that disabled is distinct from hidden; the disabled attribute is appropriate in any context where a change in circumstances might render the command relevant. */
  "disabled": (val: DomTypeMap["Any"]) => HTMLElement<"menuitem">;
  /** Image URL, used to provide a picture to represent the command. */
  "icon": (val: DomTypeMap["Any"]) => HTMLElement<"menuitem">;
  /** The name of the command as shown to the user. Required when a command attribute is not present. */
  "label": (val: DomTypeMap["Any"]) => HTMLElement<"menuitem">;
  /** This attribute specifies the name of a group of commands to be toggled as radio buttons when selected. May only be used where the type attribute is radio. */
  "radiogroup": (val: DomTypeMap["Any"]) => HTMLElement<"menuitem">;
  /** This attribute indicates the kind of command, and can be one of three values. command: A regular command with an associated action. This is the missing value default. checkbox: Represents a command that can be toggled between two different states. radio: Represent one selection from a group of commands that can be toggled as radio buttons. */
  "type": (val: DomTypeMap["Any"]) => HTMLElement<"menuitem">;
  allowedChildren: any;
}
type metaElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"meta">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"meta">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"meta">;
  "charset": (val: "utf-8") => HTMLElement<"meta">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"meta">;
  "content": (val: DomTypeMap["Any"]) => HTMLElement<"meta">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"meta">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"meta">;
  "draggable": (val: "true" | "false") => HTMLElement<"meta">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"meta">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"meta">;
  "http-equiv": (val: "content-type" | "default-style" | "refresh" | "x-ua-compatible" | "content-security-policy") => HTMLElement<"meta">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"meta">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"meta">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"meta">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"meta">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"meta">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"meta">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"meta">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"meta">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"meta">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"meta">;
  "media": (val: DomTypeMap["<media-query-list>"]) => HTMLElement<"meta">;
  "name": (val: DomTypeMap["Any"]) => HTMLElement<"meta">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"meta">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"meta">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"meta">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"meta">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"meta">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"meta">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"meta">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"meta">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"meta">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"meta">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"meta">;
  allowedChildren: any;
}
type meterElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"meter">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"meter">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"meter">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"meter">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"meter">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"meter">;
  "draggable": (val: "true" | "false") => HTMLElement<"meter">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"meter">;
  /** The <form> element to associate the <meter> element with (its form owner). The value of this attribute must be the id of a <form> in the same document. If this attribute is not set, the <meter> is associated with its ancestor <form> element, if any. This attribute is only used if the <meter> element is being used as a form-associated element, such as one displaying a range corresponding to an <input type="number">. */
  "form": (val: DomTypeMap["Any"]) => HTMLElement<"meter">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"meter">;
  "high": (val: DomTypeMap["Number"]) => HTMLElement<"meter">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"meter">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"meter">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"meter">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"meter">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"meter">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"meter">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"meter">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"meter">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"meter">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"meter">;
  "low": (val: DomTypeMap["Number"]) => HTMLElement<"meter">;
  "max": (val: DomTypeMap["Number"]) => HTMLElement<"meter">;
  "min": (val: DomTypeMap["Number"]) => HTMLElement<"meter">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"meter">;
  "optimum": (val: DomTypeMap["Number"]) => HTMLElement<"meter">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"meter">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"meter">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"meter">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"meter">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"meter">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"meter">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"meter">;
  "value": (val: DomTypeMap["Number"]) => HTMLElement<"meter">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"meter">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"meter">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"meter">;
  allowedChildren: any;
}
type multicolElement = {
  allowedChildren: any;
}
type navElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"nav">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"nav">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"nav">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"nav">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"nav">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"nav">;
  "draggable": (val: "true" | "false") => HTMLElement<"nav">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"nav">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"nav">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"nav">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"nav">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"nav">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"nav">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"nav">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"nav">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"nav">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"nav">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"nav">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"nav">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"nav">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"nav">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"nav">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"nav">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"nav">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"nav">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"nav">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"nav">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"nav">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"nav">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"nav">;
  allowedChildren: any;
}
type nextidElement = {
  allowedChildren: any;
}
type nobrElement = {
  allowedChildren: any;
}
type noembedElement = {
  allowedChildren: any;
}
type noframesElement = {
  allowedChildren: any;
}
type noscriptElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"noscript">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"noscript">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"noscript">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"noscript">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"noscript">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"noscript">;
  "draggable": (val: "true" | "false") => HTMLElement<"noscript">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"noscript">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"noscript">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"noscript">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"noscript">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"noscript">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"noscript">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"noscript">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"noscript">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"noscript">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"noscript">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"noscript">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"noscript">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"noscript">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"noscript">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"noscript">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"noscript">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"noscript">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"noscript">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"noscript">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"noscript">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"noscript">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"noscript">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"noscript">;
  allowedChildren: any;
}
type objectElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"object">;
  /** @deprecated A space-separated list of URIs for archives of resources for the object. */
  "archive": (val: DomTypeMap["Any"]) => HTMLElement<"object">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"object">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"object">;
  /** @deprecated The width of a border around the control, in pixels. */
  "border": (val: DomTypeMap["Any"]) => HTMLElement<"object">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"object">;
  /** @deprecated The URI of the object's implementation. It can be used together with, or in place of, the data attribute. */
  "classid": (val: DomTypeMap["Any"]) => HTMLElement<"object">;
  /** @deprecated The base path used to resolve relative URIs specified by classid, data, or archive. If not specified, the default is the base URI of the current document. */
  "codebase": (val: DomTypeMap["Any"]) => HTMLElement<"object">;
  /** @deprecated The content type of the data specified by classid. */
  "codetype": (val: DomTypeMap["Any"]) => HTMLElement<"object">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"object">;
  "data": (val: DomTypeMap["URL"]) => HTMLElement<"object">;
  /** @deprecated The presence of this Boolean attribute makes this element a declaration only. The object must be instantiated by a subsequent <object> element. In HTML5, repeat the <object> element completely each time that the resource is reused. */
  "declare": (val: DomTypeMap["Any"]) => HTMLElement<"object">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"object">;
  "draggable": (val: "true" | "false") => HTMLElement<"object">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"object">;
  /** The form element, if any, that the object element is associated with (its form owner). The value of the attribute must be an ID of a <form> element in the same document. */
  "form": (val: DomTypeMap["DOMID"]) => HTMLElement<"object">;
  /** The height of the displayed resource, in CSS pixels. -- (Absolute values only. NO percentages) */
  "height": (val: DomTypeMap["Uint"]) => HTMLElement<"object">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"object">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"object">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"object">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"object">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"object">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"object">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"object">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"object">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"object">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"object">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"object">;
  "name": (val: DomTypeMap["BrowsingContextName"]) => HTMLElement<"object">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"object">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"object">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"object">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"object">;
  /** @deprecated A message that the browser can show while loading the object's implementation and data. */
  "standby": (val: DomTypeMap["Any"]) => HTMLElement<"object">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"object">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"object">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"object">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"object">;
  "type": (val: DomTypeMap["MIMEType"]) => HTMLElement<"object">;
  /** A hash-name reference to a <map> element; that is a '#' followed by the value of a name of a map element. */
  "usemap": (val: DomTypeMap["Any"]) => HTMLElement<"object">;
  /** The width of the display resource, in CSS pixels. -- (Absolute values only. NO percentages) */
  "width": (val: DomTypeMap["Uint"]) => HTMLElement<"object">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"object">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"object">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"object">;
  allowedChildren: any;
}
type olElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"ol">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"ol">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"ol">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"ol">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"ol">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"ol">;
  "draggable": (val: "true" | "false") => HTMLElement<"ol">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"ol">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"ol">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"ol">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"ol">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"ol">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"ol">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"ol">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"ol">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"ol">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"ol">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"ol">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"ol">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"ol">;
  "reversed": (val: DomTypeMap["Boolean"]) => HTMLElement<"ol">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"ol">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"ol">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"ol">;
  "start": (val: DomTypeMap["Int"]) => HTMLElement<"ol">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"ol">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"ol">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"ol">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"ol">;
  "type": (val: "1" | "a" | "A" | "i" | "I") => HTMLElement<"ol">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"ol">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"ol">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"ol">;
  allowedChildren: any;
}
type optgroupElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"optgroup">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"optgroup">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"optgroup">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"optgroup">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"optgroup">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"optgroup">;
  /** If this Boolean attribute is set, none of the items in this option group is selectable. Often browsers grey out such control and it won't receive any browsing events, like mouse clicks or focus-related ones. */
  "disabled": (val: DomTypeMap["Boolean"]) => HTMLElement<"optgroup">;
  "draggable": (val: "true" | "false") => HTMLElement<"optgroup">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"optgroup">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"optgroup">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"optgroup">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"optgroup">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"optgroup">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"optgroup">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"optgroup">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"optgroup">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"optgroup">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"optgroup">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"optgroup">;
  "label": (val: DomTypeMap["Any"]) => HTMLElement<"optgroup">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"optgroup">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"optgroup">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"optgroup">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"optgroup">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"optgroup">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"optgroup">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"optgroup">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"optgroup">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"optgroup">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"optgroup">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"optgroup">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"optgroup">;
  allowedChildren: any;
}
type optionElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"option">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"option">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"option">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"option">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"option">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"option">;
  /** If this Boolean attribute is set, this option is not checkable. Often browsers grey out such control and it won't receive any browsing event, like mouse clicks or focus-related ones. If this attribute is not set, the element can still be disabled if one of its ancestors is a disabled <optgroup> element. */
  "disabled": (val: DomTypeMap["Boolean"]) => HTMLElement<"option">;
  "draggable": (val: "true" | "false") => HTMLElement<"option">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"option">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"option">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"option">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"option">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"option">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"option">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"option">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"option">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"option">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"option">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"option">;
  "label": (val: DomTypeMap["Any"]) => HTMLElement<"option">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"option">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"option">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"option">;
  "selected": (val: DomTypeMap["Boolean"]) => HTMLElement<"option">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"option">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"option">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"option">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"option">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"option">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"option">;
  "value": (val: DomTypeMap["Any"]) => HTMLElement<"option">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"option">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"option">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"option">;
  allowedChildren: any;
}
type outputElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"output">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"output">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"output">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"output">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"output">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"output">;
  "draggable": (val: "true" | "false") => HTMLElement<"output">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"output">;
  "for": (val: DomTypeMap["DOMID"]) => HTMLElement<"output">;
  /** The <form> element to associate the output with (its form owner). The value of this attribute must be the id of a <form> in the same document. (If this attribute is not set, the <output> is associated with its ancestor <form> element, if any.) This attribute lets you associate <output> elements to <form>s anywhere in the document, not just inside a <form>. It can also override an ancestor <form> element. */
  "form": (val: DomTypeMap["DOMID"]) => HTMLElement<"output">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"output">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"output">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"output">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"output">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"output">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"output">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"output">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"output">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"output">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"output">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"output">;
  /** The element's name. Used in the form.elements API. */
  "name": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"output">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"output">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"output">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"output">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"output">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"output">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"output">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"output">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"output">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"output">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"output">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"output">;
  allowedChildren: any;
}
type pElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"p">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"p">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"p">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"p">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"p">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"p">;
  "draggable": (val: "true" | "false") => HTMLElement<"p">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"p">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"p">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"p">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"p">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"p">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"p">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"p">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"p">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"p">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"p">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"p">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"p">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"p">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"p">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"p">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"p">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"p">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"p">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"p">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"p">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"p">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"p">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"p">;
  allowedChildren: any;
}
type paramElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"param">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"param">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"param">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"param">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"param">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"param">;
  "draggable": (val: "true" | "false") => HTMLElement<"param">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"param">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"param">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"param">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"param">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"param">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"param">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"param">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"param">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"param">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"param">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"param">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"param">;
  "name": (val: DomTypeMap["Any"]) => HTMLElement<"param">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"param">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"param">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"param">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"param">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"param">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"param">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"param">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"param">;
  /** @deprecated Only used if the valuetype is set to ref. Specifies the MIME type of values found at the URI specified by value. */
  "type": (val: DomTypeMap["Any"]) => HTMLElement<"param">;
  "value": (val: DomTypeMap["Any"]) => HTMLElement<"param">;
  /** @deprecated Specifies the type of the value attribute. Possible values are: data: Default value. The value is passed to the object's implementation as a string. ref: The value is a URI to a resource where run-time values are stored. object: An ID of another <object> in the same document. */
  "valuetype": (val: DomTypeMap["Any"]) => HTMLElement<"param">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"param">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"param">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"param">;
  allowedChildren: any;
}
type pictureElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"picture">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"picture">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"picture">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"picture">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"picture">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"picture">;
  "draggable": (val: "true" | "false") => HTMLElement<"picture">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"picture">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"picture">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"picture">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"picture">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"picture">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"picture">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"picture">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"picture">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"picture">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"picture">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"picture">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"picture">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"picture">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"picture">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"picture">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"picture">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"picture">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"picture">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"picture">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"picture">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"picture">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"picture">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"picture">;
  allowedChildren: any;
}
type plaintextElement = {
  allowedChildren: any;
}
type portalElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"portal">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"portal">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"portal">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"portal">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"portal">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"portal">;
  "draggable": (val: "true" | "false") => HTMLElement<"portal">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"portal">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"portal">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"portal">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"portal">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"portal">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"portal">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"portal">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"portal">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"portal">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"portal">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"portal">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"portal">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"portal">;
  "referrerpolicy": (val: "" | "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url") => HTMLElement<"portal">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"portal">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"portal">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"portal">;
  "src": (val: DomTypeMap["URL"]) => HTMLElement<"portal">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"portal">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"portal">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"portal">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"portal">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"portal">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"portal">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"portal">;
  allowedChildren: any;
}
type preElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"pre">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"pre">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"pre">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"pre">;
  /** @deprecated Contains the preferred count of characters that a line should have. It was a non-standard synonym of width. To achieve such an effect, use CSS width instead. */
  "cols": (val: DomTypeMap["Any"]) => HTMLElement<"pre">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"pre">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"pre">;
  "draggable": (val: "true" | "false") => HTMLElement<"pre">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"pre">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"pre">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"pre">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"pre">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"pre">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"pre">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"pre">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"pre">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"pre">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"pre">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"pre">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"pre">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"pre">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"pre">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"pre">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"pre">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"pre">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"pre">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"pre">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"pre">;
  /** @deprecated Contains the preferred count of characters that a line should have. Though technically still implemented, this attribute has no visual effect; to achieve such an effect, use CSS width instead. */
  "width": (val: DomTypeMap["Any"]) => HTMLElement<"pre">;
  /** Is a hint indicating how the overflow must happen. In modern browser this hint is ignored and no visual effect results in its present; to achieve such an effect, use CSS white-space instead. */
  "wrap": (val: DomTypeMap["Any"]) => HTMLElement<"pre">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"pre">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"pre">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"pre">;
  allowedChildren: any;
}
type progressElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"progress">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"progress">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"progress">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"progress">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"progress">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"progress">;
  "draggable": (val: "true" | "false") => HTMLElement<"progress">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"progress">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"progress">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"progress">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"progress">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"progress">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"progress">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"progress">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"progress">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"progress">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"progress">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"progress">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"progress">;
  "max": (val: DomTypeMap["Number"]) => HTMLElement<"progress">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"progress">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"progress">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"progress">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"progress">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"progress">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"progress">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"progress">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"progress">;
  "value": (val: DomTypeMap["Number"]) => HTMLElement<"progress">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"progress">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"progress">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"progress">;
  allowedChildren: any;
}
type qElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"q">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"q">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"q">;
  "cite": (val: DomTypeMap["URL"]) => HTMLElement<"q">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"q">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"q">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"q">;
  "draggable": (val: "true" | "false") => HTMLElement<"q">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"q">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"q">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"q">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"q">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"q">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"q">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"q">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"q">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"q">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"q">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"q">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"q">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"q">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"q">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"q">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"q">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"q">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"q">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"q">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"q">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"q">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"q">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"q">;
  allowedChildren: any;
}
type rbElement = {
  allowedChildren: any;
}
type rpElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"rp">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"rp">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"rp">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"rp">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"rp">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"rp">;
  "draggable": (val: "true" | "false") => HTMLElement<"rp">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"rp">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"rp">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"rp">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"rp">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"rp">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"rp">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"rp">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"rp">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"rp">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"rp">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"rp">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"rp">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"rp">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"rp">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"rp">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"rp">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"rp">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"rp">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"rp">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"rp">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"rp">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"rp">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"rp">;
  allowedChildren: any;
}
type rtElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"rt">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"rt">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"rt">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"rt">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"rt">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"rt">;
  "draggable": (val: "true" | "false") => HTMLElement<"rt">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"rt">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"rt">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"rt">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"rt">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"rt">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"rt">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"rt">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"rt">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"rt">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"rt">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"rt">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"rt">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"rt">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"rt">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"rt">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"rt">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"rt">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"rt">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"rt">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"rt">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"rt">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"rt">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"rt">;
  allowedChildren: any;
}
type rtcElement = {
  allowedChildren: any;
}
type rubyElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"ruby">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"ruby">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"ruby">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"ruby">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"ruby">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"ruby">;
  "draggable": (val: "true" | "false") => HTMLElement<"ruby">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"ruby">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"ruby">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"ruby">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"ruby">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"ruby">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"ruby">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"ruby">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"ruby">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"ruby">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"ruby">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"ruby">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"ruby">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"ruby">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"ruby">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"ruby">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"ruby">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"ruby">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"ruby">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"ruby">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"ruby">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"ruby">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"ruby">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"ruby">;
  allowedChildren: any;
}
type sElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"s">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"s">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"s">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"s">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"s">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"s">;
  "draggable": (val: "true" | "false") => HTMLElement<"s">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"s">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"s">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"s">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"s">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"s">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"s">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"s">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"s">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"s">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"s">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"s">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"s">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"s">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"s">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"s">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"s">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"s">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"s">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"s">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"s">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"s">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"s">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"s">;
  allowedChildren: any;
}
type sampElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"samp">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"samp">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"samp">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"samp">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"samp">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"samp">;
  "draggable": (val: "true" | "false") => HTMLElement<"samp">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"samp">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"samp">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"samp">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"samp">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"samp">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"samp">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"samp">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"samp">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"samp">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"samp">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"samp">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"samp">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"samp">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"samp">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"samp">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"samp">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"samp">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"samp">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"samp">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"samp">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"samp">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"samp">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"samp">;
  allowedChildren: any;
}
type scriptElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"script">;
  "async": (val: DomTypeMap["Boolean"]) => HTMLElement<"script">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"script">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"script">;
  "blocking": (val: "render") => HTMLElement<"script">;
  /** @deprecated If present, its value must be an ASCII case-insensitive match for "utf-8". It's unnecessary to specify the charset attribute, because documents must use UTF-8, and the script element inherits its character encoding from the document. */
  "charset": (val: DomTypeMap["Any"]) => HTMLElement<"script">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"script">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"script">;
  /** Normal script elements pass minimal information to the window.onerror for scripts which do not pass the standard CORS checks. To allow error logging for sites which use a separate domain for static media, use this attribute. See CORS settings attributes for a more descriptive explanation of its valid arguments. */
  "crossorigin": (val: "" | "anonymous" | "use-credentials") => HTMLElement<"script">;
  "defer": (val: DomTypeMap["Boolean"]) => HTMLElement<"script">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"script">;
  "draggable": (val: "true" | "false") => HTMLElement<"script">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"script">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"script">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"script">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"script">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"script">;
  "integrity": (val: DomTypeMap["Any"]) => HTMLElement<"script">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"script">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"script">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"script">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"script">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"script">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"script">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"script">;
  /** @deprecated Like the type attribute, this attribute identifies the scripting language in use. Unlike the type attribute, however, this attribute's possible values were never standardized. The type attribute should be used instead. */
  "language": (val: DomTypeMap["Any"]) => HTMLElement<"script">;
  "nomodule": (val: DomTypeMap["Boolean"]) => HTMLElement<"script">;
  /** A cryptographic nonce (number used once) to allow scripts in a script-src Content-Security-Policy. The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource's policy is otherwise trivial. */
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"script">;
  /** Indicates which referrer to send when fetching the script, or resources fetched by the script: no-referrer: The Referer header will not be sent. no-referrer-when-downgrade: The Referer header will not be sent to origins without TLS (HTTPS). origin: The sent referrer will be limited to the origin of the referring page: its scheme, host, and port. origin-when-cross-origin: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path. same-origin: A referrer will be sent for same origin, but cross-origin requests will contain no referrer information. strict-origin: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP). strict-origin-when-cross-origin (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP). unsafe-url: The referrer will include the origin and the path (but not the fragment, password, or username). This value is unsafe, because it leaks origins and paths from TLS-protected resources to insecure origins. Note: An empty string value ("") is both the default value, and a fallback value if referrerpolicy is not supported. If referrerpolicy is not explicitly specified on the <script> element, it will adopt a higher-level referrer policy, i.e. one set on the whole document or domain. If a higher-level policy is not available, the empty string is treated as being equivalent to strict-origin-when-cross-origin. */
  "referrerpolicy": (val: "" | "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url") => HTMLElement<"script">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"script">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"script">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"script">;
  "src": (val: DomTypeMap["URL"]) => HTMLElement<"script">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"script">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"script">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"script">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"script">;
  "type": (val: DomTypeMap[`["MIMEType",{"enum":["module"],"caseInsensitive":true}]`]) => HTMLElement<"script">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"script">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"script">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"script">;
  allowedChildren: any;
}
type sectionElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"section">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"section">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"section">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"section">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"section">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"section">;
  "draggable": (val: "true" | "false") => HTMLElement<"section">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"section">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"section">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"section">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"section">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"section">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"section">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"section">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"section">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"section">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"section">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"section">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"section">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"section">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"section">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"section">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"section">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"section">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"section">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"section">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"section">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"section">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"section">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"section">;
  allowedChildren: any;
}
type selectElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"select">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"select">;
  /** A DOMString providing a hint for a user agent's autocomplete feature. See The HTML autocomplete attribute for a complete list of values and details on how to use autocomplete. */
  "autocomplete": (val: DomTypeMap["AutoComplete"]) => HTMLElement<"select">;
  /** This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form element in a document can have the autofocus attribute. */
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"select">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"select">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"select">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"select">;
  /** This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example <fieldset>; if there is no containing element with the disabled attribute set, then the control is enabled. */
  "disabled": (val: DomTypeMap["Boolean"]) => HTMLElement<"select">;
  "draggable": (val: "true" | "false") => HTMLElement<"select">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"select">;
  /** The <form> element to associate the <select> with (its form owner). The value of this attribute must be the id of a <form> in the same document. (If this attribute is not set, the <select> is associated with its ancestor <form> element, if any.) This attribute lets you associate <select> elements to <form>s anywhere in the document, not just inside a <form>. It can also override an ancestor <form> element. */
  "form": (val: DomTypeMap["DOMID"]) => HTMLElement<"select">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"select">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"select">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"select">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"select">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"select">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"select">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"select">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"select">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"select">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"select">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"select">;
  "multiple": (val: DomTypeMap["Boolean"]) => HTMLElement<"select">;
  /** This attribute is used to specify the name of the control. */
  "name": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"select">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"select">;
  /** A Boolean attribute indicating that an option with a non-empty string value must be selected. */
  "required": (val: DomTypeMap["Boolean"]) => HTMLElement<"select">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"select">;
  "size": (val: DomTypeMap[`{"type":"integer","gt":0}`]) => HTMLElement<"select">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"select">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"select">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"select">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"select">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"select">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"select">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"select">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"select">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"select">;
  allowedChildren: any;
}
type shadowElement = {
  allowedChildren: any;
}
type slotElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"slot">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"slot">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"slot">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"slot">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"slot">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"slot">;
  "draggable": (val: "true" | "false") => HTMLElement<"slot">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"slot">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"slot">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"slot">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"slot">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"slot">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"slot">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"slot">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"slot">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"slot">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"slot">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"slot">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"slot">;
  "name": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"slot">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"slot">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"slot">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"slot">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"slot">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"slot">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"slot">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"slot">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"slot">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"slot">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"slot">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"slot">;
  allowedChildren: any;
}
type smallElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"small">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"small">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"small">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"small">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"small">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"small">;
  "draggable": (val: "true" | "false") => HTMLElement<"small">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"small">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"small">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"small">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"small">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"small">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"small">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"small">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"small">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"small">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"small">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"small">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"small">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"small">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"small">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"small">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"small">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"small">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"small">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"small">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"small">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"small">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"small">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"small">;
  allowedChildren: any;
}
type sourceElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"source">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"source">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"source">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"source">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"source">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"source">;
  "draggable": (val: "true" | "false") => HTMLElement<"source">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"source">;
  "height": (val: DomTypeMap["Uint"]) => HTMLElement<"source">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"source">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"source">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"source">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"source">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"source">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"source">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"source">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"source">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"source">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"source">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"source">;
  "media": (val: DomTypeMap["<media-query-list>"]) => HTMLElement<"source">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"source">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"source">;
  "sizes": (val: DomTypeMap["SourceSizeList"]) => HTMLElement<"source">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"source">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"source">;
  "src": (val: DomTypeMap["URL"]) => HTMLElement<"source">;
  "srcset": (val: DomTypeMap["Srcset"]) => HTMLElement<"source">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"source">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"source">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"source">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"source">;
  "type": (val: DomTypeMap["MIMEType"]) => HTMLElement<"source">;
  "width": (val: DomTypeMap["Uint"]) => HTMLElement<"source">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"source">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"source">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"source">;
  allowedChildren: any;
}
type spacerElement = {
  /** This attribute determines alignment of spacer. Possible values are left, right and center. */
  "align": (val: DomTypeMap["Any"]) => HTMLElement<"spacer">;
  /** This attribute can be used for defining height of spacer in pixels when type is block. */
  "height": (val: DomTypeMap["Any"]) => HTMLElement<"spacer">;
  /** This attribute can be used for defining size of spacer in pixels when type is horizontal or vertical. */
  "size": (val: DomTypeMap["Any"]) => HTMLElement<"spacer">;
  /** This attribute determines type of spacer. Possible values are horizontal, vertical and block. */
  "type": (val: DomTypeMap["Any"]) => HTMLElement<"spacer">;
  /** This attribute can be used for defining width of spacer in pixels when type is block. */
  "width": (val: DomTypeMap["Any"]) => HTMLElement<"spacer">;
  allowedChildren: any;
}
type spanElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"span">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"span">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"span">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"span">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"span">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"span">;
  "draggable": (val: "true" | "false") => HTMLElement<"span">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"span">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"span">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"span">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"span">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"span">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"span">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"span">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"span">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"span">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"span">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"span">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"span">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"span">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"span">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"span">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"span">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"span">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"span">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"span">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"span">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"span">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"span">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"span">;
  allowedChildren: any;
}
type strikeElement = {
  allowedChildren: any;
}
type strongElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"strong">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"strong">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"strong">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"strong">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"strong">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"strong">;
  "draggable": (val: "true" | "false") => HTMLElement<"strong">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"strong">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"strong">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"strong">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"strong">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"strong">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"strong">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"strong">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"strong">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"strong">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"strong">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"strong">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"strong">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"strong">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"strong">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"strong">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"strong">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"strong">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"strong">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"strong">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"strong">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"strong">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"strong">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"strong">;
  allowedChildren: any;
}
type styleElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"style">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"style">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"style">;
  "blocking": (val: "render") => HTMLElement<"style">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"style">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"style">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"style">;
  "draggable": (val: "true" | "false") => HTMLElement<"style">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"style">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"style">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"style">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"style">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"style">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"style">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"style">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"style">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"style">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"style">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"style">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"style">;
  "media": (val: DomTypeMap["<media-query-list>"]) => HTMLElement<"style">;
  /** A cryptographic nonce (number used once) used to allow inline styles in a style-src Content-Security-Policy. The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource's policy is otherwise trivial. */
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"style">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"style">;
  /** @deprecated This attribute specifies that the styles only apply to the elements of its parent(s) and children. Note: This attribute may be re-introduced in the future per https://github.com/w3c/csswg-drafts/issues/3547. If you want to use the attribute now, you can use a polyfill. */
  "scoped": (val: DomTypeMap["Any"]) => HTMLElement<"style">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"style">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"style">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"style">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"style">;
  /** This attribute specifies alternative style sheet sets. */
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"style">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"style">;
  /** @deprecated This attribute should not be provided: if it is, the only permitted values are the empty string or a case-insensitive match for text/css. */
  "type": (val: DomTypeMap["Any"]) => HTMLElement<"style">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"style">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"style">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"style">;
  allowedChildren: any;
}
type subElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"sub">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"sub">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"sub">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"sub">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"sub">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"sub">;
  "draggable": (val: "true" | "false") => HTMLElement<"sub">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"sub">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"sub">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"sub">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"sub">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"sub">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"sub">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"sub">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"sub">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"sub">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"sub">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"sub">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"sub">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"sub">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"sub">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"sub">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"sub">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"sub">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"sub">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"sub">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"sub">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"sub">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"sub">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"sub">;
  allowedChildren: any;
}
type summaryElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"summary">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"summary">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"summary">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"summary">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"summary">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"summary">;
  "draggable": (val: "true" | "false") => HTMLElement<"summary">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"summary">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"summary">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"summary">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"summary">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"summary">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"summary">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"summary">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"summary">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"summary">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"summary">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"summary">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"summary">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"summary">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"summary">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"summary">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"summary">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"summary">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"summary">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"summary">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"summary">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"summary">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"summary">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"summary">;
  allowedChildren: any;
}
type supElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"sup">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"sup">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"sup">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"sup">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"sup">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"sup">;
  "draggable": (val: "true" | "false") => HTMLElement<"sup">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"sup">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"sup">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"sup">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"sup">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"sup">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"sup">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"sup">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"sup">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"sup">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"sup">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"sup">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"sup">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"sup">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"sup">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"sup">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"sup">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"sup">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"sup">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"sup">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"sup">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"sup">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"sup">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"sup">;
  allowedChildren: any;
}
type tableElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"table">;
  /** @deprecated This enumerated attribute indicates how the table must be aligned inside the containing document. It may have the following values: left: the table is displayed on the left side of the document; center: the table is displayed in the center of the document; right: the table is displayed on the right side of the document. Set margin-left and margin-right to auto or margin to 0 auto to achieve an effect that is similar to the align attribute. */
  "align": (val: DomTypeMap["Any"]) => HTMLElement<"table">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"table">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"table">;
  /** @deprecated The background color of the table. It is a 6-digit hexadecimal RGB code, prefixed by a '#'. One of the predefined color keywords can also be used. To achieve a similar effect, use the CSS background-color property. */
  "bgcolor": (val: DomTypeMap["Any"]) => HTMLElement<"table">;
  /** @deprecated This integer attribute defines, in pixels, the size of the frame surrounding the table. If set to 0, the frame attribute is set to void. To achieve a similar effect, use the CSS border shorthand property. */
  "border": (val: DomTypeMap["Any"]) => HTMLElement<"table">;
  /** @deprecated This attribute defines the space between the content of a cell and its border, displayed or not. If the cellpadding's length is defined in pixels, this pixel-sized space will be applied to all four sides of the cell's content. If the length is defined using a percentage value, the content will be centered and the total vertical space (top and bottom) will represent this value. The same is true for the total horizontal space (left and right). To achieve a similar effect, apply the border-collapse property to the <table> element, with its value set to collapse, and the padding property to the <td> elements. */
  "cellpadding": (val: DomTypeMap["Any"]) => HTMLElement<"table">;
  /** @deprecated This attribute defines the size of the space between two cells in a percentage value or pixels. The attribute is applied both horizontally and vertically, to the space between the top of the table and the cells of the first row, the left of the table and the first column, the right of the table and the last column and the bottom of the table and the last row. To achieve a similar effect, apply the border-spacing property to the <table> element. border-spacing does not have any effect if border-collapse is set to collapse. */
  "cellspacing": (val: DomTypeMap["Any"]) => HTMLElement<"table">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"table">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"table">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"table">;
  "draggable": (val: "true" | "false") => HTMLElement<"table">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"table">;
  /** @deprecated This enumerated attribute defines which side of the frame surrounding the table must be displayed. To achieve a similar effect, use the border-style and border-width properties. */
  "frame": (val: DomTypeMap["Any"]) => HTMLElement<"table">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"table">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"table">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"table">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"table">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"table">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"table">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"table">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"table">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"table">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"table">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"table">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"table">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"table">;
  /** @deprecated This enumerated attribute defines where rules, i.e. lines, should appear in a table. It can have the following values: none, which indicates that no rules will be displayed; it is the default value; groups, which will cause the rules to be displayed between row groups (defined by the <thead>, <tbody> and <tfoot> elements) and between column groups (defined by the <col> and <colgroup> elements) only; rows, which will cause the rules to be displayed between rows; columns, which will cause the rules to be displayed between columns; all, which will cause the rules to be displayed between rows and columns. To achieve a similar effect, apply the border property to the appropriate <thead>, <tbody>, <tfoot>, <col>, or <colgroup> elements. */
  "rules": (val: DomTypeMap["Any"]) => HTMLElement<"table">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"table">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"table">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"table">;
  /** @deprecated This attribute defines an alternative text that summarizes the content of the table. Use the <caption> element instead. */
  "summary": (val: DomTypeMap["Any"]) => HTMLElement<"table">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"table">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"table">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"table">;
  /** @deprecated This attribute defines the width of the table. Use the CSS width property instead. */
  "width": (val: DomTypeMap["Any"]) => HTMLElement<"table">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"table">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"table">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"table">;
  allowedChildren: any;
}
type tbodyElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"tbody">;
  /** @deprecated This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are: left, aligning the content to the left of the cell center, centering the content in the cell right, aligning the content to the right of the cell justify, inserting spaces into the textual content so that the content is justified in the cell char, aligning the textual content on a special character with a minimal offset, defined by the char and charoff attributes. If this attribute is not set, the left value is assumed. As this attribute is deprecated, use the CSS text-align property instead. Note: The equivalent text-align property for the align="char" is not implemented in any browsers yet. See the text-align's browser compatibility section for the <string> value. */
  "align": (val: DomTypeMap["Any"]) => HTMLElement<"tbody">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"tbody">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"tbody">;
  /** @deprecated The background color of the table. It is a 6-digit hexadecimal RGB code, prefixed by a '#'. One of the predefined color keywords can also be used. As this attribute is deprecated, use the CSS background-color property instead. */
  "bgcolor": (val: DomTypeMap["Any"]) => HTMLElement<"tbody">;
  /** @deprecated This attribute is used to set the character to align the cells in a column on. Typical values for this include a period (.) when attempting to align numbers or monetary values. If align is not set to char, this attribute is ignored. */
  "char": (val: DomTypeMap["Any"]) => HTMLElement<"tbody">;
  /** @deprecated This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the char attribute. */
  "charoff": (val: DomTypeMap["Any"]) => HTMLElement<"tbody">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"tbody">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"tbody">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"tbody">;
  "draggable": (val: "true" | "false") => HTMLElement<"tbody">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"tbody">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"tbody">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"tbody">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"tbody">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"tbody">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"tbody">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"tbody">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"tbody">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"tbody">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"tbody">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"tbody">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"tbody">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"tbody">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"tbody">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"tbody">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"tbody">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"tbody">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"tbody">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"tbody">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"tbody">;
  /** @deprecated This attribute specifies the vertical alignment of the text within each row of cells of the table header. Possible values for this attribute are: baseline, which will put the text as close to the bottom of the cell as it is possible, but align it on the baseline of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as bottom. bottom, which will put the text as close to the bottom of the cell as it is possible; middle, which will center the text in the cell; and top, which will put the text as close to the top of the cell as it is possible. As this attribute is deprecated, use the CSS vertical-align property instead. */
  "valign": (val: DomTypeMap["Any"]) => HTMLElement<"tbody">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"tbody">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"tbody">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"tbody">;
  allowedChildren: any;
}
type tdElement = {
  /** @deprecated This attribute contains a short abbreviated description of the cell's content. Some user-agents, such as speech readers, may present this description before the content itself. Note: Do not use this attribute as it is obsolete in the latest standard. Alternatively, you can put the abbreviated description inside the cell and place the long content in the title attribute. */
  "abbr": (val: DomTypeMap["Any"]) => HTMLElement<"td">;
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"td">;
  /** @deprecated This enumerated attribute specifies how the cell content's horizontal alignment will be handled. Possible values are: left: The content is aligned to the left of the cell. center: The content is centered in the cell. right: The content is aligned to the right of the cell. justify (with text only): The content is stretched out inside the cell so that it covers its entire width. char (with text only): The content is aligned to a character inside the <th> element with minimal offset. This character is defined by the char and charoff attributes Unimplemented (see bug 2212). The default value when this attribute is not specified is left. Note: To achieve the same effect as the left, center, right or justify values, apply the CSS text-align property to the element. To achieve the same effect as the char value, give the text-align property the same value you would use for the char. Unimplemented in CSS3. */
  "align": (val: DomTypeMap["Any"]) => HTMLElement<"td">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"td">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"td">;
  /** @deprecated This attribute contains a list of space-separated strings. Each string is the id of a group of cells that this header applies to. */
  "axis": (val: DomTypeMap["Any"]) => HTMLElement<"td">;
  /** @deprecated This attribute defines the background color of each cell in a column. It is a 6-digit hexadecimal RGB code, prefixed by a '#'. One of the predefined color keywords can also be used. To achieve a similar effect, use the CSS background-color property. */
  "bgcolor": (val: DomTypeMap["Any"]) => HTMLElement<"td">;
  /** @deprecated The content in the cell element is aligned to a character. Typical values include a period (.) to align numbers or monetary values. If align is not set to char, this attribute is ignored. */
  "char": (val: DomTypeMap["Any"]) => HTMLElement<"td">;
  /** @deprecated This attribute is used to shift column data to the right of the character specified by the char attribute. Its value specifies the length of this shift. */
  "charoff": (val: DomTypeMap["Any"]) => HTMLElement<"td">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"td">;
  /** This attribute contains a non-negative integer value that indicates for how many columns the cell extends. Its default value is 1. Values higher than 1000 will be considered as incorrect and will be set to the default value (1). */
  "colspan": (val: DomTypeMap[`{"type":"integer","gt":0,"lte":1000}`]) => HTMLElement<"td">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"td">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"td">;
  "draggable": (val: "true" | "false") => HTMLElement<"td">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"td">;
  /** This attribute contains a list of space-separated strings, each corresponding to the id attribute of the <th> elements that apply to this element. */
  "headers": (val: DomTypeMap[`{"token":"DOMID","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"td">;
  /** @deprecated This attribute is used to define a recommended cell height. Use the CSS height property instead. */
  "height": (val: DomTypeMap["Any"]) => HTMLElement<"td">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"td">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"td">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"td">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"td">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"td">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"td">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"td">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"td">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"td">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"td">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"td">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"td">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"td">;
  /** This attribute contains a non-negative integer value that indicates for how many rows the cell extends. Its default value is 1; if its value is set to 0, it extends until the end of the table section (<thead>, <tbody>, <tfoot>, even if implicitly defined), that the cell belongs to. Values higher than 65534 are clipped down to 65534. */
  "rowspan": (val: DomTypeMap[`{"type":"integer","gt":0,"lte":65534}`]) => HTMLElement<"td">;
  /** @deprecated This enumerated attribute defines the cells that the header (defined in the <th>) element relates to. Only use this attribute with the <th> element to define the row or column for which it is a header. */
  "scope": (val: DomTypeMap["Any"]) => HTMLElement<"td">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"td">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"td">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"td">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"td">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"td">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"td">;
  /** @deprecated This attribute specifies how a text is vertically aligned inside a cell. Possible values for this attribute are: baseline: Positions the text near the bottom of the cell and aligns it with the baseline of the characters instead of the bottom. If characters don't descend below the baseline, the baseline value achieves the same effect as bottom. bottom: Positions the text near the bottom of the cell. middle: Centers the text in the cell. and top: Positions the text near the top of the cell. To achieve a similar effect, use the CSS vertical-align property. */
  "valign": (val: DomTypeMap["Any"]) => HTMLElement<"td">;
  /** @deprecated This attribute is used to define a recommended cell width. Use the CSS width property instead. */
  "width": (val: DomTypeMap["Any"]) => HTMLElement<"td">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"td">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"td">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"td">;
  allowedChildren: any;
}
type templateElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"template">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"template">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"template">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"template">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"template">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"template">;
  "draggable": (val: "true" | "false") => HTMLElement<"template">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"template">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"template">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"template">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"template">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"template">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"template">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"template">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"template">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"template">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"template">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"template">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"template">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"template">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"template">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"template">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"template">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"template">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"template">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"template">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"template">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"template">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"template">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"template">;
  allowedChildren: any;
}
type textareaElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"textarea">;
  /** This is a non-standard attribute supported by WebKit on iOS (therefore nearly all browsers running on iOS, including Safari, Firefox, and Chrome), which controls whether and how the text value should be automatically capitalized as it is entered/edited by the user. The non-deprecated values are available in iOS 5 and later. Possible values are: none: Completely disables automatic capitalization. sentences: Automatically capitalize the first letter of sentences. words: Automatically capitalize the first letter of words. characters: Automatically capitalize all characters. on: Deprecated since iOS 5. off: Deprecated since iOS 5. */
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"textarea">;
  /** This attribute indicates whether the value of the control can be automatically completed by the browser. Possible values are: off: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry. on: The browser can automatically complete the value based on values that the user has entered during previous uses. If the autocomplete attribute is not specified on a <textarea> element, then the browser uses the autocomplete attribute value of the <textarea> element's form owner. The form owner is either the <form> element that this <textarea> element is a descendant of or the form element whose id is specified by the form attribute of the input element. For more information, see the autocomplete attribute in <form>. */
  "autocomplete": (val: DomTypeMap["AutoComplete"]) => HTMLElement<"textarea">;
  /** A string which indicates whether or not to activate automatic spelling correction and processing of text substitutions (if any are configured) while the user is editing this textarea. Permitted values are: on Enable automatic spelling correction and text substitutions. off Disable automatic spelling correction and text substitutions. */
  "autocorrect": (val: DomTypeMap["Any"]) => HTMLElement<"textarea">;
  /** This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form-associated element in a document can have this attribute specified. */
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"textarea">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"textarea">;
  "cols": (val: DomTypeMap[`{"type":"integer","gt":0}`]) => HTMLElement<"textarea">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"textarea">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"textarea">;
  "dirname": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"textarea">;
  /** This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example <fieldset>; if there is no containing element when the disabled attribute is set, the control is enabled. */
  "disabled": (val: DomTypeMap["Boolean"]) => HTMLElement<"textarea">;
  "draggable": (val: "true" | "false") => HTMLElement<"textarea">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"textarea">;
  /** The form element that the <textarea> element is associated with (its "form owner"). The value of the attribute must be the id of a form element in the same document. If this attribute is not specified, the <textarea> element must be a descendant of a form element. This attribute enables you to place <textarea> elements anywhere within a document, not just as descendants of form elements. */
  "form": (val: DomTypeMap["DOMID"]) => HTMLElement<"textarea">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"textarea">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"textarea">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"textarea">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"textarea">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"textarea">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"textarea">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"textarea">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"textarea">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"textarea">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"textarea">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"textarea">;
  /** The maximum number of characters (UTF-16 code units) that the user can enter. If this value isn't specified, the user can enter an unlimited number of characters. */
  "maxlength": (val: DomTypeMap["Uint"]) => HTMLElement<"textarea">;
  /** The minimum number of characters (UTF-16 code units) required that the user should enter. */
  "minlength": (val: DomTypeMap["Uint"]) => HTMLElement<"textarea">;
  /** The name of the control. */
  "name": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"textarea">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"textarea">;
  "placeholder": (val: DomTypeMap["Any"]) => HTMLElement<"textarea">;
  /** This Boolean attribute indicates that the user cannot modify the value of the control. Unlike the disabled attribute, the readonly attribute does not prevent the user from clicking or selecting in the control. The value of a read-only control is still submitted with the form. */
  "readonly": (val: DomTypeMap["Boolean"]) => HTMLElement<"textarea">;
  /** This attribute specifies that the user must fill in a value before submitting a form. */
  "required": (val: DomTypeMap["Boolean"]) => HTMLElement<"textarea">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"textarea">;
  "rows": (val: DomTypeMap[`{"type":"integer","gt":0}`]) => HTMLElement<"textarea">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"textarea">;
  /** Specifies whether the <textarea> is subject to spell checking by the underlying browser/OS. The value can be: true: Indicates that the element needs to have its spelling and grammar checked. default : Indicates that the element is to act according to a default behavior, possibly based on the parent element's own spellcheck value. false : Indicates that the element should not be spell checked. */
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"textarea">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"textarea">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"textarea">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"textarea">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"textarea">;
  "wrap": (val: "soft" | "hard") => HTMLElement<"textarea">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"textarea">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"textarea">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"textarea">;
  allowedChildren: any;
}
type tfootElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"tfoot">;
  /** @deprecated This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are: left, aligning the content to the left of the cell center, centering the content in the cell right, aligning the content to the right of the cell justify, inserting spaces into the textual content so that the content is justified in the cell char, aligning the textual content on a special character with a minimal offset, defined by the char and charoff attributes. If this attribute is not set, the left value is assumed. Note: To achieve the same effect as the left, center, right or justify values, use the CSS text-align property on it. To achieve the same effect as the char value, in CSS3, you can use the value of the char as the value of the text-align property Unimplemented. */
  "align": (val: DomTypeMap["Any"]) => HTMLElement<"tfoot">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"tfoot">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"tfoot">;
  /** @deprecated The background color of the table. It is a 6-digit hexadecimal RGB code, prefixed by a '#'. One of the predefined color keywords can also be used. To achieve a similar effect, use the CSS background-color property. */
  "bgcolor": (val: DomTypeMap["Any"]) => HTMLElement<"tfoot">;
  /** @deprecated This attribute specifies the alignment of the content in a column to a character. Typical values for this include a period (.) when attempting to align numbers or monetary values. If align is not set to char, this attribute is ignored. */
  "char": (val: DomTypeMap["Any"]) => HTMLElement<"tfoot">;
  /** @deprecated This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the char attribute. */
  "charoff": (val: DomTypeMap["Any"]) => HTMLElement<"tfoot">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"tfoot">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"tfoot">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"tfoot">;
  "draggable": (val: "true" | "false") => HTMLElement<"tfoot">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"tfoot">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"tfoot">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"tfoot">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"tfoot">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"tfoot">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"tfoot">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"tfoot">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"tfoot">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"tfoot">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"tfoot">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"tfoot">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"tfoot">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"tfoot">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"tfoot">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"tfoot">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"tfoot">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"tfoot">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"tfoot">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"tfoot">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"tfoot">;
  /** @deprecated This attribute specifies the vertical alignment of the text within each row of cells of the table footer. Possible values for this attribute are: baseline, which will put the text as close to the bottom of the cell as it is possible, but align it on the baseline of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as bottom. bottom, which will put the text as close to the bottom of the cell as it is possible; middle, which will center the text in the cell; and top, which will put the text as close to the top of the cell as it is possible. Note: Do not use this attribute as it is obsolete (and not supported) in the latest standard: instead set the CSS vertical-align property on it. */
  "valign": (val: DomTypeMap["Any"]) => HTMLElement<"tfoot">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"tfoot">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"tfoot">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"tfoot">;
  allowedChildren: any;
}
type thElement = {
  "abbr": (val: DomTypeMap["Any"]) => HTMLElement<"th">;
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"th">;
  /** @deprecated This enumerated attribute specifies how the cell content's horizontal alignment will be handled. Possible values are: left: The content is aligned to the left of the cell. center: The content is centered in the cell. right: The content is aligned to the right of the cell. justify (with text only): The content is stretched out inside the cell so that it covers its entire width. char (with text only): The content is aligned to a character inside the <th> element with minimal offset. This character is defined by the char and charoff attributes. The default value when this attribute is not specified is left. Note: Do not use this attribute as it is obsolete in the latest standard. To achieve the same effect as the left, center, right or justify values, apply the CSS text-align property to the element. To achieve the same effect as the char value, give the text-align property the same value you would use for the char. */
  "align": (val: DomTypeMap["Any"]) => HTMLElement<"th">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"th">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"th">;
  /** @deprecated This attribute contains a list of space-separated strings. Each string is the id of a group of cells that this header applies to. Note: Do not use this attribute as it is obsolete in the latest standard: use the scope attribute instead. */
  "axis": (val: DomTypeMap["Any"]) => HTMLElement<"th">;
  /** @deprecated This attribute defines the background color of each cell in a column. It consists of a 6-digit hexadecimal code as defined in sRGB and is prefixed by '#'. This attribute may be used with one of sixteen predefined color strings: black = "#000000" green = "#008000" silver = "#C0C0C0" lime = "#00FF00" gray = "#808080" olive = "#808000" white = "#FFFFFF" yellow = "#FFFF00" maroon = "#800000" navy = "#000080" red = "#FF0000" blue = "#0000FF" purple = "#800080" teal = "#008080" fuchsia = "#FF00FF" aqua = "#00FFFF" Note: Do not use this attribute, as it is non-standard and only implemented in some versions of Microsoft Internet Explorer: The <th> element should be styled using CSS. To create a similar effect use the background-color property in CSS instead. */
  "bgcolor": (val: DomTypeMap["Any"]) => HTMLElement<"th">;
  /** @deprecated The content in the cell element is aligned to a character. Typical values include a period (.) to align numbers or monetary values. If align is not set to char, this attribute is ignored. Note: Do not use this attribute as it is obsolete in the latest standard. To achieve the same effect, you can specify the character as the first value of the text-align property. */
  "char": (val: DomTypeMap["Any"]) => HTMLElement<"th">;
  /** @deprecated This attribute is used to shift column data to the right of the character specified by the char attribute. Its value specifies the length of this shift. Note: Do not use this attribute as it is obsolete in the latest standard. */
  "charoff": (val: DomTypeMap["Any"]) => HTMLElement<"th">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"th">;
  /** This attribute contains a non-negative integer value that indicates for how many columns the cell extends. Its default value is 1. Values higher than 1000 will be considered as incorrect and will be set to the default value (1). */
  "colspan": (val: DomTypeMap[`{"type":"integer","gt":0,"lte":1000}`]) => HTMLElement<"th">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"th">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"th">;
  "draggable": (val: "true" | "false") => HTMLElement<"th">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"th">;
  /** This attribute contains a list of space-separated strings, each corresponding to the id attribute of the <th> elements that apply to this element. */
  "headers": (val: DomTypeMap[`{"token":"DOMID","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"th">;
  /** @deprecated This attribute is used to define a recommended cell height. Note: Do not use this attribute as it is obsolete in the latest standard: use the CSS height property instead. */
  "height": (val: DomTypeMap["Any"]) => HTMLElement<"th">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"th">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"th">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"th">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"th">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"th">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"th">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"th">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"th">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"th">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"th">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"th">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"th">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"th">;
  /** This attribute contains a non-negative integer value that indicates for how many rows the cell extends. Its default value is 1; if its value is set to 0, it extends until the end of the table section (<thead>, <tbody>, <tfoot>, even if implicitly defined), that the cell belongs to. Values higher than 65534 are clipped down to 65534. */
  "rowspan": (val: DomTypeMap[`{"type":"integer","gt":0,"lte":65534}`]) => HTMLElement<"th">;
  "scope": (val: "row" | "col" | "rowgroup" | "colgroup") => HTMLElement<"th">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"th">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"th">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"th">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"th">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"th">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"th">;
  /** @deprecated This attribute specifies how a text is vertically aligned inside a cell. Possible values for this attribute are: baseline: Positions the text near the bottom of the cell and aligns it with the baseline of the characters instead of the bottom. If characters don't descend below the baseline, the baseline value achieves the same effect as bottom. bottom: Positions the text near the bottom of the cell. middle: Centers the text in the cell. and top: Positions the text near the top of the cell. Note: Do not use this attribute as it is obsolete in the latest standard: use the CSS vertical-align property instead. */
  "valign": (val: DomTypeMap["Any"]) => HTMLElement<"th">;
  /** @deprecated This attribute is used to define a recommended cell width. Additional space can be added with the cellspacing and cellpadding properties and the width of the <col> element can also create extra width. But, if a column's width is too narrow to show a particular cell properly, it will be widened when displayed. Note: Do not use this attribute as it is obsolete in the latest standard: use the CSS width property instead. */
  "width": (val: DomTypeMap["Any"]) => HTMLElement<"th">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"th">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"th">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"th">;
  allowedChildren: any;
}
type theadElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"thead">;
  /** @deprecated This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are: left, aligning the content to the left of the cell center, centering the content in the cell right, aligning the content to the right of the cell justify, inserting spaces into the textual content so that the content is justified in the cell char, aligning the textual content on a special character with a minimal offset, defined by the char and charoff attributes. If this attribute is not set, the left value is assumed. Warning: Do not use this attribute as it is obsolete (not supported) in the latest standard. To achieve the same effect as the left, center, right or justify values, use the CSS text-align property on it. To achieve the same effect as the char value, in CSS3, you can use the value of the char as the value of the text-align property. */
  "align": (val: DomTypeMap["Any"]) => HTMLElement<"thead">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"thead">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"thead">;
  /** @deprecated This attribute defines the background color of each cell of the column. It is one of the 6-digit hexadecimal code as defined in sRGB, prefixed by a '#'. One of the sixteen predefined color strings may be used: black = "#000000" green = "#008000" silver = "#C0C0C0" lime = "#00FF00" gray = "#808080" olive = "#808000" white = "#FFFFFF" yellow = "#FFFF00" maroon = "#800000" navy = "#000080" red = "#FF0000" blue = "#0000FF" purple = "#800080" teal = "#008080" fuchsia = "#FF00FF" aqua = "#00FFFF" Note: Do not use this attribute, as it is non-standard and only implemented in some versions of Microsoft Internet Explorer: the <thead> element should be styled using CSS. To give a similar effect to the bgcolor attribute, use the CSS property background-color, on the relevant <td> or <th> elements. */
  "bgcolor": (val: DomTypeMap["Any"]) => HTMLElement<"thead">;
  /** @deprecated This attribute is used to set the character to align the cells in a column on. Typical values for this include a period (.) when attempting to align numbers or monetary values. If align is not set to char, this attribute is ignored. Note: Do not use this attribute as it is obsolete (and not supported) in the latest standard. To achieve the same effect as the char, in CSS3, you can use the character set using the char attribute as the value of the text-align property. */
  "char": (val: DomTypeMap["Any"]) => HTMLElement<"thead">;
  /** @deprecated This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the char attribute. Note: Do not use this attribute as it is obsolete (and not supported) in the latest standard. */
  "charoff": (val: DomTypeMap["Any"]) => HTMLElement<"thead">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"thead">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"thead">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"thead">;
  "draggable": (val: "true" | "false") => HTMLElement<"thead">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"thead">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"thead">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"thead">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"thead">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"thead">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"thead">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"thead">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"thead">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"thead">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"thead">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"thead">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"thead">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"thead">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"thead">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"thead">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"thead">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"thead">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"thead">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"thead">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"thead">;
  /** @deprecated This attribute specifies the vertical alignment of the text within each row of cells of the table header. Possible values for this attribute are: baseline, which will put the text as close to the bottom of the cell as it is possible, but align it on the baseline of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as bottom. bottom, which will put the text as close to the bottom of the cell as it is possible; middle, which will center the text in the cell; top, which will put the text as close to the top of the cell as it is possible. Note: Do not use this attribute as it is obsolete (and not supported) in the latest standard: instead set the CSS vertical-align property on it. */
  "valign": (val: DomTypeMap["Any"]) => HTMLElement<"thead">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"thead">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"thead">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"thead">;
  allowedChildren: any;
}
type timeElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"time">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"time">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"time">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"time">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"time">;
  "datetime": (val: DomTypeMap["DateTime"]) => HTMLElement<"time">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"time">;
  "draggable": (val: "true" | "false") => HTMLElement<"time">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"time">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"time">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"time">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"time">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"time">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"time">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"time">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"time">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"time">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"time">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"time">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"time">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"time">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"time">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"time">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"time">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"time">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"time">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"time">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"time">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"time">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"time">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"time">;
  allowedChildren: any;
}
type titleElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"title">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"title">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"title">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"title">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"title">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"title">;
  "draggable": (val: "true" | "false") => HTMLElement<"title">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"title">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"title">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"title">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"title">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"title">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"title">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"title">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"title">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"title">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"title">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"title">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"title">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"title">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"title">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"title">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"title">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"title">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"title">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"title">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"title">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"title">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"title">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"title">;
  allowedChildren: any;
}
type trElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"tr">;
  /** @deprecated A DOMString which specifies how the cell's context should be aligned horizontally within the cells in the row; this is shorthand for using align on every cell in the row individually. Possible values are: left Align the content of each cell at its left edge. center Center the contents of each cell between their left and right edges. right Align the content of each cell at its right edge. justify Widen whitespaces within the text of each cell so that the text fills the full width of each cell (full justification). char Align each cell in the row on a specific character (such that each row in the column that is configured this way will horizontally align its cells on that character). This uses the char and charoff to establish the alignment character (typically "." or "," when aligning numerical data) and the number of characters that should follow the alignment character. This alignment type was never widely supported. If no value is expressly set for align, the parent node's value is inherited. Note: Instead of using the obsolete align attribute, you should instead use the CSS text-align property to establish left, center, right, or justify alignment for the row's cells. To apply character-based alignment, set the CSS text-align property to the alignment character (such as "." or ","). */
  "align": (val: DomTypeMap["Any"]) => HTMLElement<"tr">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"tr">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"tr">;
  /** @deprecated A DOMString specifying a color to apply to the backgrounds of each of the row's cells. This can be either an hexadecimal #RRGGBB or #RGB value or a color keyword. Omitting the attribute or setting it to null in JavaScript causes the row's cells to inherit the row's parent element's background color. Note: The <tr> element should be styled using CSS. To give a similar effect as the bgcolor attribute, use the CSS property background-color. */
  "bgcolor": (val: DomTypeMap["Any"]) => HTMLElement<"tr">;
  /** @deprecated A DOMString which sets the character to align the cells in each of the row's columns on (each row's centering that uses the same character gets aligned with others using the same character . Typical values for this include a period (".") or comma (",") when attempting to align numbers or monetary values. If align is not set to char, this attribute is ignored. Note: This attribute is not only obsolete, but was rarely implemented anyway. To achieve the same effect as the char attribute, set the CSS text-align property to the same string you would specify for the char property, such as text-align: ".". */
  "char": (val: DomTypeMap["Any"]) => HTMLElement<"tr">;
  /** @deprecated A DOMString indicating the number of characters on the tail end of the column's data should be displayed after the alignment character specified by the char attribute. For example, when displaying money values for currencies that use hundredths of a unit (such as the dollar, which is divided into 100 cents), you would typically specify a value of 2, so that in tandem with char being set to ".", the values in a column would be cleanly aligned on the decimal points, with the number of cents properly displayed to the right of the decimal point. Note: This attribute is obsolete, and was never widely supported anyway. */
  "charoff": (val: DomTypeMap["Any"]) => HTMLElement<"tr">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"tr">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"tr">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"tr">;
  "draggable": (val: "true" | "false") => HTMLElement<"tr">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"tr">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"tr">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"tr">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"tr">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"tr">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"tr">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"tr">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"tr">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"tr">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"tr">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"tr">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"tr">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"tr">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"tr">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"tr">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"tr">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"tr">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"tr">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"tr">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"tr">;
  /** @deprecated A DOMString specifying the vertical alignment of the text within each cell in the row. Possible values for this attribute are: baseline Aligns each cell's content text as closely as possible to the bottom of the cell, handling alignment of different fonts and font sizes by aligning the characters along the baseline of the font(s) used in the row. If all of the characters in the row are the same size, the effect is the same as bottom. bottom, Draws the text in each of the row's cells as closely as possible to the bottom edge of those cells. middle Each cell's text is vertically centered. top Each cell's text is drawn as closely as possible to the top edge of the containing cell. Note: Don't use the obsolete valign attribute. Instead, add the CSS vertical-align property to the row. */
  "valign": (val: DomTypeMap["Any"]) => HTMLElement<"tr">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"tr">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"tr">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"tr">;
  allowedChildren: any;
}
type trackElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"track">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"track">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"track">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"track">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"track">;
  "default": (val: DomTypeMap["Boolean"]) => HTMLElement<"track">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"track">;
  "draggable": (val: "true" | "false") => HTMLElement<"track">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"track">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"track">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"track">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"track">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"track">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"track">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"track">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"track">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"track">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"track">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"track">;
  "kind": (val: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata") => HTMLElement<"track">;
  "label": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"track">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"track">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"track">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"track">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"track">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"track">;
  "src": (val: DomTypeMap["URL"]) => HTMLElement<"track">;
  "srclang": (val: DomTypeMap["BCP47"]) => HTMLElement<"track">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"track">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"track">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"track">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"track">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"track">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"track">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"track">;
  allowedChildren: any;
}
type ttElement = {
  allowedChildren: any;
}
type uElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"u">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"u">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"u">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"u">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"u">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"u">;
  "draggable": (val: "true" | "false") => HTMLElement<"u">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"u">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"u">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"u">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"u">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"u">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"u">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"u">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"u">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"u">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"u">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"u">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"u">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"u">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"u">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"u">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"u">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"u">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"u">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"u">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"u">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"u">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"u">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"u">;
  allowedChildren: any;
}
type ulElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"ul">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"ul">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"ul">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"ul">;
  /** @deprecated This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent, and it doesn't work in all browsers. Warning: Do not use this attribute, as it has been deprecated: use CSS instead. To give a similar effect as the compact attribute, the CSS property line-height can be used with a value of 80%. */
  "compact": (val: DomTypeMap["Any"]) => HTMLElement<"ul">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"ul">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"ul">;
  "draggable": (val: "true" | "false") => HTMLElement<"ul">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"ul">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"ul">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"ul">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"ul">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"ul">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"ul">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"ul">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"ul">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"ul">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"ul">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"ul">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"ul">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"ul">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"ul">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"ul">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"ul">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"ul">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"ul">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"ul">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"ul">;
  /** @deprecated This attribute sets the bullet style for the list. The values defined under HTML3.2 and the transitional version of HTML 4.0/4.01 are: circle disc square A fourth bullet type has been defined in the WebTV interface, but not all browsers support it: triangle. If not present and if no CSS list-style-type property applies to the element, the user agent selects a bullet type depending on the nesting level of the list. Warning: Do not use this attribute, as it has been deprecated; use the CSS list-style-type property instead. */
  "type": (val: DomTypeMap["Any"]) => HTMLElement<"ul">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"ul">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"ul">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"ul">;
  allowedChildren: any;
}
type varElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"var">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"var">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"var">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"var">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"var">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"var">;
  "draggable": (val: "true" | "false") => HTMLElement<"var">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"var">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"var">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"var">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"var">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"var">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"var">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"var">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"var">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"var">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"var">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"var">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"var">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"var">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"var">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"var">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"var">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"var">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"var">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"var">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"var">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"var">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"var">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"var">;
  allowedChildren: any;
}
type videoElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"video">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"video">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"video">;
  /** A Boolean attribute which if true indicates that the element should automatically toggle picture-in-picture mode when the user switches back and forth between this document and another document or application. */
  "autopictureinpicture": (val: DomTypeMap["Any"]) => HTMLElement<"video">;
  /** A Boolean attribute; if specified, the video automatically begins to play back as soon as it can do so without stopping to finish loading the data. Note: Sites that automatically play audio (or videos with an audio track) can be an unpleasant experience for users, so should be avoided when possible. If you must offer autoplay functionality, you should make it opt-in (requiring a user to specifically enable it). However, this can be useful when creating media elements whose source will be set at a later time, under user control. See our autoplay guide for additional information about how to properly use autoplay. To disable video autoplay, autoplay="false" will not work; the video will autoplay if the attribute is there in the <video> tag at all. To remove autoplay, the attribute needs to be removed altogether. In some browsers (e.g. Chrome 70.0) autoplay doesn't work if no muted attribute is present. */
  "autoplay": (val: DomTypeMap["Boolean"]) => HTMLElement<"video">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"video">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"video">;
  /** If this attribute is present, the browser will offer controls to allow the user to control video playback, including volume, seeking, and pause/resume playback. */
  "controls": (val: DomTypeMap["Boolean"]) => HTMLElement<"video">;
  "controlslist": (val: DomTypeMap[`{"token":{"enum":["nodownload","nofullscreen","noremoteplayback"]},"ordered":false,"caseInsensitive":true,"unique":true,"separator":"space"}`]) => HTMLElement<"video">;
  /** This enumerated attribute indicates whether to use CORS to fetch the related video. CORS-enabled resources can be reused in the <canvas> element without being tainted. The allowed values are: anonymous Sends a cross-origin request without a credential. In other words, it sends the Origin: HTTP header without a cookie, X.509 certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (by not setting the Access-Control-Allow-Origin: HTTP header), the image will be tainted, and its usage restricted. use-credentials Sends a cross-origin request with a credential. In other words, it sends the Origin: HTTP header with a cookie, a certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (through Access-Control-Allow-Credentials: HTTP header), the image will be tainted and its usage restricted. When not present, the resource is fetched without a CORS request (i.e. without sending the Origin: HTTP header), preventing its non-tainted used in <canvas> elements. If invalid, it is handled as if the enumerated keyword anonymous was used. See CORS settings attributes for additional information. */
  "crossorigin": (val: "" | "anonymous" | "use-credentials") => HTMLElement<"video">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"video">;
  /** Prevents the browser from suggesting a Picture-in-Picture context menu or to request Picture-in-Picture automatically in some cases. */
  "disablepictureinpicture": (val: DomTypeMap["Any"]) => HTMLElement<"video">;
  /** A Boolean attribute used to disable the capability of remote playback in devices that are attached using wired (HDMI, DVI, etc.) and wireless technologies (Miracast, Chromecast, DLNA, AirPlay, etc). In Safari, you can use x-webkit-airplay="deny" as a fallback. */
  "disableremoteplayback": (val: DomTypeMap["Any"]) => HTMLElement<"video">;
  "draggable": (val: "true" | "false") => HTMLElement<"video">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"video">;
  /** The height of the video's display area, in CSS pixels (absolute values only; no percentages.) */
  "height": (val: DomTypeMap["Uint"]) => HTMLElement<"video">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"video">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"video">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"video">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"video">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"video">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"video">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"video">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"video">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"video">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"video">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"video">;
  /** A Boolean attribute; if specified, the browser will automatically seek back to the start upon reaching the end of the video. */
  "loop": (val: DomTypeMap["Boolean"]) => HTMLElement<"video">;
  /** A Boolean attribute that indicates the default setting of the audio contained in the video. If set, the audio will be initially silenced. Its default value is false, meaning that the audio will be played when the video is played. */
  "muted": (val: DomTypeMap["Boolean"]) => HTMLElement<"video">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"video">;
  "playsinline": (val: DomTypeMap["Boolean"]) => HTMLElement<"video">;
  "poster": (val: DomTypeMap["URL"]) => HTMLElement<"video">;
  /** This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience with regards to what content is loaded before the video is played. It may have one of the following values: none: Indicates that the video should not be preloaded. metadata: Indicates that only video metadata (e.g. length) is fetched. auto: Indicates that the whole video file can be downloaded, even if the user is not expected to use it. empty string: Synonym of the auto value. The default value is different for each browser. The spec advises it to be set to metadata. Note: The autoplay attribute has precedence over preload. If autoplay is specified, the browser would obviously need to start downloading the video for playback. The specification does not force the browser to follow the value of this attribute; it is a mere hint. */
  "preload": (val: "none" | "metadata" | "auto") => HTMLElement<"video">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"video">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"video">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"video">;
  /** The URL of the video to embed. This is optional; you may instead use the <source> element within the video block to specify the video to embed. */
  "src": (val: DomTypeMap["URL"]) => HTMLElement<"video">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"video">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"video">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"video">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"video">;
  /** The width of the video's display area, in CSS pixels (absolute values only; no percentages). */
  "width": (val: DomTypeMap["Uint"]) => HTMLElement<"video">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"video">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"video">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"video">;
  allowedChildren: any;
}
type wbrElement = {
  "accesskey": (val: DomTypeMap[`{"token":"OneCodePointChar","ordered":true,"unique":true,"number":"zeroOrMore","separator":"space"}`]) => HTMLElement<"wbr">;
  "autocapitalize": (val: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElement<"wbr">;
  "autofocus": (val: DomTypeMap["Boolean"]) => HTMLElement<"wbr">;
  "class": (val: DomTypeMap["<class-list>"]) => HTMLElement<"wbr">;
  "contenteditable": (val: "" | "true" | "false") => HTMLElement<"wbr">;
  "dir": (val: "ltr" | "rtl" | "auto") => HTMLElement<"wbr">;
  "draggable": (val: "true" | "false") => HTMLElement<"wbr">;
  "enterkeyhint": (val: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElement<"wbr">;
  "hidden": (val: DomTypeMap["Boolean"]) => HTMLElement<"wbr">;
  "id": (val: DomTypeMap["DOMID"]) => HTMLElement<"wbr">;
  "inert": (val: DomTypeMap["Boolean"]) => HTMLElement<"wbr">;
  "inputmode": (val: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElement<"wbr">;
  "is": (val: DomTypeMap["CustomElementName"]) => HTMLElement<"wbr">;
  "itemid": (val: DomTypeMap["URL"]) => HTMLElement<"wbr">;
  "itemprop": (val: DomTypeMap[`{"token":"ItemProp","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"wbr">;
  "itemref": (val: DomTypeMap[`{"token":"DOMID","separator":"space"}`]) => HTMLElement<"wbr">;
  "itemscope": (val: DomTypeMap["Boolean"]) => HTMLElement<"wbr">;
  "itemtype": (val: DomTypeMap[`{"token":"AbsoluteURL","ordered":false,"unique":true,"separator":"space"}`]) => HTMLElement<"wbr">;
  "lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"wbr">;
  "nonce": (val: DomTypeMap["Any"]) => HTMLElement<"wbr">;
  "role": (val: DomTypeMap[`{"token":"NoEmptyAny","separator":"space"}`]) => HTMLElement<"wbr">;
  "slot": (val: DomTypeMap["NoEmptyAny"]) => HTMLElement<"wbr">;
  "spellcheck": (val: "" | "true" | "false") => HTMLElement<"wbr">;
  "style": (val: DomTypeMap["<css-declaration-list>"]) => HTMLElement<"wbr">;
  "tabindex": (val: DomTypeMap["TabIndex"]) => HTMLElement<"wbr">;
  "title": (val: DomTypeMap["Any"]) => HTMLElement<"wbr">;
  "translate": (val: "" | "yes" | "no") => HTMLElement<"wbr">;
  "xml:lang": (val: DomTypeMap["BCP47"]) => HTMLElement<"wbr">;
  "xml:space": (val: "default" | "preserve") => HTMLElement<"wbr">;
  "xmlns": (val: DomTypeMap["URL"]) => HTMLElement<"wbr">;
  allowedChildren: any;
}
type xmpElement = {
  allowedChildren: any;
}