// Call the dataTables jQuery plugin
$(document).ready(function() {
   cargarProductos();
});
function verProductos(){
    document.getElementById('mostrarCategorias').style.display = 'none';
    document.getElementById('mostrarProductos').style.display = 'block';
    //history.pushState({}, null, "/productos");
    cargarProductos();
}
function verCategorias(){
    document.getElementById('mostrarProductos').style.display = 'none';
    document.getElementById('mostrarCategorias').style.display = 'block';
    //history.pushState({}, null, "/categorias");
    cargarCategorias();
}



async function cargarProductos() {
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
    console.log("categoria: ");
    console.log(producto.categoria_id);
    let btnEliminar = '<a href="#" onclick="eliminarProducto('+producto.id+')" class="btn btn-danger btn-circle btn-sm">Eliminar</a>';
    let btnEditar = '<a href="#" onclick="editarProducto('+producto.id+')" class="btn btn-info btn-circle btn-sm" data-bs-toggle="modal" data-bs-target="#modalEdicionProductos">Editar</a>';
    let productosHtml = '<tr><td>'+producto.id+'</td><td>'+producto.descripcion+'</td><td>'
                        +(producto.categoria_id ? producto.categoria_id.nombrecategoria : '')+'</td><td>'+producto.marca+'</td><td>'
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

    document.querySelector('#editarCodigoP').value = producto.id;
    document.querySelector('#editarDescripcionP').value = producto.descripcion;
    document.querySelector('#editarCategoriaP').value = producto.categoria_id;
    document.querySelector('#editarMarcaP').value = producto.marca;
    document.querySelector('#editarPrecioP').value = producto.precio;
    document.querySelector('#editarImagenP').value = producto.imagen;
}

async function guardarEdicionProducto() {
    let datos = {};
    datos.id = document.getElementById('editarCodigoP').value;
    datos.descripcion = document.getElementById('editarDescripcionP').value;
    datos.categoria_id = document.getElementById('editarCategoriaP').value;
    datos.marca = document.getElementById('editarMarcaP').value;
    datos.precio = document.getElementById('editarPrecioP').value;
    datos.imagen = document.getElementById('editarImagenP').value;

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



// Función para cargar las categorías desde el servidor

var categorias = [];

async function cargarCategoriasDesdeServidor() {
    const response = await fetch('categorias');
    categorias = await response.json();
}

// Función para cargar las categorías en el elemento <select>
function cargarCategorias() {
    var selectCategoria = document.getElementById('txtCategoriaP');

    // Limpiar las opciones existentes
    selectCategoria.innerHTML = '';

    // Agregar las nuevas opciones
    categorias.forEach(function (categoria) {
        var option = document.createElement('option');
        option.value = categoria.id;
        option.text = categoria.nombrecategoria;
        selectCategoria.appendChild(option);
    });
}

// Llamar a la función para cargar las categorías al cargar la página
cargarCategoriasDesdeServidor().then(cargarCategorias);

async function agregarProducto() {
    let datos = {};
    datos.descripcion = document.getElementById('txtDescripcionP').value;
    datos.marca = document.getElementById('txtMarcaP').value;
    datos.precio = document.getElementById('txtPrecioP').value;
    datos.imagen = document.getElementById('txtImagenP').value;
    // Obtener el valor seleccionado de la categoría_id
    var selectCategoria = document.getElementById('txtCategoriaP');
    datos.categoria_id = {id: selectCategoria.options[selectCategoria.selectedIndex].value};
    console.log(datos);
    const request = await fetch('productos', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });

    const responseText = await request.text();

        if (request.ok) {
            alert(responseText); // Muestra un mensaje de éxito si la respuesta es exitosa
            location.reload();
        } else {
            alert("Error al agregar el producto:\n" + responseText); // Muestra un mensaje de error si la respuesta tiene un código de error
        }
    //alert("Producto Agregado");
      location.reload();
}