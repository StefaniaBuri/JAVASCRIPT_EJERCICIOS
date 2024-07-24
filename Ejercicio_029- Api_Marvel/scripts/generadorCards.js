function crearFila(e) {
  const image = `${e.thumbnail.path}/portrait_uncanny.${e.thumbnail.extension}`;
  console.log("IMAGEN: ", image);
  /*obtenemos la data conforme a la documentación de marvel*/
      const hero = `
      <div class="hero ed-ite l-1-3">
        <h3>${e.name}</h3>
        <div class="hero-img">
          <img class= "thumbnail" src="${image}">
          <p class="description">${e.description}</p>
        </div>
      </div>
       `;
      content.insertAdjacentHTML('beforeEnd',hero);

    //<hr>
    document.querySelector("#programa").appendChild(document.createElement("hr"));

  }

  /*
     //Paso 1: <div id="programa">
    let divPrograma = document.createElement("div");
    divPrograma.classList.add("programas");
    document.querySelector("#programa").appendChild(divPrograma);

    //Paso2:  <div class="imagen">
    let divImagen = document.createElement("div");
    divImagen.classList.add("imagen");
    divPrograma.appendChild(divImagen);

    //Paso 3: <img src="" />
    let imgCharacter = document.createElement("img");
    imgCharacter.src = thumbnail.path;
    divImagen.appendChild(imgCharacter);

    //Paso 4:  <div class="descripcion">
    let divDescripcion = document.createElement("div");
    divDescripcion.classList.add("descripcion");
    divPrograma.appendChild(divDescripcion);

    //Paso 5:  <div class="nombre">NOMBRE</div>
    let divNombre = document.createElement("h2");
    divNombre.classList.add("nombre");
    divNombre.appendChild(document.createTextNode(name));
    divPrograma.appendChild(divNombre);

    //Paso 6: <div class="episodio">DESCRIPTION</div>
    let divEpisode = document.createElement("p");
    divEpisode.classList.add("description");
    divEpisode.appendChild(document.createTextNode(description));
    divDescripcion.appendChild(divEpisode);
  */