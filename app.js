const container = document.querySelector(".container");
const messageBox = document.querySelector(".message");
const subBtn = document.getElementById("sub-btn");
const emailInput = document.getElementById("email");
const dismissBtn = document.getElementById("disBtn");
const errorText = document.querySelector(".error-text");
let correctEmail = document.querySelector(".correct-email");

subBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let value = emailInput.value;

  function isValidEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  if (!isValidEmail(value)) {
    emailInput.setAttribute("class", "error");
    errorText.classList.add("show");
  } else {
    container.classList.add("view");
    messageBox.classList.add("view");
  }
  correctEmail.textContent = emailInput.value;
});

dismissBtn.addEventListener("click", (e) => {
  e.preventDefault();

  container.classList.remove("view");
  messageBox.classList.remove("view");
});
