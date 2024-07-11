//DECLARACION DE UNA CLASE

class Vehiculo {
    constructor (nombre, precio, consumo) {
        //console.log("Constructor...");
        this.nombre = nombre; //atributos
        this.precio = precio;
        this.consumo = consumo;
    }
}

let jcCar = new Vehiculo("Seat Ibiza", 10_000, 5.3);
//jcCar.matricula = "M-7747-HH";
//console.log(typeof jcCar);
//console.log(jcCar.matricula);
let fpCar = new Vehiculo("Kia", 9_500, 6.4);
let larCar = new Vehiculo("Mercedes", 35_000, 8.5)

let vehiculos = [];
vehiculos.push(jcCar);
vehiculos.push(fpCar);
vehiculos.push(larCar);
//ORDENAMOS LISTA SEGUN CIERTOS CRITERIOS: +BARATO,
vehiculos.sort((v1,v2) => v1.precio-v2.precio); // debemos pasar 2 parametros para comparar
vehiculos.sort((v1,v2) => v1.consumo-v2.consumo);
//vehiculos.sort((v1,v2) => v1.precio-v2.precio).reverse(); ordenar al reves
//console.log(vehiculos);



/*let x = [3, -2, 5, 8, 4, 100];
x.sort((a,b) => a-b);
console.log(x);*/
