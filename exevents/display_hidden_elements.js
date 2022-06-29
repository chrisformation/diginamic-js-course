(function () {
  function displayHiddenParagraph(element) {
    const paragraph = element.nextSibling.nextSibling;

    if (paragraph.hidden) {
      paragraph.hidden = false;
    } else {
      paragraph.hidden = true;
    }
  }

  const h1 = document.querySelector("h1").onclick = function (event) {
    displayHiddenParagraph(event.target);
  };
})();
