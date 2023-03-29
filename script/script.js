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
    let seccion = document.createElement ('section')
    seccion.innerHTML = `
    <h3 class="py-3 m-1"> ${producto.nombre} <h3/>
    <img src="./assets/imagenes/45069787-retro-sencilla-metálica-vector-blanco-y-negro-estilizado-cesta-de-la-vendimia-completa-con-productos.webp" class="img-thumbnail" alt="imagen de producto">
    <p> $${producto.precio} <p/>
    <button class="botonAgregar btn mt-3 p-1 rounded" id="${producto.id}">AGREGAR AL CARRITO</button>
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
let carrito = []

stock.addEventListener('click', e=> {
    if(e.target.classList.contains('botonAgregar')){
            console.log(e.target.id)
    }
} )
