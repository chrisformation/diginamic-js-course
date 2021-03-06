(function() {
  /**
   * Create a new DOM element.
   * @param {String} markup_name
   * @param {String} text
   * @param {HTMLElement} parent
   * @param {Array|Object} attributes  (doit comprendre les propriétés name et
   * value)
   * @returns HTMLElement
   */
  function createMarkup(markup_name, text, parent, attributes = []) {
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

  let nav = createMarkup("nav", "", document.querySelector("header"));
  let item1 = createMarkup("button", "Item 1", nav, [{"name": "type", "value": "button"}, {"name": "id", "value": "test"}]);
  let item2 = createMarkup("button", "Item 2", nav, {"name": "type", "value": "button"});
  let item3 = createMarkup("button", "Item 3", nav, {"name": "type", "value": "button"});
  let item4 = createMarkup("button", "Item 4", nav, {"name": "type", "value": "button"});

  document.querySelector("button").style.color = "red";
})()
