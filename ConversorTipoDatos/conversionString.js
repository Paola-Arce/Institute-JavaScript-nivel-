//* estas intentan cambiar directamente el valor de un string y esto se puede hacer para todo los tipos de datos primitivos 

let str = "text";
let strString =  String(str);
console.log(`${typeof str} : ${str}`);
console.log(`${typeof strString} : ${strString}`);


let num = 67;
let strNum = String(num);
console.log(`${typeof num} : ${num}`);
console.log(`${typeof strNum} : ${strNum}`);
console.log(`${typeof one} : ${str} `);

let bl = true;
let strBl = String(bl);
console.log(`${typeof bl} : ${bl}`);
console.log(`${typeof strBl} : ${strBl}`);

let bnr = 123n;
let strBnr =  String(bnr);
console.log(`${typeof bnr} : ${bnr}`);
console.log(`${typeof strBnr}: ${strBnr}`);

let un = undefined;
let strUn = String(undefined);
console.log(`${typeof un} : ${un}`);
console.log(`${typeof strUn} : ${strUn}`);

let n = null;
let strN = String(null);
console.log(`${typeof n} : ${n}`);
console.log(`${typeof strN} : ${strN}`)