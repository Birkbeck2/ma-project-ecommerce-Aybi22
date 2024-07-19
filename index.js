
const qBtn=document.getElementsByClassName('q-btn');
for(let i=0; i<qBtn.length; i++){

qBtn[i].addEventListener('click', show);

function show(e){
  const resp=document.getElementsByClassName('resp');
  const qtitle=e.currentTarget.parentNode.parentNode;
  
  qtitle.classList.toggle('show-text');
}
}



   












const pics1=['images/texturesuit.jpg','images/texturesuit1.jpg',
'images/texturesuit2.jpg']





const smallPic1=document.querySelectorAll('.small-pic1');
for(let i=0; i<smallPic1.length; i++){
    smallPic1[i].addEventListener('click',showMainPic1)

   
    function showMainPic1(){
        const img1=document.getElementById('main-pic1'); 
   
    img1.setAttribute('src', pics1[i]);
    
    }
}



const pics2=['images/blacksuit.jpg','images/blacksuit1.jpg',
'images/blacksuit2.jpg']





 const smallPic2=document.getElementsByClassName('small-pic2');
for(let i=0; i<smallPic2.length; i++){
    smallPic2[i].addEventListener('click',showMainPic2)

   
    function showMainPic2(){
        const img2=document.getElementById('main-pic2'); 
   
    img2.setAttribute('src', pics2[i]);
    
    }
}     
   
 
const pics3=['images/greysuit.jpg','images/greysuit1.jpg','images/greysuit2.jpg']





 const smallPic3=document.getElementsByClassName('small-pic3');
for(let i=0; i<smallPic3.length; i++){
    smallPic3[i].addEventListener('click',showMainPic3)

   
    function showMainPic3(){
        const img3=document.getElementById('main-pic3'); 
   
    img3.setAttribute('src', pics3[i]);
    
    }
}         
      
    
const pics4=["images/cowleathershoe.jpg","images/cowleathershoe1.jpg","images/cowleathershoe2.jpg"]





 const smallPic4=document.getElementsByClassName('small-pic4');
for(let i=0; i<smallPic4.length; i++){
    smallPic4[i].addEventListener('click',showMainPic4)

   
    function showMainPic4(){
        const img4=document.getElementById('main-pic4'); 
   
    img4.setAttribute('src', pics4[i]);
    
    }
}         
    
   
    

    
const pics5=['images/regularfitgrey.jpg','images/regularfitblue.jpg','images/regularfitblack.jpg']

const smallPic5=document.getElementsByClassName('small-pic5');


for(let i=0; i<smallPic5.length; i++){  

smallPic5[i].addEventListener('click',showMainPic5)

   
    function showMainPic5(){
        const img5=document.getElementById('main-pic5'); 
   
    img5.setAttribute('src', pics5[i]);
    
    }

}


    

    
const pics6=['images/greenslimsuit.jpg','images/greenslimsuit1.jpg','images/greenslimsuit2.jpg']

const smallPic6=document.getElementsByClassName('small-pic6');


for(let i=0; i<smallPic6.length; i++){  

smallPic6[i].addEventListener('click',showMainPic6)

   
    function showMainPic6(){
        const img6=document.getElementById('main-pic6'); 
   
    img6.setAttribute('src', pics6[i]);
    
    }

}



const pics7=['images/justcouturesuit.jpg','images/justcouturesuit1.jpg','images/justcouturesuit2.jpg']

const smallPic7=document.getElementsByClassName('small-pic7');


for(let i=0; i<smallPic7.length; i++){  

smallPic7[i].addEventListener('click',showMainPic7)

   
    function showMainPic7(){
        const img7=document.getElementById('main-pic7'); 
   
    img7.setAttribute('src', pics7[i]);
    
    }

}


const pics8=['images/navychechsuit.jpg','images/navychech1.jpg','images/navychech2.jpg']

const smallPic8=document.getElementsByClassName('small-pic8');


