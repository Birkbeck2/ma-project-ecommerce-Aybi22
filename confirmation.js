let savedCart = JSON.parse(localStorage.getItem("cart"));
console.log(savedCart);

function updateOrderTotal() {
  let reduceSum = savedCart.reduce((currentTotal, product) => {
    return currentTotal + product.price * product.quantity;
  }, 0);
  let subTotal = `£${reduceSum}`;
  let totalCost = document.querySelector(".total-cost");
  totalCost.innerHTML = ` Order Total: <span class="amount">${subTotal}</span>`;
}

function confirm() {
  let confirmedInfos = document.querySelector(".confirmation-infos");

  confirmedInfos.innerHTML = savedCart

    .map((product) => {
      return `
      
    <div class="infos-box">  
<p>Product name:<span class=" infos-text">${product.name}</span</p>
<p>Product quantity:<span class=" infos-text">${product.quantity}</p>
<p>Product price:<span class=" infos-text">£${product.quantity * product.price}</p>
<div>

`;
    })
    .join("");
}
updateOrderTotal();
confirm();
