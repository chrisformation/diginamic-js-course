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

  /*const allTitles = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

  allTitles.forEach(function (title) {
    title.onclick = function (event) {
      displayHiddenParagraph(event.target);
    }
  });*/
})();
