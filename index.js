import products from'./products.js';
import {showCart,closeOver,closeModal,showCart} from './cart.js';
import renderProduct from './details.js'
import suits from'./suit.js'





let container=document.querySelector('.shop-container');

fetch('products.json')
.then(response=> response.json())
.then(products=>{
    
    products.forEach(product=>{
      
     let newPara=document.createElement('div')
       newPara.innerHTML=`
       

    <div class="section-list">
      <a href="/details.html?id=${product.id}">
    
    <img src= ${product.image}>
    </a>
<div class="item-title">
       <div class='item-name'>${product.name}</div>
       <div class='item-price'>£${product.price}</div>
   </div>    
       </div>
       
    <button type="button" class="cart-btn">Add To Cart</button>   
       
       `;

       
      
       container.appendChild(newPara);
    
    
    })
   

})
                                                       
                                                                 
                                                             
                                                                    
             




fetch('./template.html')
.then(response=>response.text())
.then(html=>{
   
   let app=document.getElementById('app')
   app.innerHTML=html;
   let topIcon=document.querySelector('.top-icons');
   topIcon.addEventListener('click', showCart);
   
   
   let overlay=document.querySelector('.overlay');
   overlay.addEventListener('click', closeOver);
   let close=document.querySelector('.close');
   close.addEventListener('click', closeModal); 

   let sub=document.querySelector('.sub');
   let shop=document.getElementById('shop');
   shop.addEventListener('mouseover', showSub);
   shop.addEventListener('mouseout', hideSub);
   sub.addEventListener('mouseover',showSub);
   sub.addEventListener('mouseout',hideSub);
    
   function showSub(){
       sub.classList.add('sublist');
      
    }
   
   
   function hideSub(){
       sub.classList.remove('sublist');
       
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
    
    
    document.addEventListener('DOMContentLoaded',function showReviewBox(){    
        let reviewBtn = document.querySelector('.review-btn');
      
        reviewBtn.addEventListener('click', showReviewBox);
        function showReviewBox() {
        
            let reviewBox=document.querySelector('.review-box');
            let reviewText=document.querySelector('.review-message');
        
           reviewBox.classList.toggle('show-Box');
           reviewText.classList.remove('show-message');
        }  
        
        
    });
       
       
       
       });
        
        
        document.addEventListener('DOMContentLoaded',function sendText(){
        let sendBtn = document.querySelector('.send-btn');
        sendBtn.addEventListener('click', sendText);
        function sendText() {
            let error=document.querySelector('.error');
            let reviewBox = document.querySelector('.review-box');
            let reviewText = document.querySelector('.review-message');
            let textBox=document.querySelector('.text-box');
            if(textBox.value){
            
       
           
        
        
                   reviewBox.classList.toggle('show-Box');
                   reviewText.classList.toggle('show-message'); 
   
               }else{
                   error.style.display="block";
               }
             
               setTimeout(()=>{
                   let error=document.querySelector('.error');
                   error.style.display="none";
               },3000);
            
           }
            
      
      
       
       });
       
   
       
    
    
    let reviewImages = [
        { userpic: 'images/jack.jpg', name: "Jack Kelly", job: "web developer" },
        { userpic: 'images/james.jpg', name: "James smith", job: "web designer" },
        { userpic: 'images/amanda.jpg', name: "Amanda fisher", job: "Teacher" },
        { userpic: 'images/mark.jpg', name: "mark jones", job: "software engineer" },
        { userpic: 'images/michael.jpg', name: "michael damon", job: "marketer" },
        { userpic: 'images/heather.jpg', name: "heather smith", job: "Assistant" },
    
    
    ]
    
     let index = 0;
        
    
    document.addEventListener('DOMContentLoaded',function prev(){
    let previous = document.getElementById('previous');
    previous.addEventListener('click', prev);
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
    });
    
    
    document.addEventListener('DOMContentLoaded',function showNext(){
    let next = document.getElementById('next');
    next.addEventListener('click', showNext);
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
    });                             
                                    
   
   
let decrease = document.getElementById('decrease');
   decrease.addEventListener('click', decreaseNum);
   
   
   function decreaseNum() {
   
   let number=document.getElementById('number');
   
   if (number.value > 1) {
   number.value--;
   
   } else {
   number.value = 1;
   }
   }
   
   
   let increase = document.getElementById('increase');
   decrease.addEventListener('click', increaseNum);
   
   function increaseNum() {
   
   let number=document.getElementById('number');
   number.value++;
   }    
   


   
   
   let qBtn = document.getElementsByClassName('q-btn');
   
   for (let i = 0; i < qBtn.length; i++) {
   
   qBtn[i].addEventListener('click', show);
   
   function show(e) {
   
   const qtitle = e.currentTarget.parentNode.parentNode;
   
   qtitle.classList.toggle('show-text');
   }
   }
   
   
                                         
                                                                        
                                                          
                                                                  
                                                                       
                                                                       
   

renderProduct();

 
 suits();  
                              



































                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                             
                                                             
                                                             
                                                            
                                                             
                                                             
                                                             
                                                         
                                                             
                                                             
                                                             
                                                             
                                                             
                                                             
                                                             
                                                             
                                                           