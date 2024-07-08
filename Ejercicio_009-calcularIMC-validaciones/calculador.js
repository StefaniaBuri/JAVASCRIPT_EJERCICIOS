var nombreUsuario;
const LONGITUD_MINIMA_NOMBRE = 3;
const EDAD_MINIMA = 18;
const ALTURA_MINIMA =  100;
const ALTURA_MAXIMA = 250;
const PESO_MINIMO = 40;
const PESO_MAXIMO = 200;
const NUMERO_DECIMALES = 2;
/*document.querySelector("#bValidar").addEventListener("click", function() {
    alert("Validando");
}) esta funcion va a sustituir al onclick, id="bValidar"*/


function comenzarCalculoIMC() {
    let hayError = validar();
    if (!hayError) {
        let altura = document.querySelector("#altura").value;
        let peso = document.querySelector("#peso").value;
        let imc = calcularIMC(peso,altura);
        escribirIMC(imc.toFixed(NUMERO_DECIMALES));
    }
}

//FUNCION QUE REALIZA VALIDACIONES
function validar() {
    let hayError = true;
    let nombre = document.querySelector("#nombre").value;
    let edad = document.querySelector("#edad").value;
    let altura = document.querySelector("#altura").value;
    let peso = document.querySelector("#peso").value;
    //calcular(peso, altura);

    if (!(nombre.trim().length > LONGITUD_MINIMA_NOMBRE)) {
        escribirError("El nombre es demasiado corto");
    } else if (edad < EDAD_MINIMA) {
        escribirError("Debes ser mayor de edad"); //NO ENTRA X AKI
    } else if (altura < ALTURA_MINIMA || altura > ALTURA_MAXIMA) {
        escribirError("La altura no es correcta");
    } else if (peso < PESO_MINIMO || peso > PESO_MAXIMO) {
        escribirError("El peso no es el correcto");
    } else {
        hayError = false;
        escribirError("");
    }
    return hayError;

}

function calcular(peso,altura) {
    alert(calcularIMC(peso,altura));
}

function escribirError(mensaje) {
    document.querySelector("#error").textContent=mensaje;
}

function escribirIMC(mensaje) {
    document.querySelector("#resultado").textContent=mensaje;
}