
let cart=[];


import products from'./products.js'


import  detail from'./details.js';

import { filteredByCategoryRegular } from './suit.js';
import { filteredByCategoryBlazer } from './blazer.js';
import { filteredByCategoryLeatherShoe } from './leathershoe.js';
import{showCart,closeOver,closeModal} from'./cart.js';

detail();


document.addEventListener('DOMContentLoaded',() => {
   filteredByCategoryRegular('regular');
 });                                                  
 
 document.addEventListener('DOMContentLoaded',() => {
   filteredByCategoryBlazer('blazer');
 });        

 document.addEventListener('DOMContentLoaded',()=>{
filteredByCategoryLeatherShoe('leathershoe');
 });














   
     











                                             

                                                  
 
 






   
   
   
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /*                                                       
                                                         
 let productUpdate=products.find(product=>product.id===5);
 if(productUpdate){
    productUpdate.innerHTML=`
    
     colors:"<div class='suitcolor'> <div id='black'></div> <div id='blue'></div> <div id='grey'></div> </div>",
            
    
    
    
    
    
    `
 }
 */
 

  
 fetch('./template.html')
 .then(response=>response.text())
 .then(html=>{
   
    let app=document.getElementById('app')
    app.innerHTML=html;
   




   
  
let topIcon=document.querySelector('.top-icons');
 topIcon.addEventListener('click', showCart);
 
 let overlay=document.querySelector('.overlay')
 overlay.addEventListener('click', closeOver);
let close=document.querySelector('.close');
 close.addEventListener('click', closeModal); 
  
 let sub=document.querySelector('.sub');
 let shop=document.getElementById('shop');
 shop.addEventListener('mouseover', showSub);
 shop.addEventListener('mouseout', hideSub);
 sub.addEventListener('mouseover',showSub);
 sub.addEventListener('mouseout',hideSub);

 
 let reviewBtn = document.querySelector('.review-btn');
 let next=document.getElementById('next');
 next.addEventListener('click',showNext);
 reviewBtn.addEventListener('click', showReviewBox);
 let sendBtn = document.querySelector('.send-btn');
 sendBtn.addEventListener('click', sendText);
 let previous = document.getElementById('previous');
 previous.addEventListener('click', prev);
 
 





 function showSub(){

  let overlay = document.querySelector('.overlay'); 
  sub.style.height="300px";
 overlay.style.width="100";
}

function hideSub(){
   sub.style.height="0px";
   
}  
 

let hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', showMobileMenu);
  function showMobileMenu() {
      let mobileMenu = document.querySelector('.mobileMenu');
      mobileMenu.classList.toggle('mobile-box');
  }
  
  let closeMobile = document.querySelector('.closeMobile');
  closeMobile.addEventListener('click', mobileClose);
  function mobileClose(e) {
      let mobileMenu = document.querySelector('.mobileMenu');
  
      if (e.target === closeMobile) {
          mobileMenu.classList.remove('mobile-box');
      }
  
        
  
  
  }
 


  

        
    
    


       














});



 function showReviewBox() {
 
     let reviewBox=document.querySelector('.review-box');
     let reviewText=document.querySelector('.review-message');
 
    reviewBox.classList.toggle('show-Box');
    reviewText.classList.remove('show-message');
 }  

 


 function sendText() {
     let reviewBox = document.querySelector('.review-box');
     let reviewText = document.querySelector('.review-message');
 
    
         reviewBox.classList.toggle('show-Box');
         reviewText.classList.toggle('show-message');
     

         let error=document.querySelector('.error');

         let textBox=document.querySelector('.text-box');
 if(!textBox.value){
    
    error.style.display="block";
    reviewText.classList.toggle('show-message');

 }else{
    error.style.display="none";
   

}
 
 
}

let reviewImages = [
 {userpic: 'images/jack.jpg', name: "Jack Kelly", job: "web developer" },
 { userpic: 'images/james.jpg', name: "James smith", job: "web designer" },
 { userpic: 'images/amanda.jpg', name: "Amanda fisher", job: "Teacher" },
 { userpic: 'images/mark.jpg', name: "mark jones", job: "software engineer" },
 { userpic: 'images/michael.jpg', name: "michael damon", job: "marketer" },
 { userpic: 'images/heather.jpg', name: "heather smith", job: "Assistant" },


]

let index = 0;


 


function prev() {

 let userpic=document.getElementById('userpic');
 let customerName=document.querySelector('.name');
 let jobTitle=document.querySelector('.job');
 let stars=document.querySelector('.stars');
 if (index===0) {
     index=reviewImages.length - 1;
     userpic.src=reviewImages[index]["userpic"];
     customerName.textContent=reviewImages[index]["name"];
     jobTitle.textContent=reviewImages[index]["job"];
     stars.innerHTML='<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> '
 } else {


     index--;



     userpic.src=reviewImages[index]["userpic"];
     customerName.textContent=reviewImages[index]["name"];
     jobTitle.textContent=reviewImages[index]["job"];
     stars.innerHTML='<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> '
 }

}
 

index=0;

