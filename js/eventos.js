const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const btnFinalizarCompra = document.getElementById('finalizarCompra')
const btnCerrar = document.getElementById('cerrarCarrito')
const modalDeCarrito = document.getElementsByClassName('modal-carrito')[0]
const continuarCompra = document.getElementById('continuarCompra')

btnFinalizarCompra.addEventListener('click', () => {
   contenedorModal.classList.toggle('modal-active')
})
btnCerrar.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})
contenedorModal.addEventListener('click', () => {
    btnCerrar.click()
})
modalDeCarrito.addEventListener('click', (event)=>{
    event.stopPropagation()
})

continuarCompra.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active-dos')
})