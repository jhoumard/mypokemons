/**
 * Auteur: Hugo Rod
 * Date: 17.01.2025
 */

import express from "express";
import { Pokemon } from "../db/sequelize.mjs";
import { success } from "./helpers.mjs";
import { ValidationError } from "sequelize";

const pokemonsRouter = express();
var compteur = 0;

// Obtenir la liste des pokemons.
pokemonsRouter.get("/", (req, res) => {
    compteur++;
    console.log(`${compteur} requêtes de la liste des pokemons`);
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
    compteur++;
    console.log(`${compteur} requêtes de la liste des pokemons`);
    Pokemon.findByPk(req.params.id)
        .then((pokemon) => {
            if (pokemon === null){
                const message = `Le pokemon que vous cherchez n'existe pas.`;
                return res.status(404).json({ message });
            };

            const message = `Le pokemon ${pokemon.name} a bien été recupairé.`;
            res.json(success(message, pokemon));
        })
        .catch(error => {
            const message = "Erreur 500: Le pokemon n'a pas pu être récupéré. Merci de réessayer plus tard.";
            res.status(500).json({ message, data: error });
        });
});

// Ajouter un pokemon.
pokemonsRouter.post("/", (req, res) => {
    compteur++;
    console.log(`${compteur} requêtes de la liste des pokemons`);
    Pokemon.create(req.body)
    .then((createdPokemon) => {
        const message = `Le pokemon donc le nom est ${createdPokemon.name} a bien été créé.`;
        res.json(success(message, createdPokemon));
    })
    .catch(error => {
        if (error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
        }

        const message = "Erreur 500: Le pokemon n'a pas pu être créer. Merci de réessayer plus tard.";
        res.status(500).json({ message, data: error });
    });
});

// Modifier un pokemon.
pokemonsRouter.put("/:id", (req, res) => {
    compteur++;
    console.log(`${compteur} requêtes de la liste des pokemons`);
    const message = "L'accés à la modification de donnée est interdis !"
    res.status(403).json({ message });
});

// Supprimer un pokemon.
pokemonsRouter.delete("/:id", (req, res) => {
    compteur++;
    console.log(`${compteur} requêtes de la liste des pokemons`);
    const message = "L'accés à la suppression de donnée est interdis !"
    res.status(403).json({ message });
});

export { pokemonsRouter };
