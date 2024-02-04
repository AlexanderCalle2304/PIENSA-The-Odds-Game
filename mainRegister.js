//Validación de formulario de registro
const formregister = document.querySelector("#form-register");

formregister.addEventListener("submit", function (event) {
  if (event.submitter && event.submitter.id === "register") {
    event.preventDefault();
    validateAndRedirectRegister();
  }
});

function validateFormRegister() {
  const nameRegister = document.querySelector("#user");
  const passwordRegister = document.querySelector("#password");

  if (nameRegister.value === "") {
    return false;
  }

  if (passwordRegister.value === "") {
    return false;
  }

  return true;
}
function validateAndRedirectRegister() {
  if(validateFormRegister() === true){
    const redirectUrlRegister = "level-selector.html";
    window.location = redirectUrlRegister;
    
  }
}

