/*
    Cargar comidas en memoria desde el JSON
*/
fetch('./data/comidas.json')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Comidas cargadas desde JSON:');
    console.log(data);    
    comidas = data;                   // Asignar el JSON a la variable comidas
      for (let i = 0; i < comidas.length; i++) {
    comidaContainer.innerHTML = `
      <article class="card">
        <h2>${comidas[3].nombre}</h2>
        <p>${comidas[3].provincia}</p>
        <span>${comidas[3].categoria}</span>
      </article>
    `;
  }

    const comidaContainer = document.getElementById("comidaContainer");
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });




let comidas = [];