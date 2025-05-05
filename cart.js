
import  detail from'./details.js';
import products from'./products.js'

detail();





export function showCart(){
    

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



  export function closeOver() {
    let cart = document.querySelector('.cart');
    let overlay = document.querySelector('.overlay');
        overlay.classList.remove('overlay-box');
        cart.classList.remove('modal-box');
    }



    

export function closeModal(){
    let cart = document.querySelector('.cart');
    let overlay = document.querySelector('.overlay');
    
        cart.classList.remove("modal-box");
        overlay.classList.remove("overlay-box");
     
 }
 

























 
    
