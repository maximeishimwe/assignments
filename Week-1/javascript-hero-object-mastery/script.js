// 1. Object Creation Basics

console.log("// 1. Object Creation Basics");

const superhero = {
  name: "The Runner",
  secretIdentity: "football coach",
  powers: ["slowing down time"],
  weakness: ["overheating"],
};

// 2. Methods and Functionality

console.log("// 2. Methods and Functionality");

superhero.usePower = function (powerName) {
  if (!this.powers.includes(powerName)) throw new Error("Power not found");
  console.log(`${this.name} is ${powerName}`);
};

superhero.revealIdentity = function () {
  console.log(`secret identity: ${this.secretIdentity}`);
};

superhero.usePower(superhero.powers[0]); //The Runner is slowing down time
// superhero.usePower("fly"); //Throws error
superhero.revealIdentity(); // secret identity: football coach

// 3. Object Constructors

console.log("// 3. Object Constructors");
const Superhero = function (name, secretIdentity, powers, weakness) {
  this.name = name;
  this.secretIdentity = secretIdentity;
  this.powers = powers;
  this.weakness = weakness;
};

const flyer = new Superhero(
  "The Flyer",
  "secretary",
  ["flying"],
  ["strong gravity"]
);
console.log(flyer);

// 4. Prototypal Inheritance

console.log("// 4. Prototypal Inheritance");

Superhero.prototype.usePower = function (powerName) {
  if (!this.powers.includes(powerName)) throw new Error("Power not found");
  console.log(`${this.name} is ${powerName}`);
};

Superhero.prototype.revealIdentity = function () {
  console.log(`secret identity: ${this.secretIdentity}`);
};

// We have access to usePower method even though it is not present on the object itself but rather on its prototype
// Object have access to properties present on its prototype
flyer.usePower("flying"); // The Flyer is flying
flyer.revealIdentity(); // secret identity: secretary

// 5. Object Iteration and Transformation

console.log("// 5. Object Iteration and Transformation");

const heroes = [
  new Superhero(
    "The Runner",
    "football coach",
    ["slowing down time"],
    ["overheating"]
  ),
  new Superhero("The Flyer", "pilot", ["flying"], ["strong gravity"]),
  new Superhero("The Swimmer", "lifeguard", ["swimming fast"], ["dehydration"]),
];

const villains = [
  new Superhero(
    "The Hacker",
    "cybersecurity expert",
    ["hacking systems", "manipulating data"],
    ["power outages"]
  ),
  new Superhero(
    "Shadow Stalker",
    "security guard",
    ["invisibility"],
    ["bright light"]
  ),
];

heroes.forEach((hero) => {
  console.log(
    `Hero Name: ${hero.name}, Secret Identity: ${hero.secretIdentity}`
  );
});

const heroNames = heroes.map((hero) => hero.name);
console.log("Hero Names:", heroNames);

const villainNames = villains.filter((villain) => villain.powers.length > 1);
console.log("Villain Names:", villainNames);
