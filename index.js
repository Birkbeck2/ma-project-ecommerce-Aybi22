


let cart=document.querySelector('.top-icons');
cart.addEventListener('click',showCart);


function showCart(){
    let modal=document.querySelector('.modal');
    let body=document.getElementsByTagName('body');
    let overlay=document.querySelector('.overlay');
   
   
    if(modal.className==="modal"){
   modal.classList.add("modal-box");
   overlay.classList.add("overlay-box");

       
}else{
    modal.classList.remove("modal-box");
    overlay.classList.remove("overlay-box");
} 
}



let overlay=document.querySelector('.overlay'); 

   overlay.addEventListener('click',closeOver);
   function closeOver(e){
    overlay=document.querySelector('.overlay'); 
    let modal=document.querySelector('.modal');
    if(e.target===overlay){
        overlay.classList.remove('overlay-box');
        modal.classList.remove('modal-box');
    }
   }
   
let close=document.querySelector('.close');
close.addEventListener('click', closeModal);
function closeModal(e){
    overlay=document.querySelector('.overlay'); 
    let modal=document.querySelector('.modal');
    if(e.target===close){
        modal.classList.remove("modal-box");
        overlay.classList.remove("overlay-box"); 
    }
}



let hamburger=document.querySelector('.hamburger');
hamburger.addEventListener('click',showMobileMenu);
function showMobileMenu(){
    

let mobileMenu=document.querySelector('.mobileMenu');
mobileMenu.classList.toggle('mobile-box');
}

let closeMobile=document.querySelector('.closeMobile');
closeMobile.addEventListener('click',mobileClose);
function mobileClose(e){
    let mobileMenu=document.querySelector('.mobileMenu');
   
    if(e.target===closeMobile){
        mobileMenu.classList.remove('mobile-box');
    }
}







let reviewImages=[ 
    {userpic:'images/jack.jpg',  name:"Jack Kelly", job:"web developer"},
    {userpic:'images/james.jpg',  name:"James smith", job:"web designer"},
    {userpic:'images/amanda.jpg',  name:"Amanda fisher", job:"Teacher"},
    {userpic:'images/mark.jpg',     name:"mark jones", job:"software engineer"},
    {userpic:'images/michael.jpg',  name:"michael damon", job:"marketer"},
    {userpic:'images/heather.jpg',  name:"heather smith", job:"Assistant"},
    

]




let index=0;
  
 





document.addEventListener('DOMContentLoaded', function prev(){
document.getElementById('previous').addEventListener('click', prev);
function prev(){
  
    let userpic=document.getElementById('userpic');
    let customerName=document.querySelector('.name');
    let jobTitle=document.querySelector('.job');
    let stars=document.querySelector('.stars');
    if(index===0){
        index=reviewImages.length-1;
        userpic.src=reviewImages[index]["userpic"];
        customerName.textContent=reviewImages[index]["name"];
        jobTitle.textContent=reviewImages[index]["job"];
        stars.innerHTML='<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> ' 
  }else{

    
    index--;  


 
        userpic.src=reviewImages[index]["userpic"];
        customerName.textContent=reviewImages[index]["name"];
        jobTitle.textContent=reviewImages[index]["job"];
        stars.innerHTML='<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> ' 
    }  
}
}); 
    
document.addEventListener('DOMContentLoaded', function next(){
    document.getElementById('next').addEventListener('click', next);
function next(){
    
    let userpic=document.getElementById('userpic');
    let customerName=document.querySelector('.name');
    let jobTitle=document.querySelector('.job');
    let stars=document.querySelector('.stars');
   
    if(index<reviewImages.length-1){
        index++;
        userpic.src=reviewImages[index]["userpic"];
        customerName.textContent=reviewImages[index]["name"];
       jobTitle.textContent=reviewImages[index]["job"];
       stars.innerHTML=`<i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>`
     
     }else if(index===reviewImages.length-1){
        index=0;
        userpic.src=reviewImages[index]["userpic"];
        customerName.textContent=reviewImages[index]["name"];
        jobTitle.textContent=reviewImages[index]["job"];
        stars.innerHTML='<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> ' 
    
    }
}
});


