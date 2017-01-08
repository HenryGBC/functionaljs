 "use strict";

/**
 * Función recursiva mirror para determinar si un numero enterop n es 
 * simetrico a otro numero entero m Construye a partir de aquí la función palindrome
 * que indica si un numero es simetrico respecto a si mismo
 */


let reverse = (n) => {
    return reverseAux(n, 0);
}


let reverseAux = (n, a) => {
    return n ===0 ? a:reverseAux(Math.floor(n/10), a*10 + n%10);
}
let mirror = (n, m) => {
    return reverse(n) === m;
}

let palindrome = (n) => {
    return reverse(n) === n;
}
console.log('reverse(125)', reverse(125));
console.log('mirror(123, 321)', mirror(123, 321));
console.log('palindrome(12321)', palindrome(12321));





/**
 * Diseñe una función recursiva que dado un vector calcule la suma de
 * todos sus elementos. por ejemplo addV([1,2,3]) = 1 + 2 + 3 = 6
 */


let addVA = (v) => {
    let addVAFrom = (v, p) => {
        return p > v.length - 1 ? 0 : addVAFrom(v, p+1) + v[p];
    }
    return addVAFrom(v, 0);
}



let addVB = (v) => {
    let addVBUp = (v, p) => {
        return p === 0 ? v[p] : addVBUp(v, p-1) + v[p];
    }
    return addVBUp (v, v.length-1)
}


console.log(
    'addVA([1,2,3,4,5])=', addVA([1,2,3,4,5]),
    'addVB([1,2,3,4,5])=', addVB([1,2,3,4,5])
)




/**
 * función para recorrer un vector y ver si se encuentra el valor e
 */

let hasV = (v, e) => {
    return hasVFrom(v,e,0);
}

let hasVFrom = (v, e, p) =>{
    return p > v.length - 1 ? false: v[p] === e || hasVFrom(v, e, p+1)
}
console.log(
    'hasV([1,2,3,4,5], 4)=', hasV([1,2,3,4,5], 4),
    'hasV([1,2,3,4,5], 6)=', hasV([1,2,3,4,5], 6)
)



/**
 * Determinar si dentro de un vector v se encuentran al menos un
 * elemento repetido. Sin funciones auxiliares
 */

let repeatVAux = (v, p) => {
    return p > v.length -1 ? false: hasVFrom(v, v[p], p+1) || repeatVAux(v, p+1)
}

let repeatV = (v) => {
    return repeatVAux (v, 0)
}
console.log(
    'repeatV([1,2,3,4,5])=', repeatV([1,2,3,4,5]),
    'repeatV([1,2,3,4,5,3])=', repeatV([1,2,3,4,5,3])
)



/**
 * Diseñe una funcion recursiva [mirrorV] que determine si dos vectores son simetricos el uno con respecto
 * al otro, por ejemplo[1,2,3] es simetrico a [3,2,1] No pueden utilizarse funciones auxiliares
 * disponibles en el prototipo Array
 */

let reverseV = (v) => {
    return reverseVAux (v, 0, []);
}

let reverseVAux = (v, p, a) =>{
    return p > v.length -1 ? a:reverseVAux(v, p+1, [v[p]].concat(a));
}

let mirrorV = (v, w) => {
    return equals(v, reverseV(w), 0);
}

let equals = (v, w, p) => {
    return p > v.length -1 ? true:v[p] === w[p] && equals(v,w,p+1);
}

console.log(
    'mirrorV([2,4,6], [2,4,6])=', mirrorV([2,4,6], [2,4,6]),
    'mirrorV([2,4,6], [6,4,2])=', mirrorV([2,4,6], [6,4,2])
)


//Otra opción 


/**
 * Ordenación por insercción y función sort
 */

let insertV = (v, e) => {
    return insertVAux (v, e, 0, []);
};

let insertVAux = (v, e, p, a) => {
    return p > v.length - 1 ? 
           a.concat(e) : 
           v[p] < e ?
                insertVAux(v, e, p+1, a.concat(v[p]))  :
                insertVAux(v, v[p], p+1, a.concat(e))
}

let sortV = (v) => {
    return sortVAux(v, 0, []);
}

let sortVAux = (v, p, a) => {
    return p > v.length-1 ? a:sortVAux(v, p+1, insertV(a, v[p])) ;
}

console.log('insertV([3,1,2], 1)', insertV([3,1,2], 1));
console.log('sortV/[1, 3, 2, 4, 8, 1]', sortV([1, 3, 2, 4, 8, 1]));