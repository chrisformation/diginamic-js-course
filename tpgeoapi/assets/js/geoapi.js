import createMarkup from "../../../utils/utils.js";

(function () {
  /**
   * Get all french districts.
   * @returns {Promise<void>}
   */
  async function getDistricts() {
    try {
      const response = await fetch("https://geo.api.gouv.fr/regions");
      const result = await response.json();

      result.forEach(function (district) {
        const districtMarkup = createMarkup("option", district.nom, document.querySelector("#district"));
        districtMarkup.value = district.code;
      });
    } catch (e) {
      console.error(e.message);
    }
  }

  /**
   * Get all french departments.
   * @param {string} district
   * @returns {Promise<void>}
   */
  async function getDepartments(district) {
    try {
      const response = await fetch(`https://geo.api.gouv.fr/regions/${district}/departements`);
      const result = await response.json();

      const allDepartments = document.querySelectorAll("#department>option");

      if (allDepartments) {
        allDepartments.forEach(function (department) {
          department.remove();
        });
      }

      createMarkup("option", "Sélectionner le département", document.querySelector("#department"));

      result.forEach(function (department) {
        const departmentMarkup = createMarkup("option", department.nom, document.querySelector("#department"));
        departmentMarkup.value = department.code;
      });
    }
    catch (e) {
      console.error(e.message);
    }
  }

  /**
   * Get all french cities.
   * @param {string} department
   * @returns {Promise<void>}
   */
  async function getCities(department) {
    try {
      const response = await fetch(`https://geo.api.gouv.fr/departements/${department}/communes`);
      const result = await response.json();

      const allCities = document.querySelectorAll("#city>option");

      if (allCities) {
        allCities.forEach(function (city) {
          city.remove();
        });
      }

      createMarkup("option", "Sélectionner la commune", document.querySelector("#city"));

      result.forEach(function (city) {
        const cityMarkup = createMarkup("option", city.nom, document.querySelector("#city"));
        cityMarkup.value = city.code;
      });
    }
    catch (e) {
      console.error(e.message);
    }
  }

  /**
   * Get a french city informations.
   * @param {number} cityCode
   * @returns {Promise<void>}
   */
  async function getCity(cityCode) {
    try {
      const response = await fetch(`https://geo.api.gouv.fr/communes/${cityCode}`);
      const result = await response.json();

      if (document.querySelector("#infos")) {
        document.querySelector("#infos").remove();
      }

      const section = createMarkup("section", "", document.querySelector("main"), {name: "id", value: "infos"});
      const city = createMarkup("p", `Ville : `, section);
      createMarkup("b", `${result.nom}`, city);
      const population = createMarkup("p", `Population :`, section);
      createMarkup("b", `${result.population}`, population);
      createMarkup("p", `Codes postaux :`, section);
      const ul = createMarkup("ul", "", section);

      console.log(result);
      result.codesPostaux.forEach(function (postalCode) {
        createMarkup("li", `${postalCode}`, ul);
      });
    }
    catch (e) {
      console.error(e.message);
    }
  }

  const district = document.querySelector("#district");
  const department = document.querySelector("#department");
  const city = document.querySelector("#city");
  getDistricts();

  district.onchange = function () {
    getDepartments(district.value);
  }

  department.onchange = function () {
    getCities(department.value);
  }

  city.onchange = function () {
    getCity(city.value);
  }
})();
