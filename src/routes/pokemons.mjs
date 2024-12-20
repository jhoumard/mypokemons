/*
Author : Jérémie Chevalley
Date : 20.12.2024
Description : Routes des pokémons
*/
import express from "express";
import { pokemons, getPokemon, removePokemon, updatePokemon } from "../db/mock-pokemon.mjs";
import { success, getUniqueId } from "./helper.mjs";

const pokemonsRouter = express();

pokemonsRouter.get("/", (req, res) => {
    const message = "La liste des pokemons a bien été récupérée !";
    res.json({ message, data: pokemons });
});

pokemonsRouter.get("/:id", (req, res) => {
    const pokemonId = req.params.id;
    const pokemon = pokemons.find((pokemon) => pokemon.id == pokemonId);
    const message = `Le pokemon dont l'id vaut ${pokemonId} a bien été récupéré.`;
    res.json(success(message, pokemon));
});

// Création d'un nouveau pokemon
pokemonsRouter.post("/", (req, res) => {
    const id = getUniqueId(pokemons);

    // Création d'un objet avec les nouvelles informations du pokemons
    const createdPokemon = { ...req.body, ...{ id: id, created: new Date() } };

    // Ajout du nouveau pokemon dans le tableau
    pokemons.push(createdPokemon);

    // Définir un message pour le consommateur de l'API REST
    const message = `Le pokemon ${createdPokemon.name} a bien été ajouté !`;
    
    // Retourner la réponse HTTP en json avec le msg et le pokemon ajouté
    res.json(success(message, createdPokemon));
});

// Mise à jour du pokemon
pokemonsRouter.put("/:id", (req, res) => {
    const pokemonId = req.params.id;
    const pokemon = getPokemon(pokemonId);

    // A noter que la propriété 'created' n'étant pas modifiée, sera conservée telle quelle.
    const updatedPokemon = {
        id: pokemonId,
        ...req.body,
        created: pokemon.created,
    };
    updatePokemon(pokemonId, updatedPokemon);

    // Définir un message pour l'utilisateur de l'API REST
    const message = `Le pokemon ${updatedPokemon.name} dont l'id vaut ${pokemonId} a été mis à jour avec succès !`;

    // Retourner la réponse HTTP en json avec le msg et le pokemon créé
    res.json(success(message, updatedPokemon));
});

export { pokemonsRouter };
