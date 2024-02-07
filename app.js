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

//! Retrieving data from local storage, if we have data it gonna retrive that and if not then its gonna give empty array, if we dont use here or statement with empty array them if we dont have any data our application will block:
let basket = JSON.parse(localStorage.getItem("data")) || [];  

// ! Making a function in a way that it prints all the carts automatically:
let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, img, desc, price } = x;
      //! Local storage cart amount updation:
      let search =basket.find((x)=>x.id === id)||[];
      return ` 
    <div class="item" id= product-id-${id}>
<img width="220" src= ${img} alt="" />
<div class="details">
  <h3>${name}</h3>
  <p>${desc}</p>
  <div class="price-quantity">
    <h2>$ ${price}</h2>
    <div class="buttons">
      <i onclick ="decrement(${id})" class="bi bi-dash-lg"></i>
      <div id=${id} class="quantity">${search.item === undefined?0 : search.item}</div>
      <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
    </div>
  </div>
</div>
</div>`;
    })
    .join(""));
};
generateShop();

// ! Increment function is here:
let increment = (id) => {
  let selectedItem = id; //? Selecting unique id of carts:
  let search = basket.find((x)=> x.id === selectedItem.id);
  if(search === undefined){
    basket.push({
    id:selectedItem.id,
    item:1
   });
  }else {
    search.item += 1
  }
  //! Applying local storage:
  localStorage.setItem("data",JSON.stringify(basket))
  // console.log(basket)//? Now we make a search function by which we can search wether the thing actually exists on the basket or not if it is in the basket then only item number will increase, not the whole object added in the basket and if it doesnt exist then new object with two values id and item will be added in the basket.
update(selectedItem.id);
};

// ! decrement function is here:
let decrement = (id) => {
  let selectedItem = id; //? Selecting unique id of carts:
  let search = basket.find((x)=> x.id === selectedItem.id);
  if(search.item === 0) return
   else {
    search.item -= 1
  }
  localStorage.setItem("data",JSON.stringify(basket))
  //  console.log(basket) //? Selecting unique id of carts:
 update(selectedItem.id)
}; //? Now we make small basket above the reason to make it is anytime we select any cart what is going to do is gonna store the data inside our basket to tell specifically which items did we selected. If we select one cart then an object created in our basket inside this object we are going to have two items stored id and item

// ! update function is here:
let update = (id1) => {
  let search = basket.find((x)=> x.id === id1)
  document.getElementById(id1).innerHTML =search.item;
  calculation();
};

//! Total calculation function is here:
let calculation = ()=>{
  let cartIcon =document.getElementById("cartAmount")
  cartIcon.innerHTML = basket.map((x)=> x.item).reduce((x,y)=>x+y,0);
}
calculation()
