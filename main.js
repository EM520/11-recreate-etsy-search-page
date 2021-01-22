// const str=[1,2,3].map(item=>{
//     return `<div class="item">
//     <div >
//     <img src="${item.Images[0].url_170x135}">
//     </div>
//     `
// }).join('')

// document.querySelector('#grid1').innerHTML= str


const products = items.results
console.log(products)
const shops = items.shop
//console.log(shops)
// grab title, image, price
const productHtml = products.map((item) => 
   `<div class="product-item">
    <div class="product-bg" style="background-image:url(${item.Images[0].url_fullxfull})"></div>
    <h2 class="title">${item.title}</h2>
    <p> ${item.Shop.shop_name}</p>
    <p> ${item.views} </p>
    <strong>$${item.price}</strong>
    </div>
    `
)
console.log(productHtml)

//show up content on html 
document.querySelector('#grid').innerHTML= productHtml.join('')

