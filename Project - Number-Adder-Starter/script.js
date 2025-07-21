


addButton.addEventListener('click', function(){

    let number1 = document.getElementById("num1").value
    console.log(`Number1 is ${number1}`)
    let number2 = document.getElementById("num2").value
    console.log(`Number2 is ${number2}`)
    let addButton = document.getElementById("addButton")
    let result = document.getElementById("result")

    //!Sum calculation
    let sum =  parseFloat(number1) + parseFloat(number2)
    console.log(`sum is:-- ${sum}`)
    result.innerHTML = sum
})
