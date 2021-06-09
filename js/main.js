
let carrito = [];
const articulosDisponibles = [];
const contenedorProductos = document.getElementById('productosCard');
const product = articulosDisponibles[0];
const contenedorCarrito = document.getElementById('carrito-contenedor');
const precioTotalCarrito = document.getElementById('precioTotal');

let carritoEnStorage = JSON.parse( localStorage.getItem('carrito') );




function agregarAlCarrito(id){
  let articuloElegido = stockActual.find(ele => ele.id == id)
  carrito.push(articuloElegido)

  actualizarCarrito()
  localStorage.setItem('carrito', JSON.stringify(carrito));
  console.log(localStorage.carrito)
}

if (carritoEnStorage){
  let btnCompraLleno = document.getElementsByClassName('modal-active-dos');
  if(btnCompraLleno){
   carrito = carritoEnStorage;
  } else{
    localStorage.removeItem('carrito');
  }
}


function eliminarArticulo(id){
  let productoEliminado = carrito.find(ele => ele.id == id)
  let indice = carrito.indexOf(productoEliminado)

  carrito.splice(indice, 1)
  actualizarCarrito()
}

function actualizarCarrito(){
  contenedorCarrito.innerHTML = ''

  carrito.forEach( (art) => {
    

    div.classList.add('productoEnCarrito')
    div.innerHTML = `
    <p>${art.nombre}</p>
    <p>Precio: $${art.precio}</p>
    <button onclick=eliminarArticulo(${art.id}) class="boton-eliminar">eliminar</button>
    `
    contenedorCarrito.appendChild(div)
    precioTotalCarrito.innerText = carrito.reduce((acc, art) => acc += art.precio, 0)
  })

}


//selectFiltro.addEventListener('change', filtrar)

// console.log('stockActual', stockActual);
// $('#filtros').change(function(){
//   let valoresFiltro = $('#filtros').val()

//   if (valoresFiltro == 'all'){
//    mostrarArticulos(stockActual)
//   }else{
//     const result = stockActual.filter( ele =>{
//      return ele.articulo.toString().toLowerCase() == valoresFiltro.toString().toLowerCase() 
//     })
//     return mostrarArticulos()
//   }
// })


$('#titulo').css("color","#ff9933")
.fadeOut(1000)
.fadeIn(2000)

