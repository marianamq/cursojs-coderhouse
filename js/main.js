
let carrito = [];
const articulosDisponibles = [];
const contenedorProductos = document.getElementById('productosCard');
const product = articulosDisponibles[0];
const contenedorCarrito = document.getElementById('carrito-contenedor');
const precioTotalCarrito = document.getElementById('precioTotal');
let carritoEnStorage = JSON.parse( localStorage.getItem('carrito') );
const div = document.createElement('div')
const URLJSON = "/stock.json"

function traerCards(){
  $.get(URLJSON, 
  function(respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      for (const dato of misDatos){
        const div = document.createElement('div')
        div.classList.add('product')
        div.innerHTML = `
        <div class="col-md-3 card">
          <a href="#"><img class="card-img-top" src="${dato.image}" alt=""></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#">${dato.nombre}</a>
            </h4>
            <h5>$${dato.precio}</h5>
            <p class="card-text">${dato.descrip}</p>
          </div>
          <div class="card-footer">
          <button onclick=agregarAlCarrito(${dato.id})>Agregar al Carrito</button>
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>`
      
        contenedorProductos.appendChild(div)
        
      }
     
    }
    
  })
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


$('#filtros').change(function(){
  let valoresFiltro = $('#filtros').val()

  if (valoresFiltro == 'all'){
   traerCards()
  }else{
    const result = traerCards().filter( ele =>{
     ele.articulo.toString().toLowerCase() == valoresFiltro.toString().toLowerCase() 
    })
    return traerCards(result)
  }
})



$('#titulo').css("color","#b9b546")
.fadeOut(1000)
.fadeIn(2000)






