const startCountDown =() => {
const timeInput = document.getElementById("timeInput").value;
const timerleft = document.getElementById("timerleft");
const timeRemaining = parseInt(timeInput);
console.log(timeRemaining);

if(isNaN(timeRemaining) || timeRemaining <= 0) {
    timerleft.textContent = "Please enter a valid number greater than 0";
    return;
}
//clear the count down text
timerleft.textContent = `Time left: ${timeRemaining} seconds`;
for(i=timeRemaining; i>=0; i--){
    (function(count){
      setTimeout(()=> {
        if(count>0){
            timerleft.textContent = `Time left: ${count} seconds`;
        }
        else{
            timerleft.textContent = "Time's up!";
        }
      }, (timeRemaining - count) * 1000);
    })(i)
}

}
document.getElementById("startbtn").addEventListener("click", startCountDown);