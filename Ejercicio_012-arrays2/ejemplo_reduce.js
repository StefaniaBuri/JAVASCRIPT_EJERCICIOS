let numeros = [3, 8, 1];

let resultado1 = numeros.reduce((n1, n2)=>n1+n2);
console.log(resultado1);//12

let resultado2 = numeros.reduce((n1, n2)=>n1>n2 ? n1 : n2);
console.log(resultado2);//8