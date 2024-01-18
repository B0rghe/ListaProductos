// Call the dataTables jQuery plugin
$(document).ready(function() {
    //onready
});
async function editarProducto(id) {
    const response = await fetch('productos/' + id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const producto = await response.json();

    document.querySelector('#editarCodigo').value = producto.id;
    document.querySelector('#editarDescripcion').value = producto.descripcion;
    document.querySelector('#editarMarca').value = producto.marca;
    document.querySelector('#editarPrecio').value = producto.precio;
}

async function guardarEdicion() {
    let datos = {};
    datos.id = document.getElementById('editarCodigo').value;
    datos.descripcion = document.getElementById('editarDescripcion').value;
    datos.marca = document.getElementById('editarMarca').value;
    datos.precio = document.getElementById('editarPrecio').value;

    const id = datos.id;

    const response = await fetch('productos/' + id, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    alert('Producto actualizado exitosamente');
    location.reload();
}