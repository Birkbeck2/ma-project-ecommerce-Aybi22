let savedCart = JSON.parse(localStorage.getItem("cart"));
console.log(savedCart);

document.addEventListener("DOMContentLoaded", () => {
  let savedUserFirstName = localStorage.getItem("firstname");
  console.log(savedUserFirstName);
  if (savedUserFirstName) {
    let firstNameDisplay = document.querySelector(".first-name-display");
    console.log(savedUserFirstName);
    firstNameDisplay.innerHTML = `Firstname: <span class="user-firstname"> ${savedUserFirstName}</span>`;
  }
  let savedUserPhone = localStorage.getItem("phone");
  if (savedUserPhone) {
    let phoneNum = document.querySelector(".phone-display");
    phoneNum.innerHTML = `Telephone number: <span>${savedUserPhone}</span>`;
  }
  let savedUserEmail = localStorage.getItem("email");
  if (savedUserEmail) {
    let emailDisplay = document.querySelector(".email-display");
    emailDisplay.innerHTML = `Email: <span> ${savedUserEmail}</span>`;
  }
  let savedUserLastName = localStorage.getItem("lastname");
  if (savedUserLastName) {
    let lastNameDisplay = document.querySelector(".last-name-display");
    lastNameDisplay.innerHTML = `Lastname: <span class="user-surname">${savedUserLastName}</span>`;
  }

  let savedUserAddress = localStorage.getItem("address");
  if (savedUserAddress) {
    let addressDisplay = document.querySelector(".address-display");
    addressDisplay.innerHTML = `Address: <span>${savedUserAddress}</span>`;
  }

  let savedUserPostCode = localStorage.getItem("postcode");
  if (savedUserPostCode) {
    let postCodeDisplay = document.querySelector(".postcode-display");
    postCodeDisplay.innerHTML = `Postcode: <span>${savedUserPostCode}</span>`;
  }
});
function getUserData() {
  let savedData = JSON.parse(localStorage.getItem("userData"));
  if (savedData) {
    console.log(savedData);
  }
}

function updateOrderTotal() {
  let totalCost = document.querySelector(".total-cost");

  let reduceSum = savedCart.reduce((currentTotal, product) => {
    return currentTotal + product.price * product.quantity;
  }, 0);

  let formatted = reduceSum.toLocaleString("en-GB", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  totalCost.innerHTML = `  Total: <span class="amount">£${formatted}</span>`;
}

function confirmOrder() {
  let confirmedInfos = document.querySelector(".confirmation-infos");

  confirmedInfos.innerHTML = savedCart

    .map((product) => {
      let itemPrice = product.quantity * product.price;
      let formatted = itemPrice.toLocaleString("en-GB", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      });

      return `
      
    <div class="infos-box"> 
    
<div class="info-list">
<p class=" infos-text">${product.name}</p>
<p> x${product.quantity}</p>
<p class=" infos-price">£${formatted}</p> 

</div>


</div>
<div>

`;
    })
    .join("");
}
updateOrderTotal();
confirmOrder();
document.addEventListener("DOMContentLoaded", () => {
  let printBtn = document.querySelector(".print");
  console.log(printBtn);
  if (printBtn) {
    printBtn.addEventListener("click", printOrder);
  }
});
function printOrder() {
  window.print();
}

orderDate();
