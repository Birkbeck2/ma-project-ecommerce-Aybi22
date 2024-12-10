import products from "./products.js";

















const setProductInCart = (idProduct, quantity,position) => {
   if(quantity>0){
    if(position<0){
        cart.push({
            product_id: idProduct,
            quantity:quantity
        });
    }else{
        cart[position].quantity=quantity;
    }
   refreshCartHTML();
}
}



const refreshCartHTML=()=>{
    let listHTML=document.querySelector('.listCart');
    let totalHTML=document.querySelector('.noOfItems');
    let totalQuantity=0;
    listHTML.innerText= null,
    cart.forEach(item=>{
        totalQuantity=totalQuantity + item.quantity;
        let newItem=document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML=`
        
        <div class="image">
<img src="">
        </div>

        <div class="name">Name</div>
        <div class="totalprice">£111</div>
        <div class="quantity">
           <span class="plus"> + </span>
           <span class="minus"> - </span>
           </div>



        
        
        `
    })
    totalHTML.innerText= totalQuantity;

}

document.addEventListener('click', (event) => {
    let buttonClick = event.target;
    let idProduct = buttonClick.dataset.id;
   
    let position = cart.findIndex((value) => value.product_id == idProduct);
    let quantity= position <0 ? 0:cart[position].quantity;
    if(buttonClick.classList.contains('add-btn')){
    quantity++;
    setProductInCart(idProduct, quantity,position);
    
    }
})





}










export default cart;