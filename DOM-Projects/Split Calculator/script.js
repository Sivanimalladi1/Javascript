// Calculate tip and split the bill
function calculateSplit() {
    const billAmount = parseFloat(document.getElementById('bill').value);
    const serviceQuality = document.getElementById('service').value;
    const numberOfPeople = parseInt(document.getElementById('people').value);

    //validations
    if(isNaN(billAmount) || billAmount <= 0) {
        alert("Please enter a valid bill amount.");
        return;
    }

    if(numberOfPeople < 1){
        alert('Please enter a valid number of people.');
        return; 
    }

    //calculate the values
    const tipAmount = billAmount * serviceQuality;
    const totalAmount = billAmount + tipAmount;
    const perPerson = totalAmount / numberOfPeople;
    const tipPerPerson = tipAmount / numberOfPeople;

    //display result with 2persons
    document.getElementById('tipAmount').textContent = `Total Amount: $${tipAmount.toFixed(2)}`;
    document.getElementById('totalAmount').textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
    document.getElementById('perPerson').textContent = `Total Amount: $${perPerson.toFixed(2)}`;
    document.getElementById('tipPerPerson').textContent = `Tip per Person: $${tipPerPerson.toFixed(2)}`;
}

document.getElementById('calculateTip').addEventListener('click', calculateSplit);

//calculate base on input change
const all = document.querySelectorAll('input', 'select').forEach((el)=>{
    el.addEventListener('input', calculateSplit);
});
