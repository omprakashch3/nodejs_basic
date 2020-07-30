var person = {
  firstName: "omprakash",
  lastName: "chautala",
  greet: function () {
    console.log("hello " + this.firstName + " " + this.lastName);
  },
};
person.greet();

console.log(person["firstName"]);

