// 1. Object Methods and this

console.log("// 1. Object Methods and this");

// Create a Person object
const Person = {
  name: "Josh",
  age: 20,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  },
};

// Direct call
console.log("Person.greet():");
Person.greet(); // "Hello, my name is Josh and I'm 20 years old."

const newPerson = { name: "Jane", age: 25 };

// Using call()
console.log("Person.greet.call(newPerson):");
Person.greet.call(newPerson); // "Hello, my name is Jane and I'm 25 years old."

// Using apply()
console.log("Person.greet.apply(newPerson):");
Person.greet.apply(newPerson); // "Hello, my name is Jane and I'm 25 years old."

// Using bind()
console.log("const usingBind = Person.greet.bind(newPerson):");
const usingBind = Person.greet.bind(newPerson);
usingBind(); // "Hello, my name is Jane and I'm 25 years old."

// 2. Event Handlers and this

const btn = document.querySelector("#btn");

// event listener with a regular function
function handleClick() {
  console.log("// 2. Event Handlers and this");

  console.log("Event using regular function:");
  console.log("this.id:", this.id); // "btn"
  console.log("this.textContent:", this.textContent); // "Click Me"
}

btn.addEventListener("click", handleClick);

const arrowHandleClick = () => {
  console.log("Event using arrow function:");
  console.log(this); // Window object (or undefined in strict mode)
};

// event listener with an arrow function
btn.addEventListener("click", arrowHandleClick);

// 3. Private Data with Closures and this

console.log("// 3. Private Data with Closures and this");

function createCounter() {
  let count = 0;

  let obj = {
    increment: function () {
      count++;
      console.log("this.count: ", this.count); // undefined, because this.count does not exist
      console.log("count:", count); // Correct count value
    },
    getCount: function () {
      return count;
    },
  };

  return obj;
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // 1

// 4. Reusable Component with Closure and this

console.log("// 4. Reusable Component with Closure and this");

document.querySelector("#start-timer").addEventListener("click", function () {
  const timerElementId = "timer";
  const duration = 10;

  const timer = new createTimer(duration, timerElementId);

  timer.start();
});

function createTimer(duration, elementId) {
  this.remainingTime = duration;
  this.element = document.getElementById(elementId);

  this.updateTimer = () => {
    if (this.remainingTime > 0) {
      this.remainingTime--;
      this.element.textContent = `Time remaining: ${this.remainingTime} seconds`;
    } else {
      clearInterval(this.intervalId);
      console.log("Timer finished");
      this.element.textContent = "Timer finished";
    }
  };

  this.start = function () {
    this.intervalId = setInterval(this.updateTimer, 1000);
  };
}
