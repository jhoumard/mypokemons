import express from "express";
import { Pokemon } from "../db/sequelize.mjs";
import { success } from "./helpers.mjs";
import {pokemons} from "../db/mock-pokemon.mjs";
import {ValidationError} from "sequelize";
/*
Chris Brandt
17.01.25
*/
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
    Pokemon.findByPk(req.params.id).then((pokemon) => {
        if (pokemon === null) {
            const message = "Erreur 404: Le pokémon demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
            return res.status(404).json({ message });
        }
        const message = `Le pokémon dont l'id vaut ${pokemons.id} a bien été récupérer.`;
        res.json(success(message, pokemons));
    })
        // permet d'attraper l'erreur pour l'empécher de bloquer le programme
        .catch((error) => {
            const message = "Erreur 500: Le pokémon n'a pas pu être récupéré. Merci de réessayer dans quelques instants.";
            res.status(500).json({ message, data: error });
        });
});

// Ajouter un pokemon.
pokemonsRouter.post("/", (req, res) => {
    Pokemon.create(req.body).then((createdPokemon) => {
        const message = `Le pokémon ${createdPokemon.name} a bien été créé !`;
        res.json(success(message, createdPokemon));
    })
        .catch((error) => {
            if (error instanceof ValidationError) {
                return res.status(400).json({message: error.message, data: error });
            }
            const message = "Erreur 500: Le pokémon n'a pas pu être ajouté. Merci de réessayer dans quelques instants.";
            res.status(500).json({ message, data: error });
        });
});

// Modifier un pokemon.
pokemonsRouter.put("/:id", (req, res) => {
    const message = "Erreur 403: Forbidden.";
    return res.status(403).json({message});
});

// Supprimer un pokemon.
pokemonsRouter.delete("/:id", (req, res) => {
    const message = "Erreur 403: Forbidden.";
    return res.status(403).json({message});
});

export { pokemonsRouter };
