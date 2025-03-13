import products from'./products.js';

const suits=()=>{

let container=document.querySelector('.container');
fetch('products.json')
.then(response=> response.json())
.then(products=>{
    let suitProducts=products.slice(0,5);
      suitProducts.forEach(suitPoduct=>{
    
    
    let newPara=document.createElement('div');
      newPara.innerHTML=`
      
      <img src=${suitPoduct.image}>
      
      `;

   container.appendChild(newPara);
    
      });
       
      
       
    
    });
}
   



       




export default suits;        