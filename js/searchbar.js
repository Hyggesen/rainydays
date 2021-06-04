const theurl ="https://rainydays.benjamin-flower.store/wp-json/wc/v3/products";
const thekey = "consumer_key=ck_d73cda14f037b09c0c4c3ec694d69287d6ce6f33";
const thesecret = "consumer_secret=cs_d39990c64d590ccc8f9f6711ea8df93dd0568733";
const thewooApi =`${theurl}?${thekey}&${thesecret}`;
const searchBar = document.getElementById('search');
const dropDownJacket = document.querySelector(".dropdown__item");
const dropDown = document.querySelector(".dropdown");
let jacket = [];



async function getJackets () {

    try {
        const response = await fetch(thewooApi);
        jacket =await response.json();
    }
    catch (error) {
        console.log(error);
    }

}

getJackets();


document.addEventListener('click', function(event) {
    const insideClick = dropDown.contains(event.target);

    if (!insideClick)  {
        dropDown.style.display="none";
    }
    else {
        dropDown.style.display="flex";
    }
})


searchBar.addEventListener('keyup', (e) =>{


    setTimeout(function(){
        const searchTerm = e.target.value.toLowerCase();

        const filteredJackets = jacket.filter(jacket => {
             return jacket.name.toLowerCase().match(searchTerm)
         })
     
         console.log(filteredJackets);
         createDropDown (filteredJackets);
     
     
     if (searchTerm) {
         dropDown.style.display = "flex";
     }
     
     else {
         dropDown.style.display = "none";
     }
    }, 300);
   
 

})



function createDropDown (jacket) {

for(i=0; i < jacket.length; i++) {




        dropDownJacket.innerHTML += `
        <div class="dropdown__item__wrapper">
        <img class="dropdown__image" src="${jacket[i].images[0].src}" />
        <div class="dropdown__name" >${jacket[i].name}</div>`

        dropDownJacket.href = `productpage.html?id=${jacket[i].id}
        `;
}
}
