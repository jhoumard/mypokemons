//Matviy Lyubivyy 
//17.01.25

import express from "express";
import { Pokemon } from "../db/sequelize.mjs";
import { success } from "./helpers.mjs";

const pokemonsRouter = express();
// compteur des requêtes
var requests = 0;

// Obtenir la liste des pokemons et envoi messages avec nombre de requêtes dans la console
pokemonsRouter.get("/", (req, res) => {
    requests++,
    Pokemon.findAll()
    .then(pokemons => {
        const message = "La liste des pokemons a bien été récupérée !";
        res.json(success(message, pokemons));
        console.log(`${requests} requêtes de la liste des pokemons`);
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
        if (pokemon === null) {
            const message = "Le pokemon demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
            return res.status(404).json({ message });
        }
        const message = `Le pokemon dont l'id vaut ${pokemon.id} a bien été récupéré.`;
        res.json(success(message, pokemon));
    })
});

// Ajouter un pokemon.
pokemonsRouter.post("/", (req, res) => {
    Pokemon.create(req.body)
    .then((createdPokemon) => {
        const message = `Le pokemon ${createdPokemon.name} a bien été créé !`;
        res.json(success(message, createdPokemon));
    })
});


// Modifier un pokemon.
pokemonsRouter.put("/:id", (req, res) => {
    const message = "403: Vous n'avez pas les droits pour modifier les pokemons.";
    return res.status(403).json({ message });
});

// Supprimer un pokemon.
pokemonsRouter.delete("/:id", (req, res) => {
    const message = "403: Vous n'avez pas les droits pour suprimer les pokemons.";
    return res.status(403).json({ message });
});

export { pokemonsRouter };
