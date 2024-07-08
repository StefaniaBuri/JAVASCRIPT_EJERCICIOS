const valor = 10;


function comprobarSensores() {
    //if (comprobarSensor1() && comprobarSensor2()) {  Si la primera condicion es false, no se evalua
    if (comprobarSensor1() & comprobarSensor2()) { // Se evaluan las dos partes de la expresion con solo & si ponemos && solo evalua la 1º
        alert("Todo ok");
    } else {
        alert ("Hay error");
    }
}

function comprobarSensor1() {
    // return !(valorSensor1 < valor); OPCION 1 ALTERNATIVA

   let valorSensor1 = document.querySelector("#sensor1").value;
   let sensorOK;
   if (valorSensor1 < valor) {
    sensorOK = false;
    document.querySelector("#marcador1").classList.remove("verde");
    document.querySelector("#marcador1").classList.add("rojo");
   } else {
    sensorOK= true;
    document.querySelector("#marcador1").classList.remove("rojo");
    document.querySelector("#marcador1").classList.add("verde");
   }
    return sensorOK;
}

function comprobarSensor2() {
    //return !(valorSensor2<valor); SOLUCION ALTERNATIVA
    let valorSensor2 = document.querySelector("#sensor2").value;
    let sensorOK = valorSensor2<valor ? false : true;
    if(sensorOK) {
        document.querySelector("#marcador2").classList.remove("rojo");
        document.querySelector("#marcador2").classList.add("verde");
    } else {
        document.querySelector("#marcador2").classList.remove("verde");
        document.querySelector("#marcador2").classList.add("rojo");
    }
    return sensorOK;
}