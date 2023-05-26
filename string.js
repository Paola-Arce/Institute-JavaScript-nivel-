//* Las Cadenas (String)
//* Comillas Simples y dobles en las cadenas

let country = "México";
let continent = "America";

console.log(country);
console.log(typeof country);
console.log(continent);
console.log(typeof continent);

//* Comillas al interior del string

let message1 = "El barco 'Amazona' capoto cerca de la costa";
let message2 = 'El verano es "más largo" cada año';

console.log(message1);
console.log(message2);

//* utlizar el mismo tipo de comillas dentro del string

let año = "El proposito de este \"Año es :\" encontrar trabajo y estudiar para las oposiciones";
let semana = 'La creación de un \'itinerario\' para crear un hábito de estudio y trabajo';

console.log(año);
console.log(semana);

let path = "C:\\Windows"
console.log(path);

//* Los string las operaciones aritméticas ( + , - , / ), por lo general terminara en error (NaN)

let path1 = "C: \\ Windows" - "Windows";
console.log(path1); // NaN

let test = "100" - "10";
console.log(test); // 90
console.log(typeof test);

//* pero si a esto le agregamos un + nos tomara como otro string 

let path2 = "C:\\" + "Windows";
console.log(path2);

let test1 = "1000" + "20"
console.log(test1)
console.log(typeof test1)

//* Interpolación de cadenas trata a los string como una plantilla, donde se puede colocar valores en lugares seleccionados, como los que se toman de las variables

let ciudad = "chillán";
let region = "ñuble";
let sentencia =  `La ciudad de ${ciudad} se encuentra en la región de ${region}`;
console.log(sentencia)

//*METODOS Y AUTOBOXING
//*Métodos = tipo especial de funcion que pertenece a un objeto. LOS OBJETOS SON TIPOS DE DATOS COMPLEJOS, QUE PUEDEN CONSTAR DE MUCHOS VALORES(almacenados en propiedades) y métodos. SI SE DESEA LLAMAR A UN MÉTOOD DE UN OBJETO, ESCRIBE EL NOMBRE DEL MÉTODO DESPUÉS DE UN PUNTO.
//* Todos los tipos primitivos como NUMBER, BOOLEAN, BIGINT O STRING tiene objetos correspondientes a los que se pueden convertir. Cada uno de estos objetos tendrá metodos diseñados para un tipo de dato especifico 

console.time();
console.log("Aprendiendo JS");
console.timeEnd();// dara default: 1ms - temporizador finalizado

//* AUTOBOXING Si aparece un punto después de un literal que representan un tipo primitivo, o después de la variable que contiene este tipo de datos, el interprete de JS intanta tratar este valor como objeto y no como dato primitivo. CON ESTE PROPOSITO CONVIERTE AL DATO PRIMITIVO EN EL OBJETO CORREPONDIENTE SOBRE LA MARCHA que tiene los métodos apropiados 

let river = "Gualdaquivir";
let character = river.charAt(10)
console.log(character)

//? Explicación del ejemplo: la variable (river), almacena el dato primitivo String. En la siguiente linea, nos referimos a esta variable, escribimos un punto después de su nombre y el nombre de uno de los métodos (charAt = un método del objeto de la clase string). Aunque el dato primitivo no contiene métodos a los que se pueda llamar, el interprete convierte tempramente este valor en un objeto adecuado que ya tiene dichos métodos. (charAt) al que ahora llamamos. El método opera en una cadena colocada originalmente en la variable RIVER y devuelve una sola letra desde la posición especifica (las letras se cuentan a partir de 0).

//* MÉTODOS DE CADENAS COMUNMENTE UTLIZADOS.

let str = "java script lenguaje de programacion";

//! length = propiedad que devuelve el número de caracteres de una cadena.

console.log(str.length); /*36 caracteres*/

//! charAt = método que devuelve el carácter en la posición "Index" en las cadenas 

console.log(str.charAt(7));

//! slice(beginIndex, [opcional] endIndex) = método que devuelve una nueva cadena que crea a partir de las caracteres entre beginIndex(incluido) y endIndex(excluido); si se omite endIndex, entonces la nueva cadena es desde beginIndex hasta el final de la cadena 

console.log(str.slice(20, 31)); /*de program */
console.log('ahora'.slice( 3 )) /* ra */

//! split(separator, [opcional] limit) = método que divide la cadena en subcadena cada vez que se encuentra un separador en esa cadena y devuelve una array de esa subcadena, mientras que un limite opcional (limit) limita el número de subcadena añadidas a las lista

console.log(str.split(" ")) /* ["java" "script" "lengaje" "de" "programacion"] */
console.log('1234.432.453.1'.split(' . ')) /*Aqui si entre la comilla simple pones un espacio, no dara un array de un strig ["1234.432.453.1"]*/
console.log("1234.432.453.1".split(".")) /*mostrara un array de 4 elementos (string) ["1234", "432", "453", "1"] */
console.log("hipopotamo".split("")) /*Aqui cada palabra de un array ["h", "i", "p", "o","p","o","t", "a", "m", "o"] */