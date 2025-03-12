import products from'./products.js';

const suits=()=>{


fetch('products.json')
.then(response=> response.json())
.then(products=>{
    let suitProducts=products.slice(0,5);
    
    console.log(suitProducts);

       
      
       
    
    })
   


}
       
suits();



export default suits;        