// Call the dataTables jQuery plugin
$(document).ready(function() {
    cargarProducto();
    $('#dataTable').DataTable();
});

function cargarProducto() {
  const request = await fetch('productos', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({a: 1, b: 'Textual content'})
  });
  const content = await request.json();

  console.log(content);
}