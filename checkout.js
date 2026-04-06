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
  let savedSize = localStorage.getItem("size");
  sumContainer.innerHTML = savedCart
    .map((product) => {
      return `
  
  <div class="product-recap" data-id='${product.id}'>
      
         <div class="recap-items">
<div class="recap-box">
         <div class="recap-image">
             <img src="${product.image}">
          </div>
          <div class="recap-infos">
<div class='recap-name'>${product.name}</div>
<div class='item-size'> size: ${savedSize}</div>7
<div class='recap-quantity'>Quantity: ${product.quantity}</div>
<div class='recap-price'> £${product.price * product.quantity}</div>




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
  let OrderTotal = document.querySelector(".order-total");

  let reduceSum = savedCart.reduce((currentTotal, product) => {
    return currentTotal + product.price * product.quantity;
  }, 0);

  let formatted = reduceSum.toLocaleString("en-GB", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
  OrderTotal.innerHTML = `  <p>Total:</p> 
  <p class="amount">£${formatted}</p>`;
}

document.addEventListener("DOMContentLoaded", () => {
  let placeBtn = document.querySelector(".place-btn");
  console.log(placeBtn);
  placeBtn.addEventListener("click", stopOrder);
  placeBtn.addEventListener("click", saveUserData);
  placeBtn.addEventListener("click", orderDate);
  placeBtn.addEventListener("click", confirmedOrder);
  placeBtn.addEventListener("click", orderRecap);
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

function saveUserData() {
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
function stopOrder(e) {
  let AllInput = document.getElementsByTagName("input");
  for (let i = 0; i < AllInput.length; i++) {
    if (!AllInput[i].value.trim()) {
      e.preventDefault();

      let orderErrorMessage = document.querySelector(".order-error-message");

      orderErrorMessage.style.display = "block";
      // stop function immediately
      return;
    }

    if (sumContainer.innerHTML === "" && !AllInput[i].value.trim()) {
      e.preventDefault();
      document.body.style.backgroundColor = "red";
      return;
    }
  }

  if (sumContainer.innerHTML === "") {
    e.preventDefault();
    let sumError = document.querySelector(".sum-error");

    sumError.style.display = "block";
    return;
  }
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
