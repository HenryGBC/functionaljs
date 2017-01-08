 "use strict";
 let basket = [
     { type: 'F', units: 3, price: 500 },
     { type: 'F', units: 2, price: 750 },
     { type: 'H', units: 1, price: 250 },
     { type: 'F', units: 1, price: 320 },
     { type: 'H', units: 1, price: 100 },
 ]




 //Otro

 const users = [
     { gender: 'F', age: 32 },
     { gender: 'F', age: 26 },
     { gender: 'M', age: 28 },
     { gender: 'F', age: 16 },
     { gender: 'M', age: 46 },
 ]


 let filterWith = type => {
     return e => {
         return type !== void 0 ? e.type === type : true;
     }
 }

 let zip = (fn, mn, gn, b) => {
     return data => {
         return data
             .filter(fn)
             .map(mn)
             .reduce(gn, b);
     }

 }
 let costTest = basket
     .filter(filterWith('F'))
     .map((element) => {
         return element.price * element.units; })
     .reduce((total, value, indice, v) => {
         return total + value;
     }, 0);



 let food = filterWith('F');
 let home = filterWith('H');
 let any = filterWith();

 let mapBasket = element => element.price * element.units;
 let add = (total, value) => {
     return total + value };
 let costF = zip(food, mapBasket, add, 0);
 let costH = zip(home, mapBasket, add, 0);
 let costA = zip(any, mapBasket, add, 0);


 console.log(costF(basket));
 console.log(costH(basket));
 console.log(costA(basket));


 /**
  * Function Pluck que sirve para obtener una columna de un array
  */

 const get = k => {
     return o => {
         return o[k];
     }
 }

 const pluck = (k) => {
     return data => {
         return data
             .map(get(k));
     }
 }
 const types = pluck('type');
 const units = pluck('units');
 const prices = pluck('price');
 console.log(
     types(basket),
     units(basket),
     prices(basket)
 )



 /**
  *  Diseñas las funciones first y last que reciben una funcion como primer parametro y un
  * oconjnto indefinido de otros n parámetros 
  * First: debe devolver otra función resultado
  * de evaluar en sus n primerps parámetros.
  * Last: hace lo mismo per la funcion devuelta es el resultado de evaluar fn en su n utimos parametros
  * 
  */

 const first = (fn, ...args) => {
     return (...rest) => {
         return fn.apply(null, args.concat(rest));
     }
 }

 const last = (fn, ...args) => {
     return (...rest) => {
         return fn.apply(null, rest.concat(args));
     }
 }

 const ip = (a, b, c, d) => [a, b, c, d];
 const ipLocal = first(ip, 192, 168);
 const ipGate = last(ip, 1, 1);


 console.log(ipLocal(12, 45));
 console.log(ipGate(15, 29));
