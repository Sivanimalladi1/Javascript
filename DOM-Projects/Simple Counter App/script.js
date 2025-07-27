//Make sure elements are loaded

document.addEventListener("DOMContentLoaded", ()=> {
    const countervalue = document.getElementById("counter");
    const increaseBtn = document.getElementById("increment-btn");
    const decreaseBtn = document.getElementById("decrement-btn");
    const resetBtn = document.getElementById("reset-btn");
    //add global values;
    let count =0;
    // add event listeners to buttons
    increaseBtn.addEventListener("click", () => {
        count++;
        SimpleCounter()
        console.log("Increase button clicked. Current count: " + count);
    })
    decreaseBtn.addEventListener("click", () => {
        count--;
        SimpleCounter()
        console.log("Decrease button clicked. Current count: " + count);
    })
    resetBtn.addEventListener("click", () => {
        count = 0;
        SimpleCounter()
        console.log("Reset button clicked. Count reset to: " + count);
    })
    function SimpleCounter(){
        // Initialize the counter value
        countervalue.textContent = count;
    }
});
