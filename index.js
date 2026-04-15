let cart = JSON.parse(localStorage.getItem("cart")) || [];

import products from "./products.js";
import detail from "./details.js";

import { showCart, closeOver, closeModal } from "./cart.js";
import { filteredByCategoryBlazer } from "./blazer.js";
import { filteredByCategoryLeatherShoe } from "./leathershoe.js";
import { filteredByCategoryRegular } from "./suit.js";
detail();

let filtered = products;
function allItems(e) {
  filtered = products;
  allNum();
  addText(e);
}

document.addEventListener("DOMContentLoaded", () => {
  showColor();
});

let itemInfo = document.querySelector(".item-info");

function categoryTotalPrice() {
  let categoryPrice = filtered.map((product) => product.price);
  let categoryTotal = categoryPrice.reduce(
    (currentTotal, amount) => currentTotal + amount,
    0,
  );
  let priceBox = document.querySelector(".category-box");
  priceBox.textContent = "Total price: " + "£" + categoryTotal;
}

document.addEventListener("DOMContentLoaded", () => {
  //DOMContentLoaded only fires once,
  filteredByCategoryBlazer("blazer");

  productNum();

  categoryTotalPrice();
});

document.addEventListener("DOMContentLoaded", () => {
  filteredByCategoryLeatherShoe("leathershoe");
  productNum();

  categoryTotalPrice();
});

document.addEventListener("DOMContentLoaded", () => {
  filteredByCategoryRegular("regular");

  categoryTotalPrice();

  productNum();
});

let filterModal = document.querySelector(".filter-modal");

function openFilterModal() {
  filterModal.classList.add("open-filter-modal");
}
function closeFilterModal() {
  filterModal.classList.remove("open-filter-modal");
}

document.addEventListener("click", (e) => {
  if (e.target.closest(".close-filter-modal")) {
    closeFilterModal();
  }

  if (e.target.closest(".search-btn")) {
    let searchInput = document.getElementById("search");
    let searchText = searchInput.value;
    if (searchText) {
      document.querySelector(".category-title").textContent = searchText;

      findItem();
      renderProducts(".shop-container", filtered);

      displayCategory(e);
      categoryTotalPrice();
      clearInput();
    }
  }

  if (e.target.closest(".all-items")) {
    allItems(e);
    addText(e);
    renderProducts(".shop-container", filtered);
    closeFilterModal();
    clearInput();

    productNum();
  }

  if (e.target.closest(".oversixhundred")) {
    addText(e);

    renderProducts(".shop-container", filtered);
    productNum();
    filterByPriceOver();
    closeFilterModal();
  }

  if (e.target.closest(".undersixhundred")) {
    addText(e);
    closeFilterModal();
    renderProducts(".shop-container", filtered);
    productNum();
    filterByPriceUnder();
  }

  if (e.target.closest(".low-high")) {
    addText(e);
    closeFilterModal();
    productNum();
    sortByPriceLow();
    closeFilterModal();
  }

  if (e.target.closest(".high-low")) {
    addText(e);
    closeFilterModal();
    productNum();
    sortByPriceHigh();
  }

  if (e.target.closest(".black")) {
    addText(e);
    filterByColor("black");
    renderProducts(".shop-container", filtered);
    closeFilterModal();
  }

  if (e.target.closest(".red")) {
    addText(e);
    filterByColor("red");
    renderProducts(".shop-container", filtered);
    closeFilterModal();
  }

  if (e.target.closest(".green")) {
    addText(e);
    filterByColor("green");
    renderProducts(".shop-container", filtered);
    closeFilterModal();
  }

  if (e.target.closest(".blue")) {
    addText(e);
    filterByColor("blue");
    renderProducts(".shop-container", filtered);
    closeFilterModal();
  }

  if (e.target.closest(".grey")) {
    addText(e);
    filterByColor("grey");
    renderProducts(".shop-container", filtered);
    closeFilterModal();
  }

  if (e.target.closest(".navy")) {
    addText(e);
    filterByColor("navy");
    renderProducts(".shop-container", filtered);
    closeFilterModal();
  }

  if (e.target.closest(".sort")) {
    openFilterModal();
    sortModalDisplay();
  }

  if (e.target.closest(".filter")) {
    openFilterModal();
    filterModalDisplay();
  }
});

