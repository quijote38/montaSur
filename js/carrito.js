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
  <p> Total: ${producto.cantidad * producto.precio} </p>`
  ;

    containerCarrito.append(contenidoCar);

    let eliminando = document.createElement("span");
    eliminando.innerText = "X";
    eliminando.className = "borrarProducto";
    contenidoCar.append(eliminando);
    eliminando.addEventListener ("click", eliminarProducto);

  });

  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const compraTotal = document.createElement("div");
  compraTotal.className = "totalPag";
  compraTotal.innerHTML = `Tienes que pagar: ${total} `;
  containerCarrito.append(compraTotal);
};

agregandoCar.addEventListener("click", pintaCarrito);

const eliminarProducto = () => {
    const foundId = carrito.find ((element) => element.id);

    carrito = carrito.filter ((carritoId) =>{
        return carritoId !== foundId;
    });

    pintaCarrito();
};


// const circuloCarrito = () => {
//     circuloCantidad.style.display= "block";
//     circuloCantidad.innerText = carrito.length;
    
//   } 
  


//agregandoCar.addEventListener("click", ()=> {    })
