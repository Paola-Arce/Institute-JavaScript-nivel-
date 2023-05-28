
//* Conversiones es una situación tener un valor de un tipo para necesitar un valor de otro tipo.
//* Ejemplo más simple cuando tenemos un número, pero necesitamos agregarlo a algún texto. En JS ocurre de forma automática es situaciones especificas, pero se puede usar funciones como Strig() o Number(). Estas funciones aceptan argumentos entre parentesis y (si es posible) los convertira a un tipo de dato

const num = 42;
const strFromNum1 = String(num);
const strFromNum2 = String(8);
const strFromBol = String(true);
const numFromStr = Number("312");
const boolFromNumber = Boolean(0); 

//* La mayoría de estas conversiones son sencillas, pero algunas pueden ser un poco confusas 