function sortModalDisplay() {
  filterModal.innerHTML = "";
  filterModal.innerHTML = `
  <div class="sort-category">
    <p>sort by price</p>
  <button class="low-high filter-btn" data-category="Low-High">Low-High</button>
  <button class="high-low  filter-btn  " data-category="High-Low">High-Low</button>
  <span class="close-filter-modal">&times;</span>
</div>
  `;
}

function filterModalDisplay() {
  filterModal.innerHTML = "";
  filterModal.innerHTML = `

 <div class="filter-modal-container">
<h3>filters</h3>

                <div class="price-container">

                    <p>price:</p>
                    <div class="filter-price-display">

                       
                        <button class="undersixhundred  filter-btn  " data-category="0-£600">0–£600</button>
                        <button class="oversixhundred  filter-btn   " data-category="£600+">£600+</button>

                    </div>

           
<div class="filter-category ">
              
                    <p>category:</p>
              
                    <div class="category-list  filter-section">
                        <button class="all-items filter-btn" data-category="AllItems">All Items</button>
                        <button class="filter-btn" data-category="blazer">Blazer </button>
                        <button class="filter-btn" data-category="regular">Regular</button>
                        <button class="filter-btn " data-category="leathershoe">Shoe</button>

                    </div>
                 

            </div>
            <div class="color-filter">
                <p>color filter:</p>

                <button class="black  color  filter-btn" data-category="black">
                    <span class="color-circle"></span>
                    black <span class="item-total"></span></button>
                <button class="grey  color  filter-btn  " data-category="grey"><span
                        class="color-circle"></span>grey<span class="item-total"></span></button>
                <button class="green color  filter-btn  " data-category="green"><span
                        class="color-circle"></span>green<span class="item-total"></span></button>
                <button class="navy  color  filter-btn  " data-category="navy"><span
                        class="color-circle"></span>navy<span class="item-total"></span></button>
                <button class="blue color  filter-btn  " data-category="blue"><span
                        class="color-circle"></span>blue<span class="item-total"></span></button>
            </div>
            <span class="close-filter-modal">&times;</span>
        </div>
`;
}

let colorCircle = document.querySelectorAll(".color-circle");
console.log(colorCircle);
function showColor() {
  let buttons = document.querySelectorAll(".color");
  buttons.forEach((button) => {
    let color = button.dataset.category;

    let circle = button.querySelector(".color-circle"); //Target ONLY the circle inside that button

    circle.style.backgroundColor = color;
  });
}
showColor();

function addText(e) {
  const clicked = e.target;
  let itemName = clicked.dataset.category;
  document.querySelector(".category-title").textContent = itemName;
}

/*
let searchInput = document.getElementById("search");
searchInput.addEventListener("input", () => {
  findItem();
  renderProducts(".shop-container", filtered);

  categoryTotalPrice();
});
*/

//This function is called when the page loads to display the cart items and update the total price.

