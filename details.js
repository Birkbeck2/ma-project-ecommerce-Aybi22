import products from "./products.js";
import { addToCart } from "./index.js";
import { closeOver, showCart } from "./cart.js";
let colorCliked;
let clickedSize;
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
let pics = [];
const detail = () => {
  let productId = new URLSearchParams(window.location.search).get("id");
  let thisProduct = products.filter((product) => product.id == productId)[0];

  if (thisProduct) {
    //HTML does NOT support multiple class attributes.
    let coloredBoxes = thisProduct.hasColors ? "showsquare" : "";
    let imgBoxes = thisProduct.hasColors ? "colored-pic" : "";

    const productDetails = document.querySelector(".details");
    productDetails.innerHTML = `
      
        <div class="product-display"  data-id="${thisProduct.id}">
       
        <div class="left-gallery" >
    <div class="image">
    <img src=${thisProduct.image} width="150" height="150" class="small-pic colored-pic" alt="texture suit image">
    </div>
    
    <div class="image">
        <img src=${thisProduct.image1} widh="150" height="150" class="small-pic colored-pic" alt="texture suit image">
    </div>
    <div class="image">
            <img src=${thisProduct.image2} width="150" height="150" class="small-pic colored-pic"  alt="texture suit image">
    </div>
    </div>
    
    
    <div class="left-side">
    <div class="image">
      <img src=${thisProduct.image} id="main-pic" width="500" height="500" alt="texture suit image"> 
    </div>
</div>
        
<div class="right-side">

<h1 class="product-title">${thisProduct.name}<span class="item-price">£${thisProduct.price}</span></h1>
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

<p class="color-selected"></p>
  <div class="color-square-list  ${coloredBoxes} ">

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

    function showSquares() {
      let imgBoxes = document.querySelectorAll(".colored-pic");
      console.log(imgBoxes);
      for (let i = 0; i < imgBoxes.length; i++) {
        let thisGalleryList = imgBoxes[i].closest(".product-display");
        console.log(thisGalleryList);

        let thisPicId = thisGalleryList.dataset.id;
        console.log(thisPicId);
        let thisProduct = products.find((product) => product.id == thisPicId);

        let coloredSquareList =
          thisGalleryList.querySelector(".color-square-list");

        coloredSquareList.innerHTML = "";
        if (thisProduct.hasColors) {
          let colorImage = thisProduct.colorImage;
          console.log(colorImage);
          let keys = Object.keys(colorImage);
          keys.forEach((key) => {
            let square = document.createElement("p");

            coloredSquareList.appendChild(square);
            console.log(coloredSquareList);
            square.classList.add("square-shape");
            square.setAttribute("data-name", key);

            square.style.backgroundColor = key;
          });
        }
      }
    }
    showSquares();

    function displayColoredPic() {
      let imgBoxes = document.querySelectorAll(".colored-pic");
      console.log(imgBoxes);
      for (let i = 0; i < imgBoxes.length; i++) {
        let thisGalleryList = imgBoxes[i].closest(".product-display");
        console.log(thisGalleryList);

        let thisPicId = thisGalleryList.dataset.id;
        console.log(thisPicId);
        let product = products.find((product) => product.id == thisPicId);
        console.log(product);
        let colorImage = product.colorImage;
        console.log(colorImage);

        let keys = Object.keys(colorImage);
        for (let i = 0; i < keys.length; i++) {
          let galleryPic = product.colorImage[keys[i]];
          imgBoxes[i].src = galleryPic;
          imgBoxes[i].addEventListener("click", () => {
            let img = document.getElementById("main-pic");
            img.src = galleryPic;
          });
        }
      }
    }
    document.addEventListener("DOMContentLoaded", () => {
      displayColoredPic();
    });

    //Use filter for object removal — use indexOf only for primitive values like numbers or strings.
    function displayRelatedProducts() {
      let relatedItems = document.querySelector(".related-items");
      let filtered = products.filter(
        (product) => product.category === thisProduct.category,
      );
      let filteredCategory = filtered.filter(
        (product) => product.id !== thisProduct.id,
      );
      const productToDisplay = filteredCategory.slice(0, 4);
      let newContainer = document.createElement("div");
      newContainer.classList.add("items-container");
      newContainer.innerHTML = productToDisplay
        .map((product) => {
          let className; //A const must be assigned immediately
          if (product.category === "regular" || product.category === "blazer") {
            className = "item-suit";
          }
          if (product.category === "leathershoe") {
            className = "item-shoe";
          }
          return `
         
<article class="section-list">
                <h3>${product.category}</h3>
                <a href="details.html?id=${product.id}" >
                  
                    <div class="image ${className}">
                        <img src="${product.image}" alt="${product.description}" >
                    </div>
          
        
                    <div class="item-title">
                        <div class="item-name">${product.name}</div>
                        <div class="item-price">£${product.price}</div>


                    </div>

                </a>
                <a class="btn" href="details.html?id=${product.id}">view product</a>

            </article>
            `;
        })

        .join("");

      relatedItems.appendChild(newContainer);
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
    let chosenColor;
    let selectedSize;
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
      selectedSize = e.currentTarget.textContent;
      sizeDisplay.textContent = `Size selected: ${selectedSize}`;
      upDateUI();
    }

    let colorList = document.querySelector(".color-square-list");
    colorList.addEventListener("click", selectColor);
    function selectColor(e) {
      let colorCliked = e.target;
      chosenColor = colorCliked.dataset.name;
      console.log(colorCliked);
      let img = document.getElementById("main-pic");
      console.log(img);
      let colorImage = thisProduct.colorImage;
      let keys = Object.keys(colorImage);
      for (let i = 0; i < keys.length; i++) {
        if (colorCliked.dataset.name === keys[i]) {
          img.src = colorImage[keys[i]];

          let colorSelected = document.querySelector(".color-selected");
          console.log(colorSelected);
          colorSelected.textContent = ` color selected: ${chosenColor}`;
        }
      }
      upDateUI();
    }
    let addBtn = document.querySelector(".add-btn");

    function upDateUI() {
      if (selectedSize && chosenColor) {
        addBtn.disabled = false;
      } else if (!thisProduct.hasColors) {
        addBtn.disabled = false;
      } else {
        addBtn.disabled = true;
      }
    }

    function stopAddBtn() {
      let addBtn = document.querySelector(".add-btn");

      addBtn.disabled = true;
    }
    stopAddBtn();

    let smallPic = document.getElementsByClassName("small-pic");
    console.log(smallPic);
    for (let i = 0; i < smallPic.length; i++) {
      smallPic[i].addEventListener("click", showMainPic);

      function showMainPic() {
        pics.push(
          `${thisProduct.image}`,
          `${thisProduct.image1}`,
          `${thisProduct.image2}`,
        );
        const img = document.getElementById("main-pic");

        img.setAttribute("src", pics[i]); //img.src=pics[i];

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
