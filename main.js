/*let rosePrice = 8;
let lirioPrice = 10;
let tulipaPrice = 2;*/
const rosePrice = 8;
const lirioPrice = 10;
const tulipaPrice = 2;

let numberOfRose = 70;
let numberOfLirio = 50;
let numberOfTulipa = 120;

let roseValue = rosePrice * numberOfRose;
let lirioValue = lirioPrice * numberOfLirio;
let tulipaValue = tulipaPrice * numberOfTulipa;

let total = roseValue + lirioValue + tulipaValue;

console.log("ROSA: Precio Unitario : ", rosePrice ," Cantidad: ", numberOfRose," Valor: ", roseValue);
console.log("LIRIO: Precio Unitario : ", lirioPrice ," Cantidad: ", numberOfLirio," Valor: ", lirioValue);
console.log("TULIPAN: Precio Unitario : ", tulipaPrice ," Cantidad: ", numberOfTulipa," Valor: ", tulipaValue);
console.log("TOTAL: ", total)

numberOfRose = numberOfRose - 20;
numberOfLirio = numberOfLirio - 30;

roseValue = rosePrice * numberOfRose;
lirioValue = lirioPrice * numberOfLirio;
tulipaValue = tulipaPrice * numberOfTulipa;

total = roseValue + lirioValue + tulipaValue;


console.log("ROSA: Precio Unitario : ", rosePrice ," Cantidad: ", numberOfRose," Valor: ", roseValue);
console.log("LIRIO: Precio Unitario : ", lirioPrice ," Cantidad: ", numberOfLirio," Valor: ", lirioValue);
console.log("TULIPAN: Precio Unitario : ", tulipaPrice ," Cantidad: ", numberOfTulipa," Valor: ", tulipaValue);
console.log("TOTAL: ", total)


