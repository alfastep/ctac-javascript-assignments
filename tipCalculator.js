function calculateTip(billAmount) {
  return Number((billAmount * .20).toFixed(2));
}

function getBillTotal(billAmount) {
  let tip = calculateTip(billAmount);

  return billAmount + tip;
}

console.log(calculateTip(56.43));
console.log(getBillTotal(56.43));