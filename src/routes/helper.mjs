/*
* Auteur : Samuel Gergely
* Date : 20.12.2024
* Description : liste de pokemons et de dimensions de l'univer fictif "Pokemon"
* */

import { pokemons } from "../db/mock-pokemon.mjs";

const success = (message, data) => {
    return {
        message: message,
        data: data,
    };
};

const getUniqueId = (pokemons) => {
    const pokemonIds = pokemons.map((pokemon) => pokemon.id);

    const maxId = pokemonIds.reduce((a, b) => Math.max(a, b));

    return maxId + 1;
};

const getPokemon = (pokemonId) => {
    return pokemons.find((pokemon) => pokemon.id === pokemonId);
};

const removePokemon = (pokemonId) => {
    pokemons = pokemons.filter((pokemon) => pokemon.id !== pokemonId);
};

const updatePokemon = (pokemonId, updatedPokemon) => {
    pokemons = pokemons.map((pokemon) =>
        pokemon.id === pokemonId ? updatedPokemon : pokemon
    );
};

export { success, getUniqueId, getPokemon, updatePokemon, removePokemon };
