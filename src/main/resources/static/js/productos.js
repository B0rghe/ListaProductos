// Call the dataTables jQuery plugin
$(document).ready(function() {
    cargarProducto();
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
    let btnEliminar = '<a href="#" onclick="eliminarProducto('+producto.id+')" class="btn btn-danger btn-circle btn-sm">Eliminar</a>';
    let btnEditar = '<a href="#" onclick="editarProducto('+producto.id+')" class="btn btn-info btn-circle btn-sm" data-bs-toggle="modal" data-bs-target="#modalEdicion">Editar</a>';
    let productosHtml = '<tr><td>'+producto.id+'</td><td>'+producto.descripcion+'</td><td>'+producto.marca+'</td><td>'
                        +producto.precio+'</td><td>'+btnEditar+'</td><td>'+btnEliminar+'</td></tr>';
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