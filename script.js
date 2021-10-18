const inputValue = document.getElementById('prob-input')
const inputValueDisplay = document.getElementById('inputValue')
const submitBtn = document.getElementById('submit-button')
const returnValue = document.getElementById('returnValue')

let operators = ['+', '-', '*', '/']


// Function RPNotation() takes in an input string.  The string contains operands (numbers) followed by operators.
// This format is known as Reverse Polish notation (RPN).
// RPNotation() perfoms the mathematical calculation on a RPN string, such as 10 9 8 7 - + +
// which has a output of 20.

//The output is calculated by converting the input string into an array of strings.
//The contents of the array are then subsequently pushed into two new arrays, one containing
//only the numbers withing input, 'foundNumbers', and one containing only the operators, 'foundOperators'
//'foundOperators' also reverses the order of the operators when the input string contains 2 or more 'operators'.

//Next, these two arrays are rejoined using function combineBack(), then set back into a string using
// the .join method.  The new string is then taken into calculateResult() as an argument to calculate the
// final result.




function RPNotation() {
    //STEP 1: Takes input string, converts it into array (of strings)
    let valueAsArray = inputValue.value.split(' ')

    //STEP 2: Convert 'valueAsArray' into an array of numbers only, remove operators(Nans)
    //10 9 8 7 - + + yields valueAsArray[10, 9, 8, 7]
    var foundNumbers = arraySplitter(valueAsArray)

    //STEP 3: Find the operators in 'valueAsArray' and push them into a new array - 'foundOperators'
    //'foundOperators' will now contain the input operators in REVERSE order
    //EXAMPLE- Input: 10 9 8 7 - + + yields -> foundOperators['+', '+', '-']
    var foundOperators = findTheOperators(operators, valueAsArray)

    //STEP 4: Combine the operators with the numbers
    var reorderInputArray = combineBack(foundNumbers, foundOperators)
    inputValueDisplay.innerHTML = (inputValue.value)

    //STEP 5: Set final reordered array back into a string
    var finalNumStr = reorderInputArray.join('')

    //STEP 6: Get final result, set finalResult
    var finalResult = calculateResult(finalNumStr)

    //STEP 7: Display finalResult in HTML
    returnValue.innerHTML = (finalResult)

    //STEP 8: Clear the input field
    clear()
}


//HELPER FUNCTIONS
//(STEP 2) Get an array of numbers only from the string array.
function arraySplitter(valueAsArray) {
    //Convert array of strings into an array of numbers
    let result = valueAsArray.map(i=>Number(i));
    //Filter out the Nan values (operators)
    let newArray = result.filter(function (value) {
        return !Number.isNaN(value);
    });
    return newArray;
}

//(STEP 3) Push operators into its own array.  Reverses the order of the operators.
function findTheOperators (operators, valueAsArray) {
    let foundOperators = [];
    //Loop over each element in 'operators'
    for (let i = 0; i < operators.length; i++) {
        //Loop over every element in 'valueAsArray'
        for (let j = 0; j < valueAsArray.length; j++) {
            //Check if the elements match
            if (operators[i] === valueAsArray[j]) {
                //If there is a match, push it into 'foundOperators'
                foundOperators.push(operators[i]);
            }
        }
    }
    return foundOperators;
}

//(STEP 4) Combine the operators array (foundOperators) with the numbers array (foundNumbers).
//foundOperators are in reverse order from the original
function combineBack(foundNumbers, foundOperators) {
    let reorderInputArray = [],
    i, l = Math.min(foundNumbers.length, foundOperators.length);

    for (i = 0; i < l; i++) {
        reorderInputArray.push(foundNumbers[i], foundOperators[i]);
    }
    reorderInputArray.push(...foundNumbers.slice(l), ...foundOperators.slice(l));
    return (reorderInputArray);
}

//(STEP 6) Calculate the final number using Function Constructor. (See NOTE #3)
function calculateResult(fn) {
    return new Function('return ' + fn)();
}

//(STEP 8) Clear input after submit
function clear(){
    inputValue.value = ''
}


//EVENT LISTENERS
//Initiate RPNotation upon clicking Submit button.
submitBtn.addEventListener('click', RPNotation)




//NOTES
  // #1 - I broke down the problem into small functional steps. I created functions to perform each step. The advantage here is that each step can be more easily replaced/improved by simply targeting the step and associated 'helper function'.

  // #2 - Almost went with eval() in STEP 6.
    // console.log(eval(reorderInputArray.join('')))
    // This appears to be a contraversial solutuion.
    // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)

  // #3 - Found the Function Constructor solution as an alternative to eval()
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
        // https://stackoverflow.com/questions/6479236/calculate-string-value-in-javascript-not-using-eval
    //I think this step could be improved/expanded with a switch statement.