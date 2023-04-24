let numbers1 = [2, 4, 6, 8];
let numbers2 = [1, 3, 5, 7, 9];
let numbers = [...numbers1, ...numbers2];

let square = num => num ** 2;

let squares = numbers.map(number => square(number));

let isEven = (num) => num % 2 === 0 ? true : false;

let evenSquares = squares.filter(square => isEven(Math.sqrt(square)));

const [firstEvenSquare, secondEvenSquare] = evenSquares

console.log(`

Numbers: ${numbers}

Squares: ${squares}

Even Squares: ${evenSquares}

First Even Square: ${firstEvenSquare}

Second Even Square: ${secondEvenSquare}

`);