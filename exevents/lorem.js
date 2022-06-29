(function() {

  /**
   * Create a new DOM element.
   * @param {String} markup_name
   * @param {String} text
   * @param {HTMLElement} parent
   * @param {Array|Object} attributes
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

  /**
   * Create a new DOM paragraph element after on click.
   * @param {HTMLElement} parent
   */
  function onClickAddParagraph(parent = document.body) {
    createMarkup("p", "Lorem ipsum dolor sit amet, consectetur adipiscing" +
        " elit.", parent);
  }

  let main = createMarkup("main", "", document.body);
  let button = createMarkup("button", "Add paragraph", main, {"name": "type", "value": "button"});

  button.onclick = (function(event){
    onClickAddParagraph(main);
  });

})();
