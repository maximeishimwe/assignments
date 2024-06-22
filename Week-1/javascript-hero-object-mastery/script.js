// 1. Object Creation Basics

const superhero = {
  name: "The Runner",
  secretIdentity: "designer",
  powers: ["slowing down time"],
  weakness: [],
};

// 2. Methods and Functionality

superhero.usePower = function (powerName) {
  if (!this.powers.includes(powerName)) throw new Error("Power not found");
  console.log(`${this.name} is ${powerName}`);
};

superhero.revealIdentity = function () {
  console.log(`secret identity: ${this.secretIdentity}`);
};

superhero.usePower(superhero.powers[0]); //The Runner is slowing down time
// superhero.usePower("fly"); //Throws error
superhero.revealIdentity(); // secret identity: designer

// 3. Object Constructors

const Superhero = function (
  name,
  secretIdentity,
  powers,
  weakness,
) {
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
