function crearFila(imagen, nombre, estilo, precio) {
    //Paso 1: <div id="restaurantes">
    let divRestaurante = document.createElement("div");
    divRestaurante.classList.add("restaurante");
    document.querySelector("#restaurantes").appendChild(divRestaurante);

    //Paso2:  <div class="imagen">
    let divImagen = document.createElement("div");
    divImagen.classList.add("imagen");
    divRestaurante.appendChild(divImagen);

    //Paso 3: <img src="./imagenes/bandejapaisa.jpg" />
    let imgRestaurante = document.createElement("img");
    imgRestaurante.src = imagen;
    divImagen.appendChild(imgRestaurante);

    //Paso 4:  <div class="descripcion">
    let divDescripcion = document.createElement("div");
    divDescripcion.classList.add("descripcion");
    divRestaurante.appendChild(divDescripcion);

    //Paso 5:  <div class="nombre">El Sabroso</div>
    let divNombre = document.createElement("div");
    divNombre.classList.add("nombre");
    divNombre.appendChild(document.createTextNode(nombre));
    divRestaurante.appendChild(divNombre);

    //Paso 6: <div class="tipo">Americano</div>
    let divTipo = document.createElement("div");
    divTipo.classList.add("tipo");
    divTipo.appendChild(document.createTextNode(estilo));
    divDescripcion.appendChild(divTipo);

    //Paso 7: <div class="precio">16€</div>
    let divPrecio = document.createElement("div");
    divPrecio.classList.add("precio");
    divPrecio.appendChild(document.createTextNode(precio));
    divDescripcion.appendChild(divPrecio);

    //<hr>
    document.querySelector("#restaurantes").appendChild(document.createElement("hr"));

  }
  //crearFila("./imagenes/bupa.jpg", "Alfredo", "Americano", "30€");