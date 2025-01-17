/**
 * Auteur: Hugo Rod
 * Date: 17.01.2025
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
    Pokemon.findByPk(req.params.id)
        .then((pokemon) => {
            const message = `Le pokemon ${pokemon.name} a bien été recupairé.`;
            res.json(success(message, pokemon));
        })
});

// Ajouter un pokemon.
pokemonsRouter.post("/", (req, res) => {
    Pokemon.create(req.body)
    .then((createdPokemon) => {
        const message = `Le pokemon donc le nom est ${createdPokemon.name} a bien été créé.`;
        res.json(success(message, createdPokemon));
    })
});

// Modifier un pokemon.
pokemonsRouter.put("/:id", (req, res) => {
    const message = "L'accés à la modification de donnée est interdis !"
    res.status(403).json({ message });
});

// Supprimer un pokemon.
pokemonsRouter.delete("/:id", (req, res) => {
    const message = "L'accés à la suppression de donnée est interdis !"
    res.status(403).json({ message });
});

export { pokemonsRouter };
