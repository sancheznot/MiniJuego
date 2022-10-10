const patito = (minimo, maximo) => {
  let numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
  return numero;
};

let username = "";
let piedra = 0;
let papel = 1;
let tijera = 2;
let opciones = ["Piedra", "Papel", "Tijera"];
let hisUser = [];
let hisPc = [];
let marcadorPlayer = 0;
let marcadorPc = 0;
let ganoplayer = false;
let ganopc = false;
let empate = false;
let opcionUsuario;

let character = document.getElementById("eligio");
character.addEventListener("input", () => {
  if (character.value.length > 1 || character.value > 2) {
    character.value = character.value.slice(0, 0);
    console.log(character.value);
  }
});
const jugar = document.getElementById("jugar");
jugar.addEventListener("click", () => {
  const modal_container = document.getElementById("modal_container");
  modal_container.classList.remove("show");
  inicio();
});
const inicio = () => {
  const historialplayer = document.getElementById("historial");
  const historialpc = document.getElementById("historialpc");
  const input = document.getElementById("eligio");
  input.value = ''
  historialplayer.innerHTML = "";
  historialpc.innerHTML = "";
  marcadorPlayer = 0;
  marcadorPc = 0;
  const modal_play = document.getElementById("modal_play");
  const juega = document.getElementById("juega");
  const inputplayer = document.getElementById("inputplayer");
  const playernamehtml = document.getElementById("playername");
  const jugadorhtml = document.getElementById("jugadorTitle");
  let puntosplayer = document.getElementById("jugador");
  let puntospc = document.getElementById("computadora");

  if (inputplayer != "") {
    username = "";
    inputplayer.value = "";
    playernamehtml.innerHTML = "";
    jugadorhtml.innerHTML = "Jugador ";
  }

  modal_play.classList.add("show");
  inputplayer.addEventListener("input", () => {
    playernamehtml.innerHTML = inputplayer.value;
  });
  juega.addEventListener("click", () => {
    if (inputplayer.value.length <= 0) {
      return inputplayer.focus();
    }
    username = inputplayer.value;
    jugadorhtml.innerHTML = `Jugador ${username}`;
    puntosplayer.innerHTML = marcadorPlayer;
    puntospc.innerHTML = marcadorPc;
    modal_play.classList.remove("show");
  });
};

const boton = document.getElementById("envio");
boton.addEventListener("click", () => {
  const input = document.getElementById("eligio");
  const opcionMaquina = patito(0, 2);

  const imgpiedra = document.querySelector(".piedra");
  const imgtijeras = document.querySelector(".tijeras");
  const imgpapel = document.querySelector(".papel");
  const imgpiedrapc = document.querySelector(".piedrapc");
  const imgtijeraspc = document.querySelector(".tijeraspc");
  const imgpapelpc = document.querySelector(".papelpc");

  // verificamos que el input no este vacio
  if (input.value === "" || input.value === null) {
    return input.focus();
  }

  opcionUsuario = input.value;
  if (opcionUsuario == piedra) {
    imgpiedra.classList.remove("animate__zoomOutDown");
    imgpiedra.classList.remove("ocultar");
    imgpiedra.classList.add("animate__zoomInDown");
  }
  if (opcionUsuario == papel) {
    imgpapel.classList.remove("animate__zoomOutDown");
    imgpapel.classList.remove("ocultar");
    imgpapel.classList.add("animate__zoomInDown");
  }
  if (opcionUsuario == tijera) {
    imgtijeras.classList.remove("animate__zoomOutDown");
    imgtijeras.classList.remove("ocultar");
    imgtijeras.classList.add("animate__zoomInDown");
  }
  if (opcionMaquina == piedra) {
    imgpiedrapc.classList.remove("animate__zoomOutDown");
    imgpiedrapc.classList.remove("ocultar");
    imgpiedrapc.classList.add("animate__zoomInDown");
  }
  if (opcionMaquina == papel) {
    imgpapelpc.classList.remove("animate__zoomOutDown");
    imgpapelpc.classList.remove("ocultar");
    imgpapelpc.classList.add("animate__zoomInDown");
  }
  if (opcionMaquina == tijera) {
    imgtijeraspc.classList.remove("animate__zoomOutDown");
    imgtijeraspc.classList.remove("ocultar");
    imgtijeraspc.classList.add("animate__zoomInDown");
  }

  options(opcionUsuario, opcionMaquina);
  puntos(opcionMaquina);
  // historial();
});

