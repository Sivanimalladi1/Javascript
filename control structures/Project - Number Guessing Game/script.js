const randomNumber = Math.floor( Math.random() * 10 ) + 1;
console.log(randomNumber);
const feedback = document.getElementById("feedback");
let userguess;

//Add event
document.getElementById("guessbtn").addEventListener("click", function() {
    //get the value from the input
    userguess = parseInt(document.getElementById("guess").value);
    console.log(userguess);
    //check the guess
    checkGuess();
})

//check the guess function
function checkGuess() {
    while( userguess!= randomNumber){
        if( userguess < randomNumber){
            feedback.innerHTML = "Your guess is too low. Try again!";
            console.log("Your guess is too low. Try again!");
        }
        else if( userguess>randomNumber){
            feedback.innerHTML = "Your guess is too high. Try again!";
            console.log("Your guess is too high. Try again!");
        }
        return;
    }
    feedback.innerHTML = "Congratulations! You guessed the number!";
}