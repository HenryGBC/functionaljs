 "use strict";
var _ = require('lodash')

/* Not Currying

let dragon = (name, size, element) =>
    name + 'is a '+
    size + ' dragon that breathes ' +
    element +  '!'
 */   
    
    
/* Currying*/

let dragon = 
    name => 
        size =>
            element => 
                name + 'is a '+
                size + ' dragon that breathes ' +
                element +  '!'
                
                
console.log(dragon('Fluffykins')('tiny')('lighting'))



/*********   **********************/

let dragons = [
    {name: 'Fluffykins', element: 'lighting'},
    {name: 'noomi',      element: 'lighting'},
    {name: 'karo',       element: 'fire'},
    {name: 'doomer',     element: 'timewarp'},
]


let hasElement =
    _.curry((element, obj) => obj.element === element)

let lightingDragons = 
    dragons.filter(hasElement('lighting'))
    
    
console.log(lightingDragons);