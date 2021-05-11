
let carrito = [];
const articulosDisponibles = [];
const contenedorProductos = document.getElementById('productosCard');
const product = articulosDisponibles[0];
const selectFiltro = document.getElementById('filtros');
const contenedorCarrito = document.getElementById('carrito-contenedor');
const precioTotalCarrito = document.getElementById('precioTotal');
let carritoEnStorage = JSON.parse( localStorage.getItem('carrito') );



function mostrarArticulos(array){

    contenedorProductos.innerHTML = ''

    array.forEach( (articulo) => {
     const div = document.createElement('div')
     div.classList.add('product')
     div.innerHTML = `
     <div class="card">
       <a href="#"><img class="card-img-top" src="${articulo.image}" alt=""></a>
       <div class="card-body">
         <h4 class="card-title">
           <a href="#">${articulo.nombre}</a>
         </h4>
         <h5>$${articulo.precio}</h5>
         <p class="card-text">${articulo.descrip}</p>
       </div>
       <div class="card-footer">
       <button onclick=agregarAlCarrito(${articulo.id})>Agregar al Carrito</button>
         <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
       </div>
     </div>`
   
     contenedorProductos.appendChild(div)
     
    })
}


 

function filtrar(){
  let valorFiltro = selectFiltro.value 

  if(valorFiltro == 'all'){
    mostrarArticulos(stockActual)
  } else{
    mostrarArticulos(stockActual.filter( ele => ele.articulo === selectFiltro.value ))
  }
  
}

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
    const div = document.createElement('div')

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





selectFiltro.addEventListener('change', filtrar)















