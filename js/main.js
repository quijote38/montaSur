const elHtml = document.getElementById("javascriptHtml");
const agregandoCar = document.getElementById("imgCar");
const containerCarrito = document.getElementById("container-carrito"
);

let carrito = [];

productos.forEach((producto) => {
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
    carrito.push({
      img: producto.img,
      nombre: producto.nombre,
      precio: producto.precio,
    });
    console.log(carrito);
  });
});




agregandoCar.addEventListener("click", ()=> {
  const pagCarHeader = document.createElement("div");
  pagCarHeader.className = "headerPag";
  pagCarHeader.innerHTML = `<h1 class= "headerPagTitulo">Cesta</h1>`;
  containerCarrito.append(pagCarHeader);

  const pagCarBoton = document.createElement("h2");
  pagCarBoton.innerText = "X";
  pagCarBoton.className = "botonPag";
  pagCarHeader.append(pagCarBoton);

  carrito.forEach((producto) => {
    let contenidoCar = document.createElement("div");
    contenidoCar.className = "carritoContenidoPag";
    contenidoCar.innerHTML = `
<img src= "${producto.img}">
<h3>${producto.nombre}</h3>
<p>${producto.precio} $</p>`;

containerCarrito.append(contenidoCar);
  });

const total= carrito.reduce ((acc, el) => acc + el.precio, 0);

const compraTotal = document.createElement ("div")
compraTotal.className = "totalPag"
compraTotal.innerHTML = `tiene que pagar: ${total} `
containerCarrito.append(compraTotal);
});

/* https://www.youtube.com/watch?v=qSkXVDZwQ2I  47:29*/
