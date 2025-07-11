//!====Coding Challenge: String Formatter===

//Design a tool that takes user input for a string and applies various transformations, like converting it to lowercase or uppercase, counting characters, finding a word’s index, and concatenating it with another string.

function lowerCaseFunction(text){
    let newtext = text.toLowerCase();
    let newtext1 = text.toUpperCase();
    let countChar = text.length;
    let firstIndex = text[1]
    let newString = 'Hello' + " " + newtext + " " + newtext1
    console.log(newtext, newtext1, countChar, firstIndex, newString);
}
lowerCaseFunction("Good Morning")
