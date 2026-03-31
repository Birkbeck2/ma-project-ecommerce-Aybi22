let savedCart = JSON.parse(localStorage.getItem("cart"));
console.log(savedCart);

document.addEventListener("DOMContentLoaded", () => {
  let savedUserFirstName = localStorage.getItem("firstname");
  if (savedUserFirstName) {
    let firstNameDisplay = document.querySelector(".first-name-display");
    console.log(firstNameDisplay);
    firstNameDisplay.textContent = `firstname: ${savedUserFirstName}`;
  }
  let savedUserPhone = localStorage.getItem("phone");
  if (savedUserPhone) {
    let phoneNum = document.querySelector(".phone-display");
    phoneNum.textContent = `Telephone number: ${savedUserPhone}`;
  }
  let savedUserEmail = localStorage.getItem("email");
  if (savedUserEmail) {
    let emailDisplay = document.querySelector(".email-display");
    emailDisplay.textContent = `Email: ${savedUserEmail}`;
  }
  let savedUserLastName = localStorage.getItem("lastname");
  if (savedUserLastName) {
    let lastNameDisplay = document.querySelector(".last-name-display");
    lastNameDisplay.textContent = `Lastname:${savedUserLastName}`;
  }

  let savedUserAddress = localStorage.getItem("address");
  if (savedUserAddress) {
    let addressDisplay = document.querySelector(".address-display");
    addressDisplay.textContent = `Address:${savedUserAddress}`;
  }
});
function getUserData() {
  let savedData = JSON.parse(localStorage.getItem("userData"));
  if (savedData) {
    console.log(savedData);
  }
}

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
