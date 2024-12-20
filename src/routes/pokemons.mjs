/*
* Auteur : Samuel Gergely
* Date : 20.12.2024
* Description : liste de pokemons et de dimensions de l'univer fictif "Pokemon"
* */

import express from "express";
import { pokemons } from "../db/mock-pokemon.mjs";
import { success, getUniqueId, getPokemon, updatePokemon, removePokemon } from "./helper.mjs";

const pokemonsRouter = express();

pokemonsRouter.get("/", (req, res) => {
    const message = "La liste des pokemons a bien été récupérée !";
    res.json({ message, data: pokemons });
});

pokemonsRouter.get("/:id", (req, res) => {
    const pokemonId = req.params.id;
    const pokemon = pokemons.find((pokemon) => pokemon.id === pokemonId);
    const message = `Le pokemon dont l'id vaut ${pokemonId} a bien été récupéré.`;
    res.json(success(message, pokemon));
});

pokemonsRouter.post("/", (req, res) => {
    const id = getUniqueId(pokemons);
    const createdPokemon = { ...req.body, ...{id: id, created: new Date()}}
    pokemons.push(createdPokemon);
    const message = `Le pokemon ${createdPokemon} a bien été crée !`;
    res.json(success(message, createdPokemon));
});

pokemonsRouter.put("/:id", (req, res) => {
    const pokemonId = req.params.id;
    const pokemon = getPokemon(pokemonId);
// Mise à jour du produit
// A noter que la propriété 'created' n'étant pas modifiée, sera conservée telle quelle.
    const updatedPokemon = { id: pokemonId, ...req.body, created: pokemon.created};
    updatePokemon(pokemonId, updatedPokemon);
// Définir un message pour l'utilisateur de l'API REST
    const message = `Le pokemon ${updatedPokemon.name} dont l'id vaut ${pokemonId} a été mis à jour avec succès !`;
// Retourner la réponse HTTP en json avec le msg et le produit créé
    res.json(success(message, updatedPokemon));
});

pokemonsRouter.delete("/:id", (req, res) => {
    const pokemonId = req.params.id;
    let deletedPokemon = getPokemon(pokemonId);
    removePokemon(pokemonId);
// Définir un message pour le consommateur de l'API REST
    const message = `Le pokemon ${deletedPokemon.name} a bien été supprimé !`;
// Retourner la réponse HTTP en json avec le msg et le produit créé
    res.json(success(message, deletedPokemon));
});

export { pokemonsRouter };
