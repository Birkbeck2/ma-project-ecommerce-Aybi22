let savedCart = JSON.parse(localStorage.getItem("cart"));
console.log(savedCart);
document.addEventListener("DOMContentLoaded", () => {
  let cartBtn = document.querySelector(".cart-btn");
  cartBtn.addEventListener("click", orderRecap);
  console.log(cartBtn);
});

function orderRecap() {
  let sumContainer = document.querySelector(".sum-container");

  sumContainer.innerHTML = savedCart
    .map((product) => {
      return `
  
  <div class="product" data-id='${product.id}'>
          
         <div class="product-items">
<div class="image-box">
         <div class="image">
             <img src="${product.image}">
          </div>
<div class='item-name'>Product name:${product.name}</div>
<div class='item-price'> Price:£${product.price * product.quantity}</div>
<div class='item-quantity'>Quantity:${product.quantity}</div>
</div>
  </div>
  
  `;
    })
    .join("");
}
orderRecap();
