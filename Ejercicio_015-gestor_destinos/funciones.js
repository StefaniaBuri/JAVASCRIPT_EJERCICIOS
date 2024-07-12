let pokemons = new Array();

//Recuperar de localStorage los destinos almacenados
let pokesAlmacenados = localStorage.getItem("pokemons");
if (pokesAlmacenados!=null)
{
    pokemons = JSON.parse(pokesAlmacenados);
    crearListadoPoke(pokemons);
}
//Fin de recuperar de localStorage


document.querySelector("#iAgregar").addEventListener("click", (event) => {
    let nombre = document.querySelector("#iNombre").value;
    let tipo = document.querySelector("#iTipo").value;
    let descripcion = document.querySelector("#iDescripcion").value;
    let foto = document.querySelector("#iFoto").value;
    let pokemon = {
        nombre: nombre,
        tipo: tipo,
        descripcion: descripcion,
        foto: foto
    }
    pokemons.push(pokemon);
    crearListadoPoke(pokemons);
});

function crearListadoPoke(pokemons) {
    let htmlPoke = "";
    pokemons.map((poke) => {
        htmlPoke += `
        <div class="poke">
            <div class="nombre-poke">${poke.nombre}</div>
            <div class="tipo-poke">Tipo: ${poke.tipo}</div>
            <div class="descripcion-poke">Descripción: ${poke.descripcion}</div>
            <div class="foto-poke">
               <img src="${poke.foto}">
            </div>
        </div>`;

    });
    document.querySelector("#pokemon").innerHTML=htmlPoke;
    document.querySelector("#iNombre").value="";
    document.querySelector("#iTipo").value="";
    document.querySelector("#iDescripcion").value="";
    document.querySelector("#iFoto").value="";
}

// Guardar los pokemon en localStorage
document.querySelector("#Guardar").addEventListener("click",guardar);

function guardar() {
    let strPokemon = JSON.stringify(pokemons);
    localStorage.setItem("pokemons",strPokemon);
}
//Fin de Guardar Pokemons