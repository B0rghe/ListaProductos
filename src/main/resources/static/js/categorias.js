// Call the dataTables jQuery plugin
$(document).ready(function() {
    cargarCategoria();
});

async function cargarCategoria() {
  const request = await fetch('categorias', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  const categorias = await request.json();

  let listaCategorias = "";
  for (categoria of categorias){
    let btnEliminar = '<a href="#" onclick="eliminarCategoria('+categoria.id+')" class="btn btn-danger btn-circle btn-sm">Eliminar</a>';
    let btnEditar = '<a href="#" onclick="editarCategoria('+categoria.id+')" class="btn btn-info btn-circle btn-sm" data-bs-toggle="modal" data-bs-target="#modalEdicionCategoria">Editar</a>';
    let categoriasHtml = '<tr><td>'+categoria.id+'</td><td>'+categoria.categoria+'</td><td>'+btnEditar+'</td><td>'+btnEliminar+'</td></tr>';
    listaCategorias += categoriasHtml;
  }

  document.querySelector('#tablaCategorias tbody').outerHTML = listaCategorias;
}

async function eliminarCategoria(id){
    if (!confirm("Desea borrar la categoria?")){
        return;
    }
    const request = await fetch('categorias/' + id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    alert("Categoria " + id + " eliminada");
    location.reload();
}

async function editarCategoria(id) {
    const response = await fetch('categorias/' + id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const datos = await response.json();

    document.querySelector('#editarCodigo').value = datos.id;
    document.querySelector('#editarCategoria').value = datos.categoria;
}

async function guardarEdicionCategoria() {
    let datos = {};
    datos.id = document.getElementById('editarCodigo').value;
    datos.categoria = document.getElementById('editarCategoria').value;

    const id = datos.id;

    const response = await fetch('categorias/' + id, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    alert('Categoria actualizada exitosamente');
    location.reload();
}
async function agregarCategoria() {
    let datos = {};
    datos.categoria = document.getElementById('txtCategoria').value;

    const request = await fetch('categorias', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    alert("Categoria agregada");
      location.reload();
}