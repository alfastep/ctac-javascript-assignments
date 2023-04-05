let fruitInventory = new Map()

fruitInventory.set('apple', 10);
fruitInventory.set('banana', 20);
fruitInventory.set('orange', 30);
fruitInventory.set('apple', 15);

let bananaInventory = fruitInventory.get('banana');

let uniqueColors = new Set();

uniqueColors.add('red');
uniqueColors.add('blue');
uniqueColors.add('green');
uniqueColors.add('yellow');

let hasBlue = uniqueColors.has('blue');

console.log(fruitInventory);
console.log(bananaInventory);
console.log(uniqueColors);
console.log(hasBlue);