window.onload=showReviewBox;
let reviewBtn=document.querySelector('.review-btn');
reviewBtn.addEventListener('click',showReviewBox)
function showReviewBox(){

      let reviewBox=document.querySelector('.review-box');
            let reviewText=document.querySelector('.review-message');
               
            if(reviewBox.style.display==="none"){
            reviewBox.style.display="block";
            reviewText.style.display="none";
                
                
               
              
            }else{
                reviewBox.style.display="none";
                
            }
        
        }


    
    
        
       document.addEventListener('DOMContentLoaded',function sendText(){
        document.querySelector('.send-btn').addEventListener('click', sendText);
        function sendText(){
            let reviewBox=document.querySelector('.review-box');
            let reviewText=document.querySelector('.review-message');
           
            if(reviewBox.style.display==="block"){
            reviewBox.style.display="none";
            reviewText.style.display="block";
        
        }else{
             reviewBox.style.display="block";
             reviewText.style.display="none";
            }
        }
    })
    

        
         





          
 
       
      
           
       
       
       
const pics1=['images/texturesuit.jpg','images/texturesuit1.jpg',
       'images/texturesuit2.jpg']
       
       
       
       
       
       let smallPic1=document.querySelectorAll('.small-pic1');
       for(let i=0; i<smallPic1.length; i++){
           smallPic1[i].addEventListener('click',showMainPic1)
       
          
           function showMainPic1(){
               let img1=document.getElementById('main-pic1'); 
          
           img1.setAttribute('src', pics1[i]);
           
           }
       }
       
       
       
       let pics2=['images/blacksuit.jpg','images/blacksuit1.jpg',
       'images/blacksuit2.jpg']
       
       
       
       
       
        let smallPic2=document.getElementsByClassName('small-pic2');
       for(let i=0; i<smallPic2.length; i++){
           smallPic2[i].addEventListener('click',showMainPic2)
       
          
           function showMainPic2(){
               const img2=document.getElementById('main-pic2'); 
          
           img2.setAttribute('src', pics2[i]);
           
           }
       }     
          
        
       let pics3=['images/greysuit.jpg','images/greysuit1.jpg','images/greysuit2.jpg']
       
       
       
       
       
        let smallPic3=document.getElementsByClassName('small-pic3');
       for(let i=0; i<smallPic3.length; i++){
           smallPic3[i].addEventListener('click',showMainPic3)
       
          
           function showMainPic3(){
               let img3=document.getElementById('main-pic3'); 
          
           img3.setAttribute('src', pics3[i]);
           
           }
       }         
             
           
       const pics4=["images/cowleathershoe.jpg","images/cowleathershoe1.jpg","images/cowleathershoe2.jpg"];
       
       
       
       
       
        let smallPic4=document.getElementsByClassName('small-pic4');
       for(let i=0; i<smallPic4.length; i++){
           smallPic4[i].addEventListener('click',showMainPic4)
       
          
           function showMainPic4(){
               const img4=document.getElementById('main-pic4'); 
          
           img4.setAttribute('src', pics4[i]);
           
           }
       }         
           
          
           
       
           
       let pics5=['images/regularfitgrey.jpg','images/regularfitblue.jpg','images/regularfitblack.jpg']
       
       let smallPic5=document.getElementsByClassName('small-pic5');
       
       
       for(let i=0; i<smallPic5.length; i++){  
       
       smallPic5[i].addEventListener('click',showMainPic5)
       
          
           function showMainPic5(){
               let img5=document.getElementById('main-pic5'); 
          
           img5.setAttribute('src', pics5[i]);
           
           }
       
       }
       
       
           
       
           
       let pics6=['images/greenslimsuit.jpg','images/greenslimsuit1.jpg','images/greenslimsuit2.jpg']
       
       let smallPic6=document.getElementsByClassName('small-pic6');
       
       
       for(let i=0; i<smallPic6.length; i++){  
       
       smallPic6[i].addEventListener('click',showMainPic6)
       
          
           function showMainPic6(){
               let img6=document.getElementById('main-pic6'); 
          
           img6.setAttribute('src', pics6[i]);
           
           }
       
       }
       
       
       
       let pics7=['images/justcouturesuit.jpg','images/justcouturesuit1.jpg','images/justcouturesuit2.jpg']
       
       let smallPic7=document.getElementsByClassName('small-pic7');
       
       
       for(let i=0; i<smallPic7.length; i++){  
       
       smallPic7[i].addEventListener('click',showMainPic7)
       
          
           function showMainPic7(){
               const img7=document.getElementById('main-pic7'); 
          
           img7.setAttribute('src', pics7[i]);
           
           }
       
       }
       
       
       let pics8=['images/navychechsuit.jpg','images/navychech1.jpg','images/navychech2.jpg']
       
       let smallPic8=document.getElementsByClassName('small-pic8');
       
       
       for(let i=0; i<smallPic8.length; i++){  
       
       smallPic8[i].addEventListener('click',showMainPic8)
       
          
           function showMainPic8(){
               let img8=document.getElementById('main-pic8'); 
          
           img8.setAttribute('src', pics8[i]);
           
           }
       
       }
       
       
       
       
       let pics9=['images/stretchsuit.jpg','images/stretchsuit1.jpg','images/stretchsuit2.jpg']
       
       let smallPic9=document.getElementsByClassName('small-pic9');
       
       
       for(let i=0; i<smallPic9.length; i++){  
       
       smallPic9[i].addEventListener('click',showMainPic9)
       
          
           function showMainPic9(){
               let img8=document.getElementById('main-pic9'); 
          
           img8.setAttribute('src', pics9[i]);
           
           }
       
       }
       let pics10=['images/blackoxfordleathershoe.jpg','images/oxfordleather1.jpg','images/oxfordleather2.jpg']
       
       let smallPic10=document.getElementsByClassName('small-pic10');
       
       
       for(let i=0; i<smallPic10.length; i++){  
       
       smallPic10[i].addEventListener('click',showMainPic10)
       
          
           function showMainPic10(){
               let img10=document.getElementById('main-pic10'); 
          
           img10.setAttribute('src', pics10[i]);
           
           }
       
       }

         
           
           
           function decreaseNum(){
               
            let number=document.getElementById ('number');
           
               if(number.value>1){
                   number.value--;
               
               }else{
                   number.value=1;
               }
           }
        
           
           function increaseNum(){
               
               
               let number=document.getElementById ('number');
                   number.value++;
               }
  
               
               let qBtn=document.getElementsByClassName('q-btn');
       
               for (let i=0; i<qBtn.length; i++){
               
               qBtn[i].addEventListener('click', show);
               
               function show(e){
                 const resp=document.getElementsByClassName('resp');
                 const qtitle=e.currentTarget.parentNode.parentNode;
                 
                 qtitle.classList.toggle('show-text');
               }
               }   
 
               
       
       
               document.addEventListener('DOMContentLoaded',function greySuit(){    
                document.getElementById('grey').addEventListener('mouseover',greySuit)
                  function greySuit(){
                
                let img=document.getElementById("special");
                    img.setAttribute('src', suitColor[i]);
                
                }
            
            
            });
                     
          
           
       
       
      
       
                document.addEventListener('DOMContentLoaded',function navySuit(){    
                    document.getElementById('navy').addEventListener('mouseover',navySuit)
       
       let navy=document.getElementById('navy');
       navy.addEventListener('mouseover',navySuit);
       
       function navySuit(){
       
           let img=document.getElementById("special");
          img.setAttribute('src',suitColor[i]);
       }
    });
       
       
       
    document.addEventListener('DOMContentLoaded',function blackSuit(){    
        document.getElementById('black').addEventListener('mouseover',blackSuit) 
      
       let black=document.getElementById('black');
       black.addEventListener('mouseover',blackSuit);
       
       function blackSuit(){
       
        
           let img=document.getElementById("special");
           img.setAttribute('src',suitColor[i]);
       }
    });
       
       
       
       
       
    document.addEventListener('DOMContentLoaded',function blueSuit(){    
        document.getElementById('blue').addEventListener('mouseover',blueSuit)  
       
       let blue=document.getElementById('blue');
       
       blue.addEventListener('mouseover',blueSuit);
       
       function blueSuit(){
       
         
           let img=document.getElementById ("special");
           img.setAttribute('src',suitColor[i]);
       }
    });
        

        
             
          
           
       
       
      
       