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
    //Takes input string, converts it into array (of strings)
    let valueAsArray = inputValue.value.split(' ')
    console.log(valueAsArray)

    //Convert 'valueAsArray' into an array of numbers only, remove operators(Nans)
    //10 9 8 7 - + + yields valueAsArray[10, 9, 8, 7]
    var foundNumbers = arraySplitter(valueAsArray)

    console.log(foundNumbers)

    //Find the operators in 'valueAsArray' and push them into a new array - 'foundOperators'
    //'foundOperators' will now contain the input operators in REVERSE order
    //EXAMPLE- Input: 10 9 8 7 - + + yields -> foundOperators['+', '+', '-']
    var foundOperators = findTheOperators(operators, valueAsArray)
    console.log(foundOperators)

    //TODO
    // //Combine the operators with the numbers
    var reorderInputArray = combineBack(foundNumbers, foundOperators)
    inputValueDisplay.innerHTML = (inputValue.value)

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

//Get an array of numbers only from the string array.
function arraySplitter(valueAsArray) {
    //Convert array of strings into an array of numbers
    let result = valueAsArray.map(i=>Number(i));
    //Filter out the Nan values (operators)
    let newArray = result.filter(function (value) {
        return !Number.isNaN(value);
    });
    return newArray;
}

// Push operators into its own array.  Reverses the order of the operators.
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

//Combine the operators array (foundOperators) with the numbers array (foundNumbers).
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

//EVENT LISTENERS
submitBtn.addEventListener('click', RPNotation)


//NOTES
