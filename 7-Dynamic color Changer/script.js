//! Select the elements

const btn1El1 = document.querySelector(".btn1");
const btn2El1 = document.querySelector(".btn2");
const title = document.querySelector(".title");
const reset = document.querySelector(".reset");
const bodyEl = document.querySelector("body")
//Add event listener

btn1El1.addEventListener('click', function(){
    bodyEl.style.backgroundColor = "purple"

})

btn2El1.addEventListener('click', ()=>{
    title.style.fontSize = '90px'
})

reset.addEventListener('click', ()=>{
    bodyEl.style.backgroundColor = ""
    title.style.fontSize = ''
    audio.pause();
})

document.getElementById("sound1").addEventListener('click', function(){
    const audio = new Audio("Audio/jungle-waves-drumampbass-electronic-inspiring-promo-345013.mp3");
    audio.play();
})

document.getElementById("sound2").addEventListener('click', function(){
    const audio = new Audio("Audio/tell-me-the-truth-260010.mp3");
    audio.play();
})

