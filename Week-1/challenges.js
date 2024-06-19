// String Transformations
const capitalize = (str) => {
  if (typeof str !== "string") throw new Error("Invalid input type");
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const reverse = (str) => {
  if (typeof str !== "string") throw new Error("Invalid input type");
  return str.split("").reverse().join("");
};

const isPalindrome = (str) => {
  if (typeof str !== "string") throw new Error("Invalid input type");
  const reversed = reverse(str);
  return str === reversed;
};

const wordCount = (str) => {
  if (typeof str !== "string") throw new Error("Invalid input type");
  return str.trim().split(/\s+/).length;
};

// Array Transformations

const double = (arr) => {
  if (!Array.isArray(arr)) throw new Error("Invalid input type");
  return arr.map((num) => {
    if (typeof num !== "number")
      throw new Error("Array should contain only numbers");
    return num * 2;
  });
};

const filterEven = (arr) => {
  if (!Array.isArray(arr)) throw new Error("Invalid input type");
  return arr.filter((num) => {
    if (typeof num !== "number")
      throw new Error("Array should contain only numbers");
    return num % 2 === 0;
  });
};

const sum = (arr) => {
  if (!Array.isArray(arr)) throw new Error("Invalid input type");
  return arr.reduce((acc, num) => {
    if (typeof num !== "number")
      throw new Error("Array should contain only numbers");
    return acc + num;
  }, 0);
};

const average = (arr) => {
  if (!Array.isArray(arr)) throw new Error("Invalid input type");
  const total = sum(arr);
  return arr.length === 0 ? 0 : total / arr.length;
};

// Object Transformations

const fullName = (person) => {
  if (typeof person !== "object" || person === null)
    throw new Error("Invalid input type");
  return `${person.firstName} ${person.lastName}`;
};

const isAdult = (person) => {
  if (typeof person !== "object" || person === null)
    throw new Error("Invalid input type");
  return person.age >= 18;
};

const filterByAge = (people, minAge) => {
  if (!Array.isArray(people)) throw new Error("Invalid input type");
  return people.filter((person) => {
    if (typeof person !== "object" || person === null)
      throw new Error("Array should contain only objects");
    return person.age >= minAge;
  });
};

// Function Composition

const compose = (f, g) => (x) => f(g(x));
