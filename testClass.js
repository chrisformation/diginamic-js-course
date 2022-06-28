(function() {
  class Bike {
    /**
     *
     * @param {String} name
     * @param {Number} weight
     */
    constructor(name, weight) {
      this.name = name;
      this.weight = weight;
    }

    /**
     *
     * @param {String} a
     * @param {String} b
     */
    move (a, b) {
      console.log(this);
      console.log(`${this.name} is moving from ${a} to ${b}`);
    }
  }

  class ElectricBike extends Bike {
    constructor(name, weight, power) {
      super(name, weight);
      this.power = power;
    }

    move (a, b) {
      super.move(a, b);
      console.log("Engine is running");
    }
  }

  new Bike('Tandem', 10).move('Pérols', 'Lattes');
  new ElectricBike('Electhor', 50, 70).move('Lattes', 'Montpellier');
})();
