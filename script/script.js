let formularioId =
document.getElementById("identificacion");
formularioId.addEventListener ('submit', validarIdentidad);

let input1 = document.getElementById("nombre")
input1.addEventListener("change", () => {sessionStorage.setItem("nombre", input1.value)})
let input2 = document.getElementById("apellido")
input2.addEventListener("change", () => {sessionStorage.setItem("apellido", input2.value)})
let input3 = document.getElementById("telefono")
input3.addEventListener("change", () => {sessionStorage.setItem("telefono", input3.value)})

function validarIdentidad (e){
    e.preventDefault ();
    Swal.fire(
        'Éxito',
        'Identidad, confirmada',
        'success'
      )
}

const productos = [
    { id: 0, nombre: "PRODUCTO 1", precio: 150}, 
    { id: 1, nombre: "PRODUCTO 2", precio: 500},
    { id: 2, nombre: "PRODUCTO 3", precio: 200},
    { id: 3, nombre: "PRODUCTO 4", precio: 250},
    { id: 4, nombre: "PRODUCTO 5", precio: 1050}, 
    { id: 5, nombre: "PRODUCTO 6", precio: 900},
]

function listaDeProductos (){
 for (const producto of productos){
    let seccion = document.createElement ('div')
    seccion.innerHTML = `
    <h3> ${producto.nombre}</h3>
    <img src="./assets/imagenes/45069787-retro-sencilla-metálica-vector-blanco-y-negro-estilizado-cesta-de-la-vendimia-completa-con-productos.webp" class="img-thumbnail" alt="imagen de producto" />
    <p> $${producto.precio} </p>
    <button class="botonAgregar" id="${producto.id}">AGREGAR AL CARRITO</button>
    `

    seccion.className = 'col-3 m-1 p-1'
    let lista = document.getElementById ('listaProductos')
    lista.append(seccion)}

}
listaDeProductos ()

const btnCarrito = document.querySelector('.contenedorDelCarrito')
const containerCarrito = document.querySelector('.contenedor-de-carrito')

btnCarrito.addEventListener('click',() => {
    containerCarrito.classList.toggle('hidden-carrito')
})

const infoCarrito = document.querySelector('.productoCarrito')
const filaProducto = document.querySelector('.filaDeProducto')

let stock = document.getElementById('listaProductos')

let todosLosProductos = []

stock.addEventListener('click', e=> {
    if(e.target.classList.contains('botonAgregar')){
        const prodc =e.target.parentElement

        const infoProdc = {
            cantidad: 1,
            nombre: prodc.querySelector('h3').textContent,
            precio: prodc.querySelector('p').textContent,
        }
       todosLosProductos =[...todosLosProductos, infoProdc]

       mostrarHtml()
    }
})

const mostrarHtml = () => {
    todosLosProductos.forEach(prodc =>{
        const contenedorProducto = document.createElement('div')
        contenedorProducto.classList.add('productoCarrito')
        contenedorProducto.innerHTML = `
        <div class="productoCarrito p-1 m-2">
            <div class="info-prod-carrito d-flex flex-row justify-content-evenly p-1">
                <span class="cantidad-producto-carrito">${prodc.cantidad}</span>
                <p class="titulo-producto-carrito">${prodc.nombre}</p>
                <span class="precio-carrito-producto">${prodc.precio}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="quitar">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
        `
        let carrito = document.getElementById ('filaDeProducto')
        carrito.append(contenedorProducto)
    })
}