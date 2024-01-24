// Call the dataTables jQuery plugin
$(document).ready(function() {
    //onready
});

async function agregarProducto() {
    let datos = {};
    datos.descripcion = document.getElementById('txtDescripcion').value;
    datos.categoria = document.getElementById('txtCategoria').value;
    datos.marca = document.getElementById('txtMarca').value;
    datos.precio = document.getElementById('txtPrecio').value;
    datos.imagen = document.getElementById('txtImagen').value;

    const request = await fetch('productos', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    alert("Producto Agregado");
      location.reload();
}