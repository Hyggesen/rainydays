function addToCart() {
  const alertIcon = (document.querySelector(".alert").style.visibility = "visible");
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
  const yellow = document.querySelectorAll(".yellowjacket");

  yellow[0].style.display = "none";
  yellow[1].style.display = "none";
  yellow[2].style.display = "none";
  redblue[0].style.display = "none";
  redblue[1].style.display = "none";
  redblue[2].style.display = "none";
}

function sortHikingJackets() {
  const redblue = document.querySelectorAll(".redblue");
  const yellow = document.querySelectorAll(".yellowjacket");

  yellow[0].style.display = "block";
  yellow[1].style.display = "block";
  yellow[2].style.display = "block";
  redblue[0].style.display = "block";
  redblue[1].style.display = "block";
  redblue[2].style.display = "block";
}