function showNext() {
  
    let userpic = document.getElementById('userpic');
    let customerName = document.querySelector('.name');
    let jobTitle = document.querySelector('.job');
    let stars = document.querySelector('.stars');

    if (index < reviewImages.length - 1) {
        index++;
        userpic.src = reviewImages[index]["userpic"];
        customerName.textContent = reviewImages[index]["name"];
        jobTitle.textContent = reviewImages[index]["job"];
        stars.innerHTML = `<i class="fa-solid fa-star"></i>
                                   <i class="fa-solid fa-star"></i>
                                   <i class="fa-solid fa-star"></i>
                                   <i class="fa-solid fa-star"></i>
                                   <i class="fa-solid fa-star"></i>`

    } else if (index === reviewImages.length - 1) {
        index = 0;
        userpic.src = reviewImages[index]["userpic"];
        customerName.textContent = reviewImages[index]["name"];
        jobTitle.textContent = reviewImages[index]["job"];
        stars.innerHTML = '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> '

    }
  


   }

 









function renderProducts(){

products.forEach(product=>{
    let container=document.querySelector('.shop-container');
 let newPara=document.createElement('div')
   newPara.innerHTML=`
   

<div class="section-list">
   <a href="details.html?id=${product.id}">

<img src= ${product.image}>
</a>
<div class="item-title">
   <div class='item-name'>${product.name}</div>
   <div class='item-price'>£${product.price}</div>
</div>    
  
<a class="btn"    data-id=${product.id}>add to cart</a>
</div>
   
  
   
   `;

   
  
   container.appendChild(newPara);
   
})

}
renderProducts();
 
 


 

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
   <div class='item-price'>£${product.price}</div>
</div>    
   
<a class="btn"  data-id=${product.id}>add to cart</a>

</div>



   `).join('');
   
   }
}
}

 

document.addEventListener('DOMContentLoaded',()=>{
   let overFourHundred=document.querySelector('.overfourhundred');
   overFourHundred.addEventListener('click',filterByPriceOver);
      function filterByPriceOver(){
       let filterByPriceOver=products.filter(product=>product.price>600);
      let container=document.querySelector('.shop-container');
   
      container.innerHTML=
      filterByPriceOver.map(product=>
   `
   
   <div class="section-list">
      <a href="details.html?id=${product.id}">
   
   <img src= ${product.image}>
   </a>
   <div class="item-title">
      <div class='item-name'>${product.name}</div>
      <div class='item-price'>£${product.price}</div>
   </div>    
      
   <a class="btn"   data-id=${product.id}>add to cart</a>
   </div>
   
   
   
      `).join('');
      }
   
   filterByPriceOver()
})














let productPrice=document.querySelector('.product-price');
productPrice.addEventListener('click',filterByPrice);
   function filterByPrice(){
    let filterByPrice=products.filter(product=>product.price<=600 );
   let container=document.querySelector('.shop-container');

   container.innerHTML=
   filterByPrice.map(product=>
`

<div class="section-list">
   <a href="details.html?id=${product.id}">

<img src= ${product.image}>
</a>
<div class="item-title">
   <div class='item-name'>${product.name}</div>
   <div class='item-price'>£${product.price}</div>
</div>    
   
<a class="btn"   data-id=${product.id}>add to cart</a>
</div>



   `).join('');
   }
   
   let priceList=document.querySelector('.price-list');
   priceList.addEventListener('click',filterProductsByPrice);


function filterProductsByPrice(event){
   let filterProductsByPrice;
   let inputs=document.getElementsByTagName('input');
   let input=event.target;
   for( input of inputs){
     
      if(event.target===input && input.classList.contains('low-btn')){
         filterProductsByPrice=products.sort((a,b)=>a.price-b.price);

         let container=document.querySelector('.shop-container')     
         container.innerHTML=
      filterProductsByPrice.map(product=>
            `
            <div class="section-list">
            <a href="details.html?id=${product.id}">
         
         <img src= ${product.image}>
         </a>
         <div class="item-title">
            <div class='item-name'>${product.name}</div>
            <div class='item-price'>£${product.price}</div>
         </div>    
            
         <a class="btn"   data-id=${product.id}>add to cart</a>
         </div>
         
            
            
            
            
            `).join('');
         


   
       }else if(event.target===input && input.classList.contains('high-btn')){
   
         filterProductsByPrice=products.sort((a,b)=>b.price-a.price);
             
        
         let container=document.querySelector('.shop-container')     
         container.innerHTML=
      filterProductsByPrice.map(product=>
            `
            <div class="section-list">
            <a href="details.html?id=${product.id}">
         
         <img src= ${product.image}>
         </a>
         <div class="item-title">
            <div class='item-name'>${product.name}</div>
            <div class='item-price'>£${product.price}</div>
         </div>    
           
         <a class="btn"   data-id=${product.id}>add to cart</a>
         </div>
         
            
            
            
            
            `).join(''); 
         
       }
      }
}
document.addEventListener('DOMContentLoaded',()=>{
let btn=document.querySelectorAll('a.btn');

btn.forEach(btns=>{

btns.addEventListener('click',(e)=>{
const productId=e.target.dataset.id;
addToCart(productId);

})

})
})

   function addToCart(productId){
    
    
        
            let product=products.find(product=>product.id==productId);
      
              cart.push({...product});

                             
              displayCartItems();            
   }
 



  

           
                 
        
  function displayCartItems(){
         let cartItems=document.querySelector('.cart-items');
         
         cartItems.innerHTML= "";
        
         cart.forEach(product=>{
            let newCart=document.createElement('div');
             newCart.innerHTML=`
            <div class="image">
             <img src="${product.image}">
             </div>
            <div class="item-title">
            <div class='item-name'>${product.name}</div>
            <div class='item-price'>£${product.price}</div>
         </div>    
             
             `;
             cartItems.appendChild(newCart);
         })
             
     }
















   