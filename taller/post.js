const players = [
	{nombre: "Ronaldo", posicion: "DEL", goles: 5, pj: 10 },
	{nombre: "Maldonado", posicion: "DEL", goles: 7, pj: 10 },
	{nombre: "Maldini", posicion: "DEF", goles: 4, pj: 10 },
	{nombre: "Henry", posicion: "MED", goles: 3, pj: 10 },
	{nombre: "Ronaldinho", posicion: "MED", goles: 8, pj: 10 },
	{nombre: "Messi", posicion: "DEL", goles: 9, pj: 10 },
]



const delanteros = players
		.filter(player =>  player.posicion === 'DEL' );

//console.log(delanteros)

players.map(player =>  {
	player.prom = player.goles / player.pj;
	return player;
});

//console.log(players);


const scores = players
		.filter(player => player.posicion == 'DEL')
		.map(player => player.goles)
		.reduce((total, value, index, array) => total + value, 0 );


console.log(scores);
/*Not currying*/
const total1 = (name, position, score) => "El " + position + " " + name + " hizo " + score + " goles";
console.log(total1("Messi", "Delantero", "5" ));

/*Aplicando Currying*/
const total = 
		name =>
			position =>
				score => "El " + position + " " + name + " hizo " + score + " goles";


console.log(total("Messi")("Delantero")("5"));


const counter = (() => {
	let privateCounter = 0;
	const changeBy = val => privateCounter += val;

	return {
		increment: () => changeBy(1),
		decrement: () => changeBy(-1),
		value: () => privateCounter
	}
})();


console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1