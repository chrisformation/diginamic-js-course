(function () {
  window.onload = function () {
    document.querySelector("p").hidden = true;

    const response = window.prompt("Do you see the content of the page" +
        " (y/n)?");

    if (response.toUpperCase() === "Y") {
      document.querySelector("p").hidden = false;
    }
  }
})();
