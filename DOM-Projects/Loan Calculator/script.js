document.addEventListener('DOMContentLoaded', function() { //?html, css loaded then js interacts with application otherwise js will not interacts

//!select the elements
const calculateBtn = document.getElementById('calculateBtn');
const amount = document.getElementById('amount');
const interestcal = document.getElementById('interest');
const years = document.getElementById('years');

//Summary
const monthlyPayment = document.getElementById('monthly');
const totalPayment = document.getElementById('total');
const totalInterestRate = document.getElementById('totalInterest');

//Function to calculate loan
function calculateLoan() {  
    const principal = parseFloat(amount.value);
    const interest = parseFloat(interestcal.value) /100 /12;
    const noofYears = parseFloat(years.value) * 12;
    console.log(principal);

    if(isNaN(principal) || isNaN(interest) || isNaN(noofYears)) {
        alert('Please enter valid numbers');
        return;
    }

    //calculate monthly payment
    const x = Math.pow(1 + interest, noofYears);
    const monthly = (principal * x * interest) / (x - 1);
    console.log(monthly);

    if(isFinite(monthly)) {
        //calculate total payment and total interest
        const total = (monthly * noofYears);
        const totalInterest = total - principal;
        console.log(total);

        monthlyPayment.innerHTML = monthly.toFixed(2);
        totalPayment.innerHTML = total.toFixed(2);
        totalInterestRate.innerHTML = totalInterest.toFixed(2);

    } else {
        alert('Please check your numbers');
    }
   }

    //calculate monthly payment
    calculateBtn.addEventListener('click', calculateLoan);
})
