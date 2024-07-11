
// ----  --  CONSTRUYENDO ARRAY  --  -----

let dias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sabado","Domingo"];
/*console.log(dias[0]); //lunes  :mostrar elemento primera posicion
console.log(dias.length); //longitud 7
console.log(dias[dias.length-1]); //domingo : mostrar ultimo elemento array
console.log(dias[7]); // undefined
dias[6]="sunday"; // modificando un elemento posicion 6
console.log(dias[dias.length-1]); //sunday
dias[7]="otro"; //agregando un nuevo elemento en posicion 7
console.log(dias[7]); //mostrando otro
dias[20]="veinte"; //agregando un nuevo elemento posicion 20
console.log(dias[20]); //veinte
console.log(dias[19]); //undefined
console.log(dias.length); //21 */

// -------- RECORRER ARRAYS --------------

// *********** Bucle FOR ***********
/*for (let i=0; i<dias.length; i++) {
    console.log(`DIA: ${dias[i]}`);
}*/

//******* Bucle forEach **********
/*dias.forEach(mostrar);
function mostrar(d)
{
    console.log(d.toUpperCase());
}*/

//dias.forEach(dia => console.log(`Day:${dia}`));

//Recorremos el array con un foreach - función anónima
//dias.forEach(function(d) {console.log(d.toLowerCase())});

//Recorremos el array con un foreach - función flecha
//dias.forEach(d => {console.log(d.replaceAll('a','@'))});

//Recorremos el array con un foreach - función flecha
//dias.forEach(d => console.log(d.replaceAll('e','3')));

//EJEMPLO
let nombres = Array("Pedro","Anna","Arturo","Susana");
nombres[nombres.length]="Victor";
nombres.push("Nía");

//nombre.forEach((nombre) => console.log(nombre.toUpperCase()));

//---------  METODOS --------------

// ******* FILTER: devuelve elementos que cumplen condicion ******
let resultado = 
    nombres.filter((nombre)=> nombre.length>4 && nombre.toUpperCase().includes('A'));
//console.log(resultado);

let nombresEmpiezanPorA = nombres.filter((nombre) => nombre.startsWith('A'));

let nombreMasCuatro = nombres.filter(nombre => nombre.length>4);
//console.log(nombreLongitud);

let nombreMasCuatroLetras = nombres.filter(nombre => (nombre.length>4 && nombre.toUpperCase().includes('A')));
//console.log(nombreMasCuatroLetras);

// ***** MAP *******

//OBTENER ARRAY MAYUSCULAS
let nombresMayusculas = nombres.map(nombre => nombre.toUpperCase());
//console.log(transformado);

// Obtener una copia del array sustituyendo las 'a' por '@'
let nombresConArroba = nombres.map(nombre => nombre.replaceAll('a','@'));
//console.log(nombresConArroba);


//Dado el array de nombres en una unica linea vamos a cambiar las 'n' por 'N' y obtener un array con los nombres de menos de 4 caracteres
let cambio = nombres.map(nombre => nombre.replaceAll('n','N')).filter(nomb => nomb.length<5);
//console.log('resultado',cambio);


// ******** FIND : devuelve primer elemento que cumple condicion *******
let find = nombres.find(nombre => nombre.length < 4);
//console.log(find); // Nia

// ******** SORT: ordena *******
let numeros = [3, 8, 1, -5, 3];
let numerosOrdenados = numeros.sort(compararNumeros);
//console.log(numerosOrdenados);

function compararNumeros(n1, n2) {
    return Math.abs(n2)-Math.abs(n1);
}


// ********* SOME: indica si hay elementos que cumplen una condicion ******
let nombresLargos = nombres.some(nombre => nombre.length>10);
//console.log(nombresLargos); // false


let estaciones = ["Primavera", "Verano", "Otoño","Invierno"];
//console.log(estaciones);
//estaciones.forEach(estacion => console.log(estacion.toUpperCase()));
let estacionesLargas = estaciones.filter(estacion => estacion.length>6);
console.log(estacionesLargas);