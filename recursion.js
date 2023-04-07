function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  } else {
    return base * exponent(base, exp - 1);
  }
}

console.log(exponent(2, 5));
// exponent(2,5) = 2 * exponent(2, 4) = 2 * 16 = 32
// exponent(2,4) = 2 * exponent(2, 3) = 2 * 18 = 16
// exponent (2,3) = 2 * exponent(2, 2) = 2 * 4 = 8
// exponent(2,2) = 2 * exponent(2, 1) = 2 * 2 = 4
// exponent(2,1) = 2 * exponent(2, 0) = 2 * 1 = 2
// exponent(2,0) = 1

console.log(exponent(7, 3));
console.log(exponent(12, 2));
console.log(exponent(9, 4));