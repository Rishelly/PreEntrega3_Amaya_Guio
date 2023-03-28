const productos = [
    { codigo: 0, nombre: "PRODUCTO 1", precio: 150}, 
    { codigo: 1, nombre: "PRODUCTO 2", precio: 500},
    { codigo: 2, nombre: "PRODUCTO 3", precio: 200},
    { codigo: 3, nombre: "PRODUCTO 4", precio: 250},
    { codigo: 4, nombre: "PRODUCTO 5", precio: 1050}, 
    { codigo: 5, nombre: "PRODUCTO 6", precio: 900},
]
/*
function cliente (nombre, apellido, numeroTel) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.numeroTel = numeroTel;
}
const cliente1 = new cliente (prompt ("Nombre:"), prompt ("Apellido:"), prompt("Número telefónico:"));*/

function listaDeProductos (){
 for (const producto of productos){
    let seccion = document.createElement ('section')
    seccion.innerHTML = `
    <h3 class="py-3 m-1"> ${producto.nombre} <h3/>
    <img src="./assets/imagenes/45069787-retro-sencilla-metálica-vector-blanco-y-negro-estilizado-cesta-de-la-vendimia-completa-con-productos.webp" class="img-thumbnail" alt="imagen de producto">
    <p> $${producto.precio} <p/>
    <button class="button btn mt-3 p-1 rounded" id="btn${producto.codigo}">AGREGAR AL CARRITO</button>
    `
    let lista = document.getElementById ('listaProductos')
    lista.append(seccion)
    let btnAgregar = document.getElementById (`btn${producto.codigo}`)
    btnAgregar.addEventListener ("click", agregarAlCarrito)

    function agregarAlCarrito (){

    }
    agregarAlCarrito ()
 }
}
listaDeProductos ()
