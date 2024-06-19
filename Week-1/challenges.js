// String Transformations

// Capitalizes the first letter of a string
const capitalize = (str) => {
  if (typeof str !== "string") throw new Error("Invalid input type");
  return `${str[0].toUpperCase()}${str.slice(1)}`;
};

// Reverses the characters in a string
const reverse = (str) => {
  if (typeof str !== "string") throw new Error("Invalid input type");
  return str.split("").reverse().join("");
};

// Checks if a string is a palindrome
const isPalindrome = (str) => {
  if (typeof str !== "string") throw new Error("Invalid input type");
  const strRev = reverse(str);
  return str === strRev;
};

// Counts the number of words in a string
const wordCount = (str) => {
  if (typeof str !== "string") throw new Error("Invalid input type");
  return str.split(" ").length;
};

// Array Transformations

// Doubles each number in an array
const double = (arr) => {
  if (!Array.isArray(arr)) throw new Error("Invalid input type");
  return arr.map((num) => {
    if (typeof num !== "number")
      throw new Error("Array should contain only numbers");
    return num * 2;
  });
};

// Filters even numbers from an array
const filterEven = (arr) => {
  if (!Array.isArray(arr)) throw new Error("Invalid input type");
  return arr.filter((num) => {
    if (typeof num !== "number")
      throw new Error("Array should contain only numbers");
    return num % 2 === 0;
  });
};

// Sums the numbers in an array
const sum = (arr) => {
  if (!Array.isArray(arr)) throw new Error("Invalid input type");
  return arr.reduce((sum, num) => {
    if (typeof num !== "number")
      throw new Error("Array should contain only numbers");
    return sum + num;
  }, 0);
};

// Calculates the average of numbers in an array
const average = (arr) => {
  if (!Array.isArray(arr)) throw new Error("Invalid input type");
  const total = sum(arr);
  return arr.length === 0 ? 0 : total / arr.length;
};

// Object Transformations

// Gets the full name of a person object
const fullName = (person) => {
  if (typeof person !== "object" || person === null)
    throw new Error("Invalid input type");
  return `${person.firstName} ${person.lastName}`;
};

// Checks if a person object represents an adult
const isAdult = (person) => {
  if (typeof person !== "object" || person === null)
    throw new Error("Invalid input type");
  return person.age >= 18;
};

// Filters an array of people objects by minimum age
const filterByAge = (people, minAge) => {
  if (!Array.isArray(people)) throw new Error("Invalid input type");
  return people.filter((person) => {
    if (typeof person !== "object" || person === null)
      throw new Error("Array should contain only objects");
    return person.age >= minAge;
  });
};

// Function Composition

// Composes two functions
const compose = (f, g) => (x) => f(g(x));

// Test examples

console.log("capitalize:", capitalize("hello")); // Capitalize: "Hello"
console.log("capitalize:", capitalize("world")); // Capitalize: "World"

console.log("reverse:", reverse("hello")); // Reverse: "olleh"
console.log("reverse:", reverse("world")); // Reverse: "dlrow"

console.log("isPalindrome:", isPalindrome("racecar")); // IsPalindrome: true
console.log("isPalindrome:", isPalindrome("hello")); // IsPalindrome: false

console.log("wordCount:", wordCount("Hello world")); // WordCount: 2
console.log("wordCount:", wordCount("Count the words in this sentence.")); // WordCount: 6

console.log("double:", double([1, 2, 3])); // Double: [2, 4, 6]
console.log("double:", double([4, 5, 6])); // Double: [8, 10, 12]

console.log("filterEven:", filterEven([1, 2, 3, 4])); // FilterEven: [2, 4]
console.log("filterEven:", filterEven([5, 6, 7, 8])); // FilterEven: [6, 8]

console.log("sum:", sum([1, 2, 3])); // Sum: 6
console.log("sum:", sum([4, 5, 6])); // Sum: 15

console.log("average:", average([1, 2, 3])); // Average: 2
console.log("average:", average([4, 5, 6])); // Average: 5

// Object to demonstrate fullName, isAdult, and filterByAge
const people = [
  { firstName: "John", lastName: "Doe", age: 25 },
  { firstName: "Jane", lastName: "Smith", age: 17 },
  { firstName: "Emily", lastName: "Jones", age: 30 },
  { firstName: "Michael", lastName: "Brown", age: 16 },
];

// Testing fullName
console.log("fullName:", fullName(people[0])); // FullName: "John Doe"
console.log("fullName:", fullName(people[1])); // FullName: "Jane Smith"

// Testing isAdult
console.log("isAdult:", isAdult(people[0])); // IsAdult: true
console.log("isAdult:", isAdult(people[1])); // IsAdult: false

// Testing filterByAge
console.log("filterByAge:", filterByAge(people, 18)); // FilterByAge: [{ firstName: "John", lastName: "Doe", age: 25 }, { firstName: "Emily", lastName: "Jones", age: 30 }]
console.log("filterByAge:", filterByAge(people, 21)); // FilterByAge: [{ firstName: "John", lastName: "Doe", age: 25 }, { firstName: "Emily", lastName: "Jones", age: 30 }]

// Composed function example: capitalize the reverse of a string
const capitalizeReverse = compose(capitalize, reverse);
console.log("compose:", capitalizeReverse("hello")); // Compose: "Olleh"
console.log("compose:", capitalizeReverse("world")); // Compose: "Dlrow"
