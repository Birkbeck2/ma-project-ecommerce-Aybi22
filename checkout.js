let savedCart = JSON.parse(localStorage.getItem("cart"));
console.log(savedCart);

document.addEventListener("DOMContentLoaded", () => {
  let cartBtn = document.querySelector(".cart-btn");

  console.log(cartBtn);
  cartBtn.addEventListener("click", orderRecap);
});

const deleteBtns = document.querySelectorAll(".del-btn");
deleteBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const productId = e.target.closest(".product").dataset.id; //e.target refers to the
    // clicked button.
    //closest('.product') finds the closest ancestor element with the class 'product'.
    // dataset.id retrieves the value of the data-id attribute of that element.
    // This gives us the id of the product to be removed.
    //.closest('.product') moves up the DOM tree to find the container with class product,
    // which holds the data-id of the product.

    removeItems(productId);
  });
});

function removeItems(productId) {
  const id = parseInt(productId);
  //parseInt converts the string to an integer
  let productPosition = savedCart.findIndex((product) => product.id === id); //find product position
  if (productPosition !== -1) {
    cart.splice(productPosition, 1); // removes the item at that index
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems(); // updates the cart view
    updateTotal(); // updates the total cost
    updateCartIcon(); // updates the cart icon count
  }
}

function orderRecap() {
  let sumContainer = document.querySelector(".sum-container");
  if (savedCart.length === 0) {
    sumContainer.innerHTML = `<p class="red-message">Add items before placing an order!</p>`;
    return;
  }
  sumContainer.innerHTML = savedCart
    .map((product) => {
      return `
  
  <div class="product" data-id='${product.id}'>
      
         <div class="recap-items">
<div class="recap-box">
         <div class="recap-image">
             <img src="${product.image}">
          </div>
          <div class="recap-infos">
<div class='recap-name'>${product.name}</div>
<div class='recap-quantity'>Quantity: ${product.quantity}</div>
<div class='recap-price'> £${product.price * product.quantity}</div>

<button class="del-btn order">remove</button>

</div>
</div>
  </div>
  
  `;
    })
    .join("");
}
orderRecap();

function updateOrderTotal() {
  let reduceSum = savedCart.reduce((currentTotal, product) => {
    return currentTotal + product.price * product.quantity;
  }, 0);
  let subTotal = `£${reduceSum}`;
  let OrderTotal = document.querySelector(".sum-total");
  OrderTotal.innerHTML = `  Total: <span class="amount">${subTotal}</span>`;
}
updateOrderTotal();
document.addEventListener("DOMContentLoaded", () => {
  let placeBtn = document.querySelector(".place-btn");
  console.log(placeBtn);
  placeBtn.addEventListener("click", saveName);
});
function saveUserData() {
  let firstNameInput = document.querySelector(".first-name");
  console.log(input);
  let userFirstName = firstNameInput.value;
  localStorage.setItem("firstname", userFirstName); //Only save data when the user performs an action

  let phoneInput = document.querySelector(".phone");
  let userPhone = phoneInput.value;
  localStorage.setItem("phone", userPhone);
}
