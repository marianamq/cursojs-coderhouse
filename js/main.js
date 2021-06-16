const cardArticulos = document.querySelector('#productosCard');
let carrito = [];
const articulosEnCarrito = document.querySelector('#articulosCarrito');
const precioTotalCarrito = document.querySelector('#precioTotal');
let contadorCarrito = document.querySelector('#finalizarCompra')
let carritoEnStorage = JSON.parse( localStorage.getItem('carrito') ); 



mostrarCards(stockActual)

function mostrarCards(array) {

  cardArticulos.innerHTML= '' 

  array.forEach( (articulo) => {
  
    const div = document.createElement('div')
    div.classList.add('col-lg-3', 'col-sm-4', 'my-3', 'h-150')
    
    div.innerHTML = `
    <div class="card border-light shadow-sm rounded-lg h-100">
      <a href="#"><img class="card-img-top" src="${articulo.image}" alt=""></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">${articulo.nombre}</a>
        </h4>
        <h5>$${articulo.precio}</h5>
        <p class="card-text">${articulo.descrip}</p>
      </div>
      <div class="btn-carrito">
      <button onclick=agregarAlCarrito(${articulo.id}) class="btn shadow-sm mt-auto">Agregar al carrito</button>
      </div>
    </div>`;
     
    cardArticulos.appendChild(div)
  });
}


function agregarAlCarrito(id){
  let articuloComprado = stockActual.find(ele => ele.id == id)
  carrito.push(articuloComprado)
  console.log(carrito)


  localStorage.setItem("carrito", JSON.stringify(carrito))
  articulosComprados()
}

if (carritoEnStorage) {
  carrito = carritoEnStorage;
  articulosComprados()
}

function articulosComprados(){
  articulosEnCarrito.innerHTML = ''
  carrito.forEach( (articulo) => {

    const div = document.createElement('div')
    div.classList.add('articuloComprado')
    div.innerHTML = `
      <div class="descripArticulo">
        <img src="${articulo.image}" alt="">
        <p>${articulo.nombre}</p>
      </div>
      <p>$${articulo.precio},00</p>
      <button onclick=eliminarArticulo(${articulo.id}) class="btn-eliminar">
      <img class="card-img-top" src="/img/trash.svg" alt="">
      </button>`

    articulosEnCarrito.appendChild(div)
    contadorCarrito.innerText = carrito.length
    precioTotalCarrito.innerText = carrito.reduce((acumulador, articulo) => acumulador += articulo.precio, 0)
  });
};

function eliminarArticulo(id){ 
  let articuloPorEliminar = carrito.find(ele => ele.id == id)
  let indice = carrito.indexOf(articuloPorEliminar)
  
  carrito.splice(indice, carrito.length)
  localStorage.clear() 
  articulosComprados()
}


async function generarLinkCobro() {
  const productosLinkCobro = carrito.map( el => ({
      
    title: el.nombre,
    description: el.descrip,
    picture_url: "",
    category_id: el.id,
    quantity: Number(1),
    currency_id: "ARS",
    unit_price: Number(el.precio),
  }))
  const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
    method: "POST",
    headers: {
      Authorization: 
      "Bearer TEST-2151292912660416-061519-0bba58aad02b24c32cd058c71312e868-671300761"
    },
    body: JSON.stringify({
      items: productosLinkCobro,
    }),
  });
  const data = await response.json()
  window.open(data.init_point, 'blank');
  console.log (JSON.stringify(productosLinkCobro))
}











$('#titulo').css("color","#ff9933")
.fadeOut(1000)
.fadeIn(2000)

