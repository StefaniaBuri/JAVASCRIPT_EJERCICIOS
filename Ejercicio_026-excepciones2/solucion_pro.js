const paises = ["Japón", "Chile", "Perú", "Francia", "Kenia"];
const MINIMO_VIAJEROS = 1;
const MAXIMO_VIAJEROS = 4;
const MINIMO_DIAS = 5;
const MAXIMO_DIAS = 10;
function organizarViaje(pais, pax, dias) {
    let errores = [];
    if (!((paises.map(pais => pais.toUpperCase())).includes(pais.toUpperCase()))) {
        errores.push("El destino no existe en el catálogo");
    }
    if (pax < MINIMO_VIAJEROS || pax > MAXIMO_VIAJEROS) {
        errores.push("El número de viajeros no es correcto");
    }
    if ((dias < MINIMO_DIAS) || (dias > MAXIMO_DIAS)) {
        errores.push("El número de días no es correcto");
    }
    if (errores.length > 0) {
        throw new Error(errores.join("*"));
    }
    return `Se ha reservado un viaje a ${pais} de ${dias} días para ${pax} personas`;
}

try {
    const resultado = organizarViaje("Suiza", 2, 1);
    console.log(resultado);
} catch (e) {
    console.error(e.message);
}