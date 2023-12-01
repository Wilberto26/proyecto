window.onload = function () {
  localStorage.clear();
};

var contador = 0;
const usuario = new Usuario();

const formulario = document.getElementById("form-registro");
const inputs = document.querySelectorAll("#form-registro input");

const expresiones = {
  documento: /^\d{7,13}$/,
  names: /^[a-zA-ZÀ-ÿ\s]{4,50}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefonou: /^\d{10,13}$/,
  direccion: /^[a-zA-Z0-9#-\s]{4,30}$/,
  username: /^[a-zA-Z0-9\_\-]{4,16}$/,
  pwd1: /^.{8,30}$/,
};

const campos = {
  documento: false,
  names: false,
  email: false,
  telefonou: false,
  direccion: false,
  username: false,
  pwd1: false,
};

const existe = {
  documento: false,
  email: false,
  username: false,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "documento":
      validarCampo(expresiones.documento, e.target, "documento");
      validarExistencia("documento");
      break;
    case "names":
      validarCampo(expresiones.names, e.target, "names");
      break;
    case "email":
      validarCampo(expresiones.email, e.target, "email");
      validarExistencia("email");
      break;
    case "telefonou":
      validarCampo(expresiones.telefonou, e.target, "telefonou");
      break;
    case "direccion":
      validarCampo(expresiones.direccion, e.target, "direccion");
      break;
    case "username":
      validarCampo(expresiones.username, e.target, "username");
      validarExistencia("username");
      break;
    case "pwd1":
      validarCampo(expresiones.pwd1, e.target, "pwd1");
      validarPassword2();
      break;
    case "pwd2":
      validarPassword2();
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`m-${campo}`)
      .classList.remove("input-error-activo");
    campos[campo] = true;
  } else {
    document.getElementById(`m-${campo}`).classList.add("input-error-activo");
    campos[campo] = false;
  }
};

const validarExistencia = (opcion) => {
  if (usuario.buscar(opcion)) {
    document
      .getElementById(`m-e-${opcion}`)
      .classList.add("input-error-activo");
    existe[opcion] = false;
  } else {
    document
      .getElementById(`m-e-${opcion}`)
      .classList.remove("input-error-activo");
    existe[opcion] = true;
  }
};

const validarPassword2 = () => {
  const inputPassword1 = document.getElementById("pwd1");
  const inputPassword2 = document.getElementById("pwd2");

  if (inputPassword1.value !== inputPassword2.value) {
    document.getElementById(`m-pwd2`).classList.add("input-error-activo");
    campos["pwd1"] = false;
  } else {
    document.getElementById(`m-pwd2`).classList.remove("input-error-activo");
    campos["pwd1"] = true;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

function cancelar() {
  document.getElementById("documento").value = "";
  document.getElementById("names").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefonou").value = "";
  document.getElementById("direccion").value = "";
  document.getElementById("username").value = "";
  document.getElementById("pwd1").value = "";
  document.getElementById("pwd2").value = "";
  document.getElementById("btn-guardar").innerText = "Guardar";
  document.getElementById("btn-cancelar").classList.add("btn-cancelar-activo");
  document
    .getElementById("error-mensaje")
    .classList.remove("formulario-mensaje-activo");
  usuario.act = false;
  usuario.idAct = 0;
}

function eliminarUsuario(id) {
  usuario.eliminarUsuario(id);
}

function actualizarUsuario(id) {
  usuario.actualizarUsuario(id);
  document.getElementById("btn-guardar").innerText = "Actualizar";
  document
    .getElementById("btn-cancelar")
    .classList.remove("btn-cancelar-activo");
  encontro = true;
}

function agregarUsuario() {
  var encontro = false;

  if (contador >= 0) {
    if (
      campos.documento &&
      campos.names &&
      campos.email &&
      campos.telefonou &&
      campos.direccion &&
      campos.username &&
      campos.pwd1 &&
      existe.documento &&
      existe.email &&
      existe.username
    ) {
      if (usuario.act == true) {
        actualizarUsuario(usuario.idAct);
        document.getElementById("btn-guardar").innerText = "Guardar";
        document
          .getElementById("btn-cancelar")
          .classList.add("btn-cancelar-activo");
        usuario.limpiarRegistro();
      } else {
        contador += 1;
        usuario.agregarUsuario(contador);
      }
      document
        .getElementById("error-mensaje")
        .classList.remove("formulario-mensaje-activo");
      document
        .getElementById("mensaje-exito")
        .classList.add("formulario-mensaje-exito-activo");
      setTimeout(() => {
        document
          .getElementById("mensaje-exito")
          .classList.remove("formulario-mensaje-exito-activo");
      }, 5000);
    } else {
      document
        .getElementById("error-mensaje")
        .classList.add("formulario-mensaje-activo");
    }
  }
}
