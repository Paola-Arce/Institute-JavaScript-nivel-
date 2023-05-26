let a = 10; //! decimal - defaul los que se usa de manera común
let b = 0x10;//! hexadecimal 
let c = 0o10;//! octal
let d = 0b10;//! binary

console.log(a); //* 10
console.log(b); //* 16 
console.log(c); //* 8
console.log(d); //* 2

//! numero en forma exponencial
let x = 9e3;
let y = 123e-5;

console.log(x); //*9000
console.log(y); //*0.00123

//! Valores espececiales 

//? Infinity
let e = 1 / 0;
console.log(e) 

//? -Infinity
let g = -Infinity;
console.log(g)

//? NaN No es tanto un valor, es un aviso que la acción númerica (o función matemática) no se puede realizar porque el argumento no es un número o no se puede convertir a un número.

let h = 1/0;
let j = -Infinity;

console.log(h); //* Infinity
console.log(j); //* -Infinity
console.log(typeof h); //* number
console.log(typeof j); //* number

let s = "definitivamente no es un numero";
let n = s * 10;
console.log(n); //* NaN
console.log(typeof n) //* number



