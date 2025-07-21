//!====Coding Challenge: Character Counter Tool===

//Build a small application where users can input text, and the tool displays the length of the text, converts it to uppercase and lowercase, and slices or replaces parts of the text.

function inputLength(inputText) {
    return inputText.length;
}
console.log("Input Text: ", inputLength("JavaScript is awesome!"));


function toUpperCase(inputText) {
    return inputText.toUpperCase();
}   
console.log("Uppercase: ", toUpperCase("JavaScript is awesome!"));

function toLowerCase(inputText) {
    return inputText.toLowerCase();
}   
console.log("Lowercase: ", toLowerCase("JavaScript is awesome!"));

function sliceText(inputText, start, end) {
    return inputText.slice(start, end);
}
console.log("Sliced Text: ", sliceText("JavaScript is awesome!", 0, 10));

function replaceText(inputText, searchValue, newValue) {
    return inputText.replace(searchValue, newValue);
}       
console.log("Replaced Text: ", replaceText("JavaScript is awesome!", "awesome", "fantastic"));
