let cart = JSON.parse(localStorage.getItem("cart")) || [];

import products from "./products.js";
import detail from "./details.js";

import { showCart, closeOver, closeModal } from "./cart.js";
import { filteredByCategoryBlazer } from "./blazer.js";
import { filteredByCategoryLeatherShoe } from "./leathershoe.js";
import { filteredByCategoryRegular } from "./suit.js";

detail();

document.addEventListener("DOMContentLoaded", () => {
  //DOMContentLoaded only fires once,
  filteredByCategoryBlazer("blazer");
  activateCartButtons();
});

document.addEventListener("DOMContentLoaded", () => {
  filteredByCategoryLeatherShoe("leathershoe");
  activateCartButtons();
});

document.addEventListener("DOMContentLoaded", () => {
  filteredByCategoryRegular("regular");
  activateCartButtons();
});

//This function is called when the page loads to display the cart items and update the total price.

fetch("./template.html")
  .then((response) => response.text())
  .then((html) => {
    let app = document.getElementById("app");
    app.innerHTML = html;

    let cartBtn = document.querySelector(".cart-btn");
    console.log(cartBtn);

    cartBtn.addEventListener("click", emptyCart);
    function emptyCart() {
      let total = document.querySelector(".total");
      localStorage.removeItem("cart");
      let cartItems = document.querySelector(".cart-items");
      if (cartItems && total && cartItems.children.length > 0) {
        //element.children.length	Number
        // Number of child elements
        cartItems.textContent =
          "Check out was successfull , Thank you for your purchase";
        total.innerHTML = `£0`;
      } else {
        cartItems.textContent = "Fill cart before checking out";
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

document.addEventListener("DOMContentLoaded", () => {
  //At page load (DOMContentLoaded) →
  // renderProducts with full products array immediately.

  renderProducts(".shop-container", products);
  activateCartButtons();

  let categoryList = document.querySelector(".category-list");
  categoryList.addEventListener("click", displayCategory);

  function displayCategory(event) {
    const clicked = event.target;
    const categoryId = clicked.getAttribute("id");

    if (categoryId) {
      document.querySelector(".category-title").textContent = categoryId;
      const filtered = products.filter(
        (product) => product.category === categoryId
      );

      renderProducts(".shop-container", filtered);

      activateCartButtons();
    }
  }

  function renderProducts(containerSelector, filtered) {
    let container = document.querySelector(containerSelector);
    container.innerHTML = ""; // Clear any old content
    filtered.forEach((product) => {
      let newPara = document.createElement("div");
      newPara.classList.add("section-list");
      newPara.innerHTML = `
  
<a href="details.html?id=${product.id}">
      <div class="image">
      <img src= ${product.image}>
      </div>
      </a>
      <div class="item-title">
         <div class='item-name'>${product.name}</div>
         <div class='item-price'data-id=${product.price}>£${product.price}</div>
      </div>    
        
      
       <a class="btn" data-id=${product.id}>add to cart</a>
      
      
      </div>
         `;
      container.appendChild(newPara);
    });
  }

  activateCartButtons();

  function activateCartButtons() {
    let btn = document.querySelectorAll("a.btn");
    btn.forEach((btns) => {
      btns.addEventListener("click", (e) => {
        const productId = e.target.dataset.id;

        addToCart(productId);
      });
    });
  }

  let overFourHundred = document.querySelector(".overfourhundred");
  overFourHundred.addEventListener("click", filterByPriceOver);

  function filterByPriceOver() {
    let filtered = products.filter((product) => product.price > 600);

    renderProducts(".shop-container", filtered);
    activateCartButtons();
  }

  let productPrice = document.querySelector(".product-price");
  productPrice.addEventListener("click", filterByPrice);
  function filterByPrice() {
    let filtered = products.filter((product) => product.price <= 600);
    renderProducts(".shop-container", filtered);
    activateCartButtons();
  }

  let priceList = document.querySelector(".price-list");
  priceList.addEventListener("click", filterProductsByPrice);

  function filterProductsByPrice(event) {
    let inputs = document.getElementsByTagName("input");
    let input = event.target;
    for (input of inputs) {
      if (event.target === input && input.classList.contains("low-btn")) {
        let filtered = [...products].sort((a, b) => a.price - b.price); //make a copy first before sorting/filtering.
        // because.sort() mutates the original array (products) permanently!

        renderProducts(".shop-container", filtered);
        activateCartButtons();
      } else if (
        event.target === input &&
        input.classList.contains("high-btn")
      ) {
        let filtered = [...products].sort((a, b) => b.price - a.price);
        renderProducts(".shop-container", filtered);
        activateCartButtons();
      }
    }
  }
});
/*     
   
let categoryList=document.querySelector('.category-list');
categoryList.addEventListener('click',displayCategory);
function displayCategory(event){
   
   let categoryTitle=document.querySelector('.category-title');
   let text=event.target.getAttribute('id');
   if(text){
      categoryTitle.textContent=text;
      
   }
   
   let filterByCategoryList;
   
    let allCategory=document.getElementsByTagName('input');
    let model=event.target;
    for(model of allCategory){
    if (event.target===model){
     
       filterByCategoryList=products.filter(product=>product.category===model.getAttribute('id')); 
       let container=document.querySelector('.shop-container');
   container.innerHTML=
   filterByCategoryList.map(product=>
      `
      
      <div class="section-list">
   <a href="details.html?id=${product.id}">

<img src= ${product.image}>
</a>
<div class="item-title">
   <div class='item-name'>${product.name}</div>
   <div class='item-price'data-id=${product.price}>£${product.price}</div>
</div>    
   
<a class="btn"  data-id=${product.id}>add to cart</a>

</div>



   `).join('');
   
   }
}
}
*/

function addToCart(productId) {
  //This function is called when a user wants to add a product to the shopping cart,
  // using that product's id (passed as productId).
  let product = products.find((product) => product.id == productId); // find the product in the products array using the id.
  //The find() method returns the value of the first element in the array that satisfies the provided testing function.
  let existingProduct = cart.find((item) => item.id == productId);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 }); //...product copies all properties of the product
    // into the new object.
  }
  updateTotal();
  displayCartItems();
  updateCartIcon();
  localStorage.setItem("cart", JSON.stringify(cart));
}
//this function push new items to the cart array if the item is not already in the cart

function displayCartItems() {
  let cartItems = document.querySelector(".cart-items");
  cartItems.innerHTML = "";
  cart.forEach((product) => {
    let newCart = document.createElement("div");

    newCart.innerHTML = `
         <div class="product" data-id='${product.id}'>
          
         <div class="product-items">

 

<div class="image-box">
         <div class="image">
             <img src="${product.image}">
          
         
             </div>
<div class='item-name'>${product.name}</div>

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
     



`;
    cartItems.appendChild(newCart);
  });
  attachDeleteEvents(); // re-attach event listeners to new delete buttons
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

  total.textContent = `subtotal :£${reduceSum}`;
  console.log(reduceSum);
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
