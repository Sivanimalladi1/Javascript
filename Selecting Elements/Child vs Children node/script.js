const parentnode = document.querySelector("#parent")
console.log(parentnode.childNodes)

parentnode.childNodes.forEach((el)=>console.log(el.nodeType))

//! Fetch all child nodes inside parent only
console.log(parentnode.children)