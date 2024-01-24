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
    document.querySelector('#editarCategoria').value = producto.categoria;
    document.querySelector('#editarMarca').value = producto.marca;
    document.querySelector('#editarPrecio').value = producto.precio;
    document.querySelector('#editarImagen').value = producto.imagen;
}

async function guardarEdicion() {
    let datos = {};
    datos.id = document.getElementById('editarCodigo').value;
    datos.descripcion = document.getElementById('editarDescripcion').value;
    datos.categoria = document.getElementById('editarCategoria').value;
    datos.marca = document.getElementById('editarMarca').value;
    datos.precio = document.getElementById('editarPrecio').value;
    datos.imagen = document.getElementById('editarImagen').value;

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