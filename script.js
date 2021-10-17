const inputValue = document.getElementById('prob-input')
const inputValueDisplay = document.getElementById('inputValue')
const submitBtn = document.getElementById('submit-button')
const returnValue = document.getElementById('returnValue')

let operators = ['+', '-', '*', '/']

// Function RPNotation() takes in an input string.  The string contains operands (numbers) followed by operators.
// This format is known as Reverse Polish notation (RPN).
// RPNotation() perfoms the mathematical calculation on a RPN string, such as 10 9 8 7 - + +
// which has a output of 20.

