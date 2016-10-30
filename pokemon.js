class Pokemon{
	constructor({name, level}){
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
	constructor(...pokemons){
		super(...pokemons);
	}

	add({name, level}){
		let pokemon = new Pokemon({name, level});
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
	{name: 'Bulbasaur', level: 5},
	{name: 'Charizard', level: 7},
	{name: 'Weedle', level: 2},
	{name: 'Haunter', level: 3},
	{name: 'Gengar', level: 6},
	{name: 'Tangela', level: 16}
];

let pokemonsObj = pokemons.map(data => new Pokemon(data));

let lost = new PokemonList(...pokemonsObj.slice(0, 3));
let found = new PokemonList(...pokemonsObj.slice(3, 5));

lost.add(pokemons[5]);
lost.add(pokemons[6]);
lost.add(pokemons[7]);

found.add(pokemons[8]);
found.add(pokemons[9]);
found.add(pokemons[10]);

let foundedPokemon = lost.splice(2, 1);
found.push(...foundedPokemon);