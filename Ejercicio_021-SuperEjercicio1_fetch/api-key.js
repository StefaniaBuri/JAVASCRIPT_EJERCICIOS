
 

function getListaPelis(url) {
    
    const promise = fetch(`${url}`);
    promise.then(response => response.text())
        .then(data => {
            mostrarDatos(data)
        });
}

/*function getListaPelis(url) {

    const promise = fetch(`${url}`);
    promise.then(response => response.text())
        .then(data => {
            mostrarDatos(data)
        });
}*/


function mostrarDatos(datos) {
    //1.transformamos el objeto que nos da el servidor 
    let peliculas = JSON.parse(datos); // .parse: metodo estatico(se llama precedido despues del nombre de una clase) 
    // Los objetos se escriben en miniscula y las clases empiezan por mayusc Ej JSON es una clase
    // juegos: es un objeto y el metodo que le precede se llaman metodos distancia.
    document.querySelector("#juegos").innerHTML="";
    peliculas.Search.forEach(peli => {
        // 2.Diseñamos una pagina
        let ficha = 
            `<div class="juego">
                 <div class="title">${peli.Title}</div>
                <div class="year">${peli.Year}</div>
                <div class="type">${peli.Type}</div>
                <div class="imagen">
                    <img src="${peli.Poster}">
                </div>
            </div>`;
            document.querySelector("#juegos").innerHTML+=ficha; 
    });
}

function mostrarPaginaError(codigo) {
    document.querySelector("#juegos").innerHTML+=`<h1>Ha ocurrido un error:${codigo}</h1>`;
}


//https://www.omdbapi.com/?apikey=yourKey&parametro=peli&parametro2

//getListaPelis("https://www.omdbapi.com/?apikey=9d733a64&s=Titanic"); 


function buscar() {
    let busqueda = document.querySelector("#pelii").value;
    getListaPelis("https://www.omdbapi.com/?apikey=9d733a64&s="+ busqueda);
    document.querySelector("#pelii").value="";
}
