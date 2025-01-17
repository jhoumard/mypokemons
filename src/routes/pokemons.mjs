// Anthony Viagniaux
// Date 17.01.25


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
        .then(pokemon => {
            if (pokemon === null) {
                const message = "Erreur 404: Le pokemon demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
                return res.status(404).json({ message });
            }
            const message = `Le pokemon dont l'id vaut ${pokemon.id} a bien été récupéré.`;
            res.json(success(message, pokemon));
        })
});

// Ajouter un pokemon.
pokemonsRouter.post("/", (req, res) => {
    Pokemon.create(req.body)
        .then(createdPokemon => {
            const message = `Le pokemon ${createdPokemon.name} a bien été ajouté !`;
            res.json(success(message, createdPokemon));
        })
        .catch(error => {
            const message = "Erreur 500: Le pokemon n'a pas pu être ajouté. Merci de réessayer plus tard.";
            res.status(500).json({ message, data: error });
        });
});


// Modifier un pokemon.
pokemonsRouter.put("/:id", (req, res) => {

});

// Supprimer un pokemon.
pokemonsRouter.delete("/:id", (req, res) => {

});

export { pokemonsRouter };
