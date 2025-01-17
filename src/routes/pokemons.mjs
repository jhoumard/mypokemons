/**
 * Nom : Thanavine Le Cocq
 * Date : 17.01.2025
 **/

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

// 1. completer la route qui permet d'obtenir un pokemon en particulier.
pokemonsRouter.get("/:id", (req, res) => {
    Pokemon.findByPk(req.params.id)
        .then(pokemon => {
            if (pokemon === null) {
                const message = "Le pokemon demandé n'existe pas. Veuillez de retenter avec un identifiant différent.";
                return res.status(404).json({ message });
            }
            const message = `Le pokemon dont l'id vaut ${pokemon.id} a bel et bien été récupéré.`;
            res.json(success(message, pokemon));
        })
        .catch(error => {
            const message = "Erreur 500: Le pokemon n'a pas pu être récupéré. Veuillez de retenter plus tard.";
            res.status(500).json({ message, data: error });
        });
});

// Ajouter un pokemon.
pokemonsRouter.post("/", (req, res) => {

});

// Modifier un pokemon.
pokemonsRouter.put("/:id", (req, res) => {

});

// Supprimer un pokemon.
pokemonsRouter.delete("/:id", (req, res) => {

});

export { pokemonsRouter };
