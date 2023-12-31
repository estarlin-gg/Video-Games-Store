const botones = document.querySelectorAll(".btn-primary");
const botonPago = document.querySelectorAll(".btn-success");
const ventana = document.querySelector(".window");
const windowPago = document.querySelector(".window-pago");
const cerrar = document.querySelector(".cerrar");
const cerrarPago = document.querySelector(".cerrar-pago");
const inputs = document.querySelectorAll(".inputs");
const header = document.querySelector(".header");
const clean = document.querySelector(".limpiar");
const btnMenu = document.querySelector(".menu-btn");
const Menu = document.querySelector(".menu");
const cart = document.querySelector(".cart");
const cartContainer = document.querySelector(".cart-container");
const btnCart = document.querySelector("#btnCart");
const tbody = document.querySelector(".tbody");
const cerrarCart = document.querySelector(".cerrarCart");
const carritoInicial = [];
console.log(btnCart);
//scroll menu
window.addEventListener("scroll", () => {
  header.classList.toggle("scrollOn", window.scrollY > 0);
});

botonPago.forEach((btnPago) => {
  btnPago.addEventListener("click", () => {
    windowPago.style.display = "flex";
  });
});

// cerrar
cerrar.addEventListener("click", () => {
  ventana.style.display = "none";
  verificacion.style.display = "none";
});

cerrarPago.addEventListener("click", () => {
  windowPago.style.display = "none";
  verificacion.style.display = "none";
});

// inputs
inputs.forEach((inp) => {
  inp.addEventListener("blur", validar);
});

// menu
btnMenu.addEventListener("click", () => {
  Menu.classList.toggle("menu-visible");
  header.style.backgroundColor = "#004AAD";
});

function validar() {
  inputs.forEach((valor) => {
    if (valor.value.trim() === "") {
      valor.style.borderColor = "red";
      console.log("salir");
    } else {
      return;
    }
  });
}

function crearElement() {
  let;
}

// validar tarjeta de credito
///////////////////////////////////////////////

let formulario = document.querySelector(".pago");
let inpcard = document.querySelector("#code");
let label = document.querySelector(".labels");
let enviarpago = document.querySelector(".pagar");
let verificacion = document.querySelector(".verificacion");
let cvv = document.querySelector("#cvv");

enviarpago.addEventListener("click", () => {
  verificacion.style.display = "flex";
});

// formulario.addEventListener("submit",enviarForm )
inpcard.addEventListener("blur", validarPago);
cvv.addEventListener("blur", validarCVV);

function validarPago(e) {
  if (e.target.value.trim() === "") {
    label.style.color = "red";
    label.textContent = "Campo vacio";
    inpcard.style.borderColor = "red";
    return;
  }
  if (!validarCodigo(e.target.value)) {
    label.textContent = "codigo no valido";
    label.style.color = "red";
    return;
  }
  label.textContent = "Codigo valido";
  label.style.color = "#A2DC2D";
  inpcard.style.borderColor = "#A2DC2D";
}
function validarCodigo(codigo) {
  // let regex =  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9][0-9])[0-9]{12})$/;
  let regex = /^4[0-9]{12}(?:[0-9]{3})?$/;
  let resultado = regex.test(codigo);
  return resultado;
}

/////// validacion del cvv
function validarCVV(e) {
  if (e.target.value.trim() === "") {
    cvv.style.borderColor = "red";
    // cvv.textContent ="Campo obligatorio";
    return;
  }
  if (!validarnumber(e.target.value)) {
    cvv.style.borderColor = "red";
    return;
  }
  cvv.style.borderColor = "green";
}

function validarnumber(codigo) {
  let regex = /^[0-9]{3,4}$/;
  let resultado = regex.test(codigo);
  return resultado;
}

// /^[0-9]{3,4}$/

//carrito de compras

btnCart.addEventListener("click", () => {
  cartContainer.style.display="flex"
  console.log("yupi");
});

cerrarCart.addEventListener("click", () => {
  cartContainer.style.display="none"
})

botones.forEach((btn) => btn.addEventListener("click", Add));

function Add(e) {
  // e.stopPropagation()
  const parent = e.target.parentElement.parentElement.parentElement;
  recolectar(parent);
  // console.log(parent)
}

function recolectar(e) {
  // console.log("funn")
  let cartData = {
    image: e.querySelector(".img-card").src,
    titulo: e.querySelector(".title").textContent,
    precio: e.querySelector(".price").textContent,
  };
  console.log(cartData);
  Agregar(cartData);
}

function Agregar(e) {
  // let btnDelete = document.createElement("button");
  // btnDelete.classList("btn btn-danger");
  // btnDelete.textContent = "eliminar";
  const { image, titulo, precio } = e;

  let tabla = document.createElement("tr");
  tabla.innerHTML = `<tr>
 
 <td> <img src="${image}" class="cart-img" /> </td>
 <td>${titulo}</td>
 <td>${precio}</td>
</tr>`;

  tbody.appendChild(tabla);
}
