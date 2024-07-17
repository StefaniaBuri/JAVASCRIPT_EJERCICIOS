function sumar(s1, s2){
    return s1+s2;
}
let resultado = sumar(3,4);
console.log(resultado);

let restar = function(r1, r2) {
    return r1-r2;
}
let resultado2 = restar(3,8);
console.log(resultado2);


let facturar = ()=>{
    console.log("Facturando...");
}
let reclamar = ()=>{
    console.log("Reclamar...");
}
function archivar(){
    console.log("Archivar...");
}

let flujoTrabajo = new Map([
    ["Facturar",facturar],
    ["Reclamar",reclamar],
    ["Archivar",archivar]
]);

flujoTrabajo.get("Facturar")();
flujoTrabajo.get("Reclamar")();
flujoTrabajo.get("Archivar")();