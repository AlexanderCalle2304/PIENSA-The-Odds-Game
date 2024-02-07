/**
 * Muestra el feedback al usuario y cambia al siguiente problema o nivel.
 * 
 * @param {number} feedId - El ID del feedback a mostrar.
 */
function showFeedback(feedId) {
  // Selecciona el problema o nivel actual
  const currentProblem = document.querySelector(".current-problem");

  // Encuentra el siguiente problema o nivel
  const nextProblem =
    currentProblem.nextElementSibling ||
    document.querySelector(".level-wrapper");

  // Si hay un próximo problema o nivel, cambia a ese problema o nivel
  currentProblem.classList.remove("current-problem");
  nextProblem.classList.add("current-problem");

  // Selecciona todas las imágenes en el próximo problema o nivel
  const imgs = nextProblem.querySelectorAll(".img");

  // Añade la clase 'color-change' a todas las imágenes
  imgs.forEach((img) => img.classList.add("color-change"));

  // Elimina la clase 'color-change' después de la animación (puedes ajustar el tiempo según tu transición CSS)
  setTimeout(() => {
    imgs.forEach((img) => img.classList.remove("color-change"));
  }, 500);

  // Selecciona el feedback a mostrar basado en el ID del feedback
  let feed = "";
  if (feedId === 1) {
    feed = document.getElementById("feedtext1").innerText;
  } else if (feedId === 2) {
    feed = document.getElementById("feedtext2").innerText;
  } else if (feedId === 3) {
    feed = document.getElementById("feedtext3").innerText;
  } else if (feedId === 4) {
    feed = document.getElementById("feedtext4").innerText;
  } else {
    feed = document.getElementById("feedtext5").innerText;
  }

  //Funcion de alertifyJS
  // Crea un nuevo elemento 'pre' para mostrar el feedback
  let pre = document.createElement("pre");

  // Establece el estilo del elemento 'pre'
  pre.style.maxHeight = "400px";
  pre.style.margin = "0";
  pre.style.padding = "24px";
  pre.style.whiteSpace = "pre-wrap";
  pre.style.textAlign = "justify";

  // Establece el texto del elemento 'pre' al feedback seleccionado
  pre.innerHTML = feed;

  // Muestra el feedback en un diálogo de alerta
  alertify
    .alert()
    .setting({
      label: "Siguiente",
      message: pre,
      title: "Correcto!",
      closable: false,
      movable: false,
      pinnable:false,
      overflow: false,
      padding: false,
      onok: function () {},
    })
    .show(); // Aquí puedes poner el texto que quieras para el botón
}
