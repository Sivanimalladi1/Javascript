function collectData(){
const languageProficiency = document.getElementsByName("languageProficiency")
console.log(languageProficiency)

//!loop through nodelist to find selected radio button

for(i=0;i<languageProficiency.length;i++){
   if(languageProficiency[i].checked){
    console.log(`selected language is ${languageProficiency[i].value}`)
   }
}

const emailel = document.getElementsByName("email")
console.log(emailel)

}