// function add (product, price){
//     console.log (product, price);

// }




function ProductoTienda(tipo, nombre, precio, disponible, informacion){
    this.tipo= tipo,
    this.nombre= nombre,
    this.precio= precio,
    this.disponible= disponible,
    this.informacion= informacion
    this.precioFinal= function(){
        return this.precio * 1.21
    }
}

const mochila1 = new ProductoTienda ("mochila", "Doite1", 450, true, ['peso= 3kg', 'medida=  90 lts', 'tela= impermeble'] );
const mochila2 = new ProductoTienda ("mochila", "The North Face1", 200, true, ['peso= 1kg', 'medida=  30 lts', 'tela= impermeble'] );
const mochila3 = new ProductoTienda ("mochila", "The North Face2", 350, true, ['peso= 3kg', 'medida=  90 lts', 'tela= impermeble'] );
const mochila4 = new ProductoTienda ("mochila", "Coleman1", 280, true, ['peso= 1kg', 'medida=  30 lts', 'tela= impermeble'] );
const mochila5 = new ProductoTienda ("mochila", "Coleman2", 380, true, ['peso= 3kg', 'medida=  90 lts', 'tela= impermeble'] );
const mochila6 = new ProductoTienda ("mochila", "Doite2", 500, true, ['peso= 3kg', 'medida=  90 lts', 'tela= impermeble'] );

//console.log (mochila1, mochila2, mochila3, mochila4, mochila5, mochila6)
//console.log (mochila1.precioFinal())


// let agregarCarrito= prompt ("escriba el nombre del producto")
// let productosCarrito= ProductoTienda


// if (agregarCarrito in productosCarrito) {
//     console.log ("está en el carrito")
// }else{
//     console.log ("El producto no está en el carrito")
// }

//01:32:22 CLASE PRODUCTOS

const productoMochi=  [
   mochila1,
   mochila2,
    mochila3,
    mochila4,
    mochila5,
    mochila6,
]
//console.log (productoMochi)
let carrito = []

let bienvenida = prompt("Hola bienvenidos Montasur, ¿desea recorrer nuestros productos?")

while(bienvenida != "si" && bienvenida != "no"){
    alert ("No nos quedó claro tu respuesta. ¿Deseas comprar nuestros productos?")
    bienvenida = prompt ("¿si o no?")
}

if (bienvenida == "si"){
    alert ("estos son nuestros productos:")
    console.log (productoMochi)
}else if  (bienvenida == "no"){
    alert ("Nos vemos en la próxima")
}





















//CLASE DE FUNCIONES 01:18:51

// alert("Bienvenido a su precio final");

// let producto= function (){
// escriba
// }


// preciosFinales()

// function preciosFinales(producto) {
//     if (producto) {
//       let escriba = prompt(
//         "escriba el nombre del producto y sabrá el precio final con impuesto incluido"
//       );
//       validarProducto(escriba);
//     } else {
//       alert("Hasta pronto");
//       salir();
//     }
//   }
// function salir() {
//     alert("Hasta la próxima");
   
//   }
  
  