fetch("./template.html")
  .then((response) => response.text())
  .then((html) => {
    let app = document.getElementById("app");
    app.innerHTML = html;
    let cartBtn = document.querySelector(".cart-btn");

    console.log(cartBtn);
    cartBtn.addEventListener("click", blockCheckOut);
    function blockCheckOut(e) {
      let cartItems = document.querySelector(".cart-items");

      if (cartItems.children.length === 0) {
        //element.children.length	Number

        cartItems.textContent = "Please fill cart before checking out";
        e.preventDefault();
      }
    }

    let hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", showMobileMenu);
    function showMobileMenu() {
      let mobileMenu = document.querySelector(".mobileMenu");
      mobileMenu.classList.toggle("mobile-box");
    }

    let closeMobile = document.querySelector(".closeMobile");
    closeMobile.addEventListener("click", mobileClose);
    function mobileClose(e) {
      let mobileMenu = document.querySelector(".mobileMenu");

      if (e.target === closeMobile) {
        mobileMenu.classList.remove("mobile-box");
      }
    }

    updateTotal();
    displayCartItems();
    updateCartIcon();

    let deleteBtn = document.querySelectorAll(".del-btn");
    console.log(deleteBtn);
    let menuItem = document.querySelector(".menu-item");
    console.log(menuItem);
    menuItem.addEventListener("click", showDropNav);
    let topIcon = document.querySelector(".top-icons");
    topIcon.addEventListener("click", showCart);
    let overlay = document.querySelector(".overlay");
    overlay.addEventListener("click", closeOver);
    let close = document.querySelector(".close");
    close.addEventListener("click", closeModal);
    let sub = document.querySelector(".sub");
    let shop = document.getElementById("shop");
    shop.addEventListener("mouseover", showSub);
    shop.addEventListener("mouseout", hideSub);
    sub.addEventListener("mouseover", showSub);
    sub.addEventListener("mouseout", hideSub);
    let reviewBtn = document.querySelector(".review-btn");
    let next = document.getElementById("next");
    next.addEventListener("click", showNext);
    reviewBtn.addEventListener("click", showReviewBox);
    let sendBtn = document.querySelector(".send-btn");
    sendBtn.addEventListener("click", sendText);
    let previous = document.getElementById("previous");
    previous.addEventListener("click", prev);

    // Define these functions INSIDE this block or BEFORE it
    function showSub() {
      sub.style.height = "300px";
      overlay.style.width = "100%";
    }

    function hideSub() {
      sub.style.height = "0px";
      overlay.style.width = "0";
    }

    function showSub() {
      let overlay = document.querySelector(".overlay");
      sub.style.height = "300px";
      overlay.style.width = "100";
    }

    function hideSub() {
      sub.style.height = "0px";
    }
  });

function showReviewBox() {
  let reviewBox = document.querySelector(".review-box");
  let reviewText = document.querySelector(".review-message");
  reviewBox.classList.toggle("show-Box");
  reviewText.classList.remove("show-message");
}

function sendText() {
  let reviewBox = document.querySelector(".review-box");
  let reviewText = document.querySelector(".review-message");
  reviewBox.classList.toggle("show-Box");
  reviewText.classList.toggle("show-message");
  let error = document.querySelector(".error");
  let textBox = document.querySelector(".text-box");
  if (!textBox.value) {
    error.style.display = "block";
    reviewText.classList.toggle("show-message");
  } else {
    error.style.display = "none";
  }
}

let reviewImages = [
  {
    userpic: "images/jack.jpg",
    name: "Jack Kelly",
    job: "web developer",
    review:
      '"The blazer suit I ordered exceeded my expectations. The fit was perfect right out of the box, and the fabric feels premium. Got so many compliments at my event!"',
  },
  {
    userpic: "images/james.jpg",
    name: "James smith",
    job: "web designer",
    review:
      '"Super impressed with the leather shoes. Stylish, comfortable, and very well-made. I’ve worn them daily and they still look brand new."',
  },
  {
    userpic: "images/amanda.jpg",
    name: "Amanda fisher",
    job: "Teacher",
    review:
      '"Fast delivery, excellent packaging, and even better quality than I expected. This store is now my go-to for formal wear."',
  },
  {
    userpic: "images/mark.jpg",
    name: "mark jones",
    job: "software engineer",
    review:
      '"The customer service team was amazing — helped me choose the right size, and the return process was super easy when I wanted to exchange a jacket"',
  },
  {
    userpic: "images/michael.jpg",
    name: "michael damon",
    job: "marketer",
    review:
      '"High-quality materials and attention to detail. The shoes are both dressy and comfortable — perfect for all-day wear at work"',
  },
  {
    userpic: "images/heather.jpg",
    name: "heather smith",
    job: "Assistant",
    review:
      '"I was hesitant to order a suit online, but the measurements guide was spot on. The fit is sleek, and the tailoring feels custom"',
  },
];

