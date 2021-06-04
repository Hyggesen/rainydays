const form = document.querySelector("#contactForm");
const theName = document.querySelector("#name");
const theSubject = document.querySelector("#subject");
const theEmail = document.querySelector("#email");
const theTextarea = document.querySelector("#textarea");

function validateForm() {
    event.preventDefault();

    if (checkLength(theName.value, 0) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
        console.log("error");
    }

    if (checkLength(theSubject.value, 0) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (validateEmail(theEmail.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(theTextarea.value, 50) === true) {
        textareaError.style.display = "none";
    } else {
        textareaError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const matchesEmail = regEx.test(email);
    return matchesEmail;
}
