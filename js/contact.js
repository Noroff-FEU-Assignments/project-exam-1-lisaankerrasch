const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const success = document.querySelector(".success");
const checkSymbol1 = document.querySelector(".checksymbol1");
const checkSymbol2 = document.querySelector(".checksymbol2");
const checkSymbol3 = document.querySelector(".checksymbol3");
const checkSymbol4 = document.querySelector(".checksymbol4");

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function checkSign(event) {
  if (validateEmail(email.value)) {
    checkSymbol1.style.display = "inline";
  }
  if (checkLength(fullName.value, 0)) {
    checkSymbol2.style.display = "inline";
  }
  if (checkLength(subject.value, 9)) {
    checkSymbol3.style.display = "inline";
  }
  if (checkLength(message.value, 24)) {
    checkSymbol4.style.display = "inline";
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function validateForm(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 0)) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }
  if (checkLength(subject.value, 9)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }
  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (checkLength(message.value, 24)) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
}

function submitForm(event) {
  if (
    checkLength(fullName.value, 0) &&
    checkLength(subject.value, 9) &&
    checkLength(message.value, 24) &&
    validateEmail(email.value)
  ) {
    event.preventDefault;
    form.classList.add("hiddenjs");
    success.innerHTML = `<div class="message">Thank you for reaching out! We will be in touch with you shortly. </div>`;
    form.reset();
  }
}

form.addEventListener("submit", validateForm);
form.addEventListener("submit", submitForm);

form.addEventListener("keyup", checkSign);
