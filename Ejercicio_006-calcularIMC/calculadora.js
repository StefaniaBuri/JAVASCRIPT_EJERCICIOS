 // calcular IMC
 function calcular(peso, altura) {
    let nombre = document.getElementById("iNombre").innerHTML= nombre;
    let altura = document.getElementById("iAltura").innerHTML= altura;
    let peso = document.getElementById("iPeso").innerHTML= peso;
    let imc = peso/((altura/100)**2);
    return imc;
}
alert("Tu indices es: "+ calcular());