let index = 0;

let reviewContent = document.querySelector(".review-content");
let userpic = document.getElementById("userpic");
let customerName = document.querySelector(".name");
let jobTitle = document.querySelector(".job");
let stars = document.querySelector(".stars");

function prev() {
  let stars = document.querySelector(".stars");
  if (index === 0) {
    index = reviewImages.length - 1;
    userpic.src = reviewImages[index]["userpic"];
    customerName.textContent = reviewImages[index]["name"];
    jobTitle.textContent = reviewImages[index]["job"];
    reviewContent.textContent = reviewImages[index]["review"];
    stars.innerHTML =
      '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> ';
  } else {
    index--;
    userpic.src = reviewImages[index]["userpic"];
    customerName.textContent = reviewImages[index]["name"];
    jobTitle.textContent = reviewImages[index]["job"];
    reviewContent.textContent = reviewImages[index]["review"];
    stars.innerHTML =
      '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> ';
  }
}

index = 0;

function showNext() {
  if (index < reviewImages.length - 1) {
    index++;
    userpic.src = reviewImages[index]["userpic"];
    customerName.textContent = reviewImages[index]["name"];
    jobTitle.textContent = reviewImages[index]["job"];
    reviewContent.textContent = reviewImages[index]["review"];
    stars.innerHTML = `<i class="fa-solid fa-star"></i>
                                   <i class="fa-solid fa-star"></i>
                                   <i class="fa-solid fa-star"></i>
                                   <i class="fa-solid fa-star"></i>
                                   <i class="fa-solid fa-star"></i>`;
  } else if (index === reviewImages.length - 1) {
    index = 0;
    userpic.src = reviewImages[index]["userpic"];
    customerName.textContent = reviewImages[index]["name"];
    jobTitle.textContent = reviewImages[index]["job"];
    reviewContent.textContent = reviewImages[index]["review"];
    stars.innerHTML =
      '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> ';
  }
}

function renderProducts(containerSelector, filtered) {
  let container = document.querySelector(containerSelector);

  container.innerHTML = ""; // Clear any old content
  if (filtered.length === 0) {
    container.innerHTML = `<p class="error-text">No product found </p>`;
    numBox.innerHTML = "";
    document.querySelector(".category-title").textContent = "";
  }
  filtered.forEach((product) => {
    let newPara = document.createElement("div");
    newPara.classList.add("section-list");
    newPara.innerHTML = `
  
<a href="details.html?id=${product.id}">
      <div class="image">
      <img src= ${product.image} alt=${product.alt}>
      </div>
      
      </a>
      <div class="item-title">
         <div class='item-name'>${product.name}</div>
         <div class='item-price'data-id=${product.price}>£${product.price}</div>
      </div>    
        
      
       <a  href="details.html?id=${product.id}" class="btn">View product</a>
      
      
      </div>
         `;
    container.appendChild(newPara);
    productNum();

    categoryTotalPrice();
  });
}
/*
function activateCartButtons() {
  let btn = document.querySelectorAll("a.btn");
  btn.forEach((btns) => {
    btns.addEventListener("click", (e) => {
      const productId = e.target.dataset.id;
    });
  });
}
  */

