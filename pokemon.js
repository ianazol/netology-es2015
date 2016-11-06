class Pokemon{
	constructor(name, level){
		this.name = name;
		this.level = level;
	}

	show(){
		console.log(`Pokemon name is ${this.name}, level - ${this.level}`);
	}

	valueOf(){
		return this.level;
	}
}

class PokemonList extends Array{
	add(name, level){
		let pokemon = new Pokemon(name, level);
		this.push(pokemon);
	}

	show(){
		for (let pokemon of this){
			pokemon.show();
		}
		console.log(`Pokemons count - ${this.length}`);
	}

	max(){
		let maxLevel = Math.max(...this);
		return this.find(element => element.level == maxLevel);
	}
}

const pokemons = [
	{name: 'Blastoise', level: 10},
	{name: 'Kakuna', level: 2},
	{name: 'Pikachu', level: 3},
	{name: 'Nidoran', level: 2},
	{name: 'Ninetales', level: 7},
];

let pokemonsObj = pokemons.map(data => new Pokemon(data.name, data.level));

let lost = new PokemonList(...pokemonsObj.slice(0, 3));
let found = new PokemonList(...pokemonsObj.slice(3, 5));

lost.add('Bulbasaur', 5);
lost.add('Charizard', 7);
lost.add('Weedle', 2);

found.add('Haunter', 3);
found.add('Gengar', 6);
found.add('Tangela', 16);

let foundedPokemon = lost.splice(2, 1);
found.push(...foundedPokemon);
