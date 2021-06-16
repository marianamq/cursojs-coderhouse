const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const btnFinalizarCompra = document.getElementById('finalizarCompra')
const btnCerrar = document.getElementById('cerrarCarrito')
const modalCarrito = document.getElementsByClassName('modal-dialog')[0]
const filtrarTemporadas = document.getElementById('temporadas'); 
const filtrarArticulos = document.getElementById('articulos')

function filtrar(){
    let filtroTemporadas = filtrarTemporadas.value
    let filtroArticulos = filtrarArticulos.value
    let arrayStock = []

    if(filtroTemporadas == 'todo'){
        arrayStock = stockActual
    } else{
        arrayStock = stockActual.filter( el => el.temporada == filtrarTemporadas.value)
    }

    if(filtroArticulos != 'todo-art'){
        arrayStock = arrayStock.filter( el => el.articulo == filtrarArticulos.value)
    } 

    mostrarCards(arrayStock)
}

filtrarTemporadas.addEventListener('change',  () => {
    filtrar()
})
filtrarArticulos.addEventListener('change',  () => {
    filtrar()
})

btnFinalizarCompra.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})

btnCerrar.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', () => {
    contenedorModal.classList.remove('modal-active')
})
modalCarrito.addEventListener('click', (modal) => {
    modal.stopPropagation()
})




