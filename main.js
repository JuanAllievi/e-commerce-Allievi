function Cliente(nombre, email, telefono, direccion) {
  this.nombre = nombre;
  this.email = email;
  this.telefono = telefono;
  this.direccion = direccion;
}

function Articulo(descripcion, precio) {
  this.descripcion = descripcion;
  this.precio = precio;
}
function esMayorDeEdad() {
  let edad = localStorage.getItem("edad");
  if (edad == null) {
    edad = prompt("ingrese su edad");
  }
  localStorage.setItem("edad", edad);
  if (edad < 18) {
    alert("eres menor de edad, vuelve cuando tengas 18");
    return false;
  } else {
    alert(
      "Bienvenido!!, ingrese datos en el formulario y en breve tomaremos sus datos"
    );
    return true;
  }
}
function cargarCliente() {
  let nombre = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("phone").value;
  let direccion = document.getElementById("adress").value;
  let cliente1 = new Cliente(nombre, email, telefono, direccion);
  console.log(cliente1);
  mostrarCliente(cliente1);
}
function mostrarCliente(cliente) {
  let formulario = document.getElementById("customer");
  formulario.parentNode.removeChild(formulario);
  let nuevoContenido = document.createElement("div");
  nuevoContenido.innerHTML =
    "Hola " +
    "" +
    "" +
    cliente.nombre +
    "!!" +
    " sus datos se han registrado correctamente, cuando este disponible le enviaremos su producto a " +
    "" +
    "" +
    cliente.direccion +
    "" +
    "" +
    ".Toda la informacion la enviaremos a el siguiente mail : " +
    cliente.email;
  nuevoContenido.className = "info-cliente";
  document.body.appendChild(nuevoContenido);
}

if (!esMayorDeEdad()) {
  let formulario = document.getElementById("customer");
  formulario.parentNode.removeChild(formulario);
}
