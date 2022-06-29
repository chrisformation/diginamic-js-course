export default class CustomDom {
  /**
   * Create a new DOM element.
   * @param {String} markup_name
   * @param {String} text
   * @param {HTMLElement} parent
   * @param {Array|Object} attributes  (doit comprendre les propriétés name et
   * value)
   * @returns HTMLElement
   */
  createMarkup(markup_name, text, parent, attributes = []) {
    const markup = document.createElement(markup_name);
    markup.textContent = text;
    parent.appendChild(markup);

    if (Array.isArray(attributes)) {
      attributes.forEach(function(attr) {
        markup.setAttribute(attr.name, attr.value);
      });
    } else {
      if (attributes && attributes.hasOwnProperty("name")) {
        markup.setAttribute(attributes.name, attributes.value);
      }
    }

    return markup;
  }
}
