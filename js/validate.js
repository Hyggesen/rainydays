const fullName = document.querySelector("#fullname");
const email = document.querySelector("#email");
const company = docment.querySelector("#company");
const phone = document.querySelector("#phone");
const formError = document.queryselector(".form-error");
const contactform = document.queryselector("#contactForm");
const nameErorr = document.queryselector("#fullname-error");

function validateForm() {
  event.preventDefault();

  if (checkLength(fullName.value, 0) === true) {
    nameErorr.style.visibility = "visible";
  } else {
    console.log("error");
  }
}

contactform.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}
