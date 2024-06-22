// 1. Object Creation Basics

let superhero = {
  name: "The Runner",
  secretIdentity: "designer",
  powers: ["slowing down time"],
  weakness: [],
};

// 2. Methods and Functionality

superhero.usePower = function (powerName) {
  if (!this.powers.includes(powerName)) throw new Error("Power not found");
  console.log(`${this.name} ${powerName}`);
};

superhero.revealIdentity = function () {
  console.log(`secret identity: ${this.secretIdentity}`);
};

superhero.usePower(superhero.powers[0]); //The Runner slowing down time
// superhero.usePower("fly"); //Throws error
superhero.revealIdentity(); // secret identity: designer
