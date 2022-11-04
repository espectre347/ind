"use strict"

// recuperar los datos de las cajas de texto y la caja de selección
const txtCuenta = document.querySelector("#no_cuenta");
const txtNumero = document.querySelector("#noarticulo");
const txtDescripcion= document.querySelector("#descripcion"); 
const txtUnidad= document.querySelector("#unidad");
const txtPrecio= document.querySelector("#precio");
const btnGuardar =document.querySelector ("#btn_guardar"); 
// recuperar el cuerpo de la tabla 
const listaArticulos= document.querySelector("#lista_articulos tbody");

btnGuardar.addEventListener("click", function (e) {
e.preventDefault();
// Generar un objeto de tipo alumno
const articulo = {
nocuenta: txtCuenta.value,
numero: Number(txtNumero.value),
descripcion: txtDescripcion.value.toUpperCase(),
unidad: Number (txtUnidad.value),
precio: Number (txtPrecio.value)
}
// insertar dicho alumno a la tabla
 insertarArticuloATabla (articulo);
});
function insertarArticuloATabla (alumno) { 
    const row= document.createElement("tr");
    row.innerHTML =`
    <td><img src="img/${alumno.nocuenta}.png" alt="" width="100" height="100"></td>
    <td>${alumno.numero}</td>
    <td>${alumno.descripcion}</td>
    <td>${alumno.unidad}</td>
    <td>${alumno.precio}</td>
   `;
    listaArticulos.appendChild(row);
}