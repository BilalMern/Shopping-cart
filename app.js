let shop = document.getElementById("shop");

// ! data array to put automatically:
let shopItemsData = [
  {
    id: "firstCartData",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing:",
    img: "images/img-1.jpg",
  },
  {
    id: "secondCartData",
    name: "Office Shirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing:",
    img: "images/img-2.jpg",
  },
  {
    id: "thirdCartData",
    name: "T Shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing:",
    img: "images/img-3.jpg",
  },
  {
    id: "fourthCartData",
    name: "Mens Suit",
    price: 300,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing:",
    img: "images/img-4.jpg",
  },
];

// ! Making a function in a way that it prints all the carts automatically:
let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, img, desc, price } = x;
      return ` 
    <div class="item" id= product-id-${id}>
<img width="220" src= ${img} alt="" />
<div class="details">
  <h3>${name}</h3>
  <p>${desc}</p>
  <div class="price-quantity">
    <h2>$ ${price}</h2>
    <div class="buttons">
      <i class="bi bi-dash-lg"></i>
      <div id=${id} class="quantity">0</div>
      <i class="bi bi-plus-lg"></i>
    </div>
  </div>
</div>
</div>`;
    })
    .join(""));
};
generateShop();
