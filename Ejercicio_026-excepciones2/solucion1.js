const paises = ["España", "Reino Unido", "Noruega", "Dinamarca", "Estados Unidos"];
const minViajeros = 1;
const maxViajeros = 4;
const MIN_DIAS = 5;
const MAX_DIAS = 10;


function organizarViaje(pais, viajeros, dias) {
   
    //OPCION CORTA : if (!((paises.map(pais => pais.toUpperCase())).includes(pais.toUpperCase()))) 
    //OPCION PASO A PASO:
    const paisesMayusc = paises.map(pais => pais.toUpperCase());
    const paisBuscadoMayusc = pais.toUpperCase();

        if (!paisesMayusc.includes(paisBuscadoMayusc)) {
            throw new Error("El pais introducido no existe en el catálogo");
        }
        // else if (!(viajeros >= 1 && viajeros <=4)){
        if (viajeros < minViajeros || viajeros > maxViajeros ) {
            throw new Error("El numero de viajeros no es correcto");
        } 
        // if (!(dias >=5 && dias <= 10)) 
        if (dias < MIN_DIAS || dias > MAX_DIAS) {
            throw new Error("El numero de dias no es correcto");
        }
        return  `Se ha reservado un viaje a ${pais} de ${dias} días para ${viajeros} personas`;
    }

try {
    const resultado = organizarViaje("españa",4,5);
    console.log(resultado);
} catch (e) {
    console.error(e.message);
}
