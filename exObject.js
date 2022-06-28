(function() {
  function Circle(radius, name) {
    this.radius = radius;
    this.name = name;
  }

  Circle.prototype.pi = 3.14;
  Circle.prototype.area = function () {
    const pi = 3.14;

    console.log(this.name, this.pi * this.radius * this.radius);
  }

  new Circle(2, "Circle 1").area();
  new Circle(4, "Circle 2").area();
})();
