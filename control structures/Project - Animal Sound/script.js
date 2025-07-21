document.getElementById("animalsound").addEventListener("click", function(event) {
    event.preventDefault();
    let animalname = document.getElementById("animalInput").value.toLowerCase();
    const output = document.getElementById("soundOutput");
    switch (animalname){
        case "dog":
            output.textContent = "Woof Woof";
            break;
        case "cat": 
            output.textContent = "Meow Meow";
            break;
        case "cow":
            output.textContent = "Moo Moo";
            break;
        case "sheep":
            output.textContent = "Baa Baa";
            break;
        case "duck":
            output.textContent = "Quack Quack";
            break;
        default:
            output.textContent = "Unknown animal sound";
            break;
    }
})