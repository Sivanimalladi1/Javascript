//!Select all product cards
const productEls = document.querySelectorAll(".product-card")
console.log(productEls);

//!Select all product names

const productname = document.querySelectorAll(".product-name")
productname.forEach((el)=>{
    console.log(el.innerHTML)
})

//!select and log all prices of laptop category products

const laptopPrice = document.querySelectorAll("[data-category='laptop'] .product-price")
console.log(laptopPrice);

laptopPrice.forEach((el)=>{
    console.log(el.textContent)
})

//!select price which is highest

const lowPrice = document.querySelectorAll('.product-price');

lowPrice.forEach((el)=>{
    if(el.innerHTML==='$349')
        console.log(`lowest price in list is ${el.innerHTML}`)
})
