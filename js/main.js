let acumuladorCardsHome = ``;
const articulosDisponibles = [];

class Articulo {
  constructor (stock, nombre, precio, resenia, image) {
    this.stock = stock
    this.nombre = nombre
    this.precio = precio
    this.resenia = resenia
    this.image = image
  }

  agregarArticulo(){
    this.stock += 1
  }
} 




articulosDisponibles.push(new Articulo(3, "REMERA ZARA", 650, "Remera blanca con estampado marca Zara, como nueva. Talle: S.", "/img/remera_zara.jpg"));
articulosDisponibles.push(new Articulo(1, "SHORT ENGOMADO", 1720, "Short engomado tiro alto con botones, como nuevo. Talle: 38.", "/img/short_engomado.jpg"));
articulosDisponibles.push(new Articulo(2, "CARMPERA CORDERITO", 2100, "Campera de jean de hombre con interior de corderito, sin uso. Talle 40", "/img/campera_jean.jpg"));
articulosDisponibles.push(new Articulo(0, "BUZO CON COLORES", 1370, "Buzo de dama con degradado en dos colores, con detalles en las mangas. Talle único", "/img/buzo_colores.jpg"));
articulosDisponibles.push(new Articulo(1, "REMERA LONDON", 490, "Remera nacional de dama, como nueva. Talle: M.", "/img/remera_london.jpg"));
articulosDisponibles.push(new Articulo(3, "JEAN H&M", 1650, "Jean con roturas H&M, con detalles en el ruedo. Talle: 44.", "/img/jean_h&m.jpg"));

articulosDisponibles.forEach((articulo)=>{
  acumuladorCardsHome += `<div class="col-lg-4 col-md-6 mb-4">
  <div class="card h-100">
    <a href="#"><img class="card-img-top" src="${articulo.image}" alt=""></a>
    <div class="card-body">
      <h4 class="card-title">
        <a href="#">${articulo.nombre}</a>
      </h4>
      <h5>$${articulo.precio}</h5>
      <p class="card-text">${articulo.resenia}</p>
    </div>
    <div class="card-footer">
      <button>Agregar al carrito</button>
      <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
    </div>
  </div>
</div>`;
});

console.log(articulosDisponibles)








document.getElementById("productosCard").innerHTML = acumuladorCardsHome;









