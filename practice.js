// Create two variables, firstName and lastName
let firstName = "Akshad";
let lastName = " Jaiswal";
// Concatenate the two variables into a third variable called fullName
let fullName = firstName + lastName;
// Log fullName to the console
console.log(fullName);

let name = "Akshad";
let greeting = "Hi there";

// Create a function that logs out "Hi there, Linda!" when called
const greet = () => {
  console.log(greeting + "," + " " + name + "!");
};
greet();

let myPoints = 3;

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3Points() {
  myPoints = myPoints + 3;
}
function remove1Point() {
  myPoints = myPoints - 1;
}

// Call the functions to that the line below logs out 10
add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();
console.log(myPoints);

// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format:
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person = {
  name: "Akshad",
  age: 22,
  country: "Pune",
};

function logData() {
  console.log(
    person.name +
      " is " +
      person.age +
      " years old and lives in " +
      person.country
  );
}

logData();

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

let age = 55;

if (age < 6) {
  console.log("free");
} else if (age < 18) {
  console.log("child discount");
} else if (age < 27) {
  console.log("student discount");
} else if (age < 67) {
  console.log("full price");
} else {
  console.log("senior citizen discount");
}

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

for (let i = 0; i < largeCountries.length; i++) {
  console.log(largeCountries[i]);
}
