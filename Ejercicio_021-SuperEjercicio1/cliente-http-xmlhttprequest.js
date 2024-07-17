//Servidor web: 

function getVideojuegos (url, port, recurso) {
    const client = new XMLHttpRequest();

    client.addEventListener("readystatechange", () => {
        const isDone = client.readyState === 4; //ha terminado la consulta
        const isOk = client.status === 200; //ok
        console.error(client.status);

        if (isDone && isOk) {
            //console.log(client.responseText);
            mostrarDatos(client.responseText);//siempre devuelve String y hay que cambiarlo a Array de objetos
        } else if (isDone && !isOk) {
            mostrarPaginaError(client.status);
        }
    });

    client.open("GET", `${url}:${port}/${recurso}`);
    client.send();
}

function mostrarDatos (datos) {

    //1.transformamos el objeto que nos da el servidor 
    
    let juegos = JSON.parse(datos); // .parse: metodo estatico(se llama precedido despues del nombre de una clase) 
    // Los objetos se escriben en miniscula y las clases empiezan por mayusc Ej JSON es una clase
    // juegos: es un objeto y el metodo que le precede se llaman metodos distancia.
    juegos.forEach(juego => {
        // 2.Diseñamos una pagina
        let ficha = 
            `<div class="juego">
              
                 <div class="nombre">${juego.nombre}</div>
               
                <div class="genero">${juego.genero}</div>
                <div class="fecha">${juego.fecha}</div>
                <div class="actores">${juego.actores}</div>
                <div class="imagen">
                    <img src="${juego.caratula}">
                </div>
            </div>`;
            document.querySelector("#juegos").innerHTML+=ficha;

    });
}

function mostrarPaginaError(codigo) {
    document.querySelector("#juegos").innerHTML+=`<h1>Ha ocurrido un error:${codigo}</h1>`;
}

getVideojuegos("http://localhost",5500,"datos.json");