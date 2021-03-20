function addToCart() {
  const alertIcon = (document.querySelector(".alert").style.visibility =
    "visible");
}

function removeItem() {
  const jacketItem = (document.querySelector(".item1").style.display = "none");
  costChange();
}

function removeStickers() {
  const stickers = (document.querySelector(".item2").style.display = "none");
}

function costChange() {
  const cost = document.querySelector(".sum");
  const jacketItem = document.querySelector(".item1");
  const totalCost = document.querySelector(".totalcost_sum");
  if ((jacketItem.style.display = "none")) {
    cost.innerHTML = "0";
  }

  if ((jacketItem.style.display = "none")) {
    totalCost.innerHTML = "0";
  }
}

function sortRainJackets() {
  const redblue = document.querySelectorAll(".redblue");
  redblue.style.display = "none";
}
