const aurl = "https://rainydays.benjamin-flower.store/wp-json/wc/v3/products";
const akey = "consumer_key=ck_d73cda14f037b09c0c4c3ec694d69287d6ce6f33";
const asecret = "consumer_secret=cs_d39990c64d590ccc8f9f6711ea8df93dd0568733";
const awooApi = `${aurl}?${akey}&${asecret}`;
const featuredContainer = document.querySelector(".featured");

async function getProducts() {
    try {
        const response = await fetch(awooApi);
        jacket = await response.json();
        createFeaturedHtml(jacket);
    } catch (error) {
        console.log(error);
    }
}

getProducts();

function createFeaturedHtml(product) {
    for (i = 0; i < 4; i++) {
        featuredContainer.innerHTML += `<div class="card">
            <a href="productpage.html?id=${product[i].id}"><img class="product-image-front" src="${product[i].images[0].src}" /></a>
            <div class="bottom-card">
                 <p class="text">${product[i].name}</p>
                 <p class="title">${product[i].attributes[0].options[0]}</p>
                 <p class="price">${product[i].price}</p> 
                <a class="details-button" href="productpage.html?id=${product[i].id}">Details</a>
            </div>
            </div>`;
    }
}

createFeaturedHtml();
