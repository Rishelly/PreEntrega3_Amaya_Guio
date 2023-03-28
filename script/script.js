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
    `
    let lista = document.getElementById ('listaProductos')
    lista.append(seccion)
 }
}
 
listaDeProductos ()
/*const carrito = []
let seguirComprando = true;
    while(seguirComprando){
        let productoSeleccionado = parseInt(prompt("Quiero el producto número:"));
        switch (productoSeleccionado){
            case 1:
                carrito.push(productos[0])
                break;

            case 2: 
                carrito.push(productos[1])
                break;

            case 3:
                carrito.push(productos[2])
                break;
                
            case 4:
                carrito.push(productos[3])
                break;

            default:
                alert("Actualmente el número ingresado no corresponde a ningún producto en stock.")
                break;
        }
        let elegirSeguirComprando = parseInt(prompt ("¿Quiere seguir agregando productos?: 1= Sí, 2= Ir a pagar"))
        if(elegirSeguirComprando ===1){
            seguirComprando = true;
        }else if (elegirSeguirComprando ===2){
            seguirComprando = false
        }else (alert("Opción inválida"));
}*/
/*
let total = 0
carrito.forEach((el) => {
    total += el.precio
})

console.log(cliente1, carrito, total)
alert("El monto total a pagar de su carrito es: $" + total)

window.addEventListener ("load", function(){
    cliente()
}) */