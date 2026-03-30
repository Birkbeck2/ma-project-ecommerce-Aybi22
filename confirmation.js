let savedCart = JSON.parse(localStorage.getItem("cart"));
console.log(savedCart);

document.addEventListener("DOMContentLoaded", () => {
  let savedName = localStorage.getItem("firstname");
  if (savedName) {
    let customerName = document.querySelector(".detail-name");
    console.log(customerName);
    customerName.textContent = ` Name: ${savedName}`;
  }

  let savedPhone = localStorage.getItem("phone");
  if (savedPhone) {
    let phoneNum = document.querySelector(".phone");
    phoneNum.textContent = `Telephone number: ${savedPhone}`;
  }
});

function updateOrderTotal() {
  let reduceSum = savedCart.reduce((currentTotal, product) => {
    return currentTotal + product.price * product.quantity;
  }, 0);
  let subTotal = `£${reduceSum}`;
  let totalCost = document.querySelector(".total-cost");
  totalCost.innerHTML = ` Order Total: <span class="amount">${subTotal}</span>`;
}

function confirmOrder() {
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
confirmOrder();
