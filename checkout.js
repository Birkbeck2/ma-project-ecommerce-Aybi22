let savedCart = JSON.parse(localStorage.getItem("cart"));
console.log(savedCart);

document.addEventListener("DOMcontentLoaded", () => {
  let cartBtn = document.querySelector(".cart-btn");

  console.log(cartBtn);
  cartBtn.addEventListener("click", orderRecap);
});

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

</div>
</div>
  </div>
  
  `;
    })
    .join("");
}
orderRecap();
