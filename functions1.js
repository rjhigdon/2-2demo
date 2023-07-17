// Funcitons 1 Interactive Lecture

// Converting to a Boolean --------------------------------------------------------------------

// create a number variable, on the next line convert that variable to a boolean with the Boolean method (assign it to another variable)
// if that number is not 0, it will console.log as true

// create a string variable, on the next line convert that variable to a boolean with the Boolean method (assign it to another variable)
// if that string is not a set of empty quotes, it will console.log as true

// let faveNum = 12
// let faveNumBool = Boolean(faveNum)
// console.log(faveNumBool)

// Converting to a Number --------------------------------------------------------------------

// create a boolean variable, on the next line convert that variable to a number with the Number method (assign it to another variable)
// if you set the variable to "true", it will console.log as 1
// if you set the variable to "false", it will console.log as 0

// let myString = 'h'
// let myStringBool = Boolean(myString)
// console.log(myStringBool)

// create a variable equal to a string of numbers, on the next line convert that string into a number using the Number method shorthand (assign it to another variable)
// console.log both variables and they should be different colors in the terminal since one is a number and the


// shorthand number conversion can be done all in one line
// set a variable equal to a string with the shorthand operator in front of it, console.log it and the result will be the same as the other two versions

// set a string variable equal to your height in inches (should look like this '75in')
// convert that string into a number with the Number method and the parseInt method (assigning both to new variables)
// when you console.log the variables, one will succeed and one will fail

// let myHeight = '72in'
// let myHeightNum = parseInt(myHeight)
// console.log(myHeightNum)

// Converting to a String --------------------------------------------------------------------

// create a number variable, on the next line convert that variable to a string with the String method (assign it to another variable)
// when you console.log the 2 variables, they should be different colors

// create another variable but this time use concatenation of empty quotes to turn your number into a string

// create a boolean variable (to either true or false, your choice)
// create another variable equal to a string (saying whatever you want) and concatenate the boolean variable to it
// if you console.log it, the boolean will now be a string


// String Methods --------------------------------------------------------------------

// create a string variable and use the string methods listed below to see if your string includes, starts with, and ends with the letter(s) you input as parameters
// let myName = 'RJ'
// // .includes()
// console.log(myName.includes('RJ'))
// // .startsWith()
// console.log(myName.startsWith('R'))
// // .endsWith()
// console.log(myName.endsWith('j'))

// Trimming Whitespace --------------------------------------------------------------------

// set a variable equal to a string with extra spaces at the beginning and end of the words in your string
// use .trim() on the string and assign it to another variable to remove the extra spaces

// let lotsOfSpaces ='     wow so roomy in here        '
// let noMoreSpaces = lotsOfSpaces.trim()
// console.log(noMoreSpaces, lotsOfSpaces)

// Changing Casing --------------------------------------------------------------------

// set a variable "lowercase" equal to a string with all the letters being in lowercase
// try to use toUpperCase() on "lowercase" without reassigning it (this will fail)
// do the same except reassign "lowercase" to be lowercase.toUpperCase() (this will be successful)

// let lowercase = 'my favorite letter is the letter m'
// let upper = lowercase.toUpperCase(lowercase) //make sure you assign and never just do '()' otherwise it wont' work
// lowercase = lowercase.toLocaleUpperCase() //This is assigning the lowercase string to the change case function
// console.log(lowercase)

// Replacing Characters --------------------------------------------------------------------

// make a variable that is equal to a string saying whatever you want
// use .replace() to replace the first letter of your choosing from the string
// use .replaceAll() to replace every letter of your choosing from the string

// let myFaveWord = 'equanimity'
// let Bungusword = myFaveWord.replace('y', 'ungus')
// console.log(Bungusword)

// let byeBungus = Bungusword.replaceAll('i', 'y')
// console.log(byeBungus)

// Splitting Strings --------------------------------------------------------------------

// make a string variable saying whatever you want
// split the string with .split(' '), .split(','), and .split('')
// console.log them to see the difference

// let sentence = 'Cracker Barrell is very Bungo my Brother in Christ'

// let splitSpace = sentence.split(' ')
// let splitComma = sentence.split(',')
// let splitEmpty = sentence.split('')

// console.log(splitSpace)
// console.log(splitComma)
// console.log(splitEmpty)

// Joinging Strings --------------------------------------------------------------------

// make an array variable containing a few different strings
// join the array with .join(), .join(''), .join(' '), .join(' + ')
// console.log them to see the difference

// let phantomTheives = ['Joker', 'Skull', 'Mona', 'Panther']

// let joinNothing = phantomTheives.join()
// console.log(joinNothing)
// let joinEmpty = phantomTheives.join('')
// console.log(joinEmpty)
// let joinSpace = phantomTheives.join(' ')
// console.log(joinSpace)
// let joinPlus = phantomTheives.join(' + ')
// console.log(joinPlus)

//you can only join arrays, not strings

// Functions --------------------------------------------------------------------

// create functions with no params, 1 param, and 2 params
// then show the difference between a return value vs just console logging something in the function

// function noParams(){
//     console.log('this function has no parameters')
// }
// function oneParam(word){
//     console.log(`the word I chose was ${word}`)
// }

// function twoParams(num1, num2){
//     console.log(num1 + num2)
// }

// noParams()
// oneParam('equanimity')
// twoParams(2, 3)

// function hasReturn(num1, num2){
//     return num1 + num2
// }

// let valueOfTP = twoParams(2,3)
// let valueofHR = hasReturn(2,3)

// console.log(valueOfTP)
// console.log(valueofHR)

// in this case we get undefined for 'console.log(valueOfTP)' because we have returned anything for the function 'function twoParams(num1, num2)'. A FUNCTION'S VALUE IS EQUAL TO THE VALUE IT RETURNS. Think of the function as avariable because of the return


// Scope --------------------------------------------------------------------

// show outer scope vs a function's inner scope by setting variables inside and outside of a function
// console.log both variables, one of them is going to give an error

// let outerVar = 'I am in the outer scope'

// function scopetester(){
//     let innerVar = 'I am in the scope of the scopTester funtion!'
//     console.log(outerVar, innerVar)
// }

// scopetester() // <---without this right here it would log nothing becasuse we have returned anything for the function

// Syntaxes --------------------------------------------------------------------

// show an example of each of the 3 function types doing the same block of code

//declaration
function rooter(num){
    return Math.sqrt(num)
}

// expression
let rooter2 = function(num){
    return Math.sqrt(num)
}

// Arrow
let rooter3 = (num) =>{
    return Math.sqrt(num)
}

console.log(rooter(4))
console.log(rooter2(4))
console.log(rooter3(4))


// then show an arrow function with implicit return as well

let implicit = word => `this arrow function has ${word} return`
console.log(implicit('implicit'))

let rooter4 = num => Math.sqrt(num)
console.log(rooter4(4))[]