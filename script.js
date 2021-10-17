const inputValue = document.getElementById('prob-input')
const inputValueDisplay = document.getElementById('inputValue')
const submitBtn = document.getElementById('submit-button')
const returnValue = document.getElementById('returnValue')

let operators = ['+', '-', '*', '/']

// Function RPNotation() takes in an input string.  The string contains operands (numbers) followed by operators.
// This format is known as Reverse Polish notation (RPN).
// RPNotation() perfoms the mathematical calculation on a RPN string, such as 10 9 8 7 - + +
// which has a output of 20.

function RPNotation() {

    //TODO
    //Take in a string, convert it into array

    //Convert into an array of numbers only, remove operators?

    //Find the operators in  and push them into an array

    //Combine the operators with the numbers

    //Reverse the oder of operators when 2 or more present??

    // Set final reordered array back into a string

    // Calculate the result based on new string

    //Display result in HTML


    console.log('submit btn works')
    //Clear the input field
    clear()

    //return finalResult
}


//HELPER FUNCTIONS
// 1 Clear input after submit
function clear(){
    inputValue.value = ''
}


//EVENT LISTENERS
submitBtn.addEventListener('click', RPNotation)


//NOTES
