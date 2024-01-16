// Call the dataTables jQuery plugin
$(document).ready(function() {
    cargarProducto();
    $('#tablaProductos').DataTable();
});

async function cargarProducto() {
  const request = await fetch('productos', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  const productos = await request.json();

  let listaProductos = "";
  for (producto of productos){
    let btnEliminar = '<a href="#" onclick="eliminarProducto('+producto.id+')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
    let productosHtml = '<tr><td>'+producto.id+'</td><td>'+producto.descripcion+'</td><td>'+producto.marca+'</td><td>'
                        +producto.precio+'</td><td>'+btnEliminar+'</td></tr>';
    listaProductos += productosHtml;
  }

  document.querySelector('#tablaProductos tbody').outerHTML = listaProductos;
}
async function eliminarProducto(id){
    if (!confirm("Desea borrar el producto?")){
        return;
    }
    const request = await fetch('productos/' + id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    alert("Producto " + id + " eliminado");
    location.reload();
}
