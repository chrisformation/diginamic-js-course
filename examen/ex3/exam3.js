import createMarkup from "../utils/utils.js";

(function() {
  async function getCountries() {
    try {
      const country = document.getElementById("country").value;

      const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
      const data = await response.json();

      if (data.length > 50) {
        const found = document.getElementById("found");

        if (found)  {
          found.remove();
        }

        createMarkup(
            "p",
            `${data.length} universities found in ${country}, please use filter to see them.`,
            document.querySelector("form"),
            {name: "id", value: "found"}
        );

        const input = document.getElementById("search");

        if (input) {
          input.remove();
        }

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
      } else {
        listUniversities(data);
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  async function getUniversities() {
    try {
      if (document.getElementById("search").value.length >= 2) {
        const country = document.getElementById("country");
        const option = country.options[country.selectedIndex].value;
        const university = document.getElementById("search").value;

        const response = await fetch(`http://universities.hipolabs.com/search?country=${option}&name=${university}`);
        const data = await response.json();

        if (data.length === 0) {
          createMarkup(
              "p",
              `No universities found in ${option} with name ${university}`,
              document.querySelector("form")
          );
        } else if (data.length > 50) {
          createMarkup(
              "p",
              `${data.length} universities found in ${country} named ${university}.`,
              document.querySelector("form")
          );
        } else {
          listUniversities(data);
        }
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  function listUniversities(data) {
    const list = document.getElementById("list");

    if (list) {
      list.remove();
    }

    const section = createMarkup(
        "section",
        "",
        document.body,
        {name: "id", value: "list"}
    );

    data.forEach(university => {
      const article = createMarkup(
          "article",
          "",
          section
      );

      const h2 = createMarkup(
          "h2",
          university.name,
          article
      );

      createMarkup(
          "p",
          university.web_pages[0],
          article
      );
    });
  }

  document.getElementById("country").onchange= getCountries;
})();