function clearInput() {
  let input = document.getElementById("search");
  if (input.value) {
    input.value = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  //At page load (DOMContentLoaded) →
  // renderProducts with full products array immediately.

  renderProducts(".shop-container", products);
  allNum();
  productNum();
  categoryTotalPrice();

  document.querySelector(".num-box").textContent = "";

  let categoryList = document.querySelectorAll(".category-list");
  console.log(categoryList);
  categoryList.forEach((list) => {
    list.addEventListener("click", displayCategory);
  });
  function displayCategory(event) {
    const clicked = event.target;
    const categoryData = clicked.dataset.category;

    if (categoryData) {
      document.querySelector(".category-title").textContent = categoryData;

      filtered = products.filter(
        (product) => product.category === categoryData,
      );

      renderProducts(".shop-container", filtered);
      productNum();
      categoryTotalPrice();
      closeFilterModal();
      clearInput();
    }
  }
});

function filterByPriceOver() {
  filtered = products.filter((product) => product.price > 600);
  renderProducts(".shop-container", filtered);
  productNum();
  categoryTotalPrice();

  clearInput();
}

function filterByPriceUnder() {
  filtered = products.filter((product) => product.price <= 600);

  renderProducts(".shop-container", filtered);
  productNum();
  categoryTotalPrice();

  clearInput();
}

function filterByColor(color) {
  if ((filtered = products.filter((product) => product.color === color)))
    return true;
  return false;
}

function sortByPriceLow() {
  filtered = [...products].sort((a, b) => a.price - b.price); //make a copy first before sorting/filtering.
  // because.sort() mutates the original array (products) permanently!

  renderProducts(".shop-container", filtered);
  productNum();
  categoryTotalPrice();

  clearInput();
}

function sortByPriceHigh() {
  let filtered = [...products].sort((a, b) => b.price - a.price);
  renderProducts(".shop-container", filtered);
  productNum();

  clearInput();
}

function addToCart(productId, selectedSize) {
  //This function is called when a user wants to add a product to the shopping cart,
  // using that product's id (passed as productId).

  let product = products.find((product) => product.id == productId); // find the product in the products array using the id.
  //The find() method returns the value of the first element in the array that satisfies the provided testing function.
  let existingProduct = cart.find((item) => item.id == productId);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, selectedSize, quantity: 1 }); //...product copies all properties of the product
    // into the new object.
  }
  updateTotal();
  displayCartItems();
  updateCartIcon();
}
//this function push new items to the cart array if the item is not already in the cart

function displayCartItems() {
  let cartItems = document.querySelector(".cart-items");

  cartItems.innerHTML = "";
  cart.forEach((product) => {
    let newCart = document.createElement("div");

    newCart.innerHTML = `
         <div class="product cart-data" data-id='${product.id}'>
          
         <div class="product-items">
         <div class="product-content">
<div class="image-box">
         <div class="image">
             <img src="${product.image}">
          </div>
<div class='item-name'>${product.name}</div>
<div class='item-size'>size: ${product.selectedSize}</div>
  
</div>
              <div class="cart-action">    
            <div class="counter">
                <input type="button" value="-" class="decrease">
                <input type="button" value="${product.quantity}"  class="quantity">
                <input type="button" value="+" class="increase">
            </div>
            <div class='item-price'>£${product.price}</div>
          <div class="del-btn">
           <i class="fa-solid fa-trash"></i>
            </div>
            </div>
          </div>
</div>
    
`;
    cartItems.appendChild(newCart);
    localStorage.setItem("cart", JSON.stringify(cart));
  });
  attachDeleteEvents();
  // re-attach event listeners to new delete buttons
}

function updateCartIcon() {
  const numberOfItems = document.querySelector(".noOfItems");
  if (!numberOfItems) return; // Check if the element exists

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  numberOfItems.innerText = totalQuantity;
}

