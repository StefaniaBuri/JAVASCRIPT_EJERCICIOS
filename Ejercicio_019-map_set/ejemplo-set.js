let frutasVerano = new Set(["Melón", "Sandía", "Higo", "Nectarina", "Naranja"]);
let frutasInvierno = new Set(["Fresa", "Naranja", "Limón", "Mandarina"]);
//let frutasAnuales = frutasInvierno.intersection(frutasVerano); //No funciona en Node
for (fruta of frutasVerano) {
    console.log(fruta);
}