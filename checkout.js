let savedCart = JSON.parse(localStorage.getItem("cart"));
console.log(savedCart);
/*
document.addEventListener("click", (e) => {
  if (e.target.closest(".basket")) orderRecap();
  updateOrderTotal();
});
*/
/*
function blockOrder(e) {
  if (!savedCart) {
    e.preventDefault();
    let sumError = document.querySelector(".sum-error");
    sumError.textContent = "Add items before placing an order!";
    return;
  }
}
  */

let sumContainer = document.querySelector(".sum-container");

function orderRecap() {
  let sumContainer = document.querySelector(".sum-container");
  let selectedSize = localStorage.getItem("selectedSize");
  let chosenColor = localStorage.getItem("color");
  let className;

  sumContainer.innerHTML = savedCart
    .map((product) => {
      /*
      if (product.chosenColor) {
        className = "show-chosen-color";
      } else {
        className = "hide-chosen-color";
      }
     */
      let className = product.chosenColor
        ? "show-chosen-color"
        : "hide-chosen-color";
      return `
  
  <div class="product-recap" data-id='${product.id}'>
      
         <div class="recap-items">
<div class="recap-box">
         <div class="recap-image">
             <img src="${product.coloredImage}">
          </div>
          <div class="recap-infos">
<div class='recap-name'>${product.name}</div>
<div class='item-size'> size: ${product.selectedSize}</div>
<div class="item-color ${className}"> color: ${product.chosenColor}</div>
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
updateOrderTotal();
function updateCartIcon() {
  const numberOfItems = document.querySelector(".noOfItems");
  if (!numberOfItems) return; // Check if the element exists

  const totalQuantity = savedCart.reduce((sum, item) => sum + item.quantity, 0);
  numberOfItems.innerText = totalQuantity;
}

document.addEventListener("click", (e) => {
  let button = e.target.closest(".del-button");
  if (button) {
    const productId = button.closest(".product-recap").dataset.id;

    //e.target refers to the
    // clicked button.
    //closest('.product') finds the closest ancestor element with the class 'product'.
    // dataset.id retrieves the value of the data-id attribute of that element.
    // This gives us the id of the product to be removed.
    //.closest('.product') moves up the DOM tree to find the container with class product,
    // which holds the data-id of the product.

    removeSavedItems(productId);
  }
});

function removeSavedItems(productId) {
  const id = parseInt(productId);
  //parseInt converts the string to an integer
  let productPosition = savedCart.findIndex((product) => product.id === id); //find product position
  if (productPosition !== -1) {
    savedCart.splice(productPosition, 1); // removes the item at that index
    localStorage.setItem("cart", JSON.stringify(savedCart));
    // updates the cart view

    orderRecap();
    updateOrderTotal(); // updates the total cost
    updateCartIcon(); // updates the cart icon count
  }
}

function updateOrderTotal() {
  let OrderSubTotal = document.querySelector(".order-sub-total");
  let OrderSumTotal = document.querySelector(".order-sum-total");
  let reduceSum = savedCart.reduce((currentTotal, product) => {
    return currentTotal + product.price * product.quantity;
  }, 0);

  let formatted = reduceSum.toLocaleString("en-GB", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
  OrderSubTotal.innerHTML = `<span>SubTotal</span>
  <span class="amount">£${formatted}</span>`;
  OrderSumTotal.innerHTML = `<span>Total</span>
  <span class="amount">£${formatted}</span>`;
}
let billingForm = document.getElementById("billing-form");
console.log(billingForm);
let debitForm = document.getElementById("debit-form");
console.log(debitForm);
window.addEventListener("click", (e) => {
  let paypalForm = document.querySelector(".paypal-form");
  if (
    (e.target.closest(".paypal-form") || e.target.closest(".paypal")) &&
    billingForm.checkValidity()
  ) {
    paypalForm.style.display = "block";
  } else {
    paypalForm.style.display = "none";
    billingForm.reportValidity();
  }
});

window.addEventListener("click", (e) => {
  let klarnaForm = document.querySelector(".klarna-form");
  if (
    (e.target.closest(".klarna-form") || e.target.closest(".klarna-btn")) &&
    billingForm.checkValidity()
  ) {
    klarnaForm.style.display = "block";
  } else {
    klarnaForm.style.display = "none";
    billingForm.reportValidity();
  }
});

/*
document.addEventListener("DOMContentLoaded", () => {
  let placeBtn = document.querySelector(".cart-btn.place-btn");

  placeBtn.addEventListener("click", saveUserData);
  placeBtn.addEventListener("click", orderDate);
  placeBtn.addEventListener("click", orderTiming);
  placeBtn.addEventListener("click", orderRecap);
});
*/

document.addEventListener("click", (e) => {
  if (e.target.closest(".place-btn") || e.target.closest(".modal-btn")) {
    saveUserData();
    orderDate();
    orderTiming();
    orderRecap();
  }
});

document.querySelector(".cart-btn.place-btn").addEventListener("click", () => {
  if (billingForm.checkValidity() && debitForm.checkValidity()) {
    window.location.href = "confirmation.html";
  } else {
    billingForm.reportValidity();
    debitForm.reportValidity();
  }
});
document.addEventListener("click", (e) => {
  let paypalForm = document.querySelector(".paypal-form");
  let formTitle = document.querySelector(".form-title");
  if (e.target.closest(".modal-btn") && paypalForm.checkValidity()) {
    localStorage.setItem("paypal-option", formTitle.textContent);
    e.preventDefault();
    window.location.href = "confirmation.html";
  }
});

document.addEventListener("click", (e) => {
  let klarnaForm = document.querySelector(".klarna-form");
  let KlarnaFormTitle = document.querySelector(".klarna-form-title");
  if (e.target.closest(".klarna-btn") && klarnaForm.checkValidity()) {
    localStorage.setItem("klarna-option", KlarnaFormTitle.textContent);
    e.preventDefault();
    window.location.href = "confirmation.html";
  }
});
/*
function clearCart() {
  setTimeout(() => {
    let numberOfItems = document.querySelector(".noOfItems");
    let cartItems = document.querySelector(".cart-items");
    console.log(cartItems);
    sumContainer = document.querySelector(".sum-container");
    sumContainer.innerHTML = "";
    cartItems.innerHTML = "";
    numberOfItems.innerText = 0;
    let cart = document.querySelector(".cart");
    cart = [];
  }, 5400);
}
  */

document.addEventListener("click", (e) => {
  let deliveryDisplay = document.querySelector(".delivery-fee");
  let shippingFee = document.querySelector(".shipping-fee");
  let collectionFee = document.querySelector(".collection-fee");
  let clicked = e.target;
  if (clicked.closest(".delivery")) {
    deliveryDisplay.innerHTML = `<span>${clicked.className}</span>
  <span class="amount">${shippingFee.textContent}</span>`;
    localStorage.setItem("deliver-option", clicked.className);
  } else if (e.target.closest(".collection")) {
    deliveryDisplay.innerHTML = `<span>${clicked.className}</span>
  <span class="amount">${collectionFee.textContent}</span>`;
    localStorage.setItem("collect-option", clicked.className);
  }
});

function orderDate() {
  let today = new Date();
  let formattedHour;
  let formattedMin;
  let formattedDayNumber;
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let dayNumber = today.getDate();
  let year = today.getFullYear();
  if (dayNumber < 10) {
    formattedDayNumber = `0${today.getDate()}`;
  } else {
    formattedDayNumber = `${today.getDate()}`;
  }
  if (today.getHours() < 10) {
    formattedHour = `0${today.getHours()}`;
  } else {
    formattedHour = `${today.getHours()}`;
  }
  if (today.getMinutes() < 10) {
    formattedMin = `0${today.getMinutes()}`;
  } else {
    formattedMin = `${today.getMinutes()}`;
  }

  let formattedDay = `${days[today.getDay()]}`;

  let formattedMonth = `${months[today.getMonth()]}`;

  let formattedDate =
    formattedDay +
    "," +
    " " +
    formattedDayNumber +
    " " +
    formattedMonth +
    " " +
    year +
    "," +
    " " +
    formattedHour +
    ":" +
    formattedMin;

  localStorage.setItem("orderTime", formattedDate);
}

function orderTiming() {
  let today = new Date();
  let formattedHour;
  let formattedMin;
  let formattedSec;

  if (today.getHours() < 10) {
    formattedHour = `0${today.getHours()}`;
  } else {
    formattedHour = `${today.getHours()}`;
  }
  if (today.getMinutes() < 10) {
    formattedMin = `0${today.getMinutes()}`;
  } else {
    formattedMin = `${today.getMinutes()}`;
  }

  if (today.getSeconds() < 10) {
    formattedSec = `0${today.getSeconds()}`;
  } else {
    formattedSec = `${today.getSeconds()}`;
  }

  let formattedTiming = formattedHour + ":" + formattedMin + ":" + formattedSec;

  localStorage.setItem("orderSlot", formattedTiming);
}

function saveUserData() {
  let cardNumber = document.querySelector(".card-num");
  localStorage.setItem("card-digits", cardNumber.value);
  let firstNameInput = document.querySelector(".first-name");

  let userFirstName = firstNameInput.value;
  localStorage.setItem("firstname", userFirstName); //Only save data when the user performs an action

  let phoneInput = document.querySelector(".phone");
  let userPhone = phoneInput.value;
  localStorage.setItem("phone", userPhone);

  let emailInput = document.querySelector(".email");
  let userEmail = emailInput.value;
  localStorage.setItem("email", userEmail);

  let lastNameInput = document.querySelector(".last-name");
  let userLastName = lastNameInput.value;
  localStorage.setItem("lastname", userLastName);

  let addressInput = document.querySelector(".address");
  let userAddress = addressInput.value;
  localStorage.setItem("address", userAddress);

  let postCodeInput = document.querySelector(".postcode");
  let userPostCode = postCodeInput.value;
  localStorage.setItem("postcode", userPostCode);
}

/*
function redBody() {
  if (sumContainer.innerHTML === "") {
    document.body.style.backgroundColor = "red";
  } else {
    document.body.style.backgroundColor = "blue";
  }
}
redBody();
*/
/*
function orderProcessing(e) {
  //button should not be selected in the loop

  if (savedCart.length > 0) {
    e.preventDefault();
    let placeBtn = document.querySelector(".place-btn");

    placeBtn.textContent = "processing...";
  }
}
setTimeout(() => {
  window.location.href = "confirmation.html";
}, 1900);
*/
/*
function deleteCartContent(e) {
  let sumContainer = document.querySelector(".sum-container");
  if (savedCart) {
    sumContainer.innerHTML = "";
    let OrderTotal = document.querySelector(".sum-total");
    OrderTotal.innerHTML = "";
    let cartItems = document.querySelector(".cart-items");
    if (cartItems) {
      cartItems.innerHTML = "";

      const numberOfItems = document.querySelector(".noOfItems");
      numberOfItems.innerText = 0;
      let total = document.querySelector(".total");
      total.innerHTML = "";
    }
    e.preventDefault();
  }
}
  */
document.querySelector(".footer-icons").addEventListener("click", (e) => {
  if (
    e.target.closest(".visa") ||
    e.target.closest(".master") ||
    e.target.closest("am-express")
  ) {
    let paypalForm = document.querySelector(".paypal-form");
    let debitForm = document.querySelector(".debit-form");
    debitForm.style.display = "block";
    paypalForm.style.display = "none";
  }
  if (e.target.closest(".paypal")) {
    let paypalForm = document.querySelector(".paypal-form");
    let debitForm = document.querySelector(".debit-form");
    debitForm.style.display = "none";
    paypalForm.style.display = "block";
  }
});