const reset = () => {
  const imgpiedra = document.querySelector(".piedra");
  const imgtijeras = document.querySelector(".tijeras");
  const imgpapel = document.querySelector(".papel");
  const imgpiedrapc = document.querySelector(".piedrapc");
  const imgtijeraspc = document.querySelector(".tijeraspc");
  const imgpapelpc = document.querySelector(".papelpc");

  setTimeout(() => {
    imgpiedra.classList.add("ocultar");

    imgpapel.classList.add("ocultar");

    imgtijeras.classList.add("ocultar");

    imgpiedrapc.classList.add("ocultar");

    imgpapelpc.classList.add("ocultar");

    imgtijeraspc.classList.add("ocultar");
  }, 2500);
};
// alert("Elegiste " + opciones[opcionUsuario])
// alert("Alexa eligió " + opciones[opcionMaquina])
const options = (opcionUsuario, opcionMaquina) => {
  const modal_container = document.getElementById("modal_container");
  const cerrar = document.getElementById("cerrar");
  const resultado = document.getElementById("resultado");

  if (opcionUsuario == piedra) {
    if (opcionMaquina == piedra) {
      setTimeout(() => {
        modal_container.classList.add("show");
        resultado.innerHTML = "Empate";
        resultado.classList.add("empate");
      }, 1300);
      cerrar.addEventListener("click", () => {
        modal_container.classList.remove("show");
        resultado.classList.remove("empate");
      });
      empate = true;
      ganoplayer = false;
      ganopc = false;
      reset();
    } else if (opcionMaquina == tijera) {
      setTimeout(() => {
        modal_container.classList.add("show");
        resultado.innerHTML = "Ganaste";
        resultado.classList.add("ganaste");
      }, 1300);
      cerrar.addEventListener("click", () => {
        modal_container.classList.remove("show");
        resultado.classList.remove("ganaste");
      });
      ganoplayer = true;
      ganopc = "perdiste";
      reset();
    } else if (opcionMaquina == papel) {
      setTimeout(() => {
        modal_container.classList.add("show");
        resultado.innerHTML = "Perdiste";
        resultado.classList.add("perdiste");
      }, 1300);
      cerrar.addEventListener("click", () => {
        modal_container.classList.remove("show");
        resultado.classList.remove("perdiste");
      });
      ganopc = true;
      ganoplayer = "perdiste";
      reset();
    }
  } else if (opcionUsuario == papel) {
    if (opcionMaquina == papel) {
      setTimeout(() => {
        modal_container.classList.add("show");
        resultado.innerHTML = "Empate";
        resultado.classList.add("empate");
      }, 1300);
      cerrar.addEventListener("click", () => {
        modal_container.classList.remove("show");
        resultado.classList.remove("empate");
      });
      empate = true;
      ganoplayer = false;
      ganopc = false;
      reset();
    } else if (opcionMaquina == piedra) {
      setTimeout(() => {
        modal_container.classList.add("show");
        resultado.innerHTML = "Ganaste";
        resultado.classList.add("ganaste");
      }, 1300);
      cerrar.addEventListener("click", () => {
        modal_container.classList.remove("show");
        resultado.classList.remove("ganaste");
      });
      ganoplayer = true;
      ganopc = "perdiste";
      reset();
    } else if (opcionMaquina == tijera) {
      setTimeout(() => {
        modal_container.classList.add("show");
        resultado.innerHTML = "Perdiste";
        resultado.classList.add("perdiste");
      }, 1300);
      cerrar.addEventListener("click", () => {
        resultado.classList.remove("perdiste");
        modal_container.classList.remove("show");
      });
      ganopc = true;
      ganoplayer = "perdiste";
      reset();
    }
  } else if (opcionUsuario == tijera) {
    if (opcionMaquina == tijera) {
      setTimeout(() => {
        modal_container.classList.add("show");
        resultado.innerHTML = "Empate";
        resultado.classList.add("empate");
      }, 1300);
      cerrar.addEventListener("click", () => {
        modal_container.classList.remove("show");
        resultado.classList.remove("empate");
      });
      empate = true;
      ganoplayer = false;
      ganopc = false;
      reset();
    } else if (opcionMaquina == papel) {
      setTimeout(() => {
        modal_container.classList.add("show");
        resultado.innerHTML = "Ganaste";
        resultado.classList.add("ganaste");
      }, 1300);
      cerrar.addEventListener("click", () => {
        modal_container.classList.remove("show");
        resultado.classList.remove("ganaste");
      });
      ganoplayer = true;
      ganopc = "perdiste";
      reset();
    } else if (opcionMaquina == piedra) {
      setTimeout(() => {
        modal_container.classList.add("show");
        resultado.innerHTML = "Perdiste";
        resultado.classList.add("perdiste");
      }, 1300);
      cerrar.addEventListener("click", () => {
        modal_container.classList.remove("show");
        resultado.classList.remove("perdiste");
      });
      ganopc = true;
      ganoplayer = "perdiste";
      reset();
    }
  } else {
    // alert("¿Quieres jugar otra vez?")
  }
};

const puntos = (opcionMaquina) => {
  const puntosplayer = document.getElementById("jugador");
  const puntospc = document.getElementById("computadora");
  const historialplayer = document.getElementById("historial");
  const historialpc = document.getElementById("historialpc");

  if (ganoplayer == "perdiste") {
    historialplayer.innerHTML += `<li class="perdisteH">Perdiste ${opciones[opcionUsuario]}</li>`;
  } else if (ganoplayer == true) {
    marcadorPlayer++;
    puntosplayer.innerHTML = marcadorPlayer;
    historialplayer.innerHTML += `<li class="ganasteH">Ganaste ${opciones[opcionUsuario]}</li>`;
    ganoplayer = false;
  }
  if (ganopc == "perdiste") {
    historialpc.innerHTML += `<li class="perdisteH">Perdiste ${opciones[opcionMaquina]}</li>`;
  } else if (ganopc == true) {
    marcadorPc++;
    puntospc.innerHTML = marcadorPc;
    historialpc.innerHTML += `<li class="ganasteH">Ganaste ${opciones[opcionMaquina]}</li>`;
    ganopc = false;
  }
  if (empate == true) {
    historialplayer.innerHTML += `<li class="empateH">Empate ${opciones[opcionUsuario]}</li>`;
    historialpc.innerHTML += `<li class="empateH">Empate ${opciones[opcionMaquina]}</li>`;
    empate = false;
  }
};
