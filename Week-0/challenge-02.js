const calcTip = (billValue) => {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
};

const bills = [];
bills.unshift(125, 555, 44);

const tipOne = [calcTip(bills[0])];
const tipTwo = [calcTip(bills[1])];
const tipThree = [calcTip(bills[2])];

const tips = [tipOne, tipTwo, tipThree];

const total = [bills[0] + tipOne, bills[1] + tipTwo, bills[2] + tipThree];

console.log("Tips values are", tips);
console.log("Total bonus is", total);
