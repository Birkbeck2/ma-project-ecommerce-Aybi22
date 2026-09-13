let savedCart = JSON.parse(localStorage.getItem("cart"));
console.log(savedCart);

document.addEventListener("DOMContentLoaded", () => {
  displayOrderTime();
});

document.addEventListener("DOMContentLoaded", () => {
  createOrderNumber();
});

document.addEventListener("DOMContentLoaded", () => {
  let savedUserFirstName = localStorage.getItem("firstname");
  console.log(savedUserFirstName);
  if (savedUserFirstName) {
    let firstNameDisplay = document.querySelector(".first-name-display");
    console.log(savedUserFirstName);
    firstNameDisplay.innerHTML = `Firstname: <span class="user-firstname"> ${savedUserFirstName}</span>`;

    let successMessage = document.querySelector(".success");
    successMessage.innerHTML = `Thank you ${savedUserFirstName} , your order is now placed`;
  }

  let savedCardNumber = localStorage.getItem("card-digits");
  let displayCardNumber = document.querySelector(".card-number-display");
  if (savedCardNumber) {
    console.log(savedCardNumber);

    let formattedNumber = savedCardNumber.toString();
    console.log(formattedNumber);
    let lastFourDigits = formattedNumber.slice(-4);
    if (formattedNumber.charAt(0) === 4) {
      displayCardNumber.innerHTML = `Payment method: visa*** ${lastFourDigits}`;
    }
    if (
      ((formattedNumber.charAt(0) === "3" &&
        formattedNumber.charAt(1) === "4") ||
        (formattedNumber.charAt(0) === "3" &&
          formattedNumber.charAt(1) === "7")) &&
      formattedNumber.length === 15
    ) {
      displayCardNumber.innerHTML = `Payment method: amex*** ${lastFourDigits}`;
    }
    let sixFirstDigits = formattedNumber.slice(0, 6);
    let firstTwoDigits = formattedNumber.slice(0, 2);
    if (
      ((firstTwoDigits >= "51" && firstTwoDigits <= "55") ||
        (sixFirstDigits >= "222100" && sixFirstDigits <= "272099")) &&
      formattedNumber.length === 16
    ) {
      displayCardNumber.innerHTML = `Payment method: mastercard*** ${lastFourDigits}`;
    }
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
  let savedPayOption = localStorage.getItem("paypal-option");
  if (savedPayOption) {
    let displayCardNumbercard = document.querySelector(".card-num-display");
    displayCardNumber.innerHTML = ` Payment method: ${savedPayOption}`;
  }
});
function getUserData() {
  let savedData = JSON.parse(localStorage.getItem("userData"));
  if (savedData) {
    console.log(savedData);
  }
}

function createOrderNumber() {
  let savedTiming = localStorage.getItem("orderSlot");
  console.log(savedTiming);
  let orderNum = document.querySelector(".ordernum-display");
  console.log(orderNum);
  if (savedTiming) {
    orderNum.textContent += `Order number: ORD-${savedTiming.replaceAll(":", "")}`;
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
function displayOrderTime() {
  let savedDate = localStorage.getItem("orderTime");
  let dateDisplay = document.querySelector(".date-display");
  if (savedDate) {
    dateDisplay.textContent = `Order Date: ${savedDate}`;
  }
}

localStorage.removeItem("cart");
