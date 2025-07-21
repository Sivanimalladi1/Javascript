//!temperature convertor to celsius to fahrenheit and vice versa

document.getElementById("convert").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission  
 //get the value from the input field
 const temperature = parseInt(document.getElementById("temperature").value);
 console.log(temperature);
 //get the selected unit from the dropdown
 const unit = document.getElementById("unit").value;
    console.log(unit);
 //select where to display result
 const result = document.getElementById("result");

 //clear previous result
    result.innerHTML = "";
    //check if the input is a number
    if (isNaN(temperature)) {
        result.innerHTML = "Please enter a valid number.";
        return;
    }
    //convert the temperature based on the selected unit
    let convertedValue;
    if (unit === "fahrenheit") {
        const convertedValue = (temperature * 9/5) + 32;
        result.innerHTML = `${temperature}°C is equal to ${convertedValue.toFixed(2)}°F`;
    } else if (unit === "celsius") {
        const convertedValue = (temperature - 32) * 5/9;
        result.innerHTML = `${temperature}°F is equal to ${convertedValue.toFixed(2)}°C`;
    }   
})