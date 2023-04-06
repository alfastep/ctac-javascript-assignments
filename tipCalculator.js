function calculateTip(billAmount) {
  return Number((billAmount * .20).toFixed(2));
}

function getBillTotal(billAmount) {
  let tip = calculateTip(billAmount);

  return billAmount + tip;
}

console.log("The tip for your bill is " + calculateTip(56.43));
console.log("Your total bill including the tip is " + getBillTotal(56.43));