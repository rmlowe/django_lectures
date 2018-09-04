// Part 6 - Objects Exercise

////////////////////
// PROBLEM 1 //////
//////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31
}

// Add a method called nameLength that prints out the
// length of the employees name to the console.

employee["nameLength"] = function() {
  console.log(this.name.length);
};
employee.nameLength();


///////////////////
// PROBLEM 2 /////
/////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31
}

// Write program that will create an Alert in the browser of each of the
// object's values for the key value pairs. For example, it should alert:

// Name is John Smith, Job is Programmer, Age is 31.

var result = "";
for (key in employee) {
  if (result !== "") {
    result += ", ";
  }

  result += key.charAt(0).toUpperCase() + key.slice(1) + " is " + employee[key];
}
alert(result + ".");

///////////////////
// PROBLEM 3 /////
/////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31
}

// Add a method called lastName that prints
// out the employee's last name to the console.

// You will need to figure out how to split a string to an array.
// Hint: http://www.w3schools.com/jsref/jsref_split.asp

employee["lastName"] = function() {
  var parts = this.name.split(" ");
  console.log(parts[parts.length - 1]);
}
employee.lastName();
employee["name"] = "Robert Michael Lowe";
employee.lastName();
