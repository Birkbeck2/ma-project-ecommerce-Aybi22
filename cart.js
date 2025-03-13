



    
   export const showCart=()=>{
    
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



 export const closeOver=()=> {
    let cart = document.querySelector('.cart');
let overlay = document.querySelector('.overlay');
  
        overlay.classList.remove('overlay-box');
        cart.classList.remove('modal-box');
    }





 export const closeModal=()=> {

    let cart = document.querySelector('.cart');
    let overlay = document.querySelector('.overlay');
    
        cart.classList.remove("modal-box");
        overlay.classList.remove("overlay-box");
    } 



  
    
 


