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

    if (input === emailEl) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(emailEl.value)) {
        errorMsg?.classList.add("active");
      } else {
        errorMsg?.classList.remove("active");
      }
    } else if (input.value.trim() === "") {
      errorMsg?.classList.add("active");
    } else {
      errorMsg?.classList.remove("active");
    }
  });

  // Checkbox kontrolü
  const checkErrorMsg = document.querySelector(".check-err");
  if (!checkbox.checked) {
    checkErrorMsg?.classList.add("active");
  } else {
    checkErrorMsg?.classList.remove("active");
  }

  // Radio kontrolü
  const radioErrorMsg = document.querySelector(".query-err");
  const isAnyRadioChecked = Array.from(radioInputs).some(
    (radio) => radio.checked
  );
  if (radioErrorMsg) {
    radioErrorMsg.classList.toggle("active", !isAnyRadioChecked);
  }
};

const showSuccessMessage = () => {
  let allFilled = true;

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      allFilled = false;
    }
  });

  const isAnyRadioChecked = Array.from(radioInputs).some(
    (radio) => radio.checked
  );
  if (!isAnyRadioChecked) allFilled = false;

  if (!checkbox.checked) allFilled = false;

  if (allFilled) {
    successContainerEl.classList.add("active");
  } else {
    successContainerEl.classList.remove("active");
  }
};

const getData = () => {
  const checkedRadio = Array.from(radioInputs).find((radio) => radio.checked);
  const queryTypeLabel = checkedRadio
    ? checkedRadio.parentElement.textContent.trim()
    : "";

  const data = {
    firstName: document.querySelector("#firstname").value.trim(),
    lastName: document.querySelector("#lastname").value.trim(),
    email: document.querySelector("#email").value.trim(),
    queryType: queryTypeLabel,
    message: document.querySelector("#message").value.trim(),
  };
  console.log(data);
};

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  showError();
  getData();
  showSuccessMessage();
});

// "use strict";

// const formEl = document.querySelector(".contact-form");
// const radioInputs = document.querySelectorAll(".radio-input");
// const checkbox = document.querySelector(".checkbox");
// const emailEl = document.getElementById("email");
// const inputs = document.querySelectorAll(".inputs");
// const successContainerEl = document.querySelector(".success-container");

// const showError = () => {
//   inputs.forEach((input) => {
//     const errorMsg = input.nextElementSibling;
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     if (
//       (errorMsg && input.value.trim() === "") ||
//       (!emailRegex.test(emailEl.value) && !checkbox.checked)
//     ) {
//       errorMsg.classList.add("active");
//     } else {
//       errorMsg.classList.remove("active");
//     }
//   });

//   const radioErrorMsg = document.querySelector(".query-err");
//   if (radioErrorMsg) {
//     const isAnyRadioChecked = Array.from(radioInputs).some(
//       (radio) => radio.checked
//     );
//     radioErrorMsg.classList.toggle("active", !isAnyRadioChecked);
//   }

//   const checkErrorMsg = document.querySelector(".check-err");
//   if (checkErrorMsg) {
//     checkErrorMsg.classList.toggle("active", !checkbox.checked);
//   }
// };

// const showSuccessMessage = () => {
//   let allFilled = true;
//   inputs.forEach((input) => {
//     if (input.value.trim() === "") {
//       allFilled = false;
//     }
//   });

//   if (allFilled) {
//     successContainerEl.classList.add("active");
//   } else {
//     successContainerEl.classList.remove("active");
//   }
// };

// formEl.addEventListener("submit", (e) => {
//   e.preventDefault();
//   showError();
//   showSuccessMessage();
// });

// const formEl = document.querySelector(".contact-form");
// const radioInputs = document.querySelectorAll(".radio-input");
// const checkbox = document.querySelector(".checkbox");

// formEl.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const inputs = document.querySelectorAll(".inputs");

//   inputs.forEach((input) => {
//     const errorMsg = input.nextElementSibling;
//     if (!errorMsg) return;
//     errorMsg.classList.remove("active");

//     if (input.value.trim() === "") {
//       errorMsg.classList.add("active");
//     }
//   });

//   radioInputs.forEach((radioInput) => {
//     const errorMsg = document.querySelector(".query-err");
//     if (!errorMsg) return;
//     errorMsg.classList.remove("active");

//     if (!radioInput.checked) {
//       errorMsg.classList.add("active");
//     }
//   });

//   const errorMsg = document.querySelector(".check-err");
//   if (!errorMsg) return;
//   errorMsg.classList.remove("active");

//   if (!checkbox.checked) {
//     errorMsg.classList.add("active");
//   }
// });
