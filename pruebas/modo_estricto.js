"use strict" //Aplicado a ámbito global provoca errores de validación
//x=1;//En modo estricto provoca error
let x=1;
function prueba() { 
    //nombre = "N1";//En modo estricto provoca error
    let nombre = "N1";
    console.log(nombre);
}
prueba();
x="dos";