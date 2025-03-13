
import products from'./products.js';

 const renderProduct=()=>{

    let productId = new URLSearchParams(window.location.search).get('id');
    let thisProduct = products.filter(value => value.id == productId)[0];
    
    
    const productDetails=document.querySelector('.details');

    if(thisProduct){
        productDetails.innerHTML=`
        
        <div class="product">
        
        <div class="left-gallery">
    
    <div class="image">
    <img src=${thisProduct.image} width="150" height="150" class="small-pic" alt="texture suit image">
    
    
    </div>
    
    <div class="image">
        <img src=${thisProduct.image1} width="150" height="150" class="small-pic" alt="texture suit image">
        
        
        </div>
    
    
        <div class="image">
            <img src=${thisProduct.image2} width="150" height="150" class="small-pic"    alt="texture suit image">
            
            
            </div>
    
    
    
    
    </div>
    
    
    <div class="left-side">
    
    
    
            <div class="image">
                
               <img src=${thisProduct.image} id="main-pic" width="500" height="500" alt="texture suit image"> 
                
                
           
                </div>
        
        
        
        
        
        
            </div> 
              
        
    <div class="right-side">

<h1>${thisProduct.name}<span class="item-price">£${thisProduct.price}</span></h1>


<span class="stock">in stock</span>

<div class="p-review">
<div class="stars">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i> 
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
</div>

<div class="review-num">1200 customer's reviews</div>
</div>


<div class="size">
        <span class="xsmall">XS</span>
        <span class="small">S</span>
        <span class="medium">M</span>
        <span class="large">L</span>
        <span class="extralarge">XL</span>
        
        </div>
   
   
   <div class="add-cart">
    
    <div class="counter">

<input type="button" value="-" id="decrease">
<input type="button" value="1"  id="number">
<input type="button" value="+" id="increase">

</div>
    
    
    <a class="add-btn">
        
        add to cart

    </a>
    
</div>

    <div class="shipping-info">
        <p>FREE STANDARD DELIVERY ON ALL ORDERS</p>
        <i class="fa-solid fa-truck"></i>
    
    
    
    </div>
    <div class="product-detail">
        <fieldset> 
            <legend> description </legend>
           <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              
              </p> 
          </fieldset>      
             </div>
   
        
       <div class="payments">
        <p class="pay">Payment:</p>
    
        <div class="paypal-icon">

    <img src="images/paypal.svg" width="50" alt="paypal card">
    </div>
<div class="visa-icon">
    <img src="images/visa.svg" width="50" alt="visa card">
    </div>
    <div class="klarna-icon">
        <img src="images/klarna.svg" width="50" alt="klarna card" >
</div>
<div class="master-icon">
    <img src="images/mastercard.svg"  width="50" alt="mastercard card">

</div>
<div class="amex-icon">
    <img src="images/americanexpress.svg" width="50" alt="amex card">
    
</div>
</div>

</div>

</div>

</section>

<section>

    <h2>product review<i class="fa-solid fa-circle circle"></i><i class="fa-solid fa-circle circle"></i></h2>
    
    <p class="section-text">Discover product reviews at Your favorite men fashion store</p>
    
    
    <div class="ratings">
    
    <article>
        <h3>rating</h3>
        
        <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i> 
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
    <div class="p-rating">
    
        <div class="rating-image">
    <img src="images/rating1.jpg"  class="round"  width="100"  height="50"  alt="rating1 image">
    
    
    </div>
    
    
    
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    
    
    </div>
    <span class="name">Jack Kelly</span>
    
    </article>
    
    
    
    
    
    <article>
        <h3>rating</h3>
        
        <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i> 
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <div class="p-rating">
    
            <div class="rating-image">
        <img src="images/rating2.jpg"  class="round"  width="100"  height="50"  alt="rating2 image">
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
    
    </div>     
    <span class="name">James Kean</span>
       
    </article>
    
    <article>
        <h3>rating</h3>
        
        <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i> 
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <div class="p-rating">
    
            <div class="rating-image">
        <img src="images/salesmanager.jpg"  class="round"  width="100"  height="50"  alt="sales manager image">
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       
    
    </div>     
    
    <span class="name">wayne fred</span> 
    </article>
    
    <article>
        <h3>rating</h3>
        
        <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i> 
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <div class="p-rating">
    
            <div class="rating-image">
        <img src="images/customer1.jpg"  class="round"  width="100"  height="50"  alt="customer1 image">
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
    
    </div>     
    <span class="name">John henry</span>
       
    </article>
    
    
    
    
    
    </div>
    </section>
    
<section class="related-items">
    <h2>related products<i class="fa-solid fa-circle circle"></i><i class="fa-solid fa-circle circle"></i></h2>
    <p class="section-text">Discover other items you may also like at Your favorite men fashion store</p>
    
    
    <div class="item-container">
       <article class="section-list">
        <h3>suit</h3>
        <a href="product11.html">  
    <div class="image">
        <img src='images/velvetjacket.jpg' width="300"  height="300"  alt="velvet jacket image">
    </div>
    
        <div class="item-title">
            <div class="item-name">Velvet jacket</div>
            <div class="item-price">£355</div>
            
      
        </div>
 
    </a>
    
    
</article>
    
    
<article class="section-list">
    <h3>suit</h3>
    <a href="product12.html"> 
    <div class="image">
        
        
        <img src='images/greycheckjacket.jpg'  width="300"  height="300" alt="grey check jacket image">
    </div>
        <div class="item-title">
            <div class="item-name">grey check jacket</div>
            <div class="item-price">£415</div>
            
      
        </div>
    
    </a>
   </article> 
    
    

    
    <article class="section-list">
        <h3>suit</h3>
    
    <a href="product13.html">    
        <div class="image">
        <img src='images/navypanamasuit.jpg' width="300"  height="300"  alt="navy panama suit image">
    </div>
        <div class="item-title">
            <div class="item-name">navy panama suit</div>
            <div class="item-price">£625</div>
            
      
        </div>
    </a>
        
        
        
    
    </article>
    
    
    <article class="section-list">
        <h3>suit</h3>
    
    <a href="product14.html">
    <div class="image">
        <img src='images/blazerjacket.jpg' width="300"  height="300" alt="blazer jacket image">
    </div>
        
     <div class="item-title">
            <div class="item-name">blazer jacket</div>
            <div class="item-price">£565</div>
            
      
        </div>
    
    </a>
    
</article>
    </div>
    
    
   
    
    
    </section>
    


<section class="questions">


    <h2>frequently asked questions<i class="fa-solid fa-circle circle"></i><i class="fa-solid fa-circle circle"></i></h2>
    <p class="section-text">Discover the frequently asked questions at Your favorite men fashion store</p>
    
    
    <div class="q-container">

  <div class="qtitle">
        <h3>do accept all major credit cards?
          
            <span class="q-btn">
          
            <span class="plus">
             <i class="fa-regular fa-square-plus "></i> 
            
            
          </span>
          <span class="minus">
            <i class="fa-regular fa-square-minus "></i> 
         </span>
        </span>
        </h3>
        
        <p class="resp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        
        
      </div>

        
      <div class="qtitle">
        <h3>what is your return policy?
          
          <span class="q-btn">
            <span class="plus">
             <i class="fa-regular fa-square-plus "></i> 
            
           </span>
           <span class="minus">
            <i class="fa-regular fa-square-minus "></i> 
         </span>
          
        </span>
        
        </h3>
        
        
        <p class="resp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
      </div>
      
      <div class="qtitle">
        
        <h3>when will I receive my order?
            <span class="q-btn">
          
            <span class="plus">
             <i class="fa-regular fa-square-plus "></i> 
            
            
        </span>
        <span class="minus">
            <i class="fa-regular fa-square-minus "></i> 
         </span> 
        </span> 
        
        </h3>
        
        
        <p class="resp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
      </div>
      </div>


</section>


<footer>
        
    <div class="footer-top-text">

    
    <div class="logo">

        <p>SUITME<span class="log">Fashion</span></p>
      </div>
      


    <ul class="footer-links">

    
<li class="bold-text">Quick links</li>
        <li><a href="index.html">Home</a></li>
        <li><a href="About.html">About</a></li>
        <li><a href="Shop.html">Shop</a></li>
        <li><a href="Contact.html">Contact</a></li>

    </ul>



  
   
   <ul class="conditions">
   

    <li class="bold-text">Terms and conditions</li>
        <li>Privacy</li>
        <li>Accessbility</li>
        <li>Blog</li>
        <li>Guides</li>

    </ul>

    <ul class="support">
   

        <li class="bold-text">support</li>
            <li>contact us</li>
            <li>delivery</li>
            <li>return and exchanges</li>
            <li>terms and use</li>
    
        </ul>
   
    <ul class="contacts">

<li class="bold-text">Contacts</li>
<li>Tel:00 222 444 555</li>
<li>Email:suitme@gmail.com</li>


</ul>







</div>



<div class="footer-bottom">
                
    <p>Copyright.2024|power by IBK</p>
                
                
    
               
                
                       
    <div class="media">
                        
            <i class="fa-brands fa-square-facebook"></i>
                        <i class="fa-brands fa-square-instagram"></i>
                        <i class="fa-brands fa-tiktok"></i>
                        <i class="fa-brands fa-square-whatsapp"></i>
            
                </div>
           
           <div class="footer-icons"> 
                
           <div class="paypal-icon">
        
            <img src="images/paypal.svg" width="50" alt="paypal card">
            </div>
        <div class="visa-icon">
            <img src="images/visa.svg" width="50" alt="visa card">
            </div>
            <div class="klarna-icon">
                <img src="images/klarna.svg" width="50" alt="klarna card" >
        </div>
        <div class="master-icon">
            <img src="images/mastercard.svg"  width="50" alt="mastercard card">
        
        </div>
        <div class="amex-icon">
            <img src="images/americanexpress.svg" width="50" alt="amex card">
            
        </div>
    </div>
  
            
                
                
                </div>
        
       </footer>




       <script src="index.js"></script> 


</body>
            
             
               
            
            
            
            
            
            
            


</html>

    


`;
    
    }

    
    


let pics=[`${thisProduct.image}`,`${thisProduct.image1}`,`${thisProduct.image2}`]
       

let smallPic = document.getElementsByClassName('small-pic');
for (let i = 0; i < smallPic.length; i++) {
    smallPic[i].addEventListener('click', showMainPic)


    function showMainPic() {
        const img = document.getElementById('main-pic');
        
        img.setAttribute('src',pics[i]);
        

    }
} 
 } 
    
    
    
    
    
    




 




export default renderProduct