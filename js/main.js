let acumuladorCardsHome = ``;
const articulosDisponibles = [];
let totalCarrito = 0;
let porcentajeDeDescuento = 15;
let resultadoTotal = 0;
let porcentajeIVA = 1.21;
const contenedorProductos = document.getElementById('productosCard')
const product = articulosDisponibles[0]
const selectFiltro = document.getElementById('filtros')
const carrito = [0]

class Articulo {
  constructor (stock, nombre, precio, resenia, image) {
    this.stock = stock
    this.nombre = nombre
    this.precio = precio
    this.resenia = resenia
    this.image = image
  }

  validarStock(){
    if(this.stock > 0){
        return true;
    } else {
        return false;
    }
  }

  agregarAlCarrito(){
    let tieneStock = validarStock(this.stock);
    if (tieneStock){
        totalCarrito = totalCarrito + this.precio;
        console.log(`Se agregó un producto de $${this.precio} al carrito.`);
    } else{
        alert("Lo siento, no contamos con stock en estos momentos");
    }
    btn.addEventListener('click', this.agregarAlCarrito, true)
  }


  finalizarCompra(){
    agregarIVA (totalCarrito, porcentajeIVA);
    clienteNuevo();
    totalDeDescuento(totalCarrito, porcentajeDeDescuento);
  }

  clienteNuevo(){
    let primeraCompra = prompt ("Si sos cliente nuevo accedé al 15% OFF en tu primera compra con el siguiente código: PRIMERACOMPRA.")
    if (primeraCompra === "PRIMERACOMPRA"){
        alert('¡Yay! Bienvenid@ a 2ND CLOSET')
        return true;
    } else{
        return false
    } 
  }

  totalDeDescuento(totalCarrito, porcentajeDeDescuento){
    resultadoPorcentaje = totalCarrito * porcentajeDeDescuento / 100;
    resultadoTotal = totalCarrito - resultadoPorcentaje;
    console.log(`¡Descuento agregado! Tu total ahora es de ${resultadoTotal}`);
  }

  agregarIVA (totalCarrito, porcentajeIVA){
    iva = totalCarrito * porcentajeIVA;
    alert(`El total de tu compra + IVA es de ${iva}`);
  }
} 



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
  console.log(carrito)
}















