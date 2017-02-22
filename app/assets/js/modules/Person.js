function Person(fullName, favColor) {
  this.name = fullName;
  this.color = favColor;
  this.greet = function() {
    console.log("My name is " + this.name + " and my color is " + this.color + ".");
  }
}

module.exports = Person;