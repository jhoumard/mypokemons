/*
Author: Amael Jampen
Date: 17.01.1025
 */


import express from "express";
import { Pokemon } from "../db/sequelize.mjs";
import { success } from "./helpers.mjs";

const pokemonsRouter = express();

// Obtenir la liste des pokemons.
pokemonsRouter.get("/", (req, res) => {
    Pokemon.findAll()
    .then(pokemons => {
        const message = "La liste des pokemons a bien été récupérée !";
        res.json(success(message, pokemons));
    })
    .catch(error => {
        const message = "Erreur 500: La liste des pokemons n'a pas pu être récupérée. Merci de réessayer plus tard.";
        res.status(500).json({ message, data: error });
    });
});

// Obtenir un pokemon en particulier.
pokemonsRouter.get("/:id", (req, res) => {
    const pokemonId = req.params.id;
    const pokemon = pokemons.find((pokemon) => pokemon.id === pokemonId);
    const message = `Le pokemon dont l'id vaut ${pokemonId} a bien été récupéré.`;
    res.json(success(message, pokemon));
});

// Ajouter un pokemon.
pokemonsRouter.post("/", (req, res) => {
// Création d'un nouvel id du pokemon

    const id = getUniqueId(pokemons);

// Création d'un objet avec les nouvelles informations du pokemon
    const createdPokemon = { ...req.body, ...{ id: id, created: new Date() } };

// Ajout du nouveau pokemon dans le tableau
    pokemons.push(createdPokemon);

// Définir un message pour le consommateur de l'API REST
    const message = `Le pokemon ${createdPokemon.name} a bien été créé !`;

// Retourner la réponse HTTP en json avec le msg et le pokemon créé
    res.json(success(message, createdPokemon));
});

// Modifier un pokemon.
pokemonsRouter.put("/:id", (req, res) => {

});

// Supprimer un pokemon.
pokemonsRouter.delete("/:id", (req, res) => {

});

export { pokemonsRouter };
