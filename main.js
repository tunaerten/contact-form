"use strict";

const formEl = document.querySelector(".contact-form");
const radioInputs = document.querySelectorAll(".radio-input");
const checkbox = document.querySelector(".checkbox");
const emailEl = document.getElementById("email");
const inputs = document.querySelectorAll(".inputs");
const successContainerEl = document.querySelector(".success-container");

const showError = () => {
  inputs.forEach((input) => {
    const errorMsg = input.nextElementSibling;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (
      (errorMsg && input.value.trim() === "") ||
      (!emailRegex.test(emailEl.value) && !checkbox.checked)
    ) {
      errorMsg.classList.add("active");
    } else {
      errorMsg.classList.remove("active");
    }
  });

  const radioErrorMsg = document.querySelector(".query-err");
  if (radioErrorMsg) {
    const isAnyRadioChecked = Array.from(radioInputs).some(
      (radio) => radio.checked
    );
    radioErrorMsg.classList.toggle("active", !isAnyRadioChecked);
  }

  const checkErrorMsg = document.querySelector(".check-err");
  if (checkErrorMsg) {
    checkErrorMsg.classList.toggle("active", !checkbox.checked);
  }
};

const showSuccessMessage = () => {
  let allFilled = true;
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      allFilled = false;
    }
  });

  Array.from(radioInputs).every((radio) => {
    if (radio.checked === false) allFilled = false;
  });

  if (!checkbox.checked) allFilled = false;

  if (allFilled) {
    successContainerEl.classList.add("active");
  } else {
    successContainerEl.classList.remove("active");
  }
};

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  showError();
  showSuccessMessage();
});
