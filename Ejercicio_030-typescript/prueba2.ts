class Ejemplo {
    nombre:string | undefined;
    altura: number | undefined;
    peso: number | undefined;
    constructor(nombre:string);
    constructor(nombre:string, altura:number);
    constructor(nombre:string, altura:number, peso:number)
    constructor(nombre:string, altura?:number, peso?:number) {
        this.nombre = nombre;
        this.altura = altura;
        this.peso = peso;
    }
}
new Ejemplo("");