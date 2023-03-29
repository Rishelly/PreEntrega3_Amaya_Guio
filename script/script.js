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
    { codigo: 0, nombre: "PRODUCTO 1", precio: 150}, 
    { codigo: 1, nombre: "PRODUCTO 2", precio: 500},
    { codigo: 2, nombre: "PRODUCTO 3", precio: 200},
    { codigo: 3, nombre: "PRODUCTO 4", precio: 250},
    { codigo: 4, nombre: "PRODUCTO 5", precio: 1050}, 
    { codigo: 5, nombre: "PRODUCTO 6", precio: 900},
]

const carrito = []

function listaDeProductos (){
 for (const producto of productos){
    let seccion = document.createElement ('section')
    seccion.innerHTML = `
    <h3 class="py-3 m-1"> ${producto.nombre} <h3/>
    <img src="./assets/imagenes/45069787-retro-sencilla-metálica-vector-blanco-y-negro-estilizado-cesta-de-la-vendimia-completa-con-productos.webp" class="img-thumbnail" alt="imagen de producto">
    <p> $${producto.precio} <p/>
    <button class="button btn mt-3 p-1 rounded" id="${producto.codigo}">AGREGAR AL CARRITO</button>
    `

    seccion.className = 'col-3 m-1 p-1'
    let lista = document.getElementById ('listaProductos')
    lista.append(seccion)
    let btnAgregar = document.getElementById (`${producto.codigo}`)
    btnAgregar.addEventListener ("click", agregarAlCarrito)

    function agregarAlCarrito (e){
console.log(producto.codigo)
    }
    agregarAlCarrito ()
 }
}
listaDeProductos ()

const btnCarrito = document.querySelector('.iconoCarrito')
const containerCarrito = document.querySelector('.contenedor-de-carrito')

btnCarrito.addEventListener('click',() => {
    containerCarrito.classList.toggle('hidden-carrito')
})