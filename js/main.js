let precios = [400, 800, 1300, 350, 600, 1000];
let nombreProducto = ['Remeras', 'Buzos', 'Jeans', 'Polleras', 'Pants', 'Abrigos'];
let acumuladorCardsHome = ``;
let totalCarrito = 0;
let stock = [3, 4, 1, 2, 0, 3];
let porcentajeDeDescuento = 15;
let resultadoTotal = 0;
let porcentajeIVA = 1.21;




function agregarAlCarrito(precios, stock){
    let tieneStock = validarStock(stock);
    if (tieneStock){
        totalCarrito = totalCarrito + precios;
        console.log(`Se agregó un producto de $${precios} al carrito.`);
    } else{
        alert("Lo siento, no contamos con stock en estos momentos");
    }
}

function validarStock(stock){
    if(stock > 0){
        return true;
    } else {
        return false;
    }
}


for (let i = 0; i < precios.length; i++) {
    acumuladorCardsHome += `<div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">${nombreProducto[i]}</a>
        </h4>
        <h5>$${precios[i]}</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
      </div>
      <div class="card-footer">
        <button onclick="agregarAlCarrito(${precios[i]}, ${stock[i]})">Agregar al carrito</button>
        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
    </div>
  </div>`;
}

document.getElementById("productosCard").innerHTML = acumuladorCardsHome;

function finalizarCompra(){
    agregarIVA (totalCarrito, porcentajeIVA);
    clienteNuevo();
    totalDeDescuento(totalCarrito, porcentajeDeDescuento);
}

function clienteNuevo(){
    let primeraCompra = prompt ("Si sos cliente nuevo accedé al 15% OFF en tu primera compra con el siguiente código: PRIMERACOMPRA.")
    if (primeraCompra === "PRIMERACOMPRA"){
        alert('¡Yay! Bienvenid@ a 2ND CLOSET')
        return true;
    } else{
        return false
    } 
}

function totalDeDescuento(totalCarrito, porcentajeDeDescuento){
    resultadoPorcentaje = totalCarrito * porcentajeDeDescuento / 100;
    resultadoTotal = totalCarrito - resultadoPorcentaje;
    console.log(`¡Descuento agregado! Tu total ahora es de ${resultadoTotal}`);
    
}

function agregarIVA (totalCarrito, porcentajeIVA){
    iva = totalCarrito * porcentajeIVA;
    alert(`El total de tu compra + IVA es de ${iva}`);
}























