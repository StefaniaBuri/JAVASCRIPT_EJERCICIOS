//Primer paso: cambiamos el ambito del array de restaurantes para que sea global
var arrayPersonajes;

document.querySelector("#iFiltro").addEventListener("keyup", () => {
  let texto = document.querySelector("#iFiltro").value;
  console.log(texto);
  let personajesFiltrado = arrayPersonajes.filter((personaje) => {
    console.log(personaje);
    return personaje.name.toUpperCase().includes(texto);
  });

  document.querySelector("#programa").innerHTML = "";
  generarFilasArray(personajesFiltrado);
});



function procesarPersonajes(texto) {
  let objetoServidor = JSON.parse(texto);
  arrayPersonajes = objetoServidor.characters;
  console.log(arrayPersonajes);

  arrayPersonajes.forEach((personaje) => {
    crearFila(
        personaje.name,
        personaje.thumbnail,
        personaje.description
    );
  });
}

function procesarError(err) {
  console.log(err);
}

function generarFilasArray(personajes) {
  personajes.forEach((e) => {
    crearFila(
      e.name,
      e.thumbnail,
      e.description
    );
  });
}
