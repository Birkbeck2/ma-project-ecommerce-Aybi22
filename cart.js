

 
    
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


 export const updateCartDisplay=()=>{
    const cartItem=document.querySelector('.cart-items');   
     
      cartItem.innerHTML='';
      cart.forEach(item=>{
        const cartItemElement=document.createElement('div');
        cartItemElement.innerHTML=`
        <div class="cart-item">
        <img src=${item.image}>
        <div>
        <div>${item.name}</div>
        <div>£${item.price}</div>
        <div>${item.quantity}</div>
        <button onclick="removeFromCart(${item.id})">Remove</button>
        </div>
        </div>
        `;
        cartItem.appendChild(cartItemElement);
      });
   
   
    }

  export function addToCart(productId){
    const product=products.find(product=>product.id===productId);
    const cartItem=cart.find(item=>item.id===productId);
    if(cartItem){
     cartItem.quantity++;
      }else{
         cart.push({...product,quantity:1});
      
     }
     
 }    
  
 
   
    


























