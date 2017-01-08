 "use strict";
 /**
  * Usar función reduce (la que no viene por defecto)
  */

 let reduce = (v, fn, b) => {
     return reduceAux(v, fn, b, 0, b);
 }

 let reduceAux = (v, fn, b, p, a) => {
     return p > v.length - 1 ? a : reduceAux(v, fn, b, p + 1, fn(a, v[p], p, v))
 }

 let map = (v, fn) => {
     return reduce(v, (a, e, p, v) => {
         return a.concat(fn(e, p, v))
     }, [])
 }

 let filter = (v, pn) => {
     return reduce(v, (a, e, i, v) => {
         return pn(e, i, v) ? a.concat(e) : a;
     }, [])
 }
 let add = (x, y) => {
     return x + y; }
 let mul = (x, y) => {
     return x * y; }
 let odd = (x, y) => {
     return !y; }
 let cnt = (x, y) => {
     return y + 1; }


 console.log(
     reduce([1, 2, 3, 4, 5], add, 0),
     reduce([1, 2, 3, 4, 5], mul, 1),
     reduce([1, 2, 3, 4, 5], odd, true),
     reduce([1, 2, 3, 4, 5], cnt, 0)
 );

 console.log(map([1, 2, 3, 4], x => {
     return x * x }))
 console.log(filter([1, 2, 3, 4, 5], x => {
     return x % 2 === 0 }))
 console.log(filter([1, 2, 3, 4, 5], x => {
     return x % 2 !== 0 }))
