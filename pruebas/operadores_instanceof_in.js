//operador instanceof nos dice si un objeto es instancia de una clase
let nombre = new String("n1");
console.log(typeof nombre);
if (nombre instanceof String) {
    console.log("Soy un string");//Es un String
}

//operador in, indica si un atributo está presente en un objeto
class Pelicula {
    constructor(titulo, duracion){
        this.titulo = titulo;
        this.duracion = duracion;
    }
}
let p1 = new Pelicula("Pelicula1",100);
console.log("titulo" in p1);//true
console.log("director" in p1);//false