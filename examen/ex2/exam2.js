import createMarkup from "../../utils/utils.js";

(function () {
  function createHeader() {
    document.getElementById("btn-header").remove();
    const header = createMarkup(
      "header",
        "",
        document.body,
    );

    document.body.insertBefore(header, document.body.firstChild);
  }

  function createMain() {
    document.getElementById("btn-main").remove();
    const main = createMarkup(
      "main",
        "",
        document.body,
    );

    document.body.insertBefore(main, document.querySelector("footer"));
  }

  function createFooter() {
    document.getElementById("btn-footer").remove();
    const footer = createMarkup(
      "footer",
        "",
        document.body,
    );

    document.body.insertBefore(footer, document.body.lastChild);
  }

  const btnHeader = createMarkup(
    "button",
      "Create header",
      document.body,
      {name: "id", value: "btn-header"}
  );

  const btnMain = createMarkup(
      "button",
      "Create main",
      document.body,
      {name: "id", value: "btn-main"}
  );

  const btnFooter = createMarkup(
      "button",
      "Create footer",
      document.body,
      {name: "id", value: "btn-footer"}
  );

  btnHeader.onclick = createHeader;
  btnMain.onclick = createMain;
  btnFooter.onclick = createFooter;
})();