function updateTotal() {
  let total = document.querySelector(".total");
  let reduceSum = cart.reduce((currentTotal, product) => {
    return currentTotal + product.price * product.quantity;
  }, 0);

  let formatted = reduceSum.toLocaleString("en-GB", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  total.textContent = ` £${formatted}`;
}

document.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("increase") ||
    e.target.classList.contains("decrease")
  ) {
    const productDiv = e.target.closest(".product");

    const productId = productDiv.dataset.id;
    const product = cart.find((p) => p.id == productId);
    if (!product) return;

    const quantityInput = productDiv.querySelector(".quantity");
    let currentQuantity = parseInt(quantityInput.value);

    if (e.target.classList.contains("increase")) {
      currentQuantity++;
    } else if (e.target.classList.contains("decrease") && currentQuantity > 1) {
      currentQuantity--;
    }

    quantityInput.value = currentQuantity;
    product.quantity = currentQuantity;

    // Update item total price

    const itemPrice = productDiv.querySelector(".item-price");
    itemPrice.textContent = `£${(product.price * currentQuantity).toFixed(2)}`;

    // Update cart total
    updateTotal();
    updateCartIcon();
    localStorage.setItem("cart", JSON.stringify(cart));
  }
});

//deleteBtn.forEach(btn=>btn.addEventListener('click',removeItems));

// Loop through each delete button and add an event listener
// to remove the corresponding item from the cart.

// Use forEach to iterate over each delete button
// and add an event listener to each one.

function attachDeleteEvents() {
  //function can be called any time new buttons
  // are added to the DOM:

  const deleteBtns = document.querySelectorAll(".del-btn");
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productId = e.target.closest(".product").dataset.id; //e.target refers to the
      // clicked button.
      //closest('.product') finds the closest ancestor element with the class 'product'.
      // dataset.id retrieves the value of the data-id attribute of that element.
      // This gives us the id of the product to be removed.
      //.closest('.product') moves up the DOM tree to find the container with class product,
      // which holds the data-id of the product.

      removeItems(productId);
    });
  });
}
function removeItems(productId) {
  const id = parseInt(productId);
  //parseInt converts the string to an integer
  let productPosition = cart.findIndex((product) => product.id === id); //find product position
  if (productPosition !== -1) {
    cart.splice(productPosition, 1); // removes the item at that index
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems(); // updates the cart view
    updateTotal(); // updates the total cost
    updateCartIcon(); // updates the cart icon count
  }
}

export { addToCart };

/*
function productNum() {
  document.querySelector(".num-box").textContent = filtered.length;
}
*/
let numBox = document.querySelector(".num-box");
let productNumber = filtered.length;
function productNum() {
  productNumber = filtered.length;
  productNumber > 1
    ? (numBox.innerHTML = productNumber + " items")
    : (numBox.innerHTML = productNumber + "item");
}

function allNum() {
  productNumber = filtered.length;
  let allNumBox = document.querySelector(".allNum-box");
  allNumBox.innerHTML = productNumber + " items";
}

let input = document.getElementById("search");
input.addEventListener("input", () => {
  input.value = input.value.replace(/[^a-zA-Z\s]/g, "");
});

function findItem() {
  let searchInput = document.getElementById("search");
  let searchText = searchInput.value;
  if (!searchText) {
    return;
  }

  filtered = products.filter((product) => {
    if (product.name.toLowerCase().includes(searchText.toLowerCase().trim()))
      return true;
    return false;
  });
}

function showNums() {
  let buttons = document.querySelectorAll(".color");

  buttons.forEach((button) => {
    let number = button.dataset.category;
    let itemTotal = button.querySelector(".item-total");
    let filtered = products.filter((product) => product.color === number);

    itemTotal.innerHTML = `(${filtered.length})`;
  });
}
showNums();
let paras = document.querySelectorAll(".status-item");
paras.forEach((para) => {
  let statusValue = para.dataset.status;
  para.addEventListener("click", () => {
    filtered = products.filter((product) => product.status === statusValue);
    renderProducts(".shop-container", filtered);

    document.querySelector(".category-title").textContent = statusValue;
  });
});
let menuItem = document.querySelector(".menu-item");
console.log(menuItem);
menuItem.addEventListener("click", showDropNav);

function showDropNav() {
  let dropNav = document.querySelector(".drop-nav");
  dropNav.classList.toggle("show-drop");
}
