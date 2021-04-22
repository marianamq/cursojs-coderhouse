//let precios = [400, 800, 1300, 350, 600, 1000];
//let nombreProducto = ['Remeras', 'Buzos', 'Jeans', 'Polleras', 'Pants', 'Abrigos'];
let acumuladorCardsHome = ``;
let totalCarrito = 0;
let porcentajeDeDescuento = 15;
let resultadoTotal = 0;
let porcentajeIVA = 1.21;


class Articulo {
    constructor (nombre, precio, resenia, image, stock) {
        this.nombre = nombre
        this.precio = precio
        this.resenia = resenia
        this.image = image
        this.stock = stock
    }

    validarStock(){
        if(this.stock > 0){
            return true
        } else {
            return false
        }
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
} 

const articuloUno = new Articulo("REMERA ZARA", 650, "Remera blanca con estampado marca Zara, como nueva. Talle: S.", "/img/remera_zara.jpg", 3);
const articuloDos = new Articulo("SHORT ENGOMADO", 1720, "Short engomado tiro alto con botones, como nuevo. Talle: 38.", "/img/short_engomado.jpg", 2);
const articuloTres = new Articulo("CARMPERA CORDERITO", 2100, "Campera de jean de hombre con interior de corderito, sin uso. Talle 40", "/img/campera_jean.jpg", 1);
const articuloCuatro = new Articulo("BUZO CON COLORES", 1370, "Buzo de dama con degradado en dos colores, con detalles en las mangas. Talle único", "/img/buzo_colores.jpg", 0);
const articuloCinco = new Articulo("REMERA LONDON", 490, "Remera nacional de dama, como nueva. Talle: M.", "/img/remera_london.jpg", 1);
const articuloSeis = new Articulo("JEAN H&M", 1650, "Jean con roturas H&M, con detalles en el ruedo. Talle: 44.", "/img/jean_h&m.jpg", 2);

const articulosDisponibles = [articuloUno, articuloDos, articuloTres, articuloCuatro, articuloCinco, articuloSeis];


for (let i = 0; i < articulosDisponibles.length; i++) {
    acumuladorCardsHome += `<div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="${articulosDisponibles[i].image}" alt=""></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">${articulosDisponibles[i].nombre}</a>
        </h4>
        <h5>$${articulosDisponibles[i].precio}</h5>
        <p class="card-text">${articulosDisponibles[i].resenia}</p>
      </div>
      <div class="card-footer">
        <button onclick="validarStock(${articulosDisponibles[i].precio}, ${articulosDisponibles[i].stock})">Agregar al carrito</button>
        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
    </div>
  </div>`;
}


document.getElementById("productosCard").innerHTML = acumuladorCardsHome;









