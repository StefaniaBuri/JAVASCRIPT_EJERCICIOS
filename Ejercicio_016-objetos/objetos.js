


//CREACION DE UN OBJETO CON SUS ATRIBUTOS
let enemigo1 = {
    sprite: "imagen.jpg",
    x: 0,
    y: 0, 
    estado: "formacion",

    //metodo
    saludar(nombre) {
        console.log("Hello " + nombre);
    }
};
 
console.log(typeof enemigo1); //object
enemigo1.saludar("Nombre1")


// CREACION DE UNA CLASE CON FUNCIONES
function Enemigo(sprite, x, y, estado) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.estado = estado;
    this.saludar = function(nombre) {
        console.log("Hi", nombre);
    }
}

let enemigo2 = new Enemigo("imagen.jpg", 1, 0, "enformacion"); //Instanciacion
console.log(typeof enemigo2); //object
enemigo2.saludar("Nombre2");


//CREACION DE UNA CLASE CON CLASS
class SuperEnemigo {
    constructor(sprite, x, y) {
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.estado = "enformacion";
    }
    saludar(nombre) {
        console.log("hello " + nombre);
    }
}

let enemigo3 = new SuperEnemigo("imagen.png", 1, 1);
console.log(typeof enemigo3); // object
enemigo3.saludar()


