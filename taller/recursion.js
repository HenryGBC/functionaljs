 "use strict";

 /**
  * Factorial 
  */

 const factorial = n => n === 0 ? 1 : factorial(n - 1) * n;



 console.log('factorial(5)=', factorial(5));


 /**
  * Fibonacci
  */
 /**
 * En ES5 
	 var factorial = function (n) {
		return n === 0 ? 1 : factorial(n-1) * n;
	}
 */


 const fibonacci = n => n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);


 console.log('fibonacci(6)', fibonacci(6));



 /**
  * Calculo de la potencia
  */

 let pow = (b, e) => {
     return e === 0 ? 1 : pow(b, e - 1) * b;
 }

 console.log('pow(2,6)', pow(2, 6))



 /**
  * Even or odd without module
  */


 let even = (n) => {

     return n === 0 ? true : odd(n - 1);
 }

 let odd = (n) => {
     return n === 0 ? false : even(n - 1);
 }

 console.log('even(10)', even(10));

 console.log('odd(12)', odd(12))


 /**
  * Funcion recursiva que vuelva la suma de los n primeros numeros
  * naturales. Por Ejemplo addUp(3) = 1 + 2 + 3 =6
  */



 let addUp = (n) => {
     return n === 0 ? 0 : addUp(n - 1) + n;
 }

 console.log('addUp(5)', addUp(5));

 /**
  * Función que sume los digitos que tiene un numero entero n pasado 
  * como parametro, por ejemplo, digits(125) = 1 + 2 + 5 = 8
  */


 let digits = (n) => {
     return n < 10 ? n : digits(Math.floor(n / 10)) + n % 10;
 }


 console.log('digits(125)', digits(125));





 /**
  * Ordenación por insercción y función sort
  */
