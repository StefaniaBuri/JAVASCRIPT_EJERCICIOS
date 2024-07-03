 // calcular IMC
 function calcularIMC(peso, altura) {
    let imc = Math.round(peso/((altura/100)**2));
    return imc;
}