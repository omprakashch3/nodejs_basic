// function statement
function greet() {
  console.log("hi, i am omprakash");
}
greet();

// function a first class

function loggreeting(fn) {
  fn();
}
loggreeting(greet);

// function expression
var greetMe = function () {
  console.log("hi omprakash");
};
greetMe();

// use a function expression as a fly

loggreeting(function () {
  console.log("hello omprakash");
});
