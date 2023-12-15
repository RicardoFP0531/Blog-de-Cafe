//EVENTOS CON EL TECLADO

const datosGuardar = {
  nombre: "",
  email: "",
  mensaje: "",
};

const nombreForm = document.querySelector("#nombre");
const emailForm = document.querySelector("#email");
const mensajeForm = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombreForm.addEventListener("input", leerTexto);

emailForm.addEventListener("input", leerTexto);

mensajeForm.addEventListener("input", leerTexto);

//AGREGANDO EL EVENTO DEL SUBMIT

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  //VALIDACION DEL FORMULARIO
  const { nombre, email, mensaje } = datosGuardar;

  if (nombre === "" || email === "" || mensaje === "") {
    mostrarAlerta("Asegurese que ningun campo vaya vacio", "err");

    return; //corta la ejecucion del codigo
  }

  //ENVIO DEL FORMULARIO

  mostrarAlerta("Formulario enviado");
});

//FUNCION QUE LEE EL TEXTO DE LOS INPUTS
function leerTexto(e) {
  datosGuardar[e.target.id] = e.target.value;
  console.log(datosGuardar);
}

//REFACTORIZANDO LAS FUNCIONES DE ABAJO PARA TENER UNA SOLA
function mostrarAlerta(mensaje, err = null) {
  const alerta = document.createElement("P");
  alerta.textContent = mensaje;

  if (err) {
    alerta.classList.add("error");
  } else {
    alerta.classList.add("correcto");
  }

  formulario.appendChild(alerta);

  //desaparecer despues de 5 seg
  setTimeout(() => {
    alerta.remove();
  }, 3000);
}
