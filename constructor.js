function person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
person.prototype.greet = function () {
  console.log("hello " + this.firstName + " " + this.lastName);
};
var om = new person("omprakash", "chautala");
console.log(om.lastName);
om.greet();
