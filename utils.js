/**
 * File Name: utils.js
 * Name: Mapalo Clark James A.
 * Section and Course: BSIT - 1M
 * PROGRAMMING 01 Laboratory - 7
 */

const ZERO_DIVISOR_ERROR = "Error: Division by zero is not allowed.";
/** I used this constant so that I can easily change the error message in one place if needed,
 * that way I don't have to search through the entire code to find and change it in multiple places.
*/

/**
 * Purpose: This adds two numbers together and returns the sum.
 * Parameters: a {number}, b {number}
 * Returns: {number}
 */

function addNumbers(a, b) {
 return a + b;
}

/** 
 * Purpose: This divides two numbers and returns an error message if the divisor is zero.
 * Parameters: a {number}, b {number}
 * Returns: {number|string}
 */
function divideNumbers(a, b) {
    if (b === 0) {
        return ZERO_DIVISOR_ERROR;
    }
    return a / b;
}

/** 
 * Purpose: This subtracts the second number from the first and returns the result.
 * Parameters: a {number}, b {number}
 * Returns: {number}
 */
function subtractNumbers(a, b) {
    return a - b;
}

/**
 * Purpose: This multiplies two numbers and returns the product.
 * Parameters: a {number}, b {number}
 * Returns: {number}
 */
function multiplyNumbers(a, b) {
    return a * b;
}

/**
 * Purpose:    Finds the remainder after dividing the first number by the second.
 * Parameters: a {number} - the number being divided
 *             b {number} - the number to divide by (the divisor)
 * Returns:    {number|string} the remainder, or an error message if b is 0
 */
function modulusNumbers(a, b) {
    if (b === 0) {
        return ZERO_DIVISOR_ERROR;
    }
    return a % b;
}

/**
 * Purpose:    It raises the first number to the exponent of the second number.
 * Parameters: a {number} - the base (the number being multiplied by itself)
 *             b {number} - the exponent (how many times to multiply)
 * Returns:    {number} the result of a raised to the power of b
 */
function powerNumbers(a, b) {
    return a ** b;
}

/**
 * Purpose:    This calculates the total price with VAT, rounded to two decimal places.
 * Parameters: price   {number} - the price of one item
 *             qty     {number} - how many items
 *             vatRate {number} - the VAT as a decimal (0.08 means 8%)
 * Returns:    {number} the total price including VAT
 */
function computeTotal(price, qty, vatRate) {
    let subtotal = price * qty;
    let total = subtotal * (1 + vatRate);
    return Number(total.toFixed(2));
}

/** 
 * Purpose: Creates a greeting message for a name, using "Student" if no name is given.
 * Parameters: name {string}
 * Returns: {string}
 */
function greetStudent(name = "Student") {
    return 'Hello, ' + name + '!';
}

/**
 * Purpose: This adds all the numbers in a list and returns the sum.
 * Parameters: numbers {number[]}
 * Returns: {number}
 */

function sumList(numbers) {
    let total = 0;
    for (const number of numbers) {
        total = total + number; 
    }
    return total;
}

console.log(addNumbers(2, 3));   // this should show 5
console.log(divideNumbers(10, 2)); // this should show 5
console.log(divideNumbers(10, 0)); // this should show error message
console.log(greetStudent()); // this should show "Hello, Student!"
console.log(greetStudent("Cj")); // this should show "Hello, Cj!"
console.log(sumList([10,20,30])); // this should show 60
console.log(sumList([])); // this should show 0
console.log(divideNumbers(10, 2)); // normal: this should show 5
console.log(divideNumbers(0, 5)); // boundary: zero divided by a number, this should show 0
console.log(divideNumbers(10, 0)); // invalid: dividing by zero, this should show error message
console.log(addNumbers(2, 3)); // normal: this should show 5
console.log(addNumbers(0, 0)); // boundary: adding zero, this should show 0
console.log(addNumbers("5", 3)); // invalid: adding a string and a number, this should show 53
console.log(greetStudent("Cj")); // normal: this should show "Hello, Cj!"
console.log(greetStudent("")); // boundary: an empty string, this should show "Hello, !"
console.log(greetStudent(123)); // invalid: a number instead of text, this should show "Hello, 123!"
console.log(sumList([10, 20, 30])); // normal: this adds all numbers so in the console it will show 60
console.log(sumList([])); // boundary: nothing to add, so the total stays 0.
console.log(sumList([5, "a", 3])); // invalid: 5 + "a" joins as a text "5a", then "5a" + 3 gives "5a3" so, this should show 5a3

/** In here I'm reusing addNumbers,subtractNumbers, multiplyNumbers, divideNumbers,powerNumbers, and computeTotal 
 * to refactor the addition, subtraction, multiplication,division, power, and total computation parts of my "calculator.js".
 */

console.log("Addition: 24 + 16 =", addNumbers(24, 16)); // this should show Addition: 24 + 16 = 40 */
console.log("Division: 36 / 6 =", divideNumbers(36, 6));  // this should show Division: 36 / 6 = 6
console.log("Division: 18 / 0 =", divideNumbers(18, 0));  // the guard clause catches zero, so this should show Division: 18 / 0 = Error: Division by zero is not allowed.
console.log("Subtraction: 75 - 28 =", subtractNumbers(75, 28));  // this should show Subtraction: 75 - 28 = 47
console.log("Multiplication: 9 * 7 =", multiplyNumbers(9, 7));  // this should show Multiplication: 9 * 7 = 63
console.log("Modulus: 29 % 6 =", modulusNumbers(29, 6));  // this should show Modulus: 29 % 6 = 5
console.log("Modulus: 29 % 0 =", modulusNumbers(29, 0));  // the guard clause catches zero, this should show Modulus: 29 % 0 = Error: Division by zero is not allowed.
console.log("Power: 4 ** 3 =", powerNumbers(4, 3));      // this should show Power: 4 ** 3 = 64
console.log("Power: (-3) ** 2 =", powerNumbers(-3, 2));  //  a negative number is raised to a power,
console.log("Total with VAT: 180 * 4 at 8% =", computeTotal(180, 4, 0.08));  // this should show Total with VAT: 180 * 4 at 8% = 777.6 so it should show Power: (-3) ** 2 = 9