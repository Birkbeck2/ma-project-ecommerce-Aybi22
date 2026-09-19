let savedCart = JSON.parse(localStorage.getItem("cart"));
console.log(savedCart);

document.addEventListener("DOMContentLoaded", () => {
  displayOrderTime();
});

document.addEventListener("DOMContentLoaded", () => {
  createOrderNumber();
});

/*
document.addEventListener("DOMContentLoaded", () => {
  if (savedDeliveryOption) {
    localStorage.removeItem("collect-option");
  } else if (savedCollectionOption) {
    localStorage.removeItem("deliver-option");
  }
});
*/

let savedCollectionAmount = localStorage.getItem("collection-amount");
let savedDeliveryAmount = localStorage.getItem("delivery-amount");
let shippingAmountDisplay = document.querySelector(".delivery-option-fee");
if (savedDeliveryAmount && shippingAmountDisplay) {
  shippingAmountDisplay.innerHTML = `<span>Shipping fee:</span>£${savedDeliveryAmount}`;
} else if (savedCollectionAmount && shippingAmountDisplay) {
  let shippingAmountDisplay = document.querySelector(".delivery-option-fee");

  shippingAmountDisplay.innerHTML = `<span>Shipping fee:</span> £${savedCollectionAmount}`;
}

let deliveryOptionDisplay = document.querySelector(".delivery-option-display");

let savedDeliveryOption = localStorage.getItem("deliver-option");
let savedCollectionOption = localStorage.getItem("collect-option");
if (savedDeliveryOption) {
  savedCollectionOption = "";
  deliveryOptionDisplay.innerHTML = `<span> Shipping method:</span> ${savedDeliveryOption}`;
} else if (savedCollectionOption) {
  savedDeliveryOption = "";
  deliveryOptionDisplay.innerHTML = `<span>Shipping method:</span> ${savedCollectionOption}`;
}
let savedUserFirstName = localStorage.getItem("firstname");
console.log(savedUserFirstName);
if (savedUserFirstName) {
  let firstNameDisplay = document.querySelector(".first-name-display");
  console.log(savedUserFirstName);
  firstNameDisplay.innerHTML = `Firstname: <span class="user-firstname"> ${savedUserFirstName}</span>`;

  let successMessage = document.querySelector(".success");
  successMessage.innerHTML = `Thank you ${savedUserFirstName} , your order is now placed`;
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

let savedKlarnaOption = localStorage.getItem("klarna-option");
let savedPaypalOption = localStorage.getItem("paypal-option");
let savedCardNumber = localStorage.getItem("card-digits");
if (savedCardNumber) {
  console.log(savedCardNumber);

  let formattedNumber = savedCardNumber.toString();
  console.log(formattedNumber);
  let lastFourDigits = formattedNumber.slice(-4);
  if (formattedNumber.charAt(0) === 4) {
    let displayCardNumber = document.querySelector(".card-number-display");
    displayCardNumber.innerHTML = `<span>Payment method:</span> visa*** ${lastFourDigits}`;
  }
  if (
    ((formattedNumber.charAt(0) === "3" && formattedNumber.charAt(1) === "4") ||
      (formattedNumber.charAt(0) === "3" &&
        formattedNumber.charAt(1) === "7")) &&
    formattedNumber.length === 15
  ) {
    let displayCardNumber = document.querySelector(".card-number-display");
    displayCardNumber.innerHTML = `<span>Payment method:</span> amex*** ${lastFourDigits}`;
  }
  let sixFirstDigits = formattedNumber.slice(0, 6);
  let firstTwoDigits = formattedNumber.slice(0, 2);
  if (
    ((firstTwoDigits >= "51" && firstTwoDigits <= "55") ||
      (sixFirstDigits >= "222100" && sixFirstDigits <= "272099")) &&
    formattedNumber.length === 16
  ) {
    let displayCardNumber = document.querySelector(".card-number-display");
    displayCardNumber.innerHTML = `<span>Payment method:</span> mastercard*** ${lastFourDigits}`;
  }
  let savedPaypalOption = localStorage.getItem("paypal-option");
} else if (savedPaypalOption) {
  localStorage.removeItem("klarna-option");
  let displayCardNumber = document.querySelector(".card-number-display");
  displayCardNumber.innerHTML = `<span> Payment method:</span> ${savedPaypalOption}`;
} else if (savedKlarnaOption) {
  localStorage.removeItem("paypal-option");
  let displayCardNumber = document.querySelector(".card-number-display");

  displayCardNumber.innerHTML = ` <span>Payment method:</span> ${savedKlarnaOption}`;
}

let savedDeliveryTotal = localStorage.getItem("delivery-total");
let savedCollectionTotal = localStorage.getItem("collection-total");
if (savedDeliveryTotal) {
  savedCollectionTotal = "";

  let allTotal = document.querySelector(".purchase-total");
  console.log(allTotal);
  allTotal.innerHTML = `<span>Total:</span>£${savedDeliveryTotal}`;
} else if (savedCollectionTotal) {
  savedDeliveryOption = "";

  let allTotal = document.querySelector(".purchase-total");
  allTotal.innerHTML = `<span>Total:</span> £${savedCollectionTotal}`;
  savedCollectionTotal = "";
}
let savedTiming = localStorage.getItem("orderSlot");
console.log(savedTiming);
let orderNum = document.querySelector(".ordernum-display");
console.log(orderNum);
if (savedTiming) {
  orderNum.innerHTML = `<span>Order number:</span> ORD-${savedTiming.replaceAll(":", "")}`;
}
let savedDate = localStorage.getItem("orderTime");
let dateDisplay = document.querySelector(".date-display");
if (savedDate) {
  dateDisplay.innerHTML = `<span>Order Date:</span> ${savedDate}`;
}

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

  totalCost.innerHTML = `  <span>SubTotal:</span> £${formatted}`;
}

function confirmedOrder() {
  let confirmedInfos = document.querySelector(".confirmation-infos");
  let className;
  confirmedInfos.innerHTML = savedCart

    .map((product) => {
      if (!product.hasColors) {
        className = "no-color";
      }
      let itemPrice = product.quantity * product.price;
      let formatted = itemPrice.toLocaleString("en-GB", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      });

      return `
      
    <div class="infos-box"> 
  
<div class="info-list">
<p class=" infos-text">${product.name}</p>
<p class="color  ${className}">color: ${product.chosenColor}</p>
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
confirmedOrder();
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

/*
function displayOrderTime() {
  let savedDate = localStorage.getItem("orderTime");
  let dateDisplay = document.querySelector(".date-display");
  if (savedDate) {
    dateDisplay.innerHTML = `<span>Order Date:</span> ${savedDate}`;
  }
}
displayOrderTime();
*/
/*
let returnCartBtn = document.querySelector(".cart-btn.back");
console.log(returnCartBtn);
returnCartBtn.addEventListener("click", (e) => {
  localStorage.clear();
});
*/
localStorage.clear();
localStorage.removeItem("cart");
