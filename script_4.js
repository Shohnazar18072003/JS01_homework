//  Scope
//  50  Example

{
  let x = 2;
}

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

function myFunction() {
  var carName = "Volvo"; // Function Scope
}

var x = 2; // Global scope

function exampleFunction() {
  const x = "declared inside function"; // x can only be used in exampleFunction
  console.log("Inside function");
  console.log(x);
}

console.log(x); // Causes error

const x = "declared outside function";

exampleFunction();

function exampleFunction() {
  console.log("Inside function");
  console.log(x);
}

console.log("Outside function");
console.log(x);

{
  var x = 1;
}
console.log(x); // 1

// program to print a text
let aa = "hello";

function greet() {
  console.log(a);
}

greet(); // hello

// program to show the change in global variable
let a = "hello";

function greet() {
  a = 3;
}

// before the function call
console.log(a);

//after the function call
greet();
console.log(a); // 3

// program showing local scope of a variable
let b = "hello";

function greet() {
  let b = "World";
  console.log(a + b);
}

greet();
console.log(a + b); // error

// program showing block-scoped concept
// global variable
let c = "Hello";

function greet() {
  // local variable
  let b = "World";

  console.log(a + " " + b);

  if (b == "World") {
    // block-scoped variable
    let c = "hello";

    console.log(a + " " + b + " " + c);
  }

  // variable c cannot be accessed here
  console.log(a + " " + b + " " + c);
}

greet();
