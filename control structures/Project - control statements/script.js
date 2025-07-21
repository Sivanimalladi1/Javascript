document.getElementById("checkvalue").addEventListener("click", function(event){
    event.preventDefault();
    const resultdis = document.getElementById("result");
    resultdis.innerHTML = "";

    const agevalue = parseInt(document.getElementById("age").value);
    console.log(typeof agevalue);

    if (isNaN(agevalue) || agevalue < 0) {
        resultdis.innerHTML = "Please enter a valid age.";
        return;
    }

    // Build the message first
    let message = "";
    if (agevalue >= 18) {
        message = "You are eligible to vote.";
    } else {
        message = "You are not eligible to vote.";
    }

    if (agevalue >= 21) {
        message += "<br>You are eligible to drink alcohol.";
    } else {
        message += "<br>You are not eligible to drink alcohol.";
    }

    if (agevalue >= 16) {
        message += "<br>You are eligible to drive.";
    } else {
        message += "<br>You are not eligible to drive.";
    }

    // Update the DOM only once
    resultdis.innerHTML = message;
})