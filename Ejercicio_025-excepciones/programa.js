//AÑADIR ARCHIVO TXT
const fs = require('node:fs');
function writeLog(logLine) {
    fs.appendFile('./log.txt', `${logLine}\n`, (err) => {
        if (err) {
            console.error(x);
            console.error(err);
        } else {
            console.log("Log escrito satisfactoriamente");
        }
    });
}



function sumar(sumando1, sumando2) {
    /* VALIDACIONES*/
    //1. Que recibamos 2 parametros
    if(sumando1===undefined || sumando2=== undefined){
        throw new Error("Los dos sumandos son obligatorios");
    }
    //2. Que los 2 argumentos sean numeros

    if(!(typeof sumando1 === 'number') || !(typeof sumando2 === 'number')) {
        throw new Error("Los dos sumando deben ser numero")
    }
    return sumando1 + sumando2
}
//console.log(sumar());// punto 1
//console.log(sumar(3,true));

//GESTIONAMOS EL ERROR
try {
     let resultado = sumar(8,false);
     console.log(resultado);   
    }
catch (e) {
    console.error(e.message);
} finally { // EL BLOQUE FINALLY siempre se ejecuta
    console.log("Hemos terminado el proceso");
}