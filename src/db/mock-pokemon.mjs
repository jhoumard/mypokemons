const pokemons = [
  {
    id: 1,
    name: "Bulbizarre",
    hp: 25,
    cp: 5,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    types: ["Plante", "Poisson"],
    created: new Date(),
    dimensionId: 1,
  },
  {
    id: 2,
    name: "Salamèche",
    hp: 28,
    cp: 6,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
    types: ["Feu"],
    created: new Date(),
    dimensionId: 2,
  },
  {
    id: 3,
    name: "Carapuce",
    hp: 21,
    cp: 4,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
    types: ["Eau"],
    created: new Date(),
    dimensionId: 3,
  },
  {
    id: 4,
    name: "Aspicot",
    hp: 16,
    cp: 2,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",
    types: ["Insecte", "Poisson"],
    created: new Date(),
    dimensionId: 2,
  },
  {
    id: 5,
    name: "Roucool",
    hp: 30,
    cp: 7,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",
    types: ["Normal", "Vol"],
    created: new Date(),
    dimensionId: 3,
  },
  {
    id: 6,
    name: "Rattata",
    hp: 18,
    cp: 6,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",
    types: ["Normal"],
    created: new Date(),
    dimensionId: 1,
  },
  {
    id: 7,
    name: "Piafabec",
    hp: 14,
    cp: 5,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png",
    types: ["Normal", "Vol"],
    created: new Date(),
    dimensionId: 2,
  },
  {
    id: 8,
    name: "Abo",
    hp: 16,
    cp: 4,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",
    types: ["Poisson"],
    created: new Date(),
    dimensionId: 3,
  },
  {
    id: 9,
    name: "Pikachu",
    hp: 21,
    cp: 7,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
    types: ["Electrik"],
    created: new Date(),
    dimensionId: 2,
  },
  {
    id: 10,
    name: "Sabelette",
    hp: 19,
    cp: 3,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",
    types: ["Normal"],
    created: new Date(),
    dimensionId: 1,
  },
  {
    id: 11,
    name: "Mélofée",
    hp: 25,
    cp: 5,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png",
    types: ["Fée"],
    created: new Date(),
    dimensionId: 1,
  },
  {
    id: 12,
    name: "Groupix",
    hp: 17,
    cp: 8,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",
    types: ["Feu"],
    created: new Date(),
    dimensionId: 3,
  },
];

const getUniqueId = () => {
  const pokemonsIds = pokemons.map((pokemon) => pokemon.id);
  const maxId = pokemonsIds.reduce((a, b) => Math.max(a, b));
  const UniqueId = maxId + 1;
  return UniqueId;
};

const updatePokemon = (pokemonId, updatedPokemon) => {
  const pokemonsUp = pokemons.map((pokemon) => pokemon.id == pokemonId ? updatedPokemon : pokemon);
  return pokemonsUp;
};

const getPokemons = (pokemonId) => {
  return pokemons.find((pokemon) => pokemon.id == pokemonId);
};

export { pokemons, getUniqueId, updatePokemon, getPokemons };
