
import products from'./products.js'


 function filteredByCategoryRegular(category){
 
    let filteredRegularProducts= products.filter(product=>product.category===category);
    let regularContainer=document.querySelector('.suit-container');
    
    
     
    regularContainer.innerHTML=
    filteredRegularProducts.map(product=>
       
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
           <div class='item-price'data-id=${product.price}>£${product.price}</div>
       </div>    
         
       <a class="btn"  data-id=${product.id}>add to cart</a>
       </div> 
        
        </div>
    
        
    </article>
               
    `).join(''); 
    
    }
    
    export{filteredByCategoryRegular}