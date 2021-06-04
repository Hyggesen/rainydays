const productContainer = document.querySelector(".productDetails");
const featuredContainer2 = document.querySelector(".featured2");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://rainydays.benjamin-flower.store/wp-json/wc/v3/products/";
const key = "consumer_key=ck_d73cda14f037b09c0c4c3ec694d69287d6ce6f33";
const secret = "consumer_secret=cs_d39990c64d590ccc8f9f6711ea8df93dd0568733";
const product = `${url}${id}?${key}&${secret}`;

async function getSingleProduct() {
    try {
        const response = await fetch(product);
        const json = await response.json();
        
        createProductHtml(json);
        
    } catch (error) {
        productContainer.innerHTML = "We could not find this product right now, please try again.";
    }
}
getSingleProduct();

function createProductHtml(product) {
    productContainer.innerHTML = `
      <section class="product-page-main">

      <div class="product-image-container">

        <div class="leftarrow">
          <i class="fas fa-angle-left"></i>
        </div>
        
        <div class="middlejacket">
        <img class="product-image" src="${product.images[0].src}" />
        </div>
        
        <div class="rightarrow">
        <i class="fas fa-angle-right"></i>
      </div>
      </div>

      <div class="product-description-container">
        <h1>${product.name}</h1>
        <span>${product.price}</span>
        <p>This jacket from ${product.attributes[0].options[0]} is a great choice.
        </p>
        <span class="instock"><i class="fas fa-check"></i><p>In stock</p></span>
        

      <div class="choose-color">
        <label for="color"></label>
        <select name="color" id="color">
          <option value="" selected disabled hidden>Choose Color</option>
          <option value="Yellow">Yellow</option>
          <option value="Red">Red</option>
          <option value="Black">Black</option>
        </select>
      </div>

        
    <div class="choose-size">
      <label for="size"></label>
      <select name="size" id="size" value="test">
        <option value="" selected disabled hidden>Choose Size</option>
        <option value="Yellow">40</option>
        <option value="Red">50</option>
        <option value="Black">60</option>
      </select>

</div>
    <div class="button-wrapper">
         <p class="addtocart-button" onclick="addToCart()">Add to cart</p>
       <a class="buynow-button" href="checkoutpage.html">Buy Now</a>
    </div>   


      </div>


    </section>
     `;
}
