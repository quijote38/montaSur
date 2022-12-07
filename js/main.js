const elHtml = document.getElementById("javascriptHtml");
const agregandoCar = document.getElementById("imgCar");
const containerCarrito = document.getElementById("container-carrito");
const circuloCantidad = document.getElementById ("circuloCantidad");

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
    const repeat = carrito.some ((repeatProducto)=> repeatProducto.id === producto.id);
      
    if (repeat){
      carrito.map ((prod) => {
       if  (prod.id === producto.id){
        prod.cantidad ++; 
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
    console.log(carrito);
    // circuloCarrito();
  });
});



