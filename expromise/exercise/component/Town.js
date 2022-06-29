import CustomDom from "../utils/CustomDom.js";

export default class Town extends CustomDom {
  constructor(name, meteo) {
    super();
    this.name = name;
    this.meteo = meteo;

    this.section = this.render();
  }

  render() {
    const section = this.createMarkup("section", "", document.body);
    this.createMarkup("h2", "Résultat", section);
    this.createMarkup("h3", `${this.name} - ${this.meteo.description}`, section);
    this.createMarkup("p", `Température : ${Math.round(this.meteo.temp)} °C`, section);
    this.createMarkup("p", `Maximale : ${Math.round(this.meteo.temp_max)} °C`, section);
    this.createMarkup("p", `Minimale : ${Math.round(this.meteo.temp_min)} °C`, section);
    this.createMarkup("p", `Humidité : ${Math.round(this.meteo.humidity)} °C`, section);
    this.createMarkup("p", `Pression : ${this.meteo.pressure} hPa`, section);
    this.createMarkup("p", `vent : ${this.meteo.wind.deg}°, ${Math.round(this.meteo.wind.speed)} kt`, section);

    return section;
  }

  remove() {
    this.section.remove();
  }
}
