const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  if (event.submitter && event.submitter.id === "login") {
    event.preventDefault();
    validateAndRedirect();
  }
});

function validateForm() {
  const nameInput = document.querySelector("#user");
  const passwordInput = document.querySelector("#password");

  if (nameInput.value === "") {
    return false;
  }

  if (passwordInput.value === "") {
    return false;
  }

  return true;
}

function validateAndRedirect() {
  if (validateForm() === true) {
    const redirectUrl = "level-selector.html";
    window.location.href = redirectUrl;
  }
}

