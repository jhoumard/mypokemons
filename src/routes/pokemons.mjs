import express from "express";
import { ValidationError } from "sequelize";
import { Pokemon } from "../db/sequelize.mjs";
import { success } from "./helpers.mjs";

const pokemonsRouter = express();

// Obtenir la liste des pokemons.
var getPokemonsCount = 0;
pokemonsRouter.get("/", (req, res) => {
    getPokemonsCount++;
    console.log(`${getPokemonsCount} requêtes de la liste des pokemons`);

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
    .then(p => {
        if (p === null) {
            const message = "Le pokemon demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
            return res.status(404).json({ message });
        }

        const message = `Le pokemon dont l'id vaut ${p.id} a bien été récupéré.`;
        res.json(success(message, p));
    });
});

// Ajouter un pokemon.
pokemonsRouter.post("/", (req, res) => {
    Pokemon.create(req.body)
    .then(createdPokemon => {
        const message = `Le pokemon ${createdPokemon.name} a bien été créé !`;
        res.json(success(message, createdPokemon));
    })
    .catch((error) => {
        if (error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
        }

        const message = "Le pokemon n'a pas pu être ajouté. Merci de réessayer dans quelques instants.";
        res.status(500).json({ message, data: error });
    });
});

// Modifier un pokemon.
pokemonsRouter.put("/:id", (req, res) => {
    const msg = "Modification refusée";
    res.status(403).json({ msg });
});

// Supprimer un pokemon.
pokemonsRouter.delete("/:id", (req, res) => {
    const msg = "Suppression refusée";
    res.status(403).json({ msg });
});

export { pokemonsRouter };
