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

// 2. completer la route qui permet d'ajouter un pokemon.
pokemonsRouter.post("/", (req, res) => {
    Pokemon.create(req.body)
        .then(createdPokemon => {
            const message = `Le pokemon ${createdPokemon.name} a bel et bien été créé !`;
            res.json(success(message, createdPokemon));
        })
        .catch(error => {
            const message = "Erreur 500: Le pokemon n'a pas pu être ajouté. Veuillez de retenter plus tard.";
            res.status(500).json({ message, data: error });
        });
});

// 3. La modification des pokemons est refusé.
pokemonsRouter.put("/:id", (req, res) => {
    Pokemon.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            const message = `Erreur 403: Vous n'avez pas le droit de modifier les pokemons.`;
            res.status(403).json({ message, data: error });
        })
        .catch(error => {
            const message = "Erreur 500: Le pokemon n'a pas pu être modifié. Veuillez de retenter plus tard.";
            res.status(500).json({ message, data: error });
        });
});

// 3. La suppressions des pokemons est refusé.
pokemonsRouter.delete("/:id", (req, res) => {
    Pokemon.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            const message = `Erreur 403: Vous n'avez pas le droit de supprimer les pokemons.`;
            res.status(403).json({ message, data: error });
        })
        .catch(error => {
            const message = "Erreur 500: Le pokemon n'a pas pu être supprimé. Veuillez de retenter plus tard.";
            res.status(500).json({ message, data: error });
        });
});

pokemonsRouter.get("http://localhost:3000/cofffe", (req, res) => {
    Pokemon.findAll()
        .then(() => {
            const message = "418 I'm a teapot.";
            res.status(418).json({ message, data: error });
        })
});

export { pokemonsRouter };
