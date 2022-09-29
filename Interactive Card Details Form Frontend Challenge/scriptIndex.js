var confirmButton = document.querySelector("#buttonConfirm");

/* Form inputs */

var cardNumber = document.querySelector("#cardNumber");
var cardNumberInput = document.querySelector("#inputCardNumber");

var cardholderName = document.querySelector("#cardholderName");
var cardholderNameInput = document.querySelector("#inputName");

var expMonth = document.querySelector("#cardExpMonth");
var expMonthInput = document.querySelector("#inputExpMonth");

var expYear = document.querySelector("#cardExpYear");
var expYearInput = document.querySelector("#inputExpYear");

var cardCvc = document.querySelector("#cardCvc");
var cardCvcInput = document.querySelector("#inputCvc");

/* Error Selectors */

var inputs = document.querySelectorAll(".credentialInputs");

/* Real-time card inputs */
cardNumberInput.addEventListener("keyup", function () {
  if (cardNumberInput.value.length >= 1) {
    cardNumber.innerText = cardNumberInput.value;
  } else {
    cardNumber.innerText = "0000 0000 0000 0000";
  }
});

cardholderNameInput.addEventListener("keyup", function () {
  if (cardholderNameInput.value.length >= 1) {
    cardholderName.innerText = cardholderNameInput.value;
  } else {
    cardholderName.innerText = "Jane Appleseed";
  }
});

expMonthInput.addEventListener("keyup", function () {
  if (expMonthInput.value.length >= 1) {
    expMonth.innerText = expMonthInput.value;
  } else {
    expMonth.innerText = "00";
  }
});

expYearInput.addEventListener("keyup", function () {
  if (expYearInput.value.length >= 1) {
    expYear.innerText = expYearInput.value;
  } else {
    expYear.innerText = "00";
  }
});

cardCvcInput.addEventListener("keyup", function () {
  if (cardCvcInput.value.length >= 1) {
    cardCvc.innerText = cardCvcInput.value;
  } else {
    cardCvc.innerText = "000";
  }
});

/* Error State Scripts */

confirmButton.addEventListener("submit", validateForm);

inputs.forEach((input) => {
  input.addEventListener("invalid", (invalidEvent) => {
    input.nextElementSibling.innerText = "Can't be blank!";
  });
});

function submitForm() {
  document.querySelector("#divForm").style.display = "none";
  document.querySelector("#divComplete").style.display = "flex";
}

function validateForm() {
  if (cardNumberInput.value.length < 16) {
    cardNumberInput.nextElementSibling.innerText =
      "Card number must be 16 characters in length.";
    return false;
  }
  submitForm();
  return true;
}
