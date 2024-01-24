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
    let btnEditar = '<a href="#" onclick="editarProducto('+producto.id+')" class="btn btn-info btn-circle btn-sm" data-bs-toggle="modal" data-bs-target="#modalEdicionProductos">Editar</a>';
    let productosHtml = '<tr><td>'+producto.id+'</td><td>'+producto.descripcion+'</td><td>'+producto.categoria+'</td><td>'+producto.marca+'</td><td>'
                        +producto.precio+'</td><td>'+producto.imagen+'</td><td>'+btnEditar+'</td><td>'+btnEliminar+'</td></tr>';
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

async function guardarEdicionProducto() {
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