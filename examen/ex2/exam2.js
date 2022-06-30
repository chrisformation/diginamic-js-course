import createMarkup from "../../utils/utils.js";

(function () {
  function createHeader() {
    document.getElementById("btn-header").remove();
    return createMarkup(
      "header",
        "",
        document.body,
    );
  }

  function createMain() {
    document.getElementById("btn-main").remove();
    return createMarkup(
      "main",
        "",
        document.body,
    );
  }

  function createFooter() {
    document.getElementById("btn-footer").remove();
    return createMarkup(
      "footer",
        "",
        document.body,
    );
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
