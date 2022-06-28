(function() {
  /**
   *
   * @param {String} markup_name
   * @param {String} text
   * @param {domElement} parent
   * @param {Object} attribute  (doit comprendre les propriétés name et value)
   * @returns domElement
   */
  function createMarkup(markup_name, text, parent, attribute) {
    const markup = document.createElement(markup_name);
    markup.textContent = text;
    parent.appendChild(markup);

    if (Array.isArray(attribute)) {
      attribute.forEach(function(attr) {
        markup.setAttribute(attr.name, attr.value);
      });
    } else {
      if (attribute && attribute.hasOwnProperty("name")) {
        markup.setAttribute(attribute.name, attribute.value);
      }
    }

    return markup;
  }

  let nav = createMarkup("nav", "", document.querySelector("header"));
  let item1 = createMarkup("button", "Item 1", nav, [{"name": "type", "value": "button"}]);
  let item2 = createMarkup("button", "Item 2", nav, {"name": "type", "value": "button"});
  let item3 = createMarkup("button", "Item 3", nav, {"name": "type", "value": "button"});
  let item4 = createMarkup("button", "Item 4", nav, {"name": "type", "value": "button"});

  document.querySelector("button").style.color = "red";
})()
