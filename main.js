let comidas = [];
const comidaContainer = document.getElementById("comidaContainer");


function mostrarComidasConForEach(lista) {

  comidaContainer.innerHTML = lista.map(comida => `
    <article class="card">
      <h2>${comida.nombre}</h2>
      <p>${comida.provincia}</p>
      <span>${comida.categoria}</span>
    </article>
  `).join('');
}


fetch('./data/comidas.json')
  .then(response => response.json())
  .then(data => {                     
    console.log('Comidas cargadas desde JSON:', data);    
    comidas = data;                   
    
 
    mostrarComidasConForEach(comidas);        
  })
  .catch(error => {                   
    console.error('Error al leer el archivo JSON:', error);
  });
