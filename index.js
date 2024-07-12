



     

    
    
let cart=document.querySelector('.top-icons');
cart.addEventListener('click',showCart);
const modal=document.querySelector('.modal');
const body=document.getElementsByTagName('body');
const overlay=document.querySelector('.overlay');

function showCart(){
   if(modal.className==="modal"){
   modal.classList.add("modal-box");
   overlay.classList.add("overlay-box");

       
}else{
    modal.classList.remove("modal-box");
    overlay.classList.remove("overlay-box");
} 
}



    

   overlay.addEventListener('click',closeOver);
   function closeOver(e){
      if(e.target===overlay){
        overlay.classList.remove('overlay-box');
        modal.classList.remove('modal-box');
    }
   }
   
const close=document.querySelector('.close');
close.addEventListener('click', closeModal);
function closeModal(e){
    if(e.target===close){
        modal.classList.remove("modal-box");
        overlay.classList.remove("overlay-box"); 
    }
}


const mobileMenu=document.querySelector('.mobileMenu');
const hamburger=document.querySelector('.hamburger');
hamburger.addEventListener('click',showMobileMenu);
function showMobileMenu(){
    mobileMenu.classList.toggle('mobile-box');
}

const closeMobile=document.querySelector('.closeMobile');
closeMobile.addEventListener('click',mobileClose);
function mobileClose(e){
    if(e.target===closeMobile){
        mobileMenu.classList.remove('mobile-box');
    }
}



const reviewImages=[ 
    {picture:'images/jack.jpg',  name:"Jack Kelly", job:"web developer"},
    {picture:'images/james.jpg',  name:"James smith", job:"web designer"},
    {picture:'images/amanda.jpg',  name:"Amanda fisher", job:"Teacher"},
    {picture:'images/mark.jpg',     name:"mark jones", job:"software engineer"},
    {picture:'images/michael.jpg',  name:"michael damon", job:"marketer"},
    {picture:'images/heather.jpg',  name:"heather smith", job:"Assistant"},
    

]

const bttn1=document.querySelector('.bttn1');
const bttn=document.querySelector('.bttn');

let index=0;

  let customerName=document.querySelector('.name');
  let jobTitle=document.querySelector('.job');
  let stars=document.querySelector('.stars');
function next(){
    if(index<reviewImages.length){
        index++;
        userpic.src=reviewImages[index]["picture"];
        customerName.textContent=reviewImages[index]["name"];
       jobTitle.textContent=reviewImages[index]["job"];
       stars.innerHTML=`<i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>`
   } else if(index===reviewImages.length){
        index=0;
        userpic.src=reviewImages[index]["picture"];
        customerName.textContent=reviewImages[index]["name"];
        jobTitle.textContent=reviewImages[index]["job"];
        stars.innerHTML='<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> ' 
    
    }
}


function prev(){
    
    if(index===0){
        index=reviewImages.length-1;
        userpic.src=reviewImages[index]["picture"];
        customerName.textContent=reviewImages[index]["name"];
        jobTitle.textContent=reviewImages[index]["job"];
        stars.innerHTML='<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> ' 
    
    
    }else{
        index--;
        userpic.src=reviewImages[index]["picture"];
        customerName.textContent=reviewImages[index]["name"];
        jobTitle.textContent=reviewImages[index]["job"];
        stars.innerHTML='<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> ' 
    
        
    }
}


let reviewBtn=document.querySelector('.review-btn');
reviewBtn.addEventListener('click',showReviewBox);
let reviewBox=document.querySelector('.review-box');

function showReviewBox(){
    
       if(reviewBox.style.display==="none"){
        reviewBox.style.display="block";
       }else{
        reviewBox.style.display="none";
       }
}
  
    let sendBtn=document.querySelector('.send-btn');
    let txt=document.querySelector('.txt');
    sendBtn.addEventListener('click',sendText);
    function sendText(){
       if(reviewBox.style.display==="block"){
        reviewBox.style.display="none";
      
    
    }else{
         reviewBox.style.display="block";
        
        }
       } 
        
 function myfunction(event){
    event.preventDefault();
    const text=document.querySelector('.text').value;
 if(text.value){
    localStorage.setItem('review',JSON.stringify(text));
 }

}    

    




