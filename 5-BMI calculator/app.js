//!====Coding Challenge: BMI Calculator===
//Develop a function-based project where users input their height and weight, and the app calculates their BMI using a function that returns the result. Add conditional statements to display health status based on the BMI value.

function bmiCalculator(height, weight){
    let status = ''
    let bmivalue = weight/ (height * height)
    if(bmivalue < 18){
       status = 'under weight'
    } else if (bmi < 24.9) {
       status = "Normal Weight";
    } else if (bmi < 29.9) {
       status = "Overweight";
    } else {
       status = "Obese";
    }
       return status;
}

console.log(bmiCalculator(4,55));