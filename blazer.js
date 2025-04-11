
import products from'./products.js'




export function filteredByCategoryBlazer(category){
 
    let filteredBlazerProducts= products.filter(product=>product.category===category);
    let blazerContainer=document.querySelector('.blazer-container');
    
    
     
    blazerContainer.innerHTML=
    filteredBlazerProducts.map(product=>
       
        `
        <article class="section-list">
        <h3>${product.h3}</h3>
         <a href="details.html?id=${product.id}">
        <div class="image">
        <img src=${product.image}>
    </div>
    </a>
        
       <div class="item-title">
           <div class='item-name'>${product.name}</div>
           <div class='item-price'>£${product.price}</div>
       </div>    
           <div class="colors">${product.colors}</div>
       <a class="btn" onclick="addToCart()">add to cart</a>
       </div> 
        
        </div>
    
        
    </article>
               
    `).join(''); 
    
    }