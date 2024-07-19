class ErrorViaje extends Error {
    constructor() {
        super();
        this.errores = [];
    }
    addError(e) {
        this.errores.push(e);
    }
}

const paises = ["Japón", "Chile", "Perú", "Francia", "Kenia"];
const MINIMO_VIAJEROS = 1;
const MAXIMO_VIAJEROS = 4;
const MINIMO_DIAS = 5;
const MAXIMO_DIAS = 10;
function organizarViaje(pais, pax, dias) {
    let errorViaje = new ErrorViaje();
    if (!((paises.map(pais => pais.toUpperCase())).includes(pais.toUpperCase()))) {
        errorViaje.addError(new Error("El destino no existe en el catálogo"));
    }
    if (pax < MINIMO_VIAJEROS || pax > MAXIMO_VIAJEROS) {
        errorViaje.addError(new Error("El número de viajeros no es correcto"));
    }
    if ((dias < MINIMO_DIAS) || (dias > MAXIMO_DIAS)) {
        errorViaje.addError(new Error("El número de días no es correcto"));
    }
    if (errorViaje.errores.length > 0) {
        throw errorViaje;
    }
    return `Se ha reservado un viaje a ${pais} de ${dias} días para ${pax} personas`;
}

try {
    const resultado = organizarViaje("Suiza", 2, 1);
    console.log(resultado);
} catch (e) {
    e.errores.forEach(e => {
        console.log(e.message);
    });
}