for(let i=0; i<smallPic8.length; i++){  

smallPic8[i].addEventListener('click',showMainPic8)

   
    function showMainPic8(){
        const img8=document.getElementById('main-pic8'); 
   
    img8.setAttribute('src', pics8[i]);
    
    }

}




const pics9=['images/stretchsuit.jpg','images/stretchsuit1.jpg','images/stretchsuit2.jpg']

const smallPic9=document.getElementsByClassName('small-pic9');


for(let i=0; i<smallPic9.length; i++){  

smallPic9[i].addEventListener('click',showMainPic9)

   
    function showMainPic9(){
        const img8=document.getElementById('main-pic9'); 
   
    img8.setAttribute('src', pics9[i]);
    
    }

}
const pics10=['images/blackoxfordleathershoe.jpg','images/oxfordleather1.jpg','images/oxfordleather2.jpg']

const smallPic10=document.getElementsByClassName('small-pic10');


for(let i=0; i<smallPic10.length; i++){  

smallPic10[i].addEventListener('click',showMainPic10)

   
    function showMainPic10(){
        const img10=document.getElementById('main-pic10'); 
   
    img10.setAttribute('src', pics10[i]);
    
    }

}



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
    {userpic:'images/jack.jpg',  name:"Jack Kelly", job:"web developer"},
    {userpic:'images/james.jpg',  name:"James smith", job:"web designer"},
    {userpic:'images/amanda.jpg',  name:"Amanda fisher", job:"Teacher"},
    {userpic:'images/mark.jpg',     name:"mark jones", job:"software engineer"},
    {userpic:'images/michael.jpg',  name:"michael damon", job:"marketer"},
    {userpic:'images/heather.jpg',  name:"heather smith", job:"Assistant"},
    

]



let index=0;

  let customerName=document.querySelector('.name');
  let jobTitle=document.querySelector('.job');
  let stars=document.querySelector('.stars');
  
  
  function showNext(){
   
    let userpic=document.getElementById('userpic');
  
   
    if(index<reviewImages.length){
        index++;
        userpic.src=reviewImages[index]["userpic"];
        customerName.textContent=reviewImages[index]["name"];
       jobTitle.textContent=reviewImages[index]["job"];
       stars.innerHTML=`<i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>`
     
     }else if(index===reviewImages.length){
        index=0;
        userpic.src=reviewImages[index]["userpic"];
        customerName.textContent=reviewImages[index]["name"];
        jobTitle.textContent=reviewImages[index]["job"];
        stars.innerHTML='<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> ' 
    
    }
}



  
function prev(){
    let userpic=document.getElementById('userpic');
   
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




   



const minus=document.getElementById('decrease');
const plus=document.getElementById('increase');
const number=document.getElementById('number');


minus.addEventListener('click', decreaseNum);
function decreaseNum(){
   if(number.value>1){
        number.value--;
    
    }else{
        number.value=1;
    }
}
    
plus.addEventListener('click', increaseNum);
function increaseNum(){
    
        number.value++;
    }  


    const grey=document.getElementById('grey');
    const navy=document.getElementById('navy');
    const black=document.getElementById('black');
    const blue=document.getElementById('blue');
    
    
    grey.addEventListener('mouseover',greySuit);
    
    function greySuit(){
        const img=document.getElementById('special');
        img.src="images/regularfitgrey.jpg";
    }
    
    
    navy.addEventListener('mouseover',navySuit);
    
    function navySuit(){
        const img=document.getElementById('special');
        img.src="images/regularfitnavy.jpg";
    }
    
    
    black.addEventListener('mouseover',blackSuit);
    
    function blackSuit(){
        const img=document.getElementById('special');
        img.src="images/regularfitblack.jpg";
    }
    
    
    
    
    blue.addEventListener('mouseover',blueSuit);
    
    function blueSuit(){
        const img=document.getElementById('special');
        img.src="images/regularfitnavy.jpg";
    }
    


















       