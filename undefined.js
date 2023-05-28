//! UNDEFINED (indefinido) = tiene un solo valor (undefined). Es el valor predeterminado que tiene todas las variables después de una declación si no se les asigna ningún valor. También se puede asignar valor UNDEFINED a cualquier variable, pero no es aconsejable, ya que si se necesita marcar una variable para que no tenga ningún valor significa NULL

let declaraVar;
console.log(typeof declaraVar); /* undefined */

declaraVar = 23;
console.log(typeof declaraVar) /* number */

declaraVar = undefined;
console.log(typeof declaraVar) /* undefined*/

/*typeof puede también dar un valor undefined cuando se una variable inexistente como argumento*/
console.log(typeof rioGrande);
console.log(rioGrande); /*no dara un error rioGrande in no defined */ 

//? SYMBOL =  es un tipo de dato primitivo (agregado 2015) no tiene ningún valor literal y solo se puede crear mediante una función de contructor especial. Los simbolos son una forma de identificador que garantiza que sea único.