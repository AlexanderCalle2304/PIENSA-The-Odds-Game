function changeLevel() {
  // Obtén el nivel actual
  const currentProblem = document.querySelector(".current-problem");

  // Encuentra el siguiente problema/nivel
  const nextProblem =
    currentProblem.nextElementSibling ||
    document.querySelector(".level-wrapper");

  // Si hay un próximo problema/nivel, cambia a ese problema/nivel
  currentProblem.classList.remove("current-problem");
  nextProblem.classList.add("current-problem");
   // Agrega la clase color-change a los elementos .img para activar la animación
  const imgs = nextProblem.querySelectorAll(".img");
  imgs.forEach((img) => img.classList.add("color-change"));

  // Elimina la clase color-change después de la animación (puedes ajustar el tiempo según tu transición CSS)
  setTimeout(() => {
    imgs.forEach((img) => img.classList.remove("color-change"));
  }, 500); // 500 milisegundos, ajusta según tu transición CSS
}

function showFeedback(feedId) {
  const currentProblem = document.querySelector(".current-problem");
  // Encuentra el siguiente problema/nivel
  const nextProblem =
    currentProblem.nextElementSibling ||
    document.querySelector(".level-wrapper");

  // Si hay un próximo problema/nivel, cambia a ese problema/nivel
  currentProblem.classList.remove("current-problem");
  nextProblem.classList.add("current-problem");

  const imgs = nextProblem.querySelectorAll(".img");
  imgs.forEach((img) => img.classList.add("color-change"));

  // Elimina la clase color-change después de la animación (puedes ajustar el tiempo según tu transición CSS)
  setTimeout(() => {
    imgs.forEach((img) => img.classList.remove("color-change"));
  }, 500);
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

  let pre = document.createElement("pre");

  //custom style.
  pre.style.maxHeight = "400px";
  pre.style.margin = "0";
  pre.style.padding = "24px";
  pre.style.whiteSpace = "pre-wrap";
  pre.style.textAlign = "justify";
  pre.innerHTML = feed;
  //grab the dialog instance using its parameter-less constructor then set multiple settings at once.
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
