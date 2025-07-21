const userCard = document.getElementById("userCard")
const UserId =  userCard.getAttribute("data-user-id")
const userRole =  userCard.getAttribute("data-user-role")
console.log(UserId)
console.log(userRole)

//!Modifying data attributes

userCard.setAttribute('data-user-role','developer')
console.log(userCard)