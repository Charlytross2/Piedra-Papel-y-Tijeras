const opciones = ["Piedra", "Papel", "Tijera"];
const btn = document.getElementById("btn-jugar");
const machineJuego = document.querySelector(".img-machine");
let valores = document.getElementById("opciones");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");
const resultadoModal = document.querySelector(".modal__resultado");

function encontrarOption() {
  let select = valores.value;
  mostrarImagen(select);
}

function mostrarImagen(seleccionado) {
  const imagen = document.querySelector(".img-juego");
  let ruta = `./img/${seleccionado}.png`;
  imagen.src = ruta;
}

function boton() {
  btn.addEventListener("click", (e) => {
    jugar();
    e.preventDefault();
    modal.classList.add("modal--show");
  });
  closeModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("modal--show");
  });
}

function jugar() {
  let seleccionado = valores.options[valores.selectedIndex].value;
  let varMachine = Math.floor(Math.random() * (3 + 1 - 1) + 1),
    rutaPrincipal;
  const rutaPapel = {
      ruta: `./img/Papel.png`,
      nombre: opciones[1],
    },
    rutaPiedra = {
      ruta: `./img/Piedra.png`,
      nombre: opciones[0],
    },
    rutaTijera = {
      ruta: `./img/Tijera.png`,
      nombre: opciones[2],
    };

  if (varMachine == 1) rutaPrincipal = rutaPapel.ruta;
  else if (varMachine == 2) rutaPrincipal = rutaTijera.ruta;
  else if (varMachine == 3) rutaPrincipal = rutaPiedra.ruta;
  machineJuego.src = rutaPrincipal;
  //validacion del resultado del juego
  if (
    (seleccionado == rutaPapel.nombre && varMachine == 1) ||
    (seleccionado == rutaPiedra.nombre && varMachine == 3) ||
    (seleccionado == rutaTijera.nombre && varMachine == 2)
  ) {
    resultadoModal.textContent = `Empate`;
  } else if (
    (seleccionado == rutaPapel.nombre && varMachine == 3) ||
    (seleccionado == rutaTijera.nombre && varMachine == 1) ||
    (seleccionado == rutaPiedra.nombre && varMachine == 2)
  ) {
    resultadoModal.textContent = "Ganaste";
  } else {
    resultadoModal.textContent = `Perdiste`;
  }
}

boton();
