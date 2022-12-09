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



const fetchData = async () => {
  try {
    const res = await fetch('productos.json');
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

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});


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


const pintaCarrito = () => {
  containerCarrito.innerHTML = "";
  containerCarrito.style.display = "flex";
  const pagCarHeader = document.createElement("div");
  pagCarHeader.className = "headerPag";
  pagCarHeader.innerHTML = `<h1 class= "headerPagTitulo">Cesta</h1>`;
  containerCarrito.append(pagCarHeader);

  const pagCarBoton = document.createElement("h2");
  pagCarBoton.innerText = "x";
  pagCarBoton.className = "botonPag";
  pagCarHeader.append(pagCarBoton);

  pagCarBoton.addEventListener("click", () => {
    containerCarrito.style.display = "none";
  });

  carrito.forEach((producto) => {
    let contenidoCar = document.createElement("div");
    contenidoCar.className = "carritoContenidoPag";
    contenidoCar.innerHTML = `
  <img src= "${producto.img}">
  <h3>${producto.nombre}</h3>
  <p>${producto.precio} $</p>
  <p> Cantidad: ${producto.cantidad} </p>
  <p> Total: ${producto.cantidad * producto.precio} </p>`;

    containerCarrito.append(contenidoCar);

    let eliminando = document.createElement("span");
    eliminando.innerText = "X";
    eliminando.className = "borrarProducto";
    contenidoCar.append(eliminando);
    eliminando.addEventListener("click", eliminarProducto);
  });

  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const compraTotal = document.createElement("div");
  compraTotal.className = "totalPag";
  compraTotal.innerHTML = `Tienes que pagar: ${total} `;
  containerCarrito.append(compraTotal);
};

agregandoCar.addEventListener("click", pintaCarrito);

const eliminarProducto = () => {
  const foundId = carrito.find((element) => element.id);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });

  contenedorCirculo();
  salvandoLocal ();
  pintaCarrito();
};

const contenedorCirculo = () => {
  circuloCarrito.style.display = "block";
  const carritoLe= carrito.length;
  localStorage.setItem ("carritoLe", JSON.stringify(carritoLe))
  
  circuloCarrito.innerText = JSON.parse(localStorage.getItem("carritoLe"));
};

contenedorCirculo ();

