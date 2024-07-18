//FUNCION SIN ARGUMENTOS NI RETORNOS
function saludar() {
    console.log("Hola");
}
saludar();

//FUNCION CON ARGUMENTOS Y RETORNO
function sumar(numero1, numero2) {
    return numero1 + numero2;
}
const resultado = sumar(3, 7);
console.log(resultado);
sumar(8, 2);//Funciona pero no recogemos el resultado
console.log(sumar(3));

//FUNCIONES CON ARGUMENTOS CON VALOR POR DEFECTO
function elevar(base =2, exponenente =2) {
    return base ** exponente;

}
//console.log(undefined,3); // 2**3=8
//console.log(elevar(4,3)); //4**3=64
//console.log(elevar()); //2**2=4
//console.log(elevar(3)); //3**2=9


//ASIGNACION DE FUNCIONES A VARIABLES
let miFuncion = function() {
    //console.log("Funcion asignada a una variable");
}
miFuncion();

//USO DE LA PARTICULA THIS (CONSTRUCCION DE CLASES A TRAVES DE FUNCIONES)
function Alumno(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saluda = () => {
        //console.log("Hola, soy " + this.nombre + "y tengo: "+ this.edad);
    }
}
const alumno1 = new Alumno("Elena", 18);
alumno1.saluda();


//VARIABLE ARGUMENTOS --> ARRAY CON TODOS LOS ARGUMENTOS QUE LLEGAN
function hazAlgo (a1, a2, a3) {
    //console.log(arguments.length);
    //console.log(arguments[0]);
}
hazAlgo("Uno",2)

//PARAMETROS REST
function sumar(...sumando) { // ... significa que recibe numero indeterminado de argumentos
    /* OPCION 1
    let total = 0;
    sumando.forEach(numero => {
        total += numero;
    });
    return total; */

    //CORRECTO
    return sumando.reduce((x,y) => x + y);
}
console.log(sumar(1)); //1
console.log(sumar(3,4)); //7
console.log(sumar(2,4,5,6,7,8)); //32
console.log(sumar(2,4,"cinco",6,7,8)); //6cinco678




