import products from '/products.js';
import cart from './cart.js';


let listProduct = document.getElementById('listProduct');
let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

const loadTemplate = () => {
    fetch('/template.html')
    .then(response => response.text())
    .then(html => {
        app.innerHTML = html;
        let contentTab = document.getElementById('contentTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML = null;
        cart();
        initApp();
        showPic();
        
    })
}
loadTemplate();
const initApp = () => {
    let productId = new URLSearchParams(window.location.search).get('id');
    let thisProduct = products.filter(value => value.id == productId)[0];
    if(!thisProduct){
        window.location.href = "/";
    }

    let detail = document.querySelector('.detail');
   detail.querySelector('.picture img').src=thisProduct.picture;
   detail.querySelector('.photo img').src=thisProduct.photo;
   detail.querySelector('.images img').src=thisProduct.images;
    detail.querySelector('.image img').src = thisProduct.image;
    detail.querySelector('.name').innerText = thisProduct.name;
    detail.querySelector('.price').innerText = thisProduct.price;
    
    detail.querySelector('.add-btn').dataset.id = thisProduct.id;


    let listProductHTML = document.querySelector('.shop-container');
    products.forEach(product => {
        let newProduct = document.createElement('div');
       
        newProduct.innerHTML = 
        ` 
           
    <a href="/detail.html?id=${product.id}">
     
        <img src="${product.image}">
          
        </a>
       
       
       
       
        
        `;

        
        listProductHTML.appendChild(newProduct);
    });

}

  



 let picture=document.querySelector('.picture img');
 picture.addEventListener('click', showPic);
 function showPic(){
    let mainPic=document.querySelector('.mainpic');
    mainPic.src=picture;
 }

    
     
 

 let qBtn = document.getElementsByClassName('q-btn');

for (let i = 0; i < qBtn.length; i++) {

qBtn[i].addEventListener('click', show);

function show(e) {

const qtitle = e.currentTarget.parentNode.parentNode;

qtitle.classList.toggle('show-text');
}
}

