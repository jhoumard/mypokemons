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
    const id = req.params.id;
    Pokemon.findByPk(id)
        .then(pokemon => {
            const message = `Le pokemon dont l'id vaut ${id} a bien été trouvé.`;
            res.json(success(message, pokemon));
        })
        .catch(error => {
            const message = `Erreur 404: Le pokemon dont l'id vaut ${id} n'a pas été trouvé.`;
            res.status(404).json({ message, data: error });
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
