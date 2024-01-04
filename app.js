let shop = document.getElementById("shop")

// ! data array to put automatically:
let shopItemsData =[{
    id: "firstCartData",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing:",
    img: "images/img-1.jpg"
},
{ 
    id: "secondCartData",
name: "Office shirt Shirt",
price: 100,
desc: "Lorem ipsum dolor sit amet consectetur adipisicing:",
img: "images/img-2.jpg"
},
{
    id: "thirdCartData",
    name: "T Shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing:",
    img: "images/img-3.jpg"
},
{
    id: "fourthCartData",
    name: "Mens Suit",
    price: 300,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing:",
    img: "images/img-4.jpg"
}] 

// ! Making a function in a way that it prints all the carts automatically:
let generateShop=()=>{
return shop.innerHTML= shopItemsData.map((x)=>{
return ` <div class="item">
<img width="220" src="images/img-1.jpg" alt="" />
<div class="details">
  <h3>Casual Shirt</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
  <div class="price-quantity">
    <h2>$ 45</h2>
    <div class="buttons">
      <i class="bi bi-dash-lg"></i>
      <div class="quantity">0</div>
      <i class="bi bi-plus-lg"></i>
    </div>
  </div>
</div>
</div>`
}).join("")
}
generateShop()