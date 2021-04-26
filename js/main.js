let acumuladorCardsHome = ``;

class Articulo {
  constructor (nombre, precio, resenia, image, stock) {
    this.nombre = nombre
    this.precio = precio
    this.resenia = resenia
    this.image = image
    this.stock = stock
  }

  stockArticulo(){
    if(this.stock > 0){
      return console.log("Disponibles " + this.stock + " " + this.nombre)
    } else {
      return console.log("Sin stock")
    }
  }

} 


const articulosDisponibles = [];
console.log(articulosDisponibles)

articulosDisponibles.push(new Articulo("REMERA ZARA", 650, "Remera blanca con estampado marca Zara, como nueva. Talle: S.", "/img/remera_zara.jpg", 3));
articulosDisponibles.push(new Articulo("SHORT ENGOMADO", 1720, "Short engomado tiro alto con botones, como nuevo. Talle: 38.", "/img/short_engomado.jpg", 2));
articulosDisponibles.push(new Articulo("CARMPERA CORDERITO", 2100, "Campera de jean de hombre con interior de corderito, sin uso. Talle 40", "/img/campera_jean.jpg", 1));
articulosDisponibles.push(new Articulo("BUZO CON COLORES", 1370, "Buzo de dama con degradado en dos colores, con detalles en las mangas. Talle único", "/img/buzo_colores.jpg", 0));
articulosDisponibles.push(new Articulo("REMERA LONDON", 490, "Remera nacional de dama, como nueva. Talle: M.", "/img/remera_london.jpg", 1));
articulosDisponibles.push(new Articulo("JEAN H&M", 1650, "Jean con roturas H&M, con detalles en el ruedo. Talle: 44.", "/img/jean_h&m.jpg", 2));


articulosDisponibles.forEach( (articulo)=>{
  articulo.stockArticulo()
} )


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
        <button>Agregar al carrito</button>
        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
    </div>
  </div>`;
}


document.getElementById("productosCard").innerHTML = acumuladorCardsHome;









