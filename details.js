import products from "./products.js";
import { addToCart } from "./index.js";
import { showCart } from "./cart.js";

document.addEventListener("DOMContentLoaded", () => {
  let addBtn = document.querySelector(".add-btn");

  addBtn.addEventListener("click", (e) => {
    const productId = e.currentTarget.dataset.id;
    let selectedSize = localStorage.getItem("selectedSize");

    addToCart(productId, selectedSize);

    showCart();
    addCartCheck();
  });
});
function addCartCheck() {
  let addBtn = document.querySelector(".add-btn");

  addBtn.classList.add("show");
  addBtn.innerHTML = `<i class="fa-solid fa-check"></i>item added to cart`;

  setTimeout(() => {
    addBtn.classList.remove("show");
    addBtn.textContent = "add to cart";
  }, 2500);
}
function stopButton() {
  let addBtn = document.querySelector(".add-btn");
  addBtn.disabled = true;
  setTimeout(() => {
    addBtn.disabled = false;
  }, 4500);
}

const detail = () => {
  let productId = new URLSearchParams(window.location.search).get("id");
  let thisProduct = products.filter((product) => product.id == productId)[0];

  if (thisProduct) {
    const productDetails = document.querySelector(".details");
    productDetails.innerHTML = `
      
        <div class="product-display">
       
        <div class="left-gallery">
    <div class="image">
    <img src=${thisProduct.image} width="150" height="150" class="small-pic" alt="texture suit image">
    </div>
    
    <div class="image">
        <img src=${thisProduct.image1} widh="150" height="150" class="small-pic" alt="texture suit image">
    </div>
    <div class="image">
            <img src=${thisProduct.image2} width="150" height="150" class="small-pic"    alt="texture suit image">
    </div>
    </div>
    
    
    <div class="left-side">
    <div class="image">
      <img src=${thisProduct.image} id="main-pic" width="500" height="500" alt="texture suit image"> 
    </div>
</div>
        
<div class="right-side">

<h1>${thisProduct.name}<span class="item-price">£${thisProduct.price}</span></h1>
<span class="stock">in stock</span>

<div class="p-review">
<div class="stars">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i> 
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
</div>

<div class="review-num">1200 customer's reviews</div>
</div>

<p class="size-display"></p>
<div class="sizes">
</div>
  <div class="add-cart">
   
    <button class="add-btn" href="#" data-id="${thisProduct.id}">
        
        add to cart
        </button>
    </div>


    <div class="product-detail">
        <fieldset> 
            <legend> description </legend>
           <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p> 
          </fieldset>      
             </div>
   
<div class="delivery-infos">
<h3>Delivery & returns <i class="fa-solid fa-truck"></i> <i class="fa-solid fa-arrow-left-long"></i>  </h3>
<p class="info-title">Standard Delivery<span class="delivery-cost">£4.95</span></p>
<p>Delivery in 3-5 working days</p>

<p class="info-title">Next day delivery<span class="delivery-cost">£4.95</span></p>
<p>Delivery Delivery on next working day</p>


<p class="info-title">Click & Collect<span class="delivery-cost" >Free</span></p>
<p>Delivery within 3 - 6 working days</p>

<p class="info-title">Returns</p>
<p>You can return any item for up to 6 months</p>
</div>



</div>

</section>
`;
    //Use filter for object removal — use indexOf only for primitive values like numbers or strings.
    function displayRelatedProducts() {
      let relatedItems = document.querySelector(".item-container");
      let filtered = products.filter(
        (product) => product.category === thisProduct.category,
      );
      let filteredCategory = filtered.filter(
        (product) => product.id !== thisProduct.id,
      );

      const productToDisplay = filteredCategory.slice(0, 4);
      console.log(productToDisplay);
      relatedItems.innerHTML = productToDisplay
        .map((product) => {
          return `
         
<article class="section-list">
                <h3>suit</h3>
                <a href="details.html?id=33">
                    <div class="image">
                        <img src=${product.image}>
                    </div>

                    <div class="item-title">
                        <div class="item-name">${product.name}</div>
                        <div class="item-price">${product.price}</div>


                    </div>

                </a>
                <a class="btn" href="details.html?id=10">view product</a>

            </article>




`;
        })
        .join("");
    }
    displayRelatedProducts();
    function sizeFormat() {
      let productSizes = thisProduct.sizes;
      let sizes = document.querySelector(".sizes");

      sizes.innerHTML = productSizes
        .map((size) => {
          return `
    <span class="size">${size}</span>`;
        })
        .join("");
    }
    sizeFormat();

    let sizes = document.querySelectorAll(".size");
    sizes.forEach((productSizes) => {
      productSizes.addEventListener("click", selectSize);
    });
    function selectSize(e) {
      let addBtn = document.querySelector(".add-btn");
      addBtn.disabled = true;
      let allSize = document.getElementsByClassName("size");
      for (let i = 0; i < allSize.length; i++) {
        allSize[i].style.backgroundColor = "white";
        allSize[i].style.color = "black";
      }

      let clickedSize = e.currentTarget;

      clickedSize.style.backgroundColor = "black";
      clickedSize.style.color = "white";
      let sizeDisplay = document.querySelector(".size-display");
      let selectedSize = e.currentTarget.textContent;
      sizeDisplay.textContent = `Size selected: ${selectedSize}`;
      localStorage.setItem("selectedSize", selectedSize);
      addBtn.disabled = false;
    }

    let addBtn = document.querySelector(".add-btn");

    function stopAddBtn() {
      addBtn.disabled = true;
    }
    stopAddBtn();

    let pics = [
      `${thisProduct.image}`,
      `${thisProduct.image1}`,
      `${thisProduct.image2}`,
    ];

    let smallPic = document.getElementsByClassName("small-pic");
    for (let i = 0; i < smallPic.length; i++) {
      smallPic[i].addEventListener("click", showMainPic);

      function showMainPic() {
        const img = document.getElementById("main-pic");

        img.setAttribute("src", pics[i]);

        let smallPic = document.getElementsByTagName("img");
        for (let i = 0; i < smallPic.length; i++) {
          smallPic[i].className = "small-pic";
          if (smallPic[i].className === "small-pic") {
            this.className = "picborder";
          } else {
            this.className = "small-pic";
          }
        }
      }
    }

    let qBtn = document.getElementsByClassName("q-btn");

    for (let i = 0; i < qBtn.length; i++) {
      qBtn[i].addEventListener("click", show);

      function show(e) {
        const qtitle = e.currentTarget.parentNode.parentNode;

        qtitle.classList.toggle("show-text");
      }
    }
  }
};

export default detail;
