(function(){
  /**
   * Constructor method of Vehicle class
   * @param {String} name Name of the vehicle
   * @param {Number} weight Weight of the vehicle
   * @param {String} color Color of the vehicle
   * @constructor
   */
  function Vehicle(name, weight, color = "black") {
    this.name = name;
    this.weight = weight;
    this.color = color;

    /**
     *
     * @param {String} a
     * @param {String} b
     */
    this.move = function(a, b) {
      console.log(`Vehicle is moving ${a} to ${b} with ${this.name} bike`);
    }
  }

  const my_bike = new Vehicle('tandem', 40);
  console.log(my_bike);
  my_bike.move("Pérols", "Lattes");

  const my_bike2 = {
    name: "Rockrider",
    weight: 10,
    color: "red",
    move: function(a, b) {
      console.log(`Vehicle is moving ${a} to ${b} with ${this.name} bike`);
    }
  }

  console.log(my_bike2);
})();
