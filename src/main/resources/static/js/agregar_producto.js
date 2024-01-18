// Call the dataTables jQuery plugin
$(document).ready(function() {
    //onready
});

async function agregarProducto() {
    let datos = {};
    datos.descripcion = document.getElementById('txtDescripcion').value;
    datos.marca = document.getElementById('txtMarca').value;
    datos.precio = document.getElementById('txtPrecio').value;

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