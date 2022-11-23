let order = JSON.parse(localStorage.getItem("order")) || [];

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM está cargado");

let borrarLista = document.querySelector ("#linStartOver")

borrarLista.addEventListener ('click', (evt)=>{
    evt.preventDefault()
    order= [];
    subiendoCarrito ()

})


  const mochila = document.querySelectorAll(".mochilas");

  for (let mochilas of mochila) {
    mochilas.addEventListener("click", (evento) => {
      //console.log (evento.currentTarget.dataset.title)
      //console.log (evento.currentTarget.dataset.price)
      let title = evento.currentTarget.dataset.title
      let price = evento.currentTarget.dataset.price

      order.push({title,price})
      subiendoCarrito()
      localSto ();
    });
  }
});


function subiendoCarrito(){
    let html = "";
    for (let mochilas of order){
        html += `
        <li>${mochilas.title} <strong>  ${mochilas.price} </strong></li>
        `
    }

    let ul= document.querySelector ("#carrito ul")
    ul.innerHTML = html

}

const localSto = () =>{
 localStorage.setItem ("mochilas", JSON.stringify(order));
}



