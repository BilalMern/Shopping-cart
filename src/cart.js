let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();

//! BUILDING CART ITEMS:
let generateCartItems = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        let{img,price,name}=search
        return `
        <div class ="cart-item">
        <img width="100" src ="${img}">
        
        <div class = "details">
        
        <div class ="title-price-x">
        <h4 class ="title-price">
        <p>${name}</p>
        <p class ="cart-items-price"> $ ${price}</p>
        </h4>
        <i onclick ="removeItem(${id})" class="bi bi-x-lg"></i>
        </div>  
        
        <div class="buttons">
      <i onclick ="decrement(${id})" class="bi bi-dash-lg"></i>
      <div id=${id} class="quantity">${item}</div>
      <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
    </div>
        
        <h3>$ ${item * search.price}</h3>

        </div>
        </div>
        `;
      })
      .join(""));
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Cart Is Empty</h2>
    <a href = "index.html">
    <button class ="HomeBtn">Back To Home</button>
    </a>
    `;
  }
};
generateCartItems();

// ! Increment function is here:
let increment = (id) => {
  let selectedItem = id; //? Selecting unique id of carts:
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  //! Applying local storage:
  generateCartItems();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

// ! decrement function is here:
let decrement = (id) => {
  let selectedItem = id; //? Selecting unique id of carts:
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};

// ! update function is here:
let update = (id1) => {
  let search = basket.find((x) => x.id === id1);
  document.getElementById(id1).innerHTML = search.item;
  calculation();
  totalAmount();
};

//! Reomove Item function is here:
let removeItem = (id) => {
  let selectedItem = id;
  basket = basket.filter((x) => x.id !== selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
  generateCartItems();
  totalAmount();
  calculation()
  localStorage.setItem("data",JSON.stringify(basket));
};

//! Clear cart function is here:
let clearCart=()=>{
  basket =[];
  generateCartItems()
  calculation()
  localStorage.setItem("data", JSON.stringify(basket));

}

//! Total amount function is here:
let totalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    label.innerHTML = `<h2>Total Bill: $ ${amount}</h2>
        <button class ="checkout">Checkout</button>
        <button onclick ="clearCart()" class = "removeAll">Clear Cart</button>
        `;
  } else return;
};
totalAmount();
