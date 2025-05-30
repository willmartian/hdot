// WARNING: This file was auto-generated and any changes will be overwritten.
export type HTMLElements = {
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
};

type children = (string | TemplateStringsArray | HTMLElements[keyof HTMLElements])[];
type GlobalHTMLAttributes<TagName extends keyof HTMLElements> = {
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-accesskey */
  "accesskey": (value: string) => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-autocapitalize */
  "autocapitalize": (value: "off" | "on" | "none" | "sentences" | "words" | "characters") => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-autofocus */
  "autofocus": (value: boolean) => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-contenteditable */
  "contenteditable": (value: "" | "true" | "false") => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-dir */
  "dir": (value: "ltr" | "rtl" | "auto") => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-draggable */
  "draggable": (value: "true" | "false") => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-enterkeyhint */
  "enterkeyhint": (value: "enter" | "done" | "go" | "next" | "previous" | "search" | "send") => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-hidden */
  "hidden": (value: boolean) => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-inert */
  "inert": (value: boolean) => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-inputmode */
  "inputmode": (value: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search") => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-is */
  "is": (value: `${string}-${string}`) => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-itemid */
  "itemid": (value: string) => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-itemprop */
  "itemprop": (value: string) => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-itemref */
  "itemref": (value: string) => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-itemscope */
  "itemscope": (value: boolean) => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-itemtype */
  "itemtype": (value: string) => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-lang */
  "lang": (value: string) => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-nonce */
  "nonce": (value: string) => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-spellcheck */
  "spellcheck": (value: "" | "true" | "false") => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-style */
  "style": (value: string) => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-tabindex */
  "tabindex": (value: number) => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-title */
  "title": (value: string) => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-translate */
  "translate": (value: "" | "yes" | "no") => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-class */
  "class": (value: string) => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-id */
  "id": (value: string) => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-slot */
  "slot": (value: string) => HTMLElements[TagName];
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-xmlns */
  "xmlns": (value: string) => HTMLElements[TagName];
  /** @deprecated @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-xml:lang */
  "xml:lang": (value: string) => HTMLElements[TagName];
  /** @deprecated @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-xml:space */
  "xml:space": (value: "default" | "preserve") => HTMLElements[TagName];
  [dataAttribute: `data${string}`]: (value: string | boolean | number) => HTMLElements[TagName];
  (...children: children): string;
};

type GlobalAriaAttributes<TagName extends keyof HTMLElements> = {
  "ariaActivedescendant": (value: string) => HTMLElements[TagName];
  "ariaAtomic": (value: string) => HTMLElements[TagName];
  "ariaAutocomplete": (value: string) => HTMLElements[TagName];
  "ariaBusy": (value: string) => HTMLElements[TagName];
  "ariaChecked": (value: string) => HTMLElements[TagName];
  "ariaColcount": (value: string) => HTMLElements[TagName];
  "ariaColindex": (value: string) => HTMLElements[TagName];
  "ariaColspan": (value: string) => HTMLElements[TagName];
  "ariaControls": (value: string) => HTMLElements[TagName];
  "ariaCurrent": (value: string) => HTMLElements[TagName];
  "ariaDescribedby": (value: string) => HTMLElements[TagName];
  "ariaDetails": (value: string) => HTMLElements[TagName];
  "ariaDisabled": (value: string) => HTMLElements[TagName];
  "ariaDropeffect": (value: string) => HTMLElements[TagName];
  "ariaErrormessage": (value: string) => HTMLElements[TagName];
  "ariaExpanded": (value: string) => HTMLElements[TagName];
  "ariaFlowto": (value: string) => HTMLElements[TagName];
  "ariaGrabbed": (value: string) => HTMLElements[TagName];
  "ariaHaspopup": (value: string) => HTMLElements[TagName];
  "ariaHidden": (value: string) => HTMLElements[TagName];
  "ariaInvalid": (value: string) => HTMLElements[TagName];
  "ariaKeyshortcuts": (value: string) => HTMLElements[TagName];
  "ariaLabel": (value: string) => HTMLElements[TagName];
  "ariaLabelledby": (value: string) => HTMLElements[TagName];
  "ariaLevel": (value: string) => HTMLElements[TagName];
  "ariaLive": (value: string) => HTMLElements[TagName];
  "ariaModal": (value: string) => HTMLElements[TagName];
  "ariaMultiline": (value: string) => HTMLElements[TagName];
  "ariaMultiselectable": (value: string) => HTMLElements[TagName];
  "ariaOrientation": (value: string) => HTMLElements[TagName];
  "ariaOwns": (value: string) => HTMLElements[TagName];
  "ariaPlaceholder": (value: string) => HTMLElements[TagName];
  "ariaPosinset": (value: string) => HTMLElements[TagName];
  "ariaPressed": (value: string) => HTMLElements[TagName];
  "ariaReadonly": (value: string) => HTMLElements[TagName];
  "ariaRelevant": (value: string) => HTMLElements[TagName];
  "ariaRequired": (value: string) => HTMLElements[TagName];
  "ariaRoledescription": (value: string) => HTMLElements[TagName];
  "ariaRowcount": (value: string) => HTMLElements[TagName];
  "ariaRowindex": (value: string) => HTMLElements[TagName];
  "ariaRowspan": (value: string) => HTMLElements[TagName];
  "ariaSelected": (value: string) => HTMLElements[TagName];
  "ariaSetsize": (value: string) => HTMLElements[TagName];
  "ariaSort": (value: string) => HTMLElements[TagName];
  "ariaValuemax": (value: string) => HTMLElements[TagName];
  "ariaValuemin": (value: string) => HTMLElements[TagName];
  "ariaValuenow": (value: string) => HTMLElements[TagName];
  "ariaValuetext": (value: string) => HTMLElements[TagName];
};

type aElement = {
  /** @deprecated Hinted at the character encoding of the linked URL. Note: This attribute is deprecated and should not be used by authors. Use the HTTP Content-Type header on the linked URL. */
  "charset": (value: string) => HTMLElements["a"];
  /** @deprecated Used with the shape attribute. A comma-separated list of coordinates. */
  "coords": (value: string) => HTMLElements["a"];
  /** Prompts the user to save the linked URL instead of navigating to it. Can be used with or without a value: Without a value, the browser will suggest a filename/extension, generated from various sources: The Content-Disposition HTTP header The final segment in the URL path The media type (from the Content-Type header, the start of a data: URL, or Blob.type for a blob: URL) Defining a value suggests it as the filename. / and \ characters are converted to underscores (_). Filesystems may forbid other characters in filenames, so browsers will adjust the suggested name if necessary. Note: download only works for same-origin URLs, or the blob: and data: schemes. If the Content-Disposition header has different information from the download attribute, resulting behavior may differ: If the header specifies a filename, it takes priority over a filename specified in the download attribute. If the header specifies a disposition of inline, Chrome, and Firefox 82 and later, prioritize the attribute and treat it as a download. Firefox versions before 82 prioritize the header and will display the content inline. */
  "download": (value: string) => HTMLElements["a"];
  /** The URL that the hyperlink points to. Links are not restricted to HTTP-based URLs — they can use any URL scheme supported by browsers: Sections of a page with fragment URLs Pieces of media files with media fragments Telephone numbers with tel: URLs Email addresses with mailto: URLs While web browsers may not support other URL schemes, web sites can with registerProtocolHandler() */
  "href": (value: string) => HTMLElements["a"];
  /** Hints at the human language of the linked URL. No built-in functionality. Allowed values are the same as the global lang attribute. */
  "hreflang": (value: string) => HTMLElements["a"];
  /** @deprecated Was required to define a possible target location in a page. In HTML 4.01, id and name could both be used on <a>, as long as they had identical values. Note: Use the global attribute id instead. */
  "name": (value: string) => HTMLElements["a"];
  /** A space-separated list of URLs. When the link is followed, the browser will send POST requests with the body PING to the URLs. Typically for tracking. */
  "ping": (value: string) => HTMLElements["a"];
  /** How much of the referrer to send when following the link. no-referrer: The Referer header will not be sent. no-referrer-when-downgrade: The Referer header will not be sent to origins without TLS (HTTPS). origin: The sent referrer will be limited to the origin of the referring page: its scheme, host, and port. origin-when-cross-origin: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path. same-origin: A referrer will be sent for same origin, but cross-origin requests will contain no referrer information. strict-origin: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP). strict-origin-when-cross-origin (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP). unsafe-url: The referrer will include the origin and the path (but not the fragment, password, or username). This value is unsafe, because it leaks origins and paths from TLS-protected resources to insecure origins. */
  "referrerpolicy": (value: "" | "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url") => HTMLElements["a"];
  /** The relationship of the linked URL as space-separated link types. */
  "rel": (value: string) => HTMLElements["a"];
  /** @deprecated Specified a reverse link; the opposite of the rel attribute. Deprecated for being very confusing. */
  "rev": (value: string) => HTMLElements["a"];
  "role": (value: string) => HTMLElements["a"];
  /** @deprecated The shape of the hyperlink's region in an image map. Note: Use the <area> element for image maps instead. */
  "shape": (value: string) => HTMLElements["a"];
  /** Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>). The following keywords have special meanings for where to load the URL: _self: the current browsing context. (Default) _blank: usually a new tab, but users can configure browsers to open a new window instead. _parent: the parent browsing context of the current one. If no parent, behaves as _self. _top: the topmost browsing context (the "highest" context that's an ancestor of the current one). If no ancestors, behaves as _self. Note: Setting target="_blank" on <a> elements implicitly provides the same rel behavior as setting rel="noopener" which does not set window.opener. See browser compatibility for support status. */
  "target": (value: string) => HTMLElements["a"];
  /** Hints at the linked URL's format with a MIME type. No built-in functionality. */
  "type": (value: string) => HTMLElements["a"];
} & GlobalAriaAttributes<"a"> & GlobalHTMLAttributes<"a">;

type abbrElement = {
  "role": (value: string) => HTMLElements["abbr"];
} & GlobalAriaAttributes<"abbr"> & GlobalHTMLAttributes<"abbr">;

type acronymElement = {
} & GlobalAriaAttributes<"acronym"> & GlobalHTMLAttributes<"acronym">;

type addressElement = {
  "role": (value: string) => HTMLElements["address"];
} & GlobalAriaAttributes<"address"> & GlobalHTMLAttributes<"address">;

type appletElement = {
  /** This attribute is used to position the applet on the page relative to content that might flow around it. The HTML 4.01 specification defines values of bottom, left, middle, right, and top, whereas Microsoft and Netscape also might support absbottom, absmiddle, baseline, center, and texttop. */
  "align": (value: string) => HTMLElements["applet"];
  /** This attribute causes a descriptive text alternate to be displayed on browsers that do not support Java. Page designers should also remember that content enclosed within the <applet> element may also be rendered as alternative text. */
  "alt": (value: string) => HTMLElements["applet"];
  /** This attribute refers to an archived or compressed version of the applet and its associated class files, which might help reduce download time. */
  "archive": (value: string) => HTMLElements["applet"];
  /** This attribute specifies the URL of the applet's class file to be loaded and executed. Applet filenames are identified by a .class filename extension. The URL specified by code might be relative to the codebase attribute. */
  "code": (value: string) => HTMLElements["applet"];
  /** This attribute gives the absolute or relative URL of the directory where applets' .class files referenced by the code attribute are stored. */
  "codebase": (value: string) => HTMLElements["applet"];
  /** This attribute, supported by Internet Explorer 4 and higher, specifies the column name from the data source object that supplies the bound data. This attribute might be used to specify the various <param> elements passed to the Java applet. */
  "datafld": (value: string) => HTMLElements["applet"];
  /** Like datafld, this attribute is used for data binding under Internet Explorer 4. It indicates the id of the data source object that supplies the data that is bound to the <param> elements associated with the applet. */
  "datasrc": (value: string) => HTMLElements["applet"];
  /** This attribute specifies the height, in pixels, that the applet needs. */
  "height": (value: string) => HTMLElements["applet"];
  /** This attribute specifies additional horizontal space, in pixels, to be reserved on either side of the applet. */
  "hspace": (value: string) => HTMLElements["applet"];
  /** In the Netscape implementation, this attribute allows access to an applet by programs in a scripting language embedded in the document. */
  "mayscript": (value: string) => HTMLElements["applet"];
  /** This attribute assigns a name to the applet so that it can be identified by other resources; particularly scripts. */
  "name": (value: string) => HTMLElements["applet"];
  /** This attribute specifies the URL of a serialized representation of an applet. */
  "object": (value: string) => HTMLElements["applet"];
  /** As defined for Internet Explorer 4 and higher, this attribute specifies a URL for an associated file for the applet. The meaning and use is unclear and not part of the HTML standard. */
  "src": (value: string) => HTMLElements["applet"];
  /** This attribute specifies additional vertical space, in pixels, to be reserved above and below the applet. */
  "vspace": (value: string) => HTMLElements["applet"];
  /** This attribute specifies in pixels the width that the applet needs. */
  "width": (value: string) => HTMLElements["applet"];
} & GlobalAriaAttributes<"applet"> & GlobalHTMLAttributes<"applet">;

type areaElement = {
  "alt": (value: string) => HTMLElements["area"];
  "coords": (value: string) => HTMLElements["area"];
  /** This attribute, if present, indicates that the author intends the hyperlink to be used for downloading a resource. See <a> for a full description of the download attribute. */
  "download": (value: string) => HTMLElements["area"];
  /** The hyperlink target for the area. Its value is a valid URL. This attribute may be omitted; if so, the <area> element does not represent a hyperlink. */
  "href": (value: string) => HTMLElements["area"];
  /** Indicates the language of the linked resource. Allowed values are defined by RFC 5646: Tags for Identifying Languages (also known as BCP 47). Use this attribute only if the href attribute is present. */
  "hreflang": (value: string) => HTMLElements["area"];
  /** @deprecated Define a names for the clickable area so that it can be scripted by older browsers. */
  "name": (value: string) => HTMLElements["area"];
  /** @deprecated Indicates that no hyperlink exists for the associated area. Note: Since HTML5, omitting the href attribute is sufficient. */
  "nohref": (value: string) => HTMLElements["area"];
  /** Contains a space-separated list of URLs to which, when the hyperlink is followed, POST requests with the body PING will be sent by the browser (in the background). Typically used for tracking. */
  "ping": (value: string) => HTMLElements["area"];
  /** A string indicating which referrer to use when fetching the resource: no-referrer: The Referer header will not be sent. no-referrer-when-downgrade: The Referer header will not be sent to origins without TLS (HTTPS). origin: The sent referrer will be limited to the origin of the referring page: its scheme, host, and port. origin-when-cross-origin: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path. same-origin: A referrer will be sent for same origin, but cross-origin requests will contain no referrer information. strict-origin: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP). strict-origin-when-cross-origin (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP). unsafe-url: The referrer will include the origin and the path (but not the fragment, password, or username). This value is unsafe, because it leaks origins and paths from TLS-protected resources to insecure origins. */
  "referrerpolicy": (value: "" | "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url") => HTMLElements["area"];
  /** For anchors containing the href attribute, this attribute specifies the relationship of the target object to the link object. The value is a space-separated list of link types values. The values and their semantics will be registered by some authority that might have meaning to the document author. The default relationship, if no other is given, is void. Use this attribute only if the href attribute is present. */
  "rel": (value: string) => HTMLElements["area"];
  "role": (value: string) => HTMLElements["area"];
  "shape": (value: "rect" | "circle" | "poly" | "default") => HTMLElements["area"];
  /** A keyword or author-defined name of the browsing context to display the linked resource. The following keywords have special meanings: _self (default): Show the resource in the current browsing context. _blank: Show the resource in a new, unnamed browsing context. _parent: Show the resource in the parent browsing context of the current one, if the current page is inside a frame. If there is no parent, acts the same as _self. _top: Show the resource in the topmost browsing context (the browsing context that is an ancestor of the current one and has no parent). If there is no parent, acts the same as _self. Use this attribute only if the href attribute is present. Note: Setting target="_blank" on <area> elements implicitly provides the same rel behavior as setting rel="noopener" which does not set window.opener. See browser compatibility for support status. */
  "target": (value: string) => HTMLElements["area"];
  /** @deprecated Hint for the type of the referenced resource. Ignored by browsers. */
  "type": (value: string) => HTMLElements["area"];
} & GlobalAriaAttributes<"area"> & GlobalHTMLAttributes<"area">;

type articleElement = {
  "role": (value: string) => HTMLElements["article"];
} & GlobalAriaAttributes<"article"> & GlobalHTMLAttributes<"article">;

type asideElement = {
  "role": (value: string) => HTMLElements["aside"];
} & GlobalAriaAttributes<"aside"> & GlobalHTMLAttributes<"aside">;

type audioElement = {
  /** A Boolean attribute: if specified, the audio will automatically begin playback as soon as it can do so, without waiting for the entire audio file to finish downloading. Note: Sites that automatically play audio (or videos with an audio track) can be an unpleasant experience for users, so should be avoided when possible. If you must offer autoplay functionality, you should make it opt-in (requiring a user to specifically enable it). However, this can be useful when creating media elements whose source will be set at a later time, under user control. See our autoplay guide for additional information about how to properly use autoplay. */
  "autoplay": (value: boolean) => HTMLElements["audio"];
  /** If this attribute is present, the browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback. */
  "controls": (value: boolean) => HTMLElements["audio"];
  /** This enumerated attribute indicates whether to use CORS to fetch the related audio file. CORS-enabled resources can be reused in the <canvas> element without being tainted. The allowed values are: anonymous Sends a cross-origin request without a credential. In other words, it sends the Origin: HTTP header without a cookie, X.509 certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (by not setting the Access-Control-Allow-Origin: HTTP header), the image will be tainted, and its usage restricted. use-credentials Sends a cross-origin request with a credential. In other words, it sends the Origin: HTTP header with a cookie, a certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (through Access-Control-Allow-Credentials: HTTP header), the image will be tainted and its usage restricted. When not present, the resource is fetched without a CORS request (i.e. without sending the Origin: HTTP header), preventing its non-tainted used in <canvas> elements. If invalid, it is handled as if the enumerated keyword anonymous was used. See CORS settings attributes for additional information. */
  "crossorigin": (value: "" | "anonymous" | "use-credentials") => HTMLElements["audio"];
  /** A Boolean attribute used to disable the capability of remote playback in devices that are attached using wired (HDMI, DVI, etc.) and wireless technologies (Miracast, Chromecast, DLNA, AirPlay, etc). See this proposed specification for more information. Note: In Safari, you can use x-webkit-airplay="deny" as a fallback. */
  "disableremoteplayback": (value: string) => HTMLElements["audio"];
  /** A Boolean attribute: if specified, the audio player will automatically seek back to the start upon reaching the end of the audio. */
  "loop": (value: boolean) => HTMLElements["audio"];
  /** A Boolean attribute that indicates whether the audio will be initially silenced. Its default value is false. */
  "muted": (value: boolean) => HTMLElements["audio"];
  /** This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values: none: Indicates that the audio should not be preloaded. metadata: Indicates that only audio metadata (e.g. length) is fetched. auto: Indicates that the whole audio file can be downloaded, even if the user is not expected to use it. empty string: A synonym of the auto value. The default value is different for each browser. The spec advises it to be set to metadata. Note: The autoplay attribute has precedence over preload. If autoplay is specified, the browser would obviously need to start downloading the audio for playback. The browser is not forced by the specification to follow the value of this attribute; it is a mere hint. */
  "preload": (value: "none" | "metadata" | "auto") => HTMLElements["audio"];
  "role": (value: string) => HTMLElements["audio"];
  /** The URL of the audio to embed. This is subject to HTTP access controls. This is optional; you may instead use the <source> element within the audio block to specify the audio to embed. */
  "src": (value: string) => HTMLElements["audio"];
} & GlobalAriaAttributes<"audio"> & GlobalHTMLAttributes<"audio">;

type bElement = {
  "role": (value: string) => HTMLElements["b"];
} & GlobalAriaAttributes<"b"> & GlobalHTMLAttributes<"b">;

type baseElement = {
  /** The base URL to be used throughout the document for relative URLs. Absolute and relative URLs are allowed. */
  "href": (value: string) => HTMLElements["base"];
  "role": (value: string) => HTMLElements["base"];
  /** A keyword or author-defined name of the default browsing context to show the results of navigation from <a>, <area>, or <form> elements without explicit target attributes. The following keywords have special meanings: _self (default): Show the result in the current browsing context. _blank: Show the result in a new, unnamed browsing context. _parent: Show the result in the parent browsing context of the current one, if the current page is inside a frame. If there is no parent, acts the same as _self. _top: Show the result in the topmost browsing context (the browsing context that is an ancestor of the current one and has no parent). If there is no parent, acts the same as _self. */
  "target": (value: string) => HTMLElements["base"];
} & GlobalAriaAttributes<"base"> & GlobalHTMLAttributes<"base">;

type basefontElement = {
  /** This attribute sets the text color using either a named color or a color specified in the hexadecimal #RRGGBB format. */
  "color": (value: string) => HTMLElements["basefont"];
  /** This attribute contains a list of one or more font names. The document text in the default style is rendered in the first font face that the client's browser supports. If no font listed is installed on the local system, the browser typically defaults to the proportional or fixed-width font for that system. */
  "face": (value: string) => HTMLElements["basefont"];
  /** This attribute specifies the font size as either a numeric or relative value. Numeric values range from 1 to 7 with 1 being the smallest and 3 the default. */
  "size": (value: string) => HTMLElements["basefont"];
} & GlobalAriaAttributes<"basefont"> & GlobalHTMLAttributes<"basefont">;

type bdiElement = {
  "role": (value: string) => HTMLElements["bdi"];
} & GlobalAriaAttributes<"bdi"> & GlobalHTMLAttributes<"bdi">;

type bdoElement = {
  "role": (value: string) => HTMLElements["bdo"];
} & GlobalAriaAttributes<"bdo"> & GlobalHTMLAttributes<"bdo">;

type bgsoundElement = {
  /** This attribute defines a number between -10,000 and +10,000 that determines how the volume will be divided between the speakers. */
  "balance": (value: string) => HTMLElements["bgsound"];
  /** This attribute indicates the number of times a sound is to be played and either has a numeric value or the keyword infinite. */
  "loop": (value: string) => HTMLElements["bgsound"];
  /** This attribute specifies the URL of the sound file to be played, which must be one of the following types: .wav, .au, or .mid. */
  "src": (value: string) => HTMLElements["bgsound"];
  /** This attribute defines a number between -10,000 and 0 that determines the loudness of a page's background sound. */
  "volume": (value: string) => HTMLElements["bgsound"];
} & GlobalAriaAttributes<"bgsound"> & GlobalHTMLAttributes<"bgsound">;

type bigElement = {
} & GlobalAriaAttributes<"big"> & GlobalHTMLAttributes<"big">;

type blinkElement = {
} & GlobalAriaAttributes<"blink"> & GlobalHTMLAttributes<"blink">;

type blockquoteElement = {
  "cite": (value: string) => HTMLElements["blockquote"];
  "role": (value: string) => HTMLElements["blockquote"];
} & GlobalAriaAttributes<"blockquote"> & GlobalHTMLAttributes<"blockquote">;

type bodyElement = {
  /** @deprecated Color of text for hyperlinks when selected. This method is non-conforming, use CSS color property in conjunction with the :active pseudo-class instead. */
  "alink": (value: string) => HTMLElements["body"];
  /** @deprecated URI of a image to use as a background. This method is non-conforming, use CSS background property on the element instead. */
  "background": (value: string) => HTMLElements["body"];
  /** @deprecated Background color for the document. This method is non-conforming, use CSS background-color property on the element instead. */
  "bgcolor": (value: string) => HTMLElements["body"];
  /** @deprecated The margin of the bottom of the body. This method is non-conforming, use CSS margin-bottom property on the element instead. */
  "bottommargin": (value: string) => HTMLElements["body"];
  /** @deprecated The margin of the left of the body. This method is non-conforming, use CSS margin-left property on the element instead. */
  "leftmargin": (value: string) => HTMLElements["body"];
  /** @deprecated Color of text for unvisited hypertext links. This method is non-conforming, use CSS color property in conjunction with the :link pseudo-class instead. */
  "link": (value: string) => HTMLElements["body"];
  /** Function to call when the user has moved forward in undo transaction history. */
  "onredo": (value: string) => HTMLElements["body"];
  /** Function to call when the user has moved backward in undo transaction history. */
  "onundo": (value: string) => HTMLElements["body"];
  /** @deprecated The margin of the right of the body. This method is non-conforming, use CSS margin-right property on the element instead. */
  "rightmargin": (value: string) => HTMLElements["body"];
  "role": (value: string) => HTMLElements["body"];
  /** @deprecated Foreground color of text. This method is non-conforming, use CSS color property on the element instead. */
  "text": (value: string) => HTMLElements["body"];
  /** @deprecated The margin of the top of the body. This method is non-conforming, use CSS margin-top property on the element instead. */
  "topmargin": (value: string) => HTMLElements["body"];
  /** @deprecated Color of text for visited hypertext links. This method is non-conforming, use CSS color property in conjunction with the :visited pseudo-class instead. */
  "vlink": (value: string) => HTMLElements["body"];
} & GlobalAriaAttributes<"body"> & GlobalHTMLAttributes<"body">;

type brElement = {
  /** @deprecated Indicates where to begin the next line after the break. */
  "clear": (value: string) => HTMLElements["br"];
  "role": (value: string) => HTMLElements["br"];
} & GlobalAriaAttributes<"br"> & GlobalHTMLAttributes<"br">;

type buttonElement = {
  /** This attribute on a <button> is nonstandard and Firefox-specific. Unlike other browsers, Firefox persists the dynamic disabled state of a <button> across page loads. Setting autocomplete="off" on the button disables this feature; see bug 654072. */
  "autocomplete": (value: string) => HTMLElements["button"];
  /** This Boolean attribute prevents the user from interacting with the button: it cannot be pressed or focused. Firefox, unlike other browsers, persists the dynamic disabled state of a <button> across page loads. Use the autocomplete attribute to control this feature. */
  "disabled": (value: boolean) => HTMLElements["button"];
  /** The <form> element to associate the button with (its form owner). The value of this attribute must be the id of a <form> in the same document. (If this attribute is not set, the <button> is associated with its ancestor <form> element, if any.) This attribute lets you associate <button> elements to <form>s anywhere in the document, not just inside a <form>. It can also override an ancestor <form> element. */
  "form": (value: string) => HTMLElements["button"];
  /** The URL that processes the information submitted by the button. Overrides the action attribute of the button's form owner. Does nothing if there is no form owner. */
  "formaction": (value: string) => HTMLElements["button"];
  /** If the button is a submit button (it's inside/associated with a <form> and doesn't have type="button"), specifies how to encode the form data that is submitted. Possible values: application/x-www-form-urlencoded: The default if the attribute is not used. multipart/form-data: Use to submit <input> elements with their type attributes set to file. text/plain: Specified as a debugging aid; shouldn't be used for real form submission. If this attribute is specified, it overrides the enctype attribute of the button's form owner. */
  "formenctype": (value: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain") => HTMLElements["button"];
  /** If the button is a submit button (it's inside/associated with a <form> and doesn't have type="button"), this attribute specifies the HTTP method used to submit the form. Possible values: post: The data from the form are included in the body of the HTTP request when sent to the server. Use when the form contains information that shouldn't be public, like login credentials. get: The form data are appended to the form's action URL, with a ? as a separator, and the resulting URL is sent to the server. Use this method when the form has no side effects, like search forms. If specified, this attribute overrides the method attribute of the button's form owner. */
  "formmethod": (value: "post" | "get" | "dialog") => HTMLElements["button"];
  /** If the button is a submit button, this Boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the novalidate attribute of the button's form owner. This attribute is also available on <input type="image"> and <input type="submit"> elements. */
  "formnovalidate": (value: boolean) => HTMLElements["button"];
  /** If the button is a submit button, this attribute is an author-defined name or standardized, underscore-prefixed keyword indicating where to display the response from submitting the form. This is the name of, or keyword for, a browsing context (a tab, window, or <iframe>). If this attribute is specified, it overrides the target attribute of the button's form owner. The following keywords have special meanings: _self: Load the response into the same browsing context as the current one. This is the default if the attribute is not specified. _blank: Load the response into a new unnamed browsing context — usually a new tab or window, depending on the user's browser settings. _parent: Load the response into the parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. */
  "formtarget": (value: string) => HTMLElements["button"];
  /** The name of the button, submitted as a pair with the button's value as part of the form data, when that button is used to submit the form. */
  "name": (value: string) => HTMLElements["button"];
  "role": (value: string) => HTMLElements["button"];
  "type": (value: "submit" | "reset" | "button") => HTMLElements["button"];
  "value": (value: string) => HTMLElements["button"];
} & GlobalAriaAttributes<"button"> & GlobalHTMLAttributes<"button">;

type canvasElement = {
  "height": (value: number) => HTMLElements["canvas"];
  /** @deprecated Lets the canvas know whether or not translucency will be a factor. If the canvas knows there's no translucency, painting performance can be optimized. This is only supported by Mozilla-based browsers; use the standardized canvas.getContext('2d', { alpha: false }) instead. */
  "mozOpaque": (value: string) => HTMLElements["canvas"];
  "role": (value: string) => HTMLElements["canvas"];
  "width": (value: number) => HTMLElements["canvas"];
} & GlobalAriaAttributes<"canvas"> & GlobalHTMLAttributes<"canvas">;

type captionElement = {
  /** @deprecated This enumerated attribute indicates how the caption must be aligned with respect to the table. It may have one of the following values: left The caption is displayed to the left of the table. top The caption is displayed above the table. right The caption is displayed to the right of the table. bottom The caption is displayed below the table. Warning: Do not use this attribute, as it has been deprecated. The <caption> element should be styled using the CSS properties caption-side and text-align. */
  "align": (value: string) => HTMLElements["caption"];
  "role": (value: string) => HTMLElements["caption"];
} & GlobalAriaAttributes<"caption"> & GlobalHTMLAttributes<"caption">;

type centerElement = {
} & GlobalAriaAttributes<"center"> & GlobalHTMLAttributes<"center">;

type citeElement = {
  "role": (value: string) => HTMLElements["cite"];
} & GlobalAriaAttributes<"cite"> & GlobalHTMLAttributes<"cite">;

type codeElement = {
  "role": (value: string) => HTMLElements["code"];
} & GlobalAriaAttributes<"code"> & GlobalHTMLAttributes<"code">;

type colElement = {
  /** @deprecated This enumerated attribute specifies how horizontal alignment of each column cell content will be handled. Possible values are: left, aligning the content to the left of the cell center, centering the content in the cell right, aligning the content to the right of the cell justify, inserting spaces into the textual content so that the content is justified in the cell If this attribute is not set, its value is inherited from the align of the <colgroup> element this <col> element belongs too. If there are none, the left value is assumed. Note: To achieve the same effect as the left, center, right or justify values, do not try to set the text-align property on a selector giving a <col> element. Because <td> elements are not descendant of the <col> element, they won't inherit it. If the table doesn't use a colspan attribute, use the td:nth-child(an+b) CSS selector. Set a to zero and b to the position of the column in the table, e.g. td:nth-child(2) { text-align: right; } to right-align the second column. If the table does use a colspan attribute, the effect can be achieved by combining adequate CSS attribute selectors like [colspan=n], though this is not trivial. */
  "align": (value: string) => HTMLElements["col"];
  /** @deprecated The background color of the table. It is a 6-digit hexadecimal RGB code, prefixed by a '#'. One of the predefined color keywords can also be used. To achieve a similar effect, use the CSS background-color property. */
  "bgcolor": (value: string) => HTMLElements["col"];
  /** @deprecated This attribute is used to set the character to align the cells in a column on. Typical values for this include a period (.) when attempting to align numbers or monetary values. If align is not set to char, this attribute is ignored. */
  "char": (value: string) => HTMLElements["col"];
  /** @deprecated This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the char attribute. */
  "charoff": (value: string) => HTMLElements["col"];
  "role": (value: string) => HTMLElements["col"];
  "span": (value: string) => HTMLElements["col"];
  /** @deprecated This attribute specifies the vertical alignment of the text within each cell of the column. Possible values for this attribute are: baseline, which will put the text as close to the bottom of the cell as it is possible, but align it on the baseline of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as bottom. bottom, which will put the text as close to the bottom of the cell as it is possible; middle, which will center the text in the cell; and top, which will put the text as close to the top of the cell as it is possible. Note: Do not try to set the vertical-align property on a selector giving a <col> element. Because <td> elements are not descendant of the <col> element, they won't inherit it. If the table doesn't use a colspan attribute, use the td:nth-child(an+b) CSS selector where a is the total number of the columns in the table and b is the ordinal position of the column in the table. Only after this selector the vertical-align property can be used. If the table does use a colspan attribute, the effect can be achieved by combining adequate CSS attribute selectors like [colspan=n], though this is not trivial. */
  "valign": (value: string) => HTMLElements["col"];
  /** @deprecated This attribute specifies a default width for each column in the current column group. In addition to the standard pixel and percentage values, this attribute might take the special form 0*, which means that the width of each column in the group should be the minimum width necessary to hold the column's contents. Relative widths such as 5* also can be used. */
  "width": (value: string) => HTMLElements["col"];
} & GlobalAriaAttributes<"col"> & GlobalHTMLAttributes<"col">;

type colgroupElement = {
  /** @deprecated This enumerated attribute specifies how horizontal alignment of each column cell content will be handled. Possible values are: left, aligning the content to the left of the cell center, centering the content in the cell right, aligning the content to the right of the cell justify, inserting spaces into the textual content so that the content is justified in the cell char, aligning the textual content on a special character with a minimal offset, defined by the char and charoff attributes. If this attribute is not set, the left value is assumed. The descendant <col> elements may override this value using their own align attribute. Note: Do not try to set the text-align property on a selector giving a <colgroup> element. Because <td> elements are not descendant of the <colgroup> element, they won't inherit it. If the table doesn't use a colspan attribute, use one td:nth-child(an+b) CSS selector per column, where a is the total number of the columns in the table and b is the ordinal position of this column in the table. Only after this selector the text-align property can be used. If the table does use a colspan attribute, the effect can be achieved by combining adequate CSS attribute selectors like [colspan=n], though this is not trivial. */
  "align": (value: string) => HTMLElements["colgroup"];
  /** @deprecated The background color of the table. It is a 6-digit hexadecimal RGB code, prefixed by a '#'. One of the predefined color keywords can also be used. To achieve a similar effect, use the CSS background-color property. */
  "bgcolor": (value: string) => HTMLElements["colgroup"];
  /** @deprecated This attribute specifies the alignment of the content in a column group to a character. Typical values for this include a period (.) when attempting to align numbers or monetary values. If align is not set to char, this attribute is ignored, though it will still be used as the default value for the align of the <col> which are members of this column group. */
  "char": (value: string) => HTMLElements["colgroup"];
  /** @deprecated This attribute is used to indicate the number of characters to offset the column data from the alignment character specified by the char attribute. */
  "charoff": (value: string) => HTMLElements["colgroup"];
  "role": (value: string) => HTMLElements["colgroup"];
  "span": (value: string) => HTMLElements["colgroup"];
  /** @deprecated This attribute specifies the vertical alignment of the text within each cell of the column. Possible values for this attribute are: baseline, which will put the text as close to the bottom of the cell as it is possible, but align it on the baseline of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as bottom. bottom, which will put the text as close to the bottom of the cell as it is possible; middle, which will center the text in the cell; and top, which will put the text as close to the top of the cell as it is possible. Note: Do not try to set the vertical-align property on a selector giving a <colgroup> element. Because <td> elements are not descendant of the <colgroup> element, they won't inherit it. If the table doesn't use a colspan attribute, use the td:nth-child(an+b) CSS selector per column, where a is the total number of the columns in the table and b is the ordinal position of the column in the table. Only after this selector the vertical-align property can be used. If the table does use a colspan attribute, the effect can be achieved by combining adequate CSS attribute selectors like [colspan=n], though this is not trivial. */
  "valign": (value: string) => HTMLElements["colgroup"];
} & GlobalAriaAttributes<"colgroup"> & GlobalHTMLAttributes<"colgroup">;

type contentElement = {
  /** A comma-separated list of selectors. These have the same syntax as CSS selectors. They select the content to insert in place of the <content> element. */
  "select": (value: string) => HTMLElements["content"];
} & GlobalAriaAttributes<"content"> & GlobalHTMLAttributes<"content">;

type dataElement = {
  "role": (value: string) => HTMLElements["data"];
  "value": (value: string) => HTMLElements["data"];
} & GlobalAriaAttributes<"data"> & GlobalHTMLAttributes<"data">;

type datalistElement = {
  "role": (value: string) => HTMLElements["datalist"];
} & GlobalAriaAttributes<"datalist"> & GlobalHTMLAttributes<"datalist">;

type ddElement = {
  /** If the value of this attribute is set to yes, the definition text will not wrap. The default value is no. */
  "nowrap": (value: string) => HTMLElements["dd"];
  "role": (value: string) => HTMLElements["dd"];
} & GlobalAriaAttributes<"dd"> & GlobalHTMLAttributes<"dd">;

type delElement = {
  "cite": (value: string) => HTMLElements["del"];
  "datetime": (value: string) => HTMLElements["del"];
  "role": (value: string) => HTMLElements["del"];
} & GlobalAriaAttributes<"del"> & GlobalHTMLAttributes<"del">;

type detailsElement = {
  "open": (value: boolean) => HTMLElements["details"];
  "role": (value: string) => HTMLElements["details"];
} & GlobalAriaAttributes<"details"> & GlobalHTMLAttributes<"details">;

type dfnElement = {
  "role": (value: string) => HTMLElements["dfn"];
} & GlobalAriaAttributes<"dfn"> & GlobalHTMLAttributes<"dfn">;

type dialogElement = {
  "open": (value: boolean) => HTMLElements["dialog"];
  "role": (value: string) => HTMLElements["dialog"];
} & GlobalAriaAttributes<"dialog"> & GlobalHTMLAttributes<"dialog">;

type dirElement = {
  /** This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn't work in all browsers. */
  "compact": (value: string) => HTMLElements["dir"];
} & GlobalAriaAttributes<"dir"> & GlobalHTMLAttributes<"dir">;

type divElement = {
  "role": (value: string) => HTMLElements["div"];
} & GlobalAriaAttributes<"div"> & GlobalHTMLAttributes<"div">;

type dlElement = {
  "role": (value: string) => HTMLElements["dl"];
} & GlobalAriaAttributes<"dl"> & GlobalHTMLAttributes<"dl">;

type dtElement = {
  "role": (value: string) => HTMLElements["dt"];
} & GlobalAriaAttributes<"dt"> & GlobalHTMLAttributes<"dt">;

type emElement = {
  "role": (value: string) => HTMLElements["em"];
} & GlobalAriaAttributes<"em"> & GlobalHTMLAttributes<"em">;

type embedElement = {
  /** The displayed height of the resource, in CSS pixels. This must be an absolute value; percentages are not allowed. */
  "height": (value: number) => HTMLElements["embed"];
  "role": (value: string) => HTMLElements["embed"];
  "src": (value: string) => HTMLElements["embed"];
  "type": (value: string) => HTMLElements["embed"];
  /** The displayed width of the resource, in CSS pixels. This must be an absolute value; percentages are not allowed. */
  "width": (value: number) => HTMLElements["embed"];
} & GlobalAriaAttributes<"embed"> & GlobalHTMLAttributes<"embed">;

type fieldsetElement = {
  /** If this Boolean attribute is set, all form controls that are descendants of the <fieldset>, are disabled, meaning they are not editable and won't be submitted along with the <form>. They won't receive any browsing events, like mouse clicks or focus-related events. By default browsers display such controls grayed out. Note that form elements inside the <legend> element won't be disabled. */
  "disabled": (value: boolean) => HTMLElements["fieldset"];
  /** This attribute takes the value of the id attribute of a <form> element you want the <fieldset> to be part of, even if it is not inside the form. Please note that usage of this is confusing — if you want the <input> elements inside the <fieldset> to be associated with the form, you need to use the form attribute directly on those elements. You can check which elements are associated with a form via JavaScript, using HTMLFormElement.elements. */
  "form": (value: string) => HTMLElements["fieldset"];
  /** The name associated with the group. Note: The caption for the fieldset is given by the first <legend> element nested inside it. */
  "name": (value: string) => HTMLElements["fieldset"];
  "role": (value: string) => HTMLElements["fieldset"];
} & GlobalAriaAttributes<"fieldset"> & GlobalHTMLAttributes<"fieldset">;

type figcaptionElement = {
  "role": (value: string) => HTMLElements["figcaption"];
} & GlobalAriaAttributes<"figcaption"> & GlobalHTMLAttributes<"figcaption">;

type figureElement = {
  "role": (value: string) => HTMLElements["figure"];
} & GlobalAriaAttributes<"figure"> & GlobalHTMLAttributes<"figure">;

type fontElement = {
  /** This attribute sets the text color using either a named color or a color specified in the hexadecimal #RRGGBB format. */
  "color": (value: string) => HTMLElements["font"];
  /** This attribute contains a comma-separated list of one or more font names. The document text in the default style is rendered in the first font face that the client's browser supports. If no font listed is installed on the local system, the browser typically defaults to the proportional or fixed-width font for that system. */
  "face": (value: string) => HTMLElements["font"];
  /** This attribute specifies the font size as either a numeric or relative value. Numeric values range from 1 to 7 with 1 being the smallest and 3 the default. It can be defined using a relative value, like +2 or -3, which set it relative to the value of the size attribute of the <basefont> element, or relative to 3, the default value, if none does exist. */
  "size": (value: string) => HTMLElements["font"];
} & GlobalAriaAttributes<"font"> & GlobalHTMLAttributes<"font">;

type footerElement = {
  "role": (value: string) => HTMLElements["footer"];
} & GlobalAriaAttributes<"footer"> & GlobalHTMLAttributes<"footer">;

type formElement = {
  /** @deprecated Comma-separated content types the server accepts. Note: This attribute was removed in HTML5 and should not be used. Instead, use the accept attribute on <input type=file> elements. */
  "accept": (value: string) => HTMLElements["form"];
  "acceptCharset": (value: "utf-8") => HTMLElements["form"];
  "action": (value: string) => HTMLElements["form"];
  "autocomplete": (value: "on" | "off") => HTMLElements["form"];
  "enctype": (value: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain") => HTMLElements["form"];
  "method": (value: "post" | "get" | "dialog") => HTMLElements["form"];
  "name": (value: string) => HTMLElements["form"];
  "novalidate": (value: boolean) => HTMLElements["form"];
  "rel": (value: string) => HTMLElements["form"];
  "role": (value: string) => HTMLElements["form"];
  "target": (value: string) => HTMLElements["form"];
} & GlobalAriaAttributes<"form"> & GlobalHTMLAttributes<"form">;

type frameElement = {
  /** This attribute allows you to specify a frame's border. */
  "frameborder": (value: string) => HTMLElements["frame"];
  /** This attribute defines the height of the margin between frames. */
  "marginheight": (value: string) => HTMLElements["frame"];
  /** This attribute defines the width of the margin between frames. */
  "marginwidth": (value: string) => HTMLElements["frame"];
  /** This attribute is used for labeling frames. Without labeling, every link will open in the frame that it's in – the closest parent frame. See the target attribute for more information. */
  "name": (value: string) => HTMLElements["frame"];
  /** This attribute prevents resizing of frames by users. */
  "noresize": (value: string) => HTMLElements["frame"];
  /** This attribute defines the existence of a scrollbar. If this attribute is not used, the browser adds a scrollbar when necessary. There are two choices: "yes" for forcing a scrollbar even when it is not necessary and "no" for forcing no scrollbar even when it is necessary. */
  "scrolling": (value: string) => HTMLElements["frame"];
  /** This attribute specifies the document that will be displayed by the frame. */
  "src": (value: string) => HTMLElements["frame"];
} & GlobalAriaAttributes<"frame"> & GlobalHTMLAttributes<"frame">;

type framesetElement = {
  /** This attribute specifies the number and size of horizontal spaces in a frameset. */
  "cols": (value: string) => HTMLElements["frameset"];
  /** This attribute specifies the number and size of vertical spaces in a frameset. */
  "rows": (value: string) => HTMLElements["frameset"];
} & GlobalAriaAttributes<"frameset"> & GlobalHTMLAttributes<"frameset">;

type h1Element = {
  "role": (value: string) => HTMLElements["h1"];
} & GlobalAriaAttributes<"h1"> & GlobalHTMLAttributes<"h1">;

type h2Element = {
  "role": (value: string) => HTMLElements["h2"];
} & GlobalAriaAttributes<"h2"> & GlobalHTMLAttributes<"h2">;

type h3Element = {
  "role": (value: string) => HTMLElements["h3"];
} & GlobalAriaAttributes<"h3"> & GlobalHTMLAttributes<"h3">;

type h4Element = {
  "role": (value: string) => HTMLElements["h4"];
} & GlobalAriaAttributes<"h4"> & GlobalHTMLAttributes<"h4">;

type h5Element = {
  "role": (value: string) => HTMLElements["h5"];
} & GlobalAriaAttributes<"h5"> & GlobalHTMLAttributes<"h5">;

type headElement = {
  /** @deprecated The URIs of one or more metadata profiles, separated by white space. */
  "profile": (value: string) => HTMLElements["head"];
  "role": (value: string) => HTMLElements["head"];
} & GlobalAriaAttributes<"head"> & GlobalHTMLAttributes<"head">;

type headerElement = {
  "role": (value: string) => HTMLElements["header"];
} & GlobalAriaAttributes<"header"> & GlobalHTMLAttributes<"header">;

type hgroupElement = {
  "role": (value: string) => HTMLElements["hgroup"];
} & GlobalAriaAttributes<"hgroup"> & GlobalHTMLAttributes<"hgroup">;

type hrElement = {
  /** @deprecated Sets the alignment of the rule on the page. If no value is specified, the default value is left. */
  "align": (value: string) => HTMLElements["hr"];
  /** Sets the color of the rule through color name or hexadecimal value. */
  "color": (value: string) => HTMLElements["hr"];
  /** @deprecated Sets the rule to have no shading. */
  "noshade": (value: string) => HTMLElements["hr"];
  "role": (value: string) => HTMLElements["hr"];
  /** @deprecated Sets the height, in pixels, of the rule. */
  "size": (value: string) => HTMLElements["hr"];
  /** @deprecated Sets the length of the rule on the page through a pixel or percentage value. */
  "width": (value: string) => HTMLElements["hr"];
} & GlobalAriaAttributes<"hr"> & GlobalHTMLAttributes<"hr">;

type htmlElement = {
  /** @deprecated Specifies the URI of a resource manifest indicating resources that should be cached locally. */
  "manifest": (value: string) => HTMLElements["html"];
  "role": (value: string) => HTMLElements["html"];
  /** @deprecated Specifies the version of the HTML Document Type Definition that governs the current document. This attribute is not needed, because it is redundant with the version information in the document type declaration. */
  "version": (value: string) => HTMLElements["html"];
} & GlobalAriaAttributes<"html"> & GlobalHTMLAttributes<"html">;

type iElement = {
  "role": (value: string) => HTMLElements["i"];
} & GlobalAriaAttributes<"i"> & GlobalHTMLAttributes<"i">;

type iframeElement = {
  /** @deprecated The alignment of this element with respect to the surrounding context. */
  "align": (value: string) => HTMLElements["iframe"];
  "allow": (value: string) => HTMLElements["iframe"];
  "allowfullscreen": (value: boolean) => HTMLElements["iframe"];
  /** Set to true if a cross-origin <iframe> should be allowed to invoke the Payment Request API. Note: This attribute is considered a legacy attribute and redefined as allow="payment". */
  "allowpaymentrequest": (value: string) => HTMLElements["iframe"];
  /** A Content Security Policy enforced for the embedded resource. See HTMLIFrameElement.csp for details. */
  "csp": (value: string) => HTMLElements["iframe"];
  /** @deprecated The value 1 (the default) draws a border around this frame. The value 0 removes the border around this frame, but you should instead use the CSS property border to control <iframe> borders. */
  "frameborder": (value: string) => HTMLElements["iframe"];
  /** The height of the frame in CSS pixels. Default is 150. */
  "height": (value: number) => HTMLElements["iframe"];
  /** Indicates how the browser should load the iframe: eager: Load the iframe immediately, regardless if it is outside the visible viewport (this is the default value). lazy: Defer loading of the iframe until it reaches a calculated distance from the viewport, as defined by the browser. */
  "loading": (value: "lazy" | "eager") => HTMLElements["iframe"];
  /** @deprecated A URL of a long description of the frame's content. Due to widespread misuse, this is not helpful for non-visual browsers. */
  "longdesc": (value: string) => HTMLElements["iframe"];
  /** @deprecated The amount of space in pixels between the frame's content and its top and bottom borders. */
  "marginheight": (value: string) => HTMLElements["iframe"];
  /** @deprecated The amount of space in pixels between the frame's content and its left and right borders. */
  "marginwidth": (value: string) => HTMLElements["iframe"];
  "name": (value: string) => HTMLElements["iframe"];
  /** Indicates which referrer to send when fetching the frame's resource: no-referrer: The Referer header will not be sent. no-referrer-when-downgrade: The Referer header will not be sent to origins without TLS (HTTPS). origin: The sent referrer will be limited to the origin of the referring page: its scheme, host, and port. origin-when-cross-origin: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path. same-origin: A referrer will be sent for same origin, but cross-origin requests will contain no referrer information. strict-origin: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP). strict-origin-when-cross-origin (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP). unsafe-url: The referrer will include the origin and the path (but not the fragment, password, or username). This value is unsafe, because it leaks origins and paths from TLS-protected resources to insecure origins. */
  "referrerpolicy": (value: "" | "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url") => HTMLElements["iframe"];
  "role": (value: string) => HTMLElements["iframe"];
  "sandbox": (value: string) => HTMLElements["iframe"];
  /** @deprecated Indicates when the browser should provide a scrollbar for the frame: auto: Only when the frame's content is larger than its dimensions. yes: Always show a scrollbar. no: Never show a scrollbar. */
  "scrolling": (value: string) => HTMLElements["iframe"];
  "src": (value: string) => HTMLElements["iframe"];
  "srcdoc": (value: string) => HTMLElements["iframe"];
  /** The width of the frame in CSS pixels. Default is 300. */
  "width": (value: number) => HTMLElements["iframe"];
} & GlobalAriaAttributes<"iframe"> & GlobalHTMLAttributes<"iframe">;

type imageElement = {
} & GlobalAriaAttributes<"image"> & GlobalHTMLAttributes<"image">;

type imgElement = {
  /** @deprecated Aligns the image with its surrounding context. Use the float and/or vertical-align CSS properties instead of this attribute. Allowed values: top Equivalent to vertical-align: top or vertical-align: text-top middle Equivalent to vertical-align: -moz-middle-with-baseline bottom The default, equivalent to vertical-align: unset or vertical-align: initial left Equivalent to float: left right Equivalent to float: right */
  "align": (value: string) => HTMLElements["img"];
  "alt": (value: string) => HTMLElements["img"];
  /** @deprecated The width of a border around the image. Use the border CSS property instead. */
  "border": (value: string) => HTMLElements["img"];
  /** Indicates if the fetching of the image must be done using a CORS request. Image data from a CORS-enabled image returned from a CORS request can be reused in the <canvas> element without being marked "tainted". If the crossorigin attribute is not specified, then a non-CORS request is sent (without the Origin request header), and the browser marks the image as tainted and restricts access to its image data, preventing its usage in <canvas> elements. If the crossorigin attribute is specified, then a CORS request is sent (with the Origin request header); but if the server does not opt into allowing cross-origin access to the image data by the origin site (by not sending any Access-Control-Allow-Origin response header, or by not including the site's origin in any Access-Control-Allow-Origin response header it does send), then the browser blocks the image from loading, and logs a CORS error to the devtools console. Allowed values: anonymous A CORS request is sent with credentials omitted (that is, no cookies, X.509 certificates, or Authorization request header). use-credentials The CORS request is sent with any credentials included (that is, cookies, X.509 certificates, and the Authorization request header). If the server does not opt into sharing credentials with the origin site (by sending back the Access-Control-Allow-Credentials: true response header), then the browser marks the image as tainted and restricts access to its image data. If the attribute has an invalid value, browsers handle it as if the anonymous value was used. See CORS settings attributes for additional information. */
  "crossorigin": (value: "" | "anonymous" | "use-credentials") => HTMLElements["img"];
  "decoding": (value: "sync" | "async" | "auto") => HTMLElements["img"];
  /** The intrinsic height of the image, in pixels. Must be an integer without a unit. */
  "height": (value: number) => HTMLElements["img"];
  /** @deprecated The number of pixels of white space on the left and right of the image. Use the margin CSS property instead. */
  "hspace": (value: string) => HTMLElements["img"];
  /** @deprecated This attribute tells the browser to ignore the actual intrinsic size of the image and pretend it's the size specified in the attribute. Specifically, the image would raster at these dimensions and naturalWidth/naturalHeight on images would return the values specified in this attribute. Explainer, examples */
  "intrinsicsize": (value: string) => HTMLElements["img"];
  "ismap": (value: boolean) => HTMLElements["img"];
  /** Indicates how the browser should load the image: eager: Loads the image immediately, regardless of whether or not the image is currently within the visible viewport (this is the default value). lazy: Defers loading the image until it reaches a calculated distance from the viewport, as defined by the browser. The intent is to avoid the network and storage bandwidth needed to handle the image until it's reasonably certain that it will be needed. This generally improves the performance of the content in most typical use cases. Note: Loading is only deferred when JavaScript is enabled. This is an anti-tracking measure, because if a user agent supported lazy loading when scripting is disabled, it would still be possible for a site to track a user's approximate scroll position throughout a session, by strategically placing images in a page's markup such that a server can track how many images are requested and when. */
  "loading": (value: "lazy" | "eager") => HTMLElements["img"];
  /** @deprecated A link to a more detailed description of the image. Possible values are a URL or an element id. Note: This attribute is mentioned in the latest W3C version, HTML 5.2, but has been removed from the WHATWG's HTML Living Standard. It has an uncertain future; authors should use a WAI-ARIA alternative such as aria-describedby or aria-details. */
  "longdesc": (value: string) => HTMLElements["img"];
  /** @deprecated A name for the element. Use the id attribute instead. */
  "name": (value: string) => HTMLElements["img"];
  /** A string indicating which referrer to use when fetching the resource: no-referrer: The Referer header will not be sent. no-referrer-when-downgrade: The Referer header will not be sent to origins without TLS (HTTPS). origin: The sent referrer will be limited to the origin of the referring page: its scheme, host, and port. origin-when-cross-origin: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path. same-origin: A referrer will be sent for same origin, but cross-origin requests will contain no referrer information. strict-origin: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP). strict-origin-when-cross-origin (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP). unsafe-url: The referrer will include the origin and the path (but not the fragment, password, or username). This value is unsafe, because it leaks origins and paths from TLS-protected resources to insecure origins. */
  "referrerpolicy": (value: "" | "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url") => HTMLElements["img"];
  "role": (value: string) => HTMLElements["img"];
  /** One or more strings separated by commas, indicating a set of source sizes. Each source size consists of: A media condition. This must be omitted for the last item in the list. A source size value. Media Conditions describe properties of the viewport, not of the image. For example, (max-height: 500px) 1000px proposes to use a source of 1000px width, if the viewport is not higher than 500px. Source size values specify the intended display size of the image. User agents use the current source size to select one of the sources supplied by the srcset attribute, when those sources are described using width (w) descriptors. The selected source size affects the intrinsic size of the image (the image's display size if no CSS styling is applied). If the srcset attribute is absent, or contains no values with a width descriptor, then the sizes attribute has no effect. */
  "sizes": (value: string) => HTMLElements["img"];
  "src": (value: string) => HTMLElements["img"];
  /** One or more strings separated by commas, indicating possible image sources for the user agent to use. Each string is composed of: A URL to an image Optionally, whitespace followed by one of: A width descriptor (a positive integer directly followed by w). The width descriptor is divided by the source size given in the sizes attribute to calculate the effective pixel density. A pixel density descriptor (a positive floating point number directly followed by x). If no descriptor is specified, the source is assigned the default descriptor of 1x. It is incorrect to mix width descriptors and pixel density descriptors in the same srcset attribute. Duplicate descriptors (for instance, two sources in the same srcset which are both described with 2x) are also invalid. The user agent selects any of the available sources at its discretion. This provides them with significant leeway to tailor their selection based on things like user preferences or bandwidth conditions. See our Responsive images tutorial for an example. */
  "srcset": (value: string) => HTMLElements["img"];
  "usemap": (value: string) => HTMLElements["img"];
  /** @deprecated The number of pixels of white space above and below the image. Use the margin CSS property instead. */
  "vspace": (value: string) => HTMLElements["img"];
  /** The intrinsic width of the image in pixels. Must be an integer without a unit. */
  "width": (value: number) => HTMLElements["img"];
} & GlobalAriaAttributes<"img"> & GlobalHTMLAttributes<"img">;

type inputElement = {
  "accept": (value: string) => HTMLElements["input"];
  "alt": (value: string) => HTMLElements["input"];
  "autocomplete": (value: string) => HTMLElements["input"];
  /** A Safari extension, the autocorrect attribute is a string which indicates whether or not to activate automatic correction while the user is editing this field. Permitted values are: on Enable automatic correction of typos, as well as processing of text substitutions if any are configured. off Disable automatic correction and text substitutions. */
  "autocorrect": (value: string) => HTMLElements["input"];
  /** Introduced in the HTML Media Capture specification and valid for the file input type only, the capture attribute defines which media—microphone, video, or camera—should be used to capture a new file for upload with file upload control in supporting scenarios. See the file input type. */
  "capture": (value: string) => HTMLElements["input"];
  "checked": (value: boolean) => HTMLElements["input"];
  "dirname": (value: string) => HTMLElements["input"];
  /** A Boolean attribute which, if present, indicates that the user should not be able to interact with the input. Disabled inputs are typically rendered with a dimmer color or using some other form of indication that the field is not available for use. Specifically, disabled inputs do not receive the click event, and disabled inputs are not submitted with the form. Note: Although not required by the specification, Firefox will by default persist the dynamic disabled state of an <input> across page loads. Use the autocomplete attribute to control this feature. */
  "disabled": (value: boolean) => HTMLElements["input"];
  /** A string specifying the <form> element with which the input is associated (that is, its form owner). This string's value, if present, must match the id of a <form> element in the same document. If this attribute isn't specified, the <input> element is associated with the nearest containing form, if any. The form attribute lets you place an input anywhere in the document but have it included with a form elsewhere in the document. Note: An input can only be associated with one form. */
  "form": (value: string) => HTMLElements["input"];
  /** Valid for the image and submit input types only. See the submit input type for more information. */
  "formaction": (value: string) => HTMLElements["input"];
  /** Valid for the image and submit input types only. See the submit input type for more information. */
  "formenctype": (value: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain") => HTMLElements["input"];
  /** Valid for the image and submit input types only. See the submit input type for more information. */
  "formmethod": (value: "post" | "get" | "dialog") => HTMLElements["input"];
  /** Valid for the image and submit input types only. See the submit input type for more information. */
  "formnovalidate": (value: boolean) => HTMLElements["input"];
  /** Valid for the image and submit input types only. See the submit input type for more information. */
  "formtarget": (value: string) => HTMLElements["input"];
  "height": (value: number) => HTMLElements["input"];
  /** The Boolean attribute incremental is a WebKit and Blink extension (so supported by Safari, Opera, Chrome, etc.) which, if present, tells the user agent to process the input as a live search. As the user edits the value of the field, the user agent sends search events to the HTMLInputElement object representing the search box. This allows your code to update the search results in real time as the user edits the search. If incremental is not specified, the search event is only sent when the user explicitly initiates a search (such as by pressing the Enter or Return key while editing the field). The search event is rate-limited so that it is not sent more frequently than an implementation-defined interval. */
  "incremental": (value: string) => HTMLElements["input"];
  "list": (value: string) => HTMLElements["input"];
  "max": (value: string) => HTMLElements["input"];
  "maxlength": (value: number) => HTMLElements["input"];
  "min": (value: string) => HTMLElements["input"];
  "minlength": (value: number) => HTMLElements["input"];
  /** A Mozilla extension, supported by Firefox for Android, which provides a hint as to what sort of action will be taken if the user presses the Enter or Return key while editing the field. This information is used to decide what kind of label to use on the Enter key on the virtual keyboard. Note: This has been standardized as the global attribute enterkeyhint, but is not yet widely implemented. To see the status of the change being implemented in Firefox, see bug 1490661. Permitted values are: go, done, next, search, and send. The browser decides, using this hint, what label to put on the enter key. */
  "mozactionhint": (value: string) => HTMLElements["input"];
  "multiple": (value: boolean) => HTMLElements["input"];
  /** A string specifying a name for the input control. This name is submitted along with the control's value when the form data is submitted. Consider the name a required attribute (even though it's not). If an input has no name specified, or name is empty, the input's value is not submitted with the form! (Disabled controls, unchecked radio buttons, unchecked checkboxes, and reset buttons are also not sent.) There are two special cases: _charset_ : If used as the name of an <input> element of type hidden, the input's value is automatically set by the user agent to the character encoding being used to submit the form. isindex: For historical reasons, the name isindex is not allowed. The name attribute creates a unique behavior for radio buttons. Only one radio button in a same-named group of radio buttons can be checked at a time. Selecting any radio button in that group automatically deselects any currently-selected radio button in the same group. The value of that one checked radio button is sent along with the name if the form is submitted, When tabbing into a series of same-named group of radio buttons, if one is checked, that one will receive focus. If they aren't grouped together in source order, if one of the group is checked, tabbing into the group starts when the first one in the group is encountered, skipping all those that aren't checked. In other words, if one is checked, tabbing skips the unchecked radio buttons in the group. If none are checked, the radio button group receives focus when the first button in the same name group is reached. Once one of the radio buttons in a group has focus, using the arrow keys will navigate through all the radio buttons of the same name, even if the radio buttons are not grouped together in the source order. When an input element is given a name, that name becomes a property of the owning form element's HTMLFormElement.elements property. If you have an input whose name is set to guest and another whose name is hat-size, the following code can be used: let form = document.querySelector("form"); let guestName = form.elements.guest; let hatSize = form.elements["hat-size"]; When this code has run, guestName will be the HTMLInputElement for the guest field, and hatSize the object for the hat-size field. Warning: Avoid giving form elements a name that corresponds to a built-in property of the form, since you would then override the predefined property or method with this reference to the corresponding input. */
  "name": (value: string) => HTMLElements["input"];
  /** Similar to the -moz-orient non-standard CSS property impacting the <progress> and <meter> elements, the orient attribute defines the orientation of the range slider. Values include horizontal, meaning the range is rendered horizontally, and vertical, where the range is rendered vertically. */
  "orient": (value: string) => HTMLElements["input"];
  "pattern": (value: string) => HTMLElements["input"];
  "placeholder": (value: string) => HTMLElements["input"];
  "readonly": (value: boolean) => HTMLElements["input"];
  "required": (value: boolean) => HTMLElements["input"];
  /** The results attribute—supported only by Safari—is a numeric value that lets you override the maximum number of entries to be displayed in the <input> element's natively-provided drop-down menu of previous search queries. The value must be a non-negative decimal number. If not provided, or an invalid value is given, the browser's default maximum number of entries is used. */
  "results": (value: string) => HTMLElements["input"];
  "role": (value: string) => HTMLElements["input"];
  "size": (value: string) => HTMLElements["input"];
  "src": (value: string) => HTMLElements["input"];
  "step": (value: string) => HTMLElements["input"];
  "type": (value: "hidden" | "text" | "search" | "tel" | "url" | "email" | "password" | "date" | "month" | "week" | "time" | "datetime-local" | "number" | "range" | "color" | "checkbox" | "radio" | "file" | "submit" | "image" | "reset" | "button") => HTMLElements["input"];
  "value": (value: string) => HTMLElements["input"];
  /** The Boolean webkitdirectory attribute, if present, indicates that only directories should be available to be selected by the user in the file picker interface. See HTMLInputElement.webkitdirectory for additional details and examples. Though originally implemented only for WebKit-based browsers, webkitdirectory is also usable in Microsoft Edge as well as Firefox 50 and later. However, even though it has relatively broad support, it is still not standard and should not be used unless you have no alternative. */
  "webkitdirectory": (value: string) => HTMLElements["input"];
  "width": (value: number) => HTMLElements["input"];
} & GlobalAriaAttributes<"input"> & GlobalHTMLAttributes<"input">;

type insElement = {
  "cite": (value: string) => HTMLElements["ins"];
  "datetime": (value: string) => HTMLElements["ins"];
  "role": (value: string) => HTMLElements["ins"];
} & GlobalAriaAttributes<"ins"> & GlobalHTMLAttributes<"ins">;

type isindexElement = {
} & GlobalAriaAttributes<"isindex"> & GlobalHTMLAttributes<"isindex">;

type kbdElement = {
  "role": (value: string) => HTMLElements["kbd"];
} & GlobalAriaAttributes<"kbd"> & GlobalHTMLAttributes<"kbd">;

type keygenElement = {
  /** A challenge string that is submitted along with the public key. Defaults to an empty string if not specified. */
  "challenge": (value: string) => HTMLElements["keygen"];
  /** This Boolean attribute indicates that the form control is not available for interaction. */
  "disabled": (value: string) => HTMLElements["keygen"];
  /** The form element that this element is associated with (its form owner). The value of the attribute must be an id of a <form> element in the same document. If this attribute is not specified, this element must be a descendant of a <form> element. This attribute enables you to place <keygen> elements anywhere within a document, not just as descendants of their form elements. */
  "form": (value: string) => HTMLElements["keygen"];
  /** The type of key generated. The default value is RSA. */
  "keytype": (value: string) => HTMLElements["keygen"];
  /** The name of the control, which is submitted with the form data. */
  "name": (value: string) => HTMLElements["keygen"];
} & GlobalAriaAttributes<"keygen"> & GlobalHTMLAttributes<"keygen">;

type labelElement = {
  "for": (value: string) => HTMLElements["label"];
  "role": (value: string) => HTMLElements["label"];
} & GlobalAriaAttributes<"label"> & GlobalHTMLAttributes<"label">;

type legendElement = {
  "role": (value: string) => HTMLElements["legend"];
} & GlobalAriaAttributes<"legend"> & GlobalHTMLAttributes<"legend">;

type liElement = {
  "role": (value: string) => HTMLElements["li"];
  /** @deprecated This character attribute indicates the numbering type: a: lowercase letters A: uppercase letters i: lowercase Roman numerals I: uppercase Roman numerals 1: numbers This type overrides the one used by its parent <ol> element, if any. Note: This attribute has been deprecated; use the CSS list-style-type property instead. */
  "type": (value: string) => HTMLElements["li"];
  "value": (value: string) => HTMLElements["li"];
} & GlobalAriaAttributes<"li"> & GlobalHTMLAttributes<"li">;

type linkElement = {
  "as": (value: "fetch" | "audio" | "audioworklet" | "document" | "embed" | "font" | "frame" | "iframe" | "image" | "manifest" | "object" | "paintworklet" | "report" | "script" | "serviceworker" | "sharedworker" | "style" | "track" | "video" | "worker" | "xslt") => HTMLElements["link"];
  "blocking": (value: "render") => HTMLElements["link"];
  /** @deprecated This attribute defines the character encoding of the linked resource. The value is a space- and/or comma-delimited list of character sets as defined in RFC 2045. The default value is iso-8859-1. Note: To produce the same effect as this obsolete attribute, use the Content-Type HTTP header on the linked resource. */
  "charset": (value: string) => HTMLElements["link"];
  "color": (value: string) => HTMLElements["link"];
  /** This enumerated attribute indicates whether CORS must be used when fetching the resource. CORS-enabled images can be reused in the <canvas> element without being tainted. The allowed values are: anonymous A cross-origin request (i.e. with an Origin HTTP header) is performed, but no credential is sent (i.e. no cookie, X.509 certificate, or HTTP Basic authentication). If the server does not give credentials to the origin site (by not setting the Access-Control-Allow-Origin HTTP header) the resource will be tainted and its usage restricted. use-credentials A cross-origin request (i.e. with an Origin HTTP header) is performed along with a credential sent (i.e. a cookie, certificate, and/or HTTP Basic authentication is performed). If the server does not give credentials to the origin site (through Access-Control-Allow-Credentials HTTP header), the resource will be tainted and its usage restricted. If the attribute is not present, the resource is fetched without a CORS request (i.e. without sending the Origin HTTP header), preventing its non-tainted usage. If invalid, it is handled as if the enumerated keyword anonymous was used. See CORS settings attributes for additional information. */
  "crossorigin": (value: "" | "anonymous" | "use-credentials") => HTMLElements["link"];
  "disabled": (value: boolean) => HTMLElements["link"];
  /** This attribute specifies the URL of the linked resource. A URL can be absolute or relative. */
  "href": (value: string) => HTMLElements["link"];
  /** This attribute indicates the language of the linked resource. It is purely advisory. Allowed values are specified by RFC 5646: Tags for Identifying Languages (also known as BCP 47). Use this attribute only if the href attribute is present. */
  "hreflang": (value: string) => HTMLElements["link"];
  "imagesizes": (value: string) => HTMLElements["link"];
  "imagesrcset": (value: string) => HTMLElements["link"];
  "integrity": (value: string) => HTMLElements["link"];
  /** This attribute specifies the media that the linked resource applies to. Its value must be a media type / media query. This attribute is mainly useful when linking to external stylesheets — it allows the user agent to pick the best adapted one for the device it runs on. Note: In HTML 4, this can only be a simple white-space-separated list of media description literals, i.e., media types and groups, where defined and allowed as values for this attribute, such as print, screen, aural, braille. HTML5 extended this to any kind of media queries, which are a superset of the allowed values of HTML 4. Browsers not supporting CSS3 Media Queries won't necessarily recognize the adequate link; do not forget to set fallback links, the restricted set of media queries defined in HTML 4. */
  "media": (value: string) => HTMLElements["link"];
  /** The value of this attribute provides information about the functions that might be performed on an object. The values generally are given by the HTTP protocol when it is used, but it might (for similar reasons as for the title attribute) be useful to include advisory information in advance in the link. For example, the browser might choose a different rendering of a link as a function of the methods specified; something that is searchable might get a different icon, or an outside link might render with an indication of leaving the current site. This attribute is not well understood nor supported, even by the defining browser, Internet Explorer 4. */
  "methods": (value: string) => HTMLElements["link"];
  /** Identifies a resource that might be required by the next navigation and that the user agent should retrieve it. This allows the user agent to respond faster when the resource is requested in the future. */
  "prefetch": (value: string) => HTMLElements["link"];
  /** A string indicating which referrer to use when fetching the resource: no-referrer means that the Referer header will not be sent. no-referrer-when-downgrade means that no Referer header will be sent when navigating to an origin without TLS (HTTPS). This is a user agent's default behavior, if no policy is otherwise specified. origin means that the referrer will be the origin of the page, which is roughly the scheme, the host, and the port. origin-when-cross-origin means that navigating to other origins will be limited to the scheme, the host, and the port, while navigating on the same origin will include the referrer's path. unsafe-url means that the referrer will include the origin and the path (but not the fragment, password, or username). This case is unsafe because it can leak origins and paths from TLS-protected resources to insecure origins. */
  "referrerpolicy": (value: "" | "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url") => HTMLElements["link"];
  "rel": (value: string) => HTMLElements["link"];
  /** @deprecated The value of this attribute shows the relationship of the current document to the linked document, as defined by the href attribute. The attribute thus defines the reverse relationship compared to the value of the rel attribute. Link type values for the attribute are similar to the possible values for rel. Note: Instead of rev, you should use the rel attribute with the opposite link type value. For example, to establish the reverse link for made, specify author. Also this attribute doesn't stand for "revision" and must not be used with a version number, even though many sites misuse it in this way. */
  "rev": (value: string) => HTMLElements["link"];
  "role": (value: string) => HTMLElements["link"];
  "sizes": (value: string) => HTMLElements["link"];
  /** Defines the frame or window name that has the defined linking relationship or that will show the rendering of any linked resource. */
  "target": (value: string) => HTMLElements["link"];
  /** This attribute is used to define the type of the content linked to. The value of the attribute should be a MIME type such as text/html, text/css, and so on. The common use of this attribute is to define the type of stylesheet being referenced (such as text/css), but given that CSS is the only stylesheet language used on the web, not only is it possible to omit the type attribute, but is actually now recommended practice. It is also used on rel="preload" link types, to make sure the browser only downloads file types that it supports. */
  "type": (value: string) => HTMLElements["link"];
} & GlobalAriaAttributes<"link"> & GlobalHTMLAttributes<"link">;

type listingElement = {
} & GlobalAriaAttributes<"listing"> & GlobalHTMLAttributes<"listing">;

type mainElement = {
  "role": (value: string) => HTMLElements["main"];
} & GlobalAriaAttributes<"main"> & GlobalHTMLAttributes<"main">;

type mapElement = {
  "name": (value: string) => HTMLElements["map"];
  "role": (value: string) => HTMLElements["map"];
} & GlobalAriaAttributes<"map"> & GlobalHTMLAttributes<"map">;

type markElement = {
  "role": (value: string) => HTMLElements["mark"];
} & GlobalAriaAttributes<"mark"> & GlobalHTMLAttributes<"mark">;

type marqueeElement = {
  /** Sets how the text is scrolled within the marquee. Possible values are scroll, slide and alternate. If no value is specified, the default value is scroll. */
  "behavior": (value: string) => HTMLElements["marquee"];
  /** Sets the background color through color name or hexadecimal value. */
  "bgcolor": (value: string) => HTMLElements["marquee"];
  /** Sets the direction of the scrolling within the marquee. Possible values are left, right, up and down. If no value is specified, the default value is left. */
  "direction": (value: string) => HTMLElements["marquee"];
  /** Sets the height in pixels or percentage value. */
  "height": (value: string) => HTMLElements["marquee"];
  /** Sets the horizontal margin */
  "hspace": (value: string) => HTMLElements["marquee"];
  /** Sets the number of times the marquee will scroll. If no value is specified, the default value is −1, which means the marquee will scroll continuously. */
  "loop": (value: string) => HTMLElements["marquee"];
  /** Sets the amount of scrolling at each interval in pixels. The default value is 6. */
  "scrollamount": (value: string) => HTMLElements["marquee"];
  /** Sets the interval between each scroll movement in milliseconds. The default value is 85. Note that any value smaller than 60 is ignored and the value 60 is used instead, unlesstruespeedis specified. */
  "scrolldelay": (value: string) => HTMLElements["marquee"];
  /** By default,scrolldelayvalues lower than 60 are ignored. Iftruespeedis present, those values are not ignored. */
  "truespeed": (value: string) => HTMLElements["marquee"];
  /** Sets the vertical margin in pixels or percentage value. */
  "vspace": (value: string) => HTMLElements["marquee"];
  /** Sets the width in pixels or percentage value. */
  "width": (value: string) => HTMLElements["marquee"];
} & GlobalAriaAttributes<"marquee"> & GlobalHTMLAttributes<"marquee">;

type menuElement = {
  "role": (value: string) => HTMLElements["menu"];
} & GlobalAriaAttributes<"menu"> & GlobalHTMLAttributes<"menu">;

type menuitemElement = {
  /** Boolean attribute which indicates whether the command is selected. May only be used when the type attribute is checkbox or radio. */
  "checked": (value: string) => HTMLElements["menuitem"];
  /** Specifies the ID of a separate element, indicating a command to be invoked indirectly. May not be used within a menu item that also includes the attributes checked, disabled, icon, label, radiogroup or type. */
  "command": (value: string) => HTMLElements["menuitem"];
  /** This Boolean attribute indicates use of the same command as the menu's subject element (such as a button or input). */
  "default": (value: string) => HTMLElements["menuitem"];
  /** Boolean attribute which indicates that the command is not available in the current state. Note that disabled is distinct from hidden; the disabled attribute is appropriate in any context where a change in circumstances might render the command relevant. */
  "disabled": (value: string) => HTMLElements["menuitem"];
  /** Image URL, used to provide a picture to represent the command. */
  "icon": (value: string) => HTMLElements["menuitem"];
  /** The name of the command as shown to the user. Required when a command attribute is not present. */
  "label": (value: string) => HTMLElements["menuitem"];
  /** This attribute specifies the name of a group of commands to be toggled as radio buttons when selected. May only be used where the type attribute is radio. */
  "radiogroup": (value: string) => HTMLElements["menuitem"];
  /** This attribute indicates the kind of command, and can be one of three values. command: A regular command with an associated action. This is the missing value default. checkbox: Represents a command that can be toggled between two different states. radio: Represent one selection from a group of commands that can be toggled as radio buttons. */
  "type": (value: string) => HTMLElements["menuitem"];
} & GlobalAriaAttributes<"menuitem"> & GlobalHTMLAttributes<"menuitem">;

type metaElement = {
  "charset": (value: "utf-8") => HTMLElements["meta"];
  "content": (value: string) => HTMLElements["meta"];
  "httpEquiv": (value: "content-type" | "default-style" | "refresh" | "x-ua-compatible" | "content-security-policy") => HTMLElements["meta"];
  "media": (value: string) => HTMLElements["meta"];
  "name": (value: string) => HTMLElements["meta"];
  "role": (value: string) => HTMLElements["meta"];
} & GlobalAriaAttributes<"meta"> & GlobalHTMLAttributes<"meta">;

type meterElement = {
  /** The <form> element to associate the <meter> element with (its form owner). The value of this attribute must be the id of a <form> in the same document. If this attribute is not set, the <meter> is associated with its ancestor <form> element, if any. This attribute is only used if the <meter> element is being used as a form-associated element, such as one displaying a range corresponding to an <input type="number">. */
  "form": (value: string) => HTMLElements["meter"];
  "high": (value: number) => HTMLElements["meter"];
  "low": (value: number) => HTMLElements["meter"];
  "max": (value: number) => HTMLElements["meter"];
  "min": (value: number) => HTMLElements["meter"];
  "optimum": (value: number) => HTMLElements["meter"];
  "role": (value: string) => HTMLElements["meter"];
  "value": (value: number) => HTMLElements["meter"];
} & GlobalAriaAttributes<"meter"> & GlobalHTMLAttributes<"meter">;

type multicolElement = {
} & GlobalAriaAttributes<"multicol"> & GlobalHTMLAttributes<"multicol">;

type navElement = {
  "role": (value: string) => HTMLElements["nav"];
} & GlobalAriaAttributes<"nav"> & GlobalHTMLAttributes<"nav">;

type nextidElement = {
} & GlobalAriaAttributes<"nextid"> & GlobalHTMLAttributes<"nextid">;

type nobrElement = {
} & GlobalAriaAttributes<"nobr"> & GlobalHTMLAttributes<"nobr">;

type noembedElement = {
} & GlobalAriaAttributes<"noembed"> & GlobalHTMLAttributes<"noembed">;

type noframesElement = {
} & GlobalAriaAttributes<"noframes"> & GlobalHTMLAttributes<"noframes">;

type noscriptElement = {
  "role": (value: string) => HTMLElements["noscript"];
} & GlobalAriaAttributes<"noscript"> & GlobalHTMLAttributes<"noscript">;

type objectElement = {
  /** @deprecated A space-separated list of URIs for archives of resources for the object. */
  "archive": (value: string) => HTMLElements["object"];
  /** @deprecated The width of a border around the control, in pixels. */
  "border": (value: string) => HTMLElements["object"];
  /** @deprecated The URI of the object's implementation. It can be used together with, or in place of, the data attribute. */
  "classid": (value: string) => HTMLElements["object"];
  /** @deprecated The base path used to resolve relative URIs specified by classid, data, or archive. If not specified, the default is the base URI of the current document. */
  "codebase": (value: string) => HTMLElements["object"];
  /** @deprecated The content type of the data specified by classid. */
  "codetype": (value: string) => HTMLElements["object"];
  "data": (value: string) => HTMLElements["object"];
  /** @deprecated The presence of this Boolean attribute makes this element a declaration only. The object must be instantiated by a subsequent <object> element. In HTML5, repeat the <object> element completely each time that the resource is reused. */
  "declare": (value: string) => HTMLElements["object"];
  /** The form element, if any, that the object element is associated with (its form owner). The value of the attribute must be an ID of a <form> element in the same document. */
  "form": (value: string) => HTMLElements["object"];
  /** The height of the displayed resource, in CSS pixels. -- (Absolute values only. NO percentages) */
  "height": (value: number) => HTMLElements["object"];
  "name": (value: string) => HTMLElements["object"];
  "role": (value: string) => HTMLElements["object"];
  /** @deprecated A message that the browser can show while loading the object's implementation and data. */
  "standby": (value: string) => HTMLElements["object"];
  "type": (value: string) => HTMLElements["object"];
  /** A hash-name reference to a <map> element; that is a '#' followed by the value of a name of a map element. */
  "usemap": (value: string) => HTMLElements["object"];
  /** The width of the display resource, in CSS pixels. -- (Absolute values only. NO percentages) */
  "width": (value: number) => HTMLElements["object"];
} & GlobalAriaAttributes<"object"> & GlobalHTMLAttributes<"object">;

type olElement = {
  "reversed": (value: boolean) => HTMLElements["ol"];
  "role": (value: string) => HTMLElements["ol"];
  "start": (value: string) => HTMLElements["ol"];
  "type": (value: "1" | "a" | "A" | "i" | "I") => HTMLElements["ol"];
} & GlobalAriaAttributes<"ol"> & GlobalHTMLAttributes<"ol">;

type optgroupElement = {
  /** If this Boolean attribute is set, none of the items in this option group is selectable. Often browsers grey out such control and it won't receive any browsing events, like mouse clicks or focus-related ones. */
  "disabled": (value: boolean) => HTMLElements["optgroup"];
  "label": (value: string) => HTMLElements["optgroup"];
  "role": (value: string) => HTMLElements["optgroup"];
} & GlobalAriaAttributes<"optgroup"> & GlobalHTMLAttributes<"optgroup">;

type optionElement = {
  /** If this Boolean attribute is set, this option is not checkable. Often browsers grey out such control and it won't receive any browsing event, like mouse clicks or focus-related ones. If this attribute is not set, the element can still be disabled if one of its ancestors is a disabled <optgroup> element. */
  "disabled": (value: boolean) => HTMLElements["option"];
  "label": (value: string) => HTMLElements["option"];
  "role": (value: string) => HTMLElements["option"];
  "selected": (value: boolean) => HTMLElements["option"];
  "value": (value: string) => HTMLElements["option"];
} & GlobalAriaAttributes<"option"> & GlobalHTMLAttributes<"option">;

type outputElement = {
  "for": (value: string) => HTMLElements["output"];
  /** The <form> element to associate the output with (its form owner). The value of this attribute must be the id of a <form> in the same document. (If this attribute is not set, the <output> is associated with its ancestor <form> element, if any.) This attribute lets you associate <output> elements to <form>s anywhere in the document, not just inside a <form>. It can also override an ancestor <form> element. */
  "form": (value: string) => HTMLElements["output"];
  /** The element's name. Used in the form.elements API. */
  "name": (value: string) => HTMLElements["output"];
  "role": (value: string) => HTMLElements["output"];
} & GlobalAriaAttributes<"output"> & GlobalHTMLAttributes<"output">;

type pElement = {
  "role": (value: string) => HTMLElements["p"];
} & GlobalAriaAttributes<"p"> & GlobalHTMLAttributes<"p">;

type paramElement = {
  "name": (value: string) => HTMLElements["param"];
  "role": (value: string) => HTMLElements["param"];
  /** @deprecated Only used if the valuetype is set to ref. Specifies the MIME type of values found at the URI specified by value. */
  "type": (value: string) => HTMLElements["param"];
  "value": (value: string) => HTMLElements["param"];
  /** @deprecated Specifies the type of the value attribute. Possible values are: data: Default value. The value is passed to the object's implementation as a string. ref: The value is a URI to a resource where run-time values are stored. object: An ID of another <object> in the same document. */
  "valuetype": (value: string) => HTMLElements["param"];
} & GlobalAriaAttributes<"param"> & GlobalHTMLAttributes<"param">;

type pictureElement = {
  "role": (value: string) => HTMLElements["picture"];
} & GlobalAriaAttributes<"picture"> & GlobalHTMLAttributes<"picture">;

type plaintextElement = {
} & GlobalAriaAttributes<"plaintext"> & GlobalHTMLAttributes<"plaintext">;

type portalElement = {
  "referrerpolicy": (value: "" | "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url") => HTMLElements["portal"];
  "role": (value: string) => HTMLElements["portal"];
  "src": (value: string) => HTMLElements["portal"];
} & GlobalAriaAttributes<"portal"> & GlobalHTMLAttributes<"portal">;

type preElement = {
  /** @deprecated Contains the preferred count of characters that a line should have. It was a non-standard synonym of width. To achieve such an effect, use CSS width instead. */
  "cols": (value: string) => HTMLElements["pre"];
  "role": (value: string) => HTMLElements["pre"];
  /** @deprecated Contains the preferred count of characters that a line should have. Though technically still implemented, this attribute has no visual effect; to achieve such an effect, use CSS width instead. */
  "width": (value: string) => HTMLElements["pre"];
  /** Is a hint indicating how the overflow must happen. In modern browser this hint is ignored and no visual effect results in its present; to achieve such an effect, use CSS white-space instead. */
  "wrap": (value: string) => HTMLElements["pre"];
} & GlobalAriaAttributes<"pre"> & GlobalHTMLAttributes<"pre">;

type progressElement = {
  "max": (value: number) => HTMLElements["progress"];
  "role": (value: string) => HTMLElements["progress"];
  "value": (value: number) => HTMLElements["progress"];
} & GlobalAriaAttributes<"progress"> & GlobalHTMLAttributes<"progress">;

type qElement = {
  "cite": (value: string) => HTMLElements["q"];
  "role": (value: string) => HTMLElements["q"];
} & GlobalAriaAttributes<"q"> & GlobalHTMLAttributes<"q">;

type rbElement = {
} & GlobalAriaAttributes<"rb"> & GlobalHTMLAttributes<"rb">;

type rpElement = {
  "role": (value: string) => HTMLElements["rp"];
} & GlobalAriaAttributes<"rp"> & GlobalHTMLAttributes<"rp">;

type rtElement = {
  "role": (value: string) => HTMLElements["rt"];
} & GlobalAriaAttributes<"rt"> & GlobalHTMLAttributes<"rt">;

type rtcElement = {
} & GlobalAriaAttributes<"rtc"> & GlobalHTMLAttributes<"rtc">;

type rubyElement = {
  "role": (value: string) => HTMLElements["ruby"];
} & GlobalAriaAttributes<"ruby"> & GlobalHTMLAttributes<"ruby">;

type sElement = {
  "role": (value: string) => HTMLElements["s"];
} & GlobalAriaAttributes<"s"> & GlobalHTMLAttributes<"s">;

type sampElement = {
  "role": (value: string) => HTMLElements["samp"];
} & GlobalAriaAttributes<"samp"> & GlobalHTMLAttributes<"samp">;

type scriptElement = {
  "async": (value: boolean) => HTMLElements["script"];
  "blocking": (value: "render") => HTMLElements["script"];
  /** @deprecated If present, its value must be an ASCII case-insensitive match for "utf-8". It's unnecessary to specify the charset attribute, because documents must use UTF-8, and the script element inherits its character encoding from the document. */
  "charset": (value: string) => HTMLElements["script"];
  /** Normal script elements pass minimal information to the window.onerror for scripts which do not pass the standard CORS checks. To allow error logging for sites which use a separate domain for static media, use this attribute. See CORS settings attributes for a more descriptive explanation of its valid arguments. */
  "crossorigin": (value: "" | "anonymous" | "use-credentials") => HTMLElements["script"];
  "defer": (value: boolean) => HTMLElements["script"];
  "integrity": (value: string) => HTMLElements["script"];
  /** @deprecated Like the type attribute, this attribute identifies the scripting language in use. Unlike the type attribute, however, this attribute's possible values were never standardized. The type attribute should be used instead. */
  "language": (value: string) => HTMLElements["script"];
  "nomodule": (value: boolean) => HTMLElements["script"];
  /** Indicates which referrer to send when fetching the script, or resources fetched by the script: no-referrer: The Referer header will not be sent. no-referrer-when-downgrade: The Referer header will not be sent to origins without TLS (HTTPS). origin: The sent referrer will be limited to the origin of the referring page: its scheme, host, and port. origin-when-cross-origin: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path. same-origin: A referrer will be sent for same origin, but cross-origin requests will contain no referrer information. strict-origin: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP). strict-origin-when-cross-origin (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP). unsafe-url: The referrer will include the origin and the path (but not the fragment, password, or username). This value is unsafe, because it leaks origins and paths from TLS-protected resources to insecure origins. Note: An empty string value ("") is both the default value, and a fallback value if referrerpolicy is not supported. If referrerpolicy is not explicitly specified on the <script> element, it will adopt a higher-level referrer policy, i.e. one set on the whole document or domain. If a higher-level policy is not available, the empty string is treated as being equivalent to strict-origin-when-cross-origin. */
  "referrerpolicy": (value: "" | "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url") => HTMLElements["script"];
  "role": (value: string) => HTMLElements["script"];
  "src": (value: string) => HTMLElements["script"];
  "type": (value: string) => HTMLElements["script"];
} & GlobalAriaAttributes<"script"> & GlobalHTMLAttributes<"script">;

type sectionElement = {
  "role": (value: string) => HTMLElements["section"];
} & GlobalAriaAttributes<"section"> & GlobalHTMLAttributes<"section">;

type selectElement = {
  /** A DOMString providing a hint for a user agent's autocomplete feature. See The HTML autocomplete attribute for a complete list of values and details on how to use autocomplete. */
  "autocomplete": (value: string) => HTMLElements["select"];
  /** This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example <fieldset>; if there is no containing element with the disabled attribute set, then the control is enabled. */
  "disabled": (value: boolean) => HTMLElements["select"];
  /** The <form> element to associate the <select> with (its form owner). The value of this attribute must be the id of a <form> in the same document. (If this attribute is not set, the <select> is associated with its ancestor <form> element, if any.) This attribute lets you associate <select> elements to <form>s anywhere in the document, not just inside a <form>. It can also override an ancestor <form> element. */
  "form": (value: string) => HTMLElements["select"];
  "multiple": (value: boolean) => HTMLElements["select"];
  /** This attribute is used to specify the name of the control. */
  "name": (value: string) => HTMLElements["select"];
  /** A Boolean attribute indicating that an option with a non-empty string value must be selected. */
  "required": (value: boolean) => HTMLElements["select"];
  "role": (value: string) => HTMLElements["select"];
  "size": (value: string) => HTMLElements["select"];
} & GlobalAriaAttributes<"select"> & GlobalHTMLAttributes<"select">;

type shadowElement = {
} & GlobalAriaAttributes<"shadow"> & GlobalHTMLAttributes<"shadow">;

type slotElement = {
  "name": (value: string) => HTMLElements["slot"];
  "role": (value: string) => HTMLElements["slot"];
} & GlobalAriaAttributes<"slot"> & GlobalHTMLAttributes<"slot">;

type smallElement = {
  "role": (value: string) => HTMLElements["small"];
} & GlobalAriaAttributes<"small"> & GlobalHTMLAttributes<"small">;

type sourceElement = {
  "height": (value: number) => HTMLElements["source"];
  "media": (value: string) => HTMLElements["source"];
  "role": (value: string) => HTMLElements["source"];
  "sizes": (value: string) => HTMLElements["source"];
  "src": (value: string) => HTMLElements["source"];
  "srcset": (value: string) => HTMLElements["source"];
  "type": (value: string) => HTMLElements["source"];
  "width": (value: number) => HTMLElements["source"];
} & GlobalAriaAttributes<"source"> & GlobalHTMLAttributes<"source">;

type spacerElement = {
  /** This attribute determines alignment of spacer. Possible values are left, right and center. */
  "align": (value: string) => HTMLElements["spacer"];
  /** This attribute can be used for defining height of spacer in pixels when type is block. */
  "height": (value: string) => HTMLElements["spacer"];
  /** This attribute can be used for defining size of spacer in pixels when type is horizontal or vertical. */
  "size": (value: string) => HTMLElements["spacer"];
  /** This attribute determines type of spacer. Possible values are horizontal, vertical and block. */
  "type": (value: string) => HTMLElements["spacer"];
  /** This attribute can be used for defining width of spacer in pixels when type is block. */
  "width": (value: string) => HTMLElements["spacer"];
} & GlobalAriaAttributes<"spacer"> & GlobalHTMLAttributes<"spacer">;

type spanElement = {
  "role": (value: string) => HTMLElements["span"];
} & GlobalAriaAttributes<"span"> & GlobalHTMLAttributes<"span">;

type strikeElement = {
} & GlobalAriaAttributes<"strike"> & GlobalHTMLAttributes<"strike">;

type strongElement = {
  "role": (value: string) => HTMLElements["strong"];
} & GlobalAriaAttributes<"strong"> & GlobalHTMLAttributes<"strong">;

type styleElement = {
  "blocking": (value: "render") => HTMLElements["style"];
  "media": (value: string) => HTMLElements["style"];
  "role": (value: string) => HTMLElements["style"];
  /** @deprecated This attribute specifies that the styles only apply to the elements of its parent(s) and children. Note: This attribute may be re-introduced in the future per https://github.com/w3c/csswg-drafts/issues/3547. If you want to use the attribute now, you can use a polyfill. */
  "scoped": (value: string) => HTMLElements["style"];
  /** @deprecated This attribute should not be provided: if it is, the only permitted values are the empty string or a case-insensitive match for text/css. */
  "type": (value: string) => HTMLElements["style"];
} & GlobalAriaAttributes<"style"> & GlobalHTMLAttributes<"style">;

type subElement = {
  "role": (value: string) => HTMLElements["sub"];
} & GlobalAriaAttributes<"sub"> & GlobalHTMLAttributes<"sub">;

type summaryElement = {
  "role": (value: string) => HTMLElements["summary"];
} & GlobalAriaAttributes<"summary"> & GlobalHTMLAttributes<"summary">;

type supElement = {
  "role": (value: string) => HTMLElements["sup"];
} & GlobalAriaAttributes<"sup"> & GlobalHTMLAttributes<"sup">;

type tableElement = {
  /** @deprecated This enumerated attribute indicates how the table must be aligned inside the containing document. It may have the following values: left: the table is displayed on the left side of the document; center: the table is displayed in the center of the document; right: the table is displayed on the right side of the document. Set margin-left and margin-right to auto or margin to 0 auto to achieve an effect that is similar to the align attribute. */
  "align": (value: string) => HTMLElements["table"];
  /** @deprecated The background color of the table. It is a 6-digit hexadecimal RGB code, prefixed by a '#'. One of the predefined color keywords can also be used. To achieve a similar effect, use the CSS background-color property. */
  "bgcolor": (value: string) => HTMLElements["table"];
  /** @deprecated This integer attribute defines, in pixels, the size of the frame surrounding the table. If set to 0, the frame attribute is set to void. To achieve a similar effect, use the CSS border shorthand property. */
  "border": (value: string) => HTMLElements["table"];
  /** @deprecated This attribute defines the space between the content of a cell and its border, displayed or not. If the cellpadding's length is defined in pixels, this pixel-sized space will be applied to all four sides of the cell's content. If the length is defined using a percentage value, the content will be centered and the total vertical space (top and bottom) will represent this value. The same is true for the total horizontal space (left and right). To achieve a similar effect, apply the border-collapse property to the <table> element, with its value set to collapse, and the padding property to the <td> elements. */
  "cellpadding": (value: string) => HTMLElements["table"];
  /** @deprecated This attribute defines the size of the space between two cells in a percentage value or pixels. The attribute is applied both horizontally and vertically, to the space between the top of the table and the cells of the first row, the left of the table and the first column, the right of the table and the last column and the bottom of the table and the last row. To achieve a similar effect, apply the border-spacing property to the <table> element. border-spacing does not have any effect if border-collapse is set to collapse. */
  "cellspacing": (value: string) => HTMLElements["table"];
  /** @deprecated This enumerated attribute defines which side of the frame surrounding the table must be displayed. To achieve a similar effect, use the border-style and border-width properties. */
  "frame": (value: string) => HTMLElements["table"];
  "role": (value: string) => HTMLElements["table"];
  /** @deprecated This enumerated attribute defines where rules, i.e. lines, should appear in a table. It can have the following values: none, which indicates that no rules will be displayed; it is the default value; groups, which will cause the rules to be displayed between row groups (defined by the <thead>, <tbody> and <tfoot> elements) and between column groups (defined by the <col> and <colgroup> elements) only; rows, which will cause the rules to be displayed between rows; columns, which will cause the rules to be displayed between columns; all, which will cause the rules to be displayed between rows and columns. To achieve a similar effect, apply the border property to the appropriate <thead>, <tbody>, <tfoot>, <col>, or <colgroup> elements. */
  "rules": (value: string) => HTMLElements["table"];
  /** @deprecated This attribute defines an alternative text that summarizes the content of the table. Use the <caption> element instead. */
  "summary": (value: string) => HTMLElements["table"];
  /** @deprecated This attribute defines the width of the table. Use the CSS width property instead. */
  "width": (value: string) => HTMLElements["table"];
} & GlobalAriaAttributes<"table"> & GlobalHTMLAttributes<"table">;

type tbodyElement = {
  /** @deprecated This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are: left, aligning the content to the left of the cell center, centering the content in the cell right, aligning the content to the right of the cell justify, inserting spaces into the textual content so that the content is justified in the cell char, aligning the textual content on a special character with a minimal offset, defined by the char and charoff attributes. If this attribute is not set, the left value is assumed. As this attribute is deprecated, use the CSS text-align property instead. Note: The equivalent text-align property for the align="char" is not implemented in any browsers yet. See the text-align's browser compatibility section for the <string> value. */
  "align": (value: string) => HTMLElements["tbody"];
  /** @deprecated The background color of the table. It is a 6-digit hexadecimal RGB code, prefixed by a '#'. One of the predefined color keywords can also be used. As this attribute is deprecated, use the CSS background-color property instead. */
  "bgcolor": (value: string) => HTMLElements["tbody"];
  /** @deprecated This attribute is used to set the character to align the cells in a column on. Typical values for this include a period (.) when attempting to align numbers or monetary values. If align is not set to char, this attribute is ignored. */
  "char": (value: string) => HTMLElements["tbody"];
  /** @deprecated This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the char attribute. */
  "charoff": (value: string) => HTMLElements["tbody"];
  "role": (value: string) => HTMLElements["tbody"];
  /** @deprecated This attribute specifies the vertical alignment of the text within each row of cells of the table header. Possible values for this attribute are: baseline, which will put the text as close to the bottom of the cell as it is possible, but align it on the baseline of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as bottom. bottom, which will put the text as close to the bottom of the cell as it is possible; middle, which will center the text in the cell; and top, which will put the text as close to the top of the cell as it is possible. As this attribute is deprecated, use the CSS vertical-align property instead. */
  "valign": (value: string) => HTMLElements["tbody"];
} & GlobalAriaAttributes<"tbody"> & GlobalHTMLAttributes<"tbody">;

type tdElement = {
  /** @deprecated This attribute contains a short abbreviated description of the cell's content. Some user-agents, such as speech readers, may present this description before the content itself. Note: Do not use this attribute as it is obsolete in the latest standard. Alternatively, you can put the abbreviated description inside the cell and place the long content in the title attribute. */
  "abbr": (value: string) => HTMLElements["td"];
  /** @deprecated This enumerated attribute specifies how the cell content's horizontal alignment will be handled. Possible values are: left: The content is aligned to the left of the cell. center: The content is centered in the cell. right: The content is aligned to the right of the cell. justify (with text only): The content is stretched out inside the cell so that it covers its entire width. char (with text only): The content is aligned to a character inside the <th> element with minimal offset. This character is defined by the char and charoff attributes Unimplemented (see bug 2212). The default value when this attribute is not specified is left. Note: To achieve the same effect as the left, center, right or justify values, apply the CSS text-align property to the element. To achieve the same effect as the char value, give the text-align property the same value you would use for the char. Unimplemented in CSS3. */
  "align": (value: string) => HTMLElements["td"];
  /** @deprecated This attribute contains a list of space-separated strings. Each string is the id of a group of cells that this header applies to. */
  "axis": (value: string) => HTMLElements["td"];
  /** @deprecated This attribute defines the background color of each cell in a column. It is a 6-digit hexadecimal RGB code, prefixed by a '#'. One of the predefined color keywords can also be used. To achieve a similar effect, use the CSS background-color property. */
  "bgcolor": (value: string) => HTMLElements["td"];
  /** @deprecated The content in the cell element is aligned to a character. Typical values include a period (.) to align numbers or monetary values. If align is not set to char, this attribute is ignored. */
  "char": (value: string) => HTMLElements["td"];
  /** @deprecated This attribute is used to shift column data to the right of the character specified by the char attribute. Its value specifies the length of this shift. */
  "charoff": (value: string) => HTMLElements["td"];
  /** This attribute contains a non-negative integer value that indicates for how many columns the cell extends. Its default value is 1. Values higher than 1000 will be considered as incorrect and will be set to the default value (1). */
  "colspan": (value: string) => HTMLElements["td"];
  /** This attribute contains a list of space-separated strings, each corresponding to the id attribute of the <th> elements that apply to this element. */
  "headers": (value: string) => HTMLElements["td"];
  /** @deprecated This attribute is used to define a recommended cell height. Use the CSS height property instead. */
  "height": (value: string) => HTMLElements["td"];
  "role": (value: string) => HTMLElements["td"];
  /** This attribute contains a non-negative integer value that indicates for how many rows the cell extends. Its default value is 1; if its value is set to 0, it extends until the end of the table section (<thead>, <tbody>, <tfoot>, even if implicitly defined), that the cell belongs to. Values higher than 65534 are clipped down to 65534. */
  "rowspan": (value: string) => HTMLElements["td"];
  /** @deprecated This enumerated attribute defines the cells that the header (defined in the <th>) element relates to. Only use this attribute with the <th> element to define the row or column for which it is a header. */
  "scope": (value: string) => HTMLElements["td"];
  /** @deprecated This attribute specifies how a text is vertically aligned inside a cell. Possible values for this attribute are: baseline: Positions the text near the bottom of the cell and aligns it with the baseline of the characters instead of the bottom. If characters don't descend below the baseline, the baseline value achieves the same effect as bottom. bottom: Positions the text near the bottom of the cell. middle: Centers the text in the cell. and top: Positions the text near the top of the cell. To achieve a similar effect, use the CSS vertical-align property. */
  "valign": (value: string) => HTMLElements["td"];
  /** @deprecated This attribute is used to define a recommended cell width. Use the CSS width property instead. */
  "width": (value: string) => HTMLElements["td"];
} & GlobalAriaAttributes<"td"> & GlobalHTMLAttributes<"td">;

type templateElement = {
  "role": (value: string) => HTMLElements["template"];
} & GlobalAriaAttributes<"template"> & GlobalHTMLAttributes<"template">;

type textareaElement = {
  /** This attribute indicates whether the value of the control can be automatically completed by the browser. Possible values are: off: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry. on: The browser can automatically complete the value based on values that the user has entered during previous uses. If the autocomplete attribute is not specified on a <textarea> element, then the browser uses the autocomplete attribute value of the <textarea> element's form owner. The form owner is either the <form> element that this <textarea> element is a descendant of or the form element whose id is specified by the form attribute of the input element. For more information, see the autocomplete attribute in <form>. */
  "autocomplete": (value: string) => HTMLElements["textarea"];
  /** A string which indicates whether or not to activate automatic spelling correction and processing of text substitutions (if any are configured) while the user is editing this textarea. Permitted values are: on Enable automatic spelling correction and text substitutions. off Disable automatic spelling correction and text substitutions. */
  "autocorrect": (value: string) => HTMLElements["textarea"];
  "cols": (value: string) => HTMLElements["textarea"];
  "dirname": (value: string) => HTMLElements["textarea"];
  /** This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example <fieldset>; if there is no containing element when the disabled attribute is set, the control is enabled. */
  "disabled": (value: boolean) => HTMLElements["textarea"];
  /** The form element that the <textarea> element is associated with (its "form owner"). The value of the attribute must be the id of a form element in the same document. If this attribute is not specified, the <textarea> element must be a descendant of a form element. This attribute enables you to place <textarea> elements anywhere within a document, not just as descendants of form elements. */
  "form": (value: string) => HTMLElements["textarea"];
  /** The maximum number of characters (UTF-16 code units) that the user can enter. If this value isn't specified, the user can enter an unlimited number of characters. */
  "maxlength": (value: number) => HTMLElements["textarea"];
  /** The minimum number of characters (UTF-16 code units) required that the user should enter. */
  "minlength": (value: number) => HTMLElements["textarea"];
  /** The name of the control. */
  "name": (value: string) => HTMLElements["textarea"];
  "placeholder": (value: string) => HTMLElements["textarea"];
  /** This Boolean attribute indicates that the user cannot modify the value of the control. Unlike the disabled attribute, the readonly attribute does not prevent the user from clicking or selecting in the control. The value of a read-only control is still submitted with the form. */
  "readonly": (value: boolean) => HTMLElements["textarea"];
  /** This attribute specifies that the user must fill in a value before submitting a form. */
  "required": (value: boolean) => HTMLElements["textarea"];
  "role": (value: string) => HTMLElements["textarea"];
  "rows": (value: string) => HTMLElements["textarea"];
  "wrap": (value: "soft" | "hard") => HTMLElements["textarea"];
} & GlobalAriaAttributes<"textarea"> & GlobalHTMLAttributes<"textarea">;

type tfootElement = {
  /** @deprecated This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are: left, aligning the content to the left of the cell center, centering the content in the cell right, aligning the content to the right of the cell justify, inserting spaces into the textual content so that the content is justified in the cell char, aligning the textual content on a special character with a minimal offset, defined by the char and charoff attributes. If this attribute is not set, the left value is assumed. Note: To achieve the same effect as the left, center, right or justify values, use the CSS text-align property on it. To achieve the same effect as the char value, in CSS3, you can use the value of the char as the value of the text-align property Unimplemented. */
  "align": (value: string) => HTMLElements["tfoot"];
  /** @deprecated The background color of the table. It is a 6-digit hexadecimal RGB code, prefixed by a '#'. One of the predefined color keywords can also be used. To achieve a similar effect, use the CSS background-color property. */
  "bgcolor": (value: string) => HTMLElements["tfoot"];
  /** @deprecated This attribute specifies the alignment of the content in a column to a character. Typical values for this include a period (.) when attempting to align numbers or monetary values. If align is not set to char, this attribute is ignored. */
  "char": (value: string) => HTMLElements["tfoot"];
  /** @deprecated This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the char attribute. */
  "charoff": (value: string) => HTMLElements["tfoot"];
  "role": (value: string) => HTMLElements["tfoot"];
  /** @deprecated This attribute specifies the vertical alignment of the text within each row of cells of the table footer. Possible values for this attribute are: baseline, which will put the text as close to the bottom of the cell as it is possible, but align it on the baseline of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as bottom. bottom, which will put the text as close to the bottom of the cell as it is possible; middle, which will center the text in the cell; and top, which will put the text as close to the top of the cell as it is possible. Note: Do not use this attribute as it is obsolete (and not supported) in the latest standard: instead set the CSS vertical-align property on it. */
  "valign": (value: string) => HTMLElements["tfoot"];
} & GlobalAriaAttributes<"tfoot"> & GlobalHTMLAttributes<"tfoot">;

type thElement = {
  "abbr": (value: string) => HTMLElements["th"];
  /** @deprecated This enumerated attribute specifies how the cell content's horizontal alignment will be handled. Possible values are: left: The content is aligned to the left of the cell. center: The content is centered in the cell. right: The content is aligned to the right of the cell. justify (with text only): The content is stretched out inside the cell so that it covers its entire width. char (with text only): The content is aligned to a character inside the <th> element with minimal offset. This character is defined by the char and charoff attributes. The default value when this attribute is not specified is left. Note: Do not use this attribute as it is obsolete in the latest standard. To achieve the same effect as the left, center, right or justify values, apply the CSS text-align property to the element. To achieve the same effect as the char value, give the text-align property the same value you would use for the char. */
  "align": (value: string) => HTMLElements["th"];
  /** @deprecated This attribute contains a list of space-separated strings. Each string is the id of a group of cells that this header applies to. Note: Do not use this attribute as it is obsolete in the latest standard: use the scope attribute instead. */
  "axis": (value: string) => HTMLElements["th"];
  /** @deprecated This attribute defines the background color of each cell in a column. It consists of a 6-digit hexadecimal code as defined in sRGB and is prefixed by '#'. This attribute may be used with one of sixteen predefined color strings: black = "#000000" green = "#008000" silver = "#C0C0C0" lime = "#00FF00" gray = "#808080" olive = "#808000" white = "#FFFFFF" yellow = "#FFFF00" maroon = "#800000" navy = "#000080" red = "#FF0000" blue = "#0000FF" purple = "#800080" teal = "#008080" fuchsia = "#FF00FF" aqua = "#00FFFF" Note: Do not use this attribute, as it is non-standard and only implemented in some versions of Microsoft Internet Explorer: The <th> element should be styled using CSS. To create a similar effect use the background-color property in CSS instead. */
  "bgcolor": (value: string) => HTMLElements["th"];
  /** @deprecated The content in the cell element is aligned to a character. Typical values include a period (.) to align numbers or monetary values. If align is not set to char, this attribute is ignored. Note: Do not use this attribute as it is obsolete in the latest standard. To achieve the same effect, you can specify the character as the first value of the text-align property. */
  "char": (value: string) => HTMLElements["th"];
  /** @deprecated This attribute is used to shift column data to the right of the character specified by the char attribute. Its value specifies the length of this shift. Note: Do not use this attribute as it is obsolete in the latest standard. */
  "charoff": (value: string) => HTMLElements["th"];
  /** This attribute contains a non-negative integer value that indicates for how many columns the cell extends. Its default value is 1. Values higher than 1000 will be considered as incorrect and will be set to the default value (1). */
  "colspan": (value: string) => HTMLElements["th"];
  /** This attribute contains a list of space-separated strings, each corresponding to the id attribute of the <th> elements that apply to this element. */
  "headers": (value: string) => HTMLElements["th"];
  /** @deprecated This attribute is used to define a recommended cell height. Note: Do not use this attribute as it is obsolete in the latest standard: use the CSS height property instead. */
  "height": (value: string) => HTMLElements["th"];
  "role": (value: string) => HTMLElements["th"];
  /** This attribute contains a non-negative integer value that indicates for how many rows the cell extends. Its default value is 1; if its value is set to 0, it extends until the end of the table section (<thead>, <tbody>, <tfoot>, even if implicitly defined), that the cell belongs to. Values higher than 65534 are clipped down to 65534. */
  "rowspan": (value: string) => HTMLElements["th"];
  "scope": (value: "row" | "col" | "rowgroup" | "colgroup") => HTMLElements["th"];
  /** @deprecated This attribute specifies how a text is vertically aligned inside a cell. Possible values for this attribute are: baseline: Positions the text near the bottom of the cell and aligns it with the baseline of the characters instead of the bottom. If characters don't descend below the baseline, the baseline value achieves the same effect as bottom. bottom: Positions the text near the bottom of the cell. middle: Centers the text in the cell. and top: Positions the text near the top of the cell. Note: Do not use this attribute as it is obsolete in the latest standard: use the CSS vertical-align property instead. */
  "valign": (value: string) => HTMLElements["th"];
  /** @deprecated This attribute is used to define a recommended cell width. Additional space can be added with the cellspacing and cellpadding properties and the width of the <col> element can also create extra width. But, if a column's width is too narrow to show a particular cell properly, it will be widened when displayed. Note: Do not use this attribute as it is obsolete in the latest standard: use the CSS width property instead. */
  "width": (value: string) => HTMLElements["th"];
} & GlobalAriaAttributes<"th"> & GlobalHTMLAttributes<"th">;

type theadElement = {
  /** @deprecated This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are: left, aligning the content to the left of the cell center, centering the content in the cell right, aligning the content to the right of the cell justify, inserting spaces into the textual content so that the content is justified in the cell char, aligning the textual content on a special character with a minimal offset, defined by the char and charoff attributes. If this attribute is not set, the left value is assumed. Warning: Do not use this attribute as it is obsolete (not supported) in the latest standard. To achieve the same effect as the left, center, right or justify values, use the CSS text-align property on it. To achieve the same effect as the char value, in CSS3, you can use the value of the char as the value of the text-align property. */
  "align": (value: string) => HTMLElements["thead"];
  /** @deprecated This attribute defines the background color of each cell of the column. It is one of the 6-digit hexadecimal code as defined in sRGB, prefixed by a '#'. One of the sixteen predefined color strings may be used: black = "#000000" green = "#008000" silver = "#C0C0C0" lime = "#00FF00" gray = "#808080" olive = "#808000" white = "#FFFFFF" yellow = "#FFFF00" maroon = "#800000" navy = "#000080" red = "#FF0000" blue = "#0000FF" purple = "#800080" teal = "#008080" fuchsia = "#FF00FF" aqua = "#00FFFF" Note: Do not use this attribute, as it is non-standard and only implemented in some versions of Microsoft Internet Explorer: the <thead> element should be styled using CSS. To give a similar effect to the bgcolor attribute, use the CSS property background-color, on the relevant <td> or <th> elements. */
  "bgcolor": (value: string) => HTMLElements["thead"];
  /** @deprecated This attribute is used to set the character to align the cells in a column on. Typical values for this include a period (.) when attempting to align numbers or monetary values. If align is not set to char, this attribute is ignored. Note: Do not use this attribute as it is obsolete (and not supported) in the latest standard. To achieve the same effect as the char, in CSS3, you can use the character set using the char attribute as the value of the text-align property. */
  "char": (value: string) => HTMLElements["thead"];
  /** @deprecated This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the char attribute. Note: Do not use this attribute as it is obsolete (and not supported) in the latest standard. */
  "charoff": (value: string) => HTMLElements["thead"];
  "role": (value: string) => HTMLElements["thead"];
  /** @deprecated This attribute specifies the vertical alignment of the text within each row of cells of the table header. Possible values for this attribute are: baseline, which will put the text as close to the bottom of the cell as it is possible, but align it on the baseline of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as bottom. bottom, which will put the text as close to the bottom of the cell as it is possible; middle, which will center the text in the cell; top, which will put the text as close to the top of the cell as it is possible. Note: Do not use this attribute as it is obsolete (and not supported) in the latest standard: instead set the CSS vertical-align property on it. */
  "valign": (value: string) => HTMLElements["thead"];
} & GlobalAriaAttributes<"thead"> & GlobalHTMLAttributes<"thead">;

type timeElement = {
  "datetime": (value: string) => HTMLElements["time"];
  "role": (value: string) => HTMLElements["time"];
} & GlobalAriaAttributes<"time"> & GlobalHTMLAttributes<"time">;

type titleElement = {
  "role": (value: string) => HTMLElements["title"];
} & GlobalAriaAttributes<"title"> & GlobalHTMLAttributes<"title">;

type trElement = {
  /** @deprecated A DOMString which specifies how the cell's context should be aligned horizontally within the cells in the row; this is shorthand for using align on every cell in the row individually. Possible values are: left Align the content of each cell at its left edge. center Center the contents of each cell between their left and right edges. right Align the content of each cell at its right edge. justify Widen whitespaces within the text of each cell so that the text fills the full width of each cell (full justification). char Align each cell in the row on a specific character (such that each row in the column that is configured this way will horizontally align its cells on that character). This uses the char and charoff to establish the alignment character (typically "." or "," when aligning numerical data) and the number of characters that should follow the alignment character. This alignment type was never widely supported. If no value is expressly set for align, the parent node's value is inherited. Note: Instead of using the obsolete align attribute, you should instead use the CSS text-align property to establish left, center, right, or justify alignment for the row's cells. To apply character-based alignment, set the CSS text-align property to the alignment character (such as "." or ","). */
  "align": (value: string) => HTMLElements["tr"];
  /** @deprecated A DOMString specifying a color to apply to the backgrounds of each of the row's cells. This can be either an hexadecimal #RRGGBB or #RGB value or a color keyword. Omitting the attribute or setting it to null in JavaScript causes the row's cells to inherit the row's parent element's background color. Note: The <tr> element should be styled using CSS. To give a similar effect as the bgcolor attribute, use the CSS property background-color. */
  "bgcolor": (value: string) => HTMLElements["tr"];
  /** @deprecated A DOMString which sets the character to align the cells in each of the row's columns on (each row's centering that uses the same character gets aligned with others using the same character . Typical values for this include a period (".") or comma (",") when attempting to align numbers or monetary values. If align is not set to char, this attribute is ignored. Note: This attribute is not only obsolete, but was rarely implemented anyway. To achieve the same effect as the char attribute, set the CSS text-align property to the same string you would specify for the char property, such as text-align: ".". */
  "char": (value: string) => HTMLElements["tr"];
  /** @deprecated A DOMString indicating the number of characters on the tail end of the column's data should be displayed after the alignment character specified by the char attribute. For example, when displaying money values for currencies that use hundredths of a unit (such as the dollar, which is divided into 100 cents), you would typically specify a value of 2, so that in tandem with char being set to ".", the values in a column would be cleanly aligned on the decimal points, with the number of cents properly displayed to the right of the decimal point. Note: This attribute is obsolete, and was never widely supported anyway. */
  "charoff": (value: string) => HTMLElements["tr"];
  "role": (value: string) => HTMLElements["tr"];
  /** @deprecated A DOMString specifying the vertical alignment of the text within each cell in the row. Possible values for this attribute are: baseline Aligns each cell's content text as closely as possible to the bottom of the cell, handling alignment of different fonts and font sizes by aligning the characters along the baseline of the font(s) used in the row. If all of the characters in the row are the same size, the effect is the same as bottom. bottom, Draws the text in each of the row's cells as closely as possible to the bottom edge of those cells. middle Each cell's text is vertically centered. top Each cell's text is drawn as closely as possible to the top edge of the containing cell. Note: Don't use the obsolete valign attribute. Instead, add the CSS vertical-align property to the row. */
  "valign": (value: string) => HTMLElements["tr"];
} & GlobalAriaAttributes<"tr"> & GlobalHTMLAttributes<"tr">;

type trackElement = {
  "default": (value: boolean) => HTMLElements["track"];
  "kind": (value: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata") => HTMLElements["track"];
  "label": (value: string) => HTMLElements["track"];
  "role": (value: string) => HTMLElements["track"];
  "src": (value: string) => HTMLElements["track"];
  "srclang": (value: string) => HTMLElements["track"];
} & GlobalAriaAttributes<"track"> & GlobalHTMLAttributes<"track">;

type ttElement = {
} & GlobalAriaAttributes<"tt"> & GlobalHTMLAttributes<"tt">;

type uElement = {
  "role": (value: string) => HTMLElements["u"];
} & GlobalAriaAttributes<"u"> & GlobalHTMLAttributes<"u">;

type ulElement = {
  /** @deprecated This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent, and it doesn't work in all browsers. Warning: Do not use this attribute, as it has been deprecated: use CSS instead. To give a similar effect as the compact attribute, the CSS property line-height can be used with a value of 80%. */
  "compact": (value: string) => HTMLElements["ul"];
  "role": (value: string) => HTMLElements["ul"];
  /** @deprecated This attribute sets the bullet style for the list. The values defined under HTML3.2 and the transitional version of HTML 4.0/4.01 are: circle disc square A fourth bullet type has been defined in the WebTV interface, but not all browsers support it: triangle. If not present and if no CSS list-style-type property applies to the element, the user agent selects a bullet type depending on the nesting level of the list. Warning: Do not use this attribute, as it has been deprecated; use the CSS list-style-type property instead. */
  "type": (value: string) => HTMLElements["ul"];
} & GlobalAriaAttributes<"ul"> & GlobalHTMLAttributes<"ul">;

type varElement = {
  "role": (value: string) => HTMLElements["var"];
} & GlobalAriaAttributes<"var"> & GlobalHTMLAttributes<"var">;

type videoElement = {
  /** A Boolean attribute which if true indicates that the element should automatically toggle picture-in-picture mode when the user switches back and forth between this document and another document or application. */
  "autopictureinpicture": (value: string) => HTMLElements["video"];
  /** A Boolean attribute; if specified, the video automatically begins to play back as soon as it can do so without stopping to finish loading the data. Note: Sites that automatically play audio (or videos with an audio track) can be an unpleasant experience for users, so should be avoided when possible. If you must offer autoplay functionality, you should make it opt-in (requiring a user to specifically enable it). However, this can be useful when creating media elements whose source will be set at a later time, under user control. See our autoplay guide for additional information about how to properly use autoplay. To disable video autoplay, autoplay="false" will not work; the video will autoplay if the attribute is there in the <video> tag at all. To remove autoplay, the attribute needs to be removed altogether. In some browsers (e.g. Chrome 70.0) autoplay doesn't work if no muted attribute is present. */
  "autoplay": (value: boolean) => HTMLElements["video"];
  /** If this attribute is present, the browser will offer controls to allow the user to control video playback, including volume, seeking, and pause/resume playback. */
  "controls": (value: boolean) => HTMLElements["video"];
  "controlslist": (value: string) => HTMLElements["video"];
  /** This enumerated attribute indicates whether to use CORS to fetch the related video. CORS-enabled resources can be reused in the <canvas> element without being tainted. The allowed values are: anonymous Sends a cross-origin request without a credential. In other words, it sends the Origin: HTTP header without a cookie, X.509 certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (by not setting the Access-Control-Allow-Origin: HTTP header), the image will be tainted, and its usage restricted. use-credentials Sends a cross-origin request with a credential. In other words, it sends the Origin: HTTP header with a cookie, a certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (through Access-Control-Allow-Credentials: HTTP header), the image will be tainted and its usage restricted. When not present, the resource is fetched without a CORS request (i.e. without sending the Origin: HTTP header), preventing its non-tainted used in <canvas> elements. If invalid, it is handled as if the enumerated keyword anonymous was used. See CORS settings attributes for additional information. */
  "crossorigin": (value: "" | "anonymous" | "use-credentials") => HTMLElements["video"];
  /** Prevents the browser from suggesting a Picture-in-Picture context menu or to request Picture-in-Picture automatically in some cases. */
  "disablepictureinpicture": (value: string) => HTMLElements["video"];
  /** A Boolean attribute used to disable the capability of remote playback in devices that are attached using wired (HDMI, DVI, etc.) and wireless technologies (Miracast, Chromecast, DLNA, AirPlay, etc). In Safari, you can use x-webkit-airplay="deny" as a fallback. */
  "disableremoteplayback": (value: string) => HTMLElements["video"];
  /** The height of the video's display area, in CSS pixels (absolute values only; no percentages.) */
  "height": (value: number) => HTMLElements["video"];
  /** A Boolean attribute; if specified, the browser will automatically seek back to the start upon reaching the end of the video. */
  "loop": (value: boolean) => HTMLElements["video"];
  /** A Boolean attribute that indicates the default setting of the audio contained in the video. If set, the audio will be initially silenced. Its default value is false, meaning that the audio will be played when the video is played. */
  "muted": (value: boolean) => HTMLElements["video"];
  "playsinline": (value: boolean) => HTMLElements["video"];
  "poster": (value: string) => HTMLElements["video"];
  /** This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience with regards to what content is loaded before the video is played. It may have one of the following values: none: Indicates that the video should not be preloaded. metadata: Indicates that only video metadata (e.g. length) is fetched. auto: Indicates that the whole video file can be downloaded, even if the user is not expected to use it. empty string: Synonym of the auto value. The default value is different for each browser. The spec advises it to be set to metadata. Note: The autoplay attribute has precedence over preload. If autoplay is specified, the browser would obviously need to start downloading the video for playback. The specification does not force the browser to follow the value of this attribute; it is a mere hint. */
  "preload": (value: "none" | "metadata" | "auto") => HTMLElements["video"];
  "role": (value: string) => HTMLElements["video"];
  /** The URL of the video to embed. This is optional; you may instead use the <source> element within the video block to specify the video to embed. */
  "src": (value: string) => HTMLElements["video"];
  /** The width of the video's display area, in CSS pixels (absolute values only; no percentages). */
  "width": (value: number) => HTMLElements["video"];
} & GlobalAriaAttributes<"video"> & GlobalHTMLAttributes<"video">;

type wbrElement = {
  "role": (value: string) => HTMLElements["wbr"];
} & GlobalAriaAttributes<"wbr"> & GlobalHTMLAttributes<"wbr">;

type xmpElement = {
} & GlobalAriaAttributes<"xmp"> & GlobalHTMLAttributes<"xmp">;
