/*
Auteur: Vikki Dolt
Date: 20.12.2024
*/ 

import express from "express";
import { pokemons, getUniqueId, getPokemon, updatePokemon, removePokemon } from "../db/mock-pokemon.mjs";

const pokemonsRouter = express();

pokemonsRouter.get("/", (req, res) => {
    const message = "La liste des pokemons a bien été récupérée !";
    res.json({ message, data: pokemons });
});

pokemonsRouter.get("/:id", (req, res) => {
    const pokemonId = req.params.id;
    const pokemon = pokemons.find((pokemon) => pokemon.id == pokemonId);
    const message = `Le pokemon dont l'id vaut ${pokemonId} a bien été récupéré.`;
    res.json({message, data: pokemon});
});

pokemonsRouter.post("/", (req, res) => {
    const id = getUniqueId(pokemons);
    const createdPokemon = { ...req.body, ...{ id: id, created: new Date() } };
    pokemons.push(createdPokemon);
    const message = `Le pokemon ${createdPokemon.name} a bien été créé !`;
    res.json({message, data: createdPokemon});
});

pokemonsRouter.put("/:id", (req, res) => {
    const pokemonId = req.params.id;
    const pokemon = getPokemon(pokemonId);
    const updatedPokemon = {
    id: pokemonId,
    ...req.body,
    created: pokemon.created,
    };
    updatePokemon(pokemonId, updatedPokemon);
    const message = `Le pokemon ${updatedPokemon.name} dont l'id vaut ${pokemonId} a été mis à jour avec succès !`;
    res.json({message, data: updatedPokemon});
});

pokemonsRouter.delete("/:id", (req, res) => {
    const pokemonId = req.params.id;
    let deletedPokemon = getPokemon(pokemonId);
    removePokemon(pokemonId);
    const message = `Le pokemon ${deletedPokemon.name} a bien été supprimé !`;
    res.json({message, data: deletedPokemon});
});

export { pokemonsRouter };
