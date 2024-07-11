/* PELICULA:
- Titulo
- Duración
- Genero
- Clasificacion (1-5)

Creamos 3 instancias (objetos)
Obtener las peliculas del genero Terror ordenadas por clasificacion genero por filter
*/

class Pelicula {
    constructor (titulo, duracion, genero, clasificacion) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.genero = genero;
        this.clasificacion = clasificacion;
    }
}

let peli1 = new Pelicula ("Atrápame si puedes",140, "Drama", 4);
let peli2 = new Pelicula ("El bueno, el feo y el malo", 161, "Western", 5);
let peli3 = new Pelicula ("Seven", 127,"Terror",5);
let peli4 = new Pelicula ("Bienvenidos a Zombieland", 84, "Terror", 4);
let peli5 = new Pelicula ("Grease", 110, "Musical", 3);

let peliculas = [];
peliculas.push(peli1,peli2,peli3,peli4,peli5);

//Filtramos para obtener las de Terror
let terror = peliculas.filter(pelicula => pelicula.genero === "Terror");
//console.log(terror);

// Ordenamos
terror.sort((p1,p2) => p1.clasificacion-p2.clasificacion);
//console.log(terror);

//OTRA OPCION en unica linea
let terror2 = peliculas
    .filter(pelicula => pelicula.genero === "Terror")
    .sort((p1,p2) => p1.clasificacion-p2.clasificacion);
//console.log(terror2);
