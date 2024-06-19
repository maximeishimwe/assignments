//BMI = mass / height ** 2 = mass / (heigth * height)

function calcBMI() {
  this.result = this.mass / this.height ** 2;
  return this.result;
}
const MarkBmi = {
  fullName: "Mark Miller",
  mass: 98,
  height: 1.69,
  calcMarkBMI: calcBMI,
};

const JohnBmi = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcJohnBMI: calcBMI,
};

MarkBmi.calcMarkBMI();
JohnBmi.calcJohnBMI();
console.log(MarkBmi.result, JohnBmi.result);
if (MarkBmi.result > JohnBmi.result) {
  console.log(
    `${MarkBmi.fullName} with ${MarkBmi.result} BMI has much more BMI than ${JohnBmi.fullName} with ${JohnBmi.result} BMI`
  );
} else if (JohnBmi.result > MarkBmi.result) {
  console.log(
    `${JohnBmi.fullName} with ${JohnBmi.result} BMI has much more BMI than ${MarkBmi.fullName} with ${MarkBmi.result} BMI`
  );
}
