//Higher-order functions

//For example filter

var animals = [
    {name:'Fluffykins', species: 'rabbit'},
    {name:'Caro',       species: 'dog'},
    {name:'Hamilton',   species: 'dog'},
    {name:'Harold',     species: 'fish'},
    {name:'Ursula',     species: 'cat'},
    {name:'Jimmy',      species: 'fish'},
]


//Lets go to filter 

/**
 * 
 * NOT 
 var dogs = [];

for (var i = 0; i<animals.length; i++) {
    if(animalas[i].species === 'dog')
    dogs.push(animals[i])
}
 */

/**
 * Using anoms function into filter
 */
var dogs = animals.filter(function(animal){
    return animal.species==='dog';
});


/**
 * Using isDog function 
 */
var isDog = function(animal){
    return animal.species==='dog';
}

var dogs2 = animals.filter(isDog);


console.log(dogs2);



/**
 * Map() Function
 */

var names = animals.map(function(animal){
    return animal.name;
});


console.log(names);