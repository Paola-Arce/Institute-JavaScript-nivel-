//! Null = es un valor bastante especifico. El valor en si es primitivo, mientras que el tipo al que pertenece no es un tipo primitivo, como Number o underfined. Esta es una categoría separada, asociada con tipos complejos, como objetos
//? Null se usa para indicar que la variable no contiene nada y, en la mayoría de los casos, es una variable que pretende contener valores de tipo complejos 
//* Resumen: el valor undefined se asigna automáticamente a las variables no inicializadas, pero si queremos indicar explicitamente que la variable no contiene nada, se asigna el valor NULL. ADVERTENCIA cuando null se verifica con typoOf, devolverá "object". Esto es parte de un sistema de objetos mucho más complicado, pero por ahora, solo necesita saber que (typeOf null es igual a object)

let algoRaro;
console.log (algoRaro);
console.log(typeof algoRaro)

algoRaro = null;
console.log(algoRaro) /* null */
console.log(typeof algoRaro) /* object */