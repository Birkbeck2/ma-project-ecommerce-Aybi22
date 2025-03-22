import products from'./products.js'
import {showCart,closeModal,closeOver} from './cart.js'
import  detail from'./details.js';




detail();
     

 

 

  

   
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
                                  
                                        
                                   
        
       let reviewBtn = document.querySelector('.review-btn');
   
     reviewBtn.addEventListener('click', showReviewBox);
     function showReviewBox() {
     
         let reviewBox=document.querySelector('.review-box');
         let reviewText=document.querySelector('.review-message');
     
        reviewBox.classList.toggle('show-Box');
        reviewText.classList.remove('show-message');
     }  
    
     
    
     let sendBtn = document.querySelector('.send-btn');
     sendBtn.addEventListener('click', sendText);
     function sendText() {
         let reviewBox = document.querySelector('.review-box');
         let reviewText = document.querySelector('.review-message');
     
        
             reviewBox.classList.toggle('show-Box');
             reviewText.classList.toggle('show-message');
     }
    
         
    
  
       
    
 
 let reviewImages = [
     { userpic: 'images/jack.jpg', name: "Jack Kelly", job: "web developer" },
     { userpic: 'images/james.jpg', name: "James smith", job: "web designer" },
     { userpic: 'images/amanda.jpg', name: "Amanda fisher", job: "Teacher" },
     { userpic: 'images/mark.jpg', name: "mark jones", job: "software engineer" },
     { userpic: 'images/michael.jpg', name: "michael damon", job: "marketer" },
     { userpic: 'images/heather.jpg', name: "heather smith", job: "Assistant" },
 
 
 ]
 
  let index = 0;
     
 
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
       <div class="colors">${product.colors}</div>
   
   </div>
       
      
       
       `;

       
      
       container.appendChild(newPara);
    
         
    });
    
  

 








  

 









                                             
                                                                 
                                                                 
                                                  
                                                            
                                                             
                                                             
                                                             
                                                            
                                                             
                                                     
                                                             
                                                         
                                                             
                                                             
                                                             
                                                             
                                                             
                                                             
                                                             
                                                             
                                                           