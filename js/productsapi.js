const url ="https://rainydays.benjamin-flower.store/wp-json/wc/v3/products";
const key = "consumer_key=ck_d73cda14f037b09c0c4c3ec694d69287d6ce6f33";
const secret = "consumer_secret=cs_d39990c64d590ccc8f9f6711ea8df93dd0568733";
const wooApi =`${url}?${key}&${secret}`;
const searchBar = document.getElementById('search');
const dropDownJacket = document.querySelector(".dropdown__item");
const dropDown = document.querySelector(".dropdown");
let jacket = [];

document.addEventListener('click', function(event) {
    const insideClick = dropDown.contains(event.target);

    if (!insideClick)  {
        dropDown.style.display="none";
    }
})


searchBar.addEventListener('keyup', (e) =>{
   
    const searchTerm = e.target.value.toLowerCase();

   const filteredJackets = jacket.filter(jacket => {
        return jacket.name.toLowerCase().includes(searchTerm)
    })

    console.log(filteredJackets);
    createDropDown (filteredJackets);


if (searchTerm) {
    dropDown.style.display = "block";
}

else {
    dropDown.style.display = "none";
}

})



const productContainer = document.querySelector (".products");
const featuredContainer = document.querySelector(".featured");

async function getProducts () {

    try {
        const response = await fetch(wooApi);
        jacket =await response.json();
        createHtml(jacket);
        createFeaturedHtml(jacket);
    }
    catch (error) {
        console.log(error);
    }

}

getProducts();



function createDropDown (jacket) {

for(i=0; i < jacket.length; i++) {

        dropDownJacket.innerHTML = `
        <img class="dropdown__image" src="${jacket[i].images[0].src}" />
        <div class="dropdown__name" >${jacket[i].name}`
        dropDownJacket.href = `productpage.html?id=${jacket[i].id}`;
}
}




function createHtml (products) {

    products.slice(-8).forEach(function(product){

const productHtml = 
`<div class="card">
<img class="product-image-front" src="${product.images[0].src}" />
<div class="bottom-card">
     <p class="text">${product.name}</p>
     <p class="title">${product.attributes[0].options[0]}</p>
     <p class="price">${product.price}</p> 
    <a class="details-button" href="productpage.html?id=${product.id}">Details</a>
</div>
</div>`

    productContainer.innerHTML += productHtml;



    })
        
    }


    function createFeaturedHtml (products) {
    
        products.slice(-4).forEach(function(product){
    
        featuredContainer.innerHTML +=     `<div class="card">
        <img class="product-image-front" src="${product.images[0].src}" />
        <div class="bottom-card">
             <p class="text">${product.name}</p>
             <p class="title">${product.attributes[0].options[0]}</p>
             <p class="price">${product.price}</p> 
            <a class="details-button" href="productpage.html?id=${product.id}">Details</a>
        </div>
        </div>`;
    
    
        })}

        createFeaturedHtml();


        






