class Serie {
    constructor(titulo, numeroTemporadas) {
        this.titulo = titulo;
        this.numeroTemporadas = numeroTemporadas;
    }
    toString() {
       // return "***";
        return this.titulo + ":" + this.numeroTemporadas;
    }
}

let serie1 = new Serie ("Friends", 4);
let serie2 = new Serie ("Sheldon", 8);
let series = [serie1,serie2];

console.log(series);
let todas = series.join("---");
console.log(todas);
