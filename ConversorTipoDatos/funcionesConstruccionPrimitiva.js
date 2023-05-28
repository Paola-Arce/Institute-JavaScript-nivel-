//* FUNCIONES DE TIPO CONSTRUCTOR (otra forma de crear variables) utilizado en JS para la programación orientada a objetos, pero también pueden ser utlizadas para crear datos primitivos. Las siguientes funciones devolverá datos primitivos de un tipo determinado (BOOLEAN, NUMBER, BIGINT Y STRING) la mayoría se pueden llamar sin argumentos 

//! la función String: por defecto creará y devolverá un string vacía primitiva "";
//! la funnción Number: por defecto creará y devolverá un 0;
//! la función Boolean: por defecto creará y devolverá el valor false;

//! Función BigInt, este requiere que le pases algún valor inicial

const str = String();
const num = Number();
const bool = Boolean();

console.log(str); // empty string
console.log(num); // 0
console.log(bool); // false

const big1 = BigInt(89);
const big2 = BigInt();

console.log(big1) // 89n
console.log(big2) // Error: can't convert undefined to BinInt

//? ESTE TIPO DE FUNCIONES SE USAN PARA CONVERSIONES DE TIPO DE DATOS.