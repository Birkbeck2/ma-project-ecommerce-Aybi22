import products from'./products.js';

export function filteredProducts(){

products.filter(product=>product.category==="regular");

}

