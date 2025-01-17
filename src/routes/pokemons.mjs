//Artur Tudor
//17.01.2025
//Fichier: pokemons.mjs

import express from "express";

import { Pokemon } from "../db/sequelize.mjs";

import { success } from "./helpers.mjs";
import { pokemons } from "../db/mock-pokemon.mjs";

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
        if(pokemon === null ) {
            const message = 
                "Error 404: Le produit demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
            return res.status(404).json({ message });
        }
        const message = `Le Pokemon dont l'id vaut ${pokemon.id} a bien été récupéré.`;
        res.json(success(message, pokemon));
        })
        .catch((error) => {
            const message = 
                "Error 500: Le Pokemon n'a pas pu être récupéré. Merci de réessayer dans quelques instants.";
            res.status(500).json({message, data: error});
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
