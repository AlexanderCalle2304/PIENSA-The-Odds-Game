// Selecciona el formulario con el ID 'form'
const form = document.querySelector("#form");

// Agrega un controlador de eventos 'submit' al formulario
form.addEventListener("submit", function (event) {
  // Si el botón que disparó el evento de envío tiene el ID 'login'
  if (event.submitter && event.submitter.id === "login") {
    // Previene el comportamiento de envío por defecto del formulario
    event.preventDefault();
    // Valida el formulario y redirige si es válido
    validateAndRedirect();
  }
});

/**
 * Valida el formulario.
 * 
 * @returns {boolean} - Retorna 'true' si el formulario es válido, 'false' de lo contrario.
 */
function validateForm() {
  // Selecciona el campo de entrada del usuario
  const nameInput = document.querySelector("#user");
  // Selecciona el campo de entrada de la contraseña
  const passwordInput = document.querySelector("#password");

  // Si el campo de entrada del usuario está vacío, retorna 'false'
  if (nameInput.value === "") {
    return false;
  }

  // Si el campo de entrada de la contraseña está vacío, retorna 'false'
  if (passwordInput.value === "") {
    return false;
  }

  // Si ambos campos de entrada están llenos, retorna 'true'
  return true;
}

/**
 * Valida el formulario y redirige al usuario si el formulario es válido.
 */
function validateAndRedirect() {
  // Si el formulario es válido
  if (validateForm() === true) {
    // Define la URL de redirección
    const redirectUrl = "level-selector.html";
    // Redirige al usuario a la URL de redirección
    window.location.href = redirectUrl;
  }
}
