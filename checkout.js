let savedCart = JSON.parse(localStorage.getItem("cart"));
console.log(savedCart);

document.addEventListener("DOMcontentLoaded", () => {
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
