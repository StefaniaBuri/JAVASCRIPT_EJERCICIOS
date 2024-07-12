//Paises (Nombre, Continente);
//Actor (Nombre,Pais);
//Peliculas (Titulo, Director, ListadoActores);

//Crear objeto con 3 peliculas
let paises = [
    USA =
    {
        nombre: "Estados Unidos",
        continente: "América",
    },

    IT = 
    {
        nombre: "Italia",
        continente: "Europa",
    }
]

let actores = [
    Harrison =
    {
        nombre: "Harrison Ford",
        Pais: USA,
    },
    Carrie =
    {
        nombre: "Carrie Fisher",
        Pais: USA,
    },
    Clint =
    {
        nombre: "Clint Eastwood",
        Pais: IT,
    },
    Daniel =
    {
        nombre: "Daniel Craig",
        Pais: USA,
    }
]

let peliculas = [
    StarWarsIV =
    {
        titulo: "Star Wars Episodio IV",
        director: "George Lucas",
        ListadoActores: [Harrison, Carrie]
    },
    StarWarsV =
    {
        titulo: "Star Wars Episodio V",
        director: "George Lucas",
        ListadoActores: [Harrison, Carrie]
    },
    ElBueno =
    {
        titulo: "El bueno, el feo y el malo",
        director: "Sergio Leono",
        ListadoActores: [Clint]
    },
    Millenium =
    {
        titulo: "Millennium: Los hombres que no amaban a las mujeres",
        director: "David Fincher",
        ListadoActores: [Daniel]
    }
]

let starWarsPeli = [StarWarsIV,StarWarsV];
console.log(starWarsPeli);

