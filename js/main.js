const elHtml = document.getElementById("javascriptHtml");
const agregandoCar = document.getElementById("imgCar");
const containerCarrito = document.getElementById("container-carrito");
const circuloCarrito = document.getElementById("circuloCarrito");

swal({
  title: "Bienvenido",
  text: "Estás por comprar las mejores marcas para acampar",
  button: "¡Vamos!"
})

let carrito = JSON.parse(localStorage.getItem ("montaSur")) || [];

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const fetchData = async () => {
  try {
    const res = await fetch("/productos.json");
    const data = await res.json();
    productos(data);
  } catch (error) {
    swal({
      title: "¡Oh no!!!!",
      text: "A ocurrido un error",
      button: "¡Ok!",
    });
  }
};

const productos = (data) => {
  data.forEach((producto) => {
    let contenido = document.createElement("div");
    contenido.className = "productoContainer mochilas";
    contenido.innerHTML = `
            <h3> ${producto.nombre} </h3>
            <img src= " ${producto.img}">
            <p> ${producto.precio}</p>
    `;
    elHtml.append(contenido);

    let agregar = document.createElement("button");
    agregar.innerText = "agregar";
    agregar.className = "efecBoton";

    contenido.append(agregar);

    agregar.addEventListener("click", () => {
      const repeat = carrito.some(
        (repeatProducto) => repeatProducto.id === producto.id
      );

      if (repeat) {
        carrito.map((prod) => {
          if (prod.id === producto.id) {
            prod.cantidad++;
          }
        });
      } else {
        carrito.push({
          id: producto.id,
          img: producto.img,
          nombre: producto.nombre,
          precio: producto.precio,
          cantidad: producto.cantidad,
        });
      }
      contenedorCirculo();
      salvandoLocal();
    });
  });
};

const salvandoLocal = () =>{
  localStorage.setItem("montaSur", JSON.stringify (carrito))
}


