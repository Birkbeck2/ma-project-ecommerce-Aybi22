
                              
                               
                                

       
       
       
       
       
       
       
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
                         
                                
   
    
    
    
    
    
    
    
    
    
    
    
    



let topIcon = document.querySelector('.top-icons');

topIcon.addEventListener('click', showCart);

function showCart() {
    let cart = document.querySelector('.cart');
    
    let overlay = document.querySelector('.overlay');


    if (cart.className === "cart") {
        cart.classList.add("modal-box");
        overlay.classList.add("overlay-box");


    } else {
        cart.classList.remove("modal-box");
        overlay.classList.remove("overlay-box");
    }
}

let overlay = document.querySelector('.overlay');

overlay.addEventListener('click', closeOver);
function closeOver(e) {
    overlay = document.querySelector('.overlay');
    let cart = document.querySelector('.cart');
    if (e.target === overlay) {
        overlay.classList.remove('overlay-box');
        cart.classList.remove('modal-box');
    }
}

let close = document.querySelector('.close');
close.addEventListener('click', closeModal);
function closeModal(e) {
    overlay = document.querySelector('.overlay');
    let cart = document.querySelector('.cart');
    if (e.target === close) {
        cart.classList.remove("modal-box");
        overlay.classList.remove("overlay-box");
    }
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
    
    
    document.addEventListener('DOMContentLoaded',function sendText(){
    let sendBtn = document.querySelector('.send-btn');
    sendBtn.addEventListener('click', sendText);
    function sendText() {
        let reviewBox = document.querySelector('.review-box');
        let reviewText = document.querySelector('.review-message');
    
       
            reviewBox.classList.toggle('show-Box');
            reviewText.classList.toggle('show-message');
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
                                
                                










   




let pics1 = ['images/texturesuit.jpg', 'images/texturesuit1.jpg',
    'images/texturesuit2.jpg']

let smallPic1 = document.querySelectorAll('.small-pic1');
for (let i = 0; i < smallPic1.length; i++) {
    smallPic1[i].addEventListener('click', showMainPic1)


    function showMainPic1() {
        let img1 = document.getElementById('main-pic1');

        img1.setAttribute('src', pics1[i]);

    }
    
}

 
        



let pics2 = ['images/blacksuit.jpg', 'images/blacksuit1.jpg',
    'images/blacksuit2.jpg']





let smallPic2 = document.getElementsByClassName('small-pic2');
for (let i = 0; i < smallPic2.length; i++) {
    smallPic2[i].addEventListener('click', showMainPic2)


    function showMainPic2() {
        const img2 = document.getElementById('main-pic2');

        img2.setAttribute('src', pics2[i]);

    }
}


let pics3 = ['images/greysuit.jpg', 'images/greysuit1.jpg', 'images/greysuit2.jpg']





let smallPic3 = document.getElementsByClassName('small-pic3');
for (let i = 0; i < smallPic3.length; i++) {
    smallPic3[i].addEventListener('click', showMainPic3)


    function showMainPic3() {
        let img3 = document.getElementById('main-pic3');

        img3.setAttribute('src', pics3[i]);

    }
}


let pics4 = ["images/cowleathershoe.jpg", "images/cowleathershoe1.jpg", "images/cowleathershoe2.jpg"];





let smallPic4 = document.getElementsByClassName('small-pic4');
for (let i = 0; i < smallPic4.length; i++) {
    smallPic4[i].addEventListener('click', showMainPic4)


    function showMainPic4() {
        const img4 = document.getElementById('main-pic4');

        img4.setAttribute('src', pics4[i]);

    }
}









document.addEventListener('DOMContentLoaded',function grey(){
    let grey=document.getElementById('grey');
    console.log(grey);
grey.addEventListener('click',greySuit);
           function greySuit(){
         
         let img=document.getElementById("special");
             img.setAttribute('src', 'images/regularfitgrey.jpg');
             
         }


        });

        document.addEventListener('DOMContentLoaded',function navySuit(){

let navy=document.getElementById('navy');
navy.addEventListener('click',navySuit);

function navySuit(){

let img=document.getElementById("special");
img.setAttribute('src','images/regularfitnavy.jpg');
}
});





document.addEventListener('DOMContentLoaded',function blackSuit(){

let black=document.getElementById('black');
black.addEventListener('click',blackSuit);
function blackSuit(){


let img=document.getElementById("special");
img.setAttribute('src','images/regularfitblack.jpg');


}

});




document.addEventListener('DOMContentLoaded',function blueSuit(){
let blue=document.getElementById('blue');
blue.addEventListener('click',blueSuit);

function blueSuit(){


let img=document.getElementById ("special");
img.setAttribute('src','images/regularfitblue.jpg');
}
});




     
        
              





let pics5 = ['images/regularfitgrey.jpg', 'images/regularfitblue.jpg', 'images/regularfitblack.jpg']

let smallPic5 = document.getElementsByClassName('small-pic5');


for (let i = 0; i < smallPic5.length; i++) {

    smallPic5[i].addEventListener('click', showMainPic5)


    function showMainPic5() {
        let img5 = document.getElementById('main-pic5');

        img5.setAttribute('src', pics5[i]);

    }

}


let pics6 = ['images/greenslimsuit.jpg', 'images/greenslimsuit1.jpg', 'images/greenslimsuit2.jpg']

let smallPic6 = document.getElementsByClassName('small-pic6');


for (let i = 0; i < smallPic6.length; i++) {

    smallPic6[i].addEventListener('click', showMainPic6)


    function showMainPic6() {
        let img6 = document.getElementById('main-pic6');

        img6.setAttribute('src', pics6[i]);

    }

}



let pics7 = ['images/justcouturesuit.jpg', 'images/justcouturesuit1.jpg', 'images/justcouturesuit2.jpg']

let smallPic7 = document.getElementsByClassName('small-pic7');


for (let i = 0; i < smallPic7.length; i++) {

    smallPic7[i].addEventListener('click', showMainPic7)


    function showMainPic7() {
        const img7 = document.getElementById('main-pic7');

        img7.setAttribute('src', pics7[i]);

    }

}



let pics8 = ['images/navychechsuit.jpg', 'images/navychech1.jpg', 'images/navychech2.jpg']

let smallPic8 = document.getElementsByClassName('small-pic8');


for (let i = 0; i < smallPic8.length; i++) {

    smallPic8[i].addEventListener('click', showMainPic8)


    function showMainPic8() {
        let img8 = document.getElementById('main-pic8');

        img8.setAttribute('src', pics8[i]);

    }

}




let pics9 = ['images/stretchsuit.jpg', 'images/stretchsuit1.jpg', 'images/stretchsuit2.jpg']

let smallPic9 = document.getElementsByClassName('small-pic9');


for (let i = 0; i < smallPic9.length; i++) {

    smallPic9[i].addEventListener('click', showMainPic9)


    function showMainPic9() {
        let img9 = document.getElementById('main-pic9');

        img9.setAttribute('src', pics9[i]);

    }

}









let pics10 = ['images/blackoxfordleathershoe.jpg', 'images/oxfordleather1.jpg', 'images/oxfordleather2.jpg']

let smallPic10 = document.getElementsByClassName('small-pic10');


for (let i = 0; i < smallPic10.length; i++) {

    smallPic10[i].addEventListener('click', showMainPic10)


    function showMainPic10() {
        let img10 = document.getElementById('main-pic10');

        img10.setAttribute('src', pics10[i]);

    }

}


let pics11 = ['images/velvetjacket.jpg', 'images/velvetjacket1.jpg', 'images/velvetjacket2.jpg']

let smallPic11 = document.getElementsByClassName('small-pic11');


for (let i = 0; i < smallPic11.length; i++) {

    smallPic11[i].addEventListener('click', showMainPic11)


    function showMainPic11() {
        let img11 = document.getElementById('main-pic11');

        img11.setAttribute('src', pics11[i]);

    }

}




















let pics12 = ['images/greycheckjacket.jpg', 'images/greycheckjacket1.jpg', 'images/greycheckjacket2.jpg']

let smallPic12 = document.getElementsByClassName('small-pic12');


for (let i = 0; i < smallPic12.length; i++) {

    smallPic12[i].addEventListener('click', showMainPic12)


    function showMainPic12() {
        let img12 = document.getElementById('main-pic12');

        img12.setAttribute('src', pics12[i]);

    }

}


    
    
document.addEventListener('DOMContentLoaded',function navySuit1(){

    let navy1=document.getElementById('navy1');
    navy1.addEventListener('click',navySuit1);
    
    function navySuit1(){
    
    let img=document.getElementById("special");
    img.setAttribute('src','images/navypanamasuit.jpg');
    }
    });
    
    
    
    
    
    document.addEventListener('DOMContentLoaded',function blackSuit1(){
    
    let black=document.getElementById('black1');
    black.addEventListener('click',blackSuit1);
    function blackSuit1(){
    
    
    let img=document.getElementById("special");
    img.setAttribute('src','images/blackpanamasuit.jpg');
    
    
    }
    
    });
    
    

    document.addEventListener('DOMContentLoaded',function blueSuit1(){
    
        let blue1=document.getElementById('blue1');
        blue1.addEventListener('click',blueSuit1);
        function blueSuit1(){
        
        
        let img=document.getElementById("special");
        img.setAttribute('src','images/bluepanamasuit.jpg');
        
        
        }
        
        });

  
    
    
    
    
         



let pics13 = ['images/navypanamasuit.jpg', 'images/blackpanamasuit.jpg', 'images/bluepanamasuit.jpg']

let smallPic13 = document.getElementsByClassName('small-pic13');


for (let i = 0; i < smallPic13.length; i++) {

    smallPic13[i].addEventListener('click', showMainPic13)


    function showMainPic13() {
        let img13 = document.getElementById('main-pic13');

        img13.setAttribute('src', pics13[i]);

    }

}








let pics14 = ['images/blazerjacket.jpg', 'images/blazerjacket1.jpg', 'images/blazerjacket2.jpg']

let smallPic14 = document.getElementsByClassName('small-pic14');


for (let i = 0; i < smallPic14.length; i++) {

    smallPic14[i].addEventListener('click', showMainPic14)


    function showMainPic14() {
        let img14 = document.getElementById('main-pic14');

        img14.setAttribute('src', pics14[i]);

    }

}






let pics15 = ['images/fullbrogueoxford.jpg', 'images/fullbrogueoxford1.jpg', 'images/fullbrogueoxford2.jpg']

let smallPic15 = document.getElementsByClassName('small-pic15');


for (let i = 0; i < smallPic15.length; i++) {

    smallPic15[i].addEventListener('click', showMainPic15)


    function showMainPic15() {
        let img15 = document.getElementById('main-pic15');

        img15.setAttribute('src', pics15[i]);

    }

}







let pics16 = ['images/brogueoxford.jpg', 'images/brogueoxford1.jpg', 'images/brogueoxford2.jpg']

let smallPic16 = document.getElementsByClassName('small-pic16');


for (let i = 0; i < smallPic16.length; i++) {

    smallPic16[i].addEventListener('click', showMainPic16)


    function showMainPic16() {
        let img16 = document.getElementById('main-pic16');

        img16.setAttribute('src', pics16[i]);

    }

}

let pics17 = ['images/wingtipoxford.jpg', 'images/wingtipoxford1.jpg', 'images/wingtipoxford2.jpg']

let smallPic17 = document.getElementsByClassName('small-pic17');


for (let i = 0; i < smallPic17.length; i++) {

    smallPic17[i].addEventListener('click', showMainPic17)


    function showMainPic17() {
        let img17 = document.getElementById('main-pic17');

        img17.setAttribute('src', pics17[i]);

    }

}



let pics18 = ['images/topgraincowleather.jpg', 'images/topgraincowleather1.jpg', 'images/topgraincowleather2.jpg']

let smallPic18 = document.getElementsByClassName('small-pic18');


for (let i = 0; i < smallPic18.length; i++) {

    smallPic18[i].addEventListener('click', showMainPic18)


    function showMainPic18() {
        let img18 = document.getElementById('main-pic18');

        img18.setAttribute('src', pics18[i]);

    }

}



let pics19 = ['images/greypocketblazer.jpg', 'images/greypocketblazer1.jpg', 'images/greypocketblazer2.jpg']

let smallPic19 = document.getElementsByClassName('small-pic19');


for (let i = 0; i < smallPic19.length; i++) {

    smallPic19[i].addEventListener('click', showMainPic19)


    function showMainPic19() {
        let img19 = document.getElementById('main-pic19');

        img19.setAttribute('src', pics19[i]);

    }

}


let pics20 = ['images/textureblazer.jpg', 'images/textureblazer1.jpg', 'images/textureblazer2.jpg']

let smallPic20 = document.getElementsByClassName('small-pic20');


for (let i = 0; i < smallPic20.length; i++) {

    smallPic20[i].addEventListener('click', showMainPic20)


    function showMainPic20() {
        let img20 = document.getElementById('main-pic20');

        img20.setAttribute('src', pics20[i]);

    }

}



let pics21 = ['images/stoneblazer.jpg', 'images/stoneblazer1.jpg', 'images/stoneblazer2.jpg']

let smallPic21 = document.getElementsByClassName('small-pic21');


for (let i = 0; i < smallPic21.length; i++) {

    smallPic21[i].addEventListener('click', showMainPic21)


    function showMainPic21() {
        let img21 = document.getElementById('main-pic21');

        img21.setAttribute('src', pics21[i]);

    }

}




























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
decrease.addEventListener('click', decreaseNum);

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
       
    