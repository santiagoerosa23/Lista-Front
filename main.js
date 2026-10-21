// 1. Buscamos el contenedor de tu HTML donde se van a dibujar las comidas
const contenedor = document.getElementById('comidaContainer');

// 2. Traemos los datos de tu archivo JSON
fetch('./data/comidas.json')
  .then(response => response.json())
  .then(comidas => {
    
    // 3. Recorremos la lista de comidas una por una
    comidas.forEach(comida => {
      
      // Creamos una etiqueta <div> vacía en la memoria de la computadora
      const tarjeta = document.createElement('div');
      
      // Extraemos los textos de la comida y los unimos con un guion
      tarjeta.textContent = Object.values(comida).join(' - '); 
      
      // Metemos ese <div> adentro de tu <main id="comidaContainer"> para que se vea en pantalla
      contenedor.appendChild(tarjeta); 
      
    });

  });
