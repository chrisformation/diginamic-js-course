import createMarkup from "../utils/utils.js";

(function() {
  async function getCountries() {
    try {
      const country = document.getElementById("country").value;

      const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
      const data = await response.json();

      if (data.length > 50) {
        createMarkup(
            "p",
            `${data.length} universities found in ${country}, please use filter to see them.`,
            document.querySelector("form")
        );

        const search = createMarkup(
            "input",
            "",
            document.querySelector("form"),
            [
              {name: "type", value: "text"},
              {name: "placeholder", value: "Filter by name"},
              {name: "id", value: "search"},
              {name: "name", value: "search"}
            ]
        );

        document.getElementById("search").oninput = getUniversities;
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  async function getUniversities() {
    try {
      if (document.getElementById("search").length > 2) {
        const country = document.getElementById("country").value;
        const university = document.getElementById("university").value;

        const response = await fetch(`http://universities.hipolabs.com/search?country=${country}&name=${university}`);
        const data = await response.json();

        if (data.length > 50) {
          createMarkup(
              "p",
              `${data.length} universities found in ${country} named ${university}.`,
              document.querySelector("form")
          );
        }
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  document.getElementById("country").onchange= getCountries;
})();
