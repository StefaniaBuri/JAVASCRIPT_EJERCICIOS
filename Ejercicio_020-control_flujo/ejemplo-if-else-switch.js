let salario = 10_000;

if (salario < 20_000) {
    //console.log("Salario insuficiente");
} else if (salario < 30_000) {
   // console.log("No está mal");
} else {
    //console.log("Está bien");
}

/***************
 Ejercicio: Tiene que ser mayor de edad, estar soltero, hablar ingles, tener permiso de conducir y 
 disponer de movilidad geografica.
*/
//*************** 
let edad = 50;
let estadoCivil = "Soltero";
let idiomas = ["Inglés", "Español", "Francés", "Chino"];
let permisoConducir = true;
let movilidadGeografica = false;

if ((edad >= 18) && (estadoCivil === "Soltero") && (idiomas.includes("Inglés")) && permisoConducir && movilidadGeografica) {
    console.log(" Es el candidato perfecto");
} else {
    console.log("No cumple los requisitos");
}

//OTRA OPCION
let esMayorDeEdad = edad >=18;
let esSoltero = estadoCivil==="Soltero";
let sabeIngles = idiomas.includes("Inglés");

if (esMayorDeEdad && esSoltero && sabeIngles && permisoConducir && movilidadGeografica) {
    console.log("Adelante");
} else {
    console.log("Descartado");
}

// SWITCH
let tipoContrato = 2;

if(tipoContrato ==1) {
    console.log("Tipo 1");
} else if (tipoContrato ==2) {
    console.log("Tipo 2");
} else if (tipoContrato==3) {
    console.log("Tipo 3");
} else {
    console.log("No sé el tipo de contrato");
}


switch (tipoContrato) {
    case 1:
        console.log("Tipo 1");
        break;
    case 2:
        console.log("Tipo 2");
        break;
    case 3: 
        console.log("Tipo 3");
        break;
    default:
        console.log("No sé el tipo de contrato");
}