// Selecciona el formulario de registro con el ID 'form-register'
const formregister = document.querySelector("#form-register");

// Agrega un controlador de eventos 'submit' al formulario de registro
formregister.addEventListener("submit", function (event) {
  // Si el botón que disparó el evento de envío tiene el ID 'register'
  if (event.submitter && event.submitter.id === "register") {
    // Previene el comportamiento de envío por defecto del formulario
    event.preventDefault();
    // Valida el formulario de registro y redirige si es válido
    validateAndRedirectRegister();
  }
});

/**
 * Valida el formulario de registro.
 * 
 * @returns {boolean} - Retorna 'true' si el formulario de registro es válido, 'false' de lo contrario.
 */
function validateFormRegister() {
  // Selecciona el campo de entrada del usuario en el formulario de registro
  const nameRegister = document.querySelector("#user");
  // Selecciona el campo de entrada de la contraseña en el formulario de registro
  const passwordRegister = document.querySelector("#password");

  // Si el campo de entrada del usuario en el formulario de registro está vacío, retorna 'false'
  if (nameRegister.value === "") {
    return false;
  }

  // Si el campo de entrada de la contraseña en el formulario de registro está vacío, retorna 'false'
  if (passwordRegister.value === "") {
    return false;
  }

  // Si ambos campos de entrada en el formulario de registro están llenos, retorna 'true'
  return true;
}

/**
 * Valida el formulario de registro y redirige al usuario si el formulario de registro es válido.
 */
function validateAndRedirectRegister() {
  // Si el formulario de registro es válido
  if(validateFormRegister() === true){
    // Define la URL de redirección para el registro
    const redirectUrlRegister = "level-selector.html";
    // Redirige al usuario a la URL de redirección para el registro
    window.location = redirectUrlRegister;
  }
}
