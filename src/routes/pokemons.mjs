import express from "express";
import { Pokemon } from "../db/sequelize.mjs";
import { success } from "./helpers.mjs";
import {pokemons} from "../db/mock-pokemon.mjs";
import {ValidationError, initDb, Model as pokemon} from "sequelize";


const pokemonsRouter = express();

// Obtenir la liste des pokemons.
pokemonsRouter.get("/", (req, res) => {
    Pokemon.findAll()
    .then(pokemon => {
        const message = "La liste des pokemons a bien été récupérée !";
        res.json(success(message, pokemon));
    })
    .catch(error => {
        const message = "Erreur 500: La liste des pokemons n'a pas pu être récupérée. Merci de réessayer plus tard.";
        res.status(500).json({ message, data: error });
    });
});

// Obtenir un pokemon en particulier.
pokemonsRouter.get("/:id", (req, res) => {
    pokemon.findByPk(req.params.id)
        .then((pokemon) => {
            if (pokemon === null) {
                const message =
                    "Le pokemon demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
// A noter ici le return pour interrompre l'exécution du code
                return res.status(404).json({ message });
            }
            const message = `Le pokemon dont l'id vaut ${pokemons.id} a bien été récupéré.`;
            res.json(success(message, pokemons));
        })
        .catch((error) => {
            const message =
                "Le pokemon n'a pas pu être récupéré. Merci de réessayer dans quelques instants.";
            res.status(500).json({ message, data: error });
        });
});

// Ajouter un pokemon.
pokemonsRouter.post("/", (req, res) => {
    pokemon.create(req.body)
        .then((createdpokemon) => {
// Définir un message pour le consommateur de l'API REST
            const message = `Le pokemons ${createdpokemon.name} a bien été créé !`;
// Retourner la réponse HTTP en json avec le msg et le pokemons créé
            res.json(success(message, createdpokemon));
        })
        .catch((error) => {
            if (error instanceof ValidationError) {
                return res.status(400).json({ message: error.message, data: error });
            }
            const message =
                "Le pokemons n'a pas pu être ajouté. Merci de réessayer dans quelques instants.";
            res.status(500).json({ message, data: error });
        });
});

// Modifier un pokemon.
pokemonsRouter.put("/:id", (req, res) => {
    const pokemonid = req.params.id;
    pokemon.update(req.body, { where: { id: pokemonid } })
        .then((_) => {
            return pokemon.findByPk(pokemonid).then((updatedpokemon) => {
                if (updatedpokemon === null) {
                    const message =
                        "Le pokemon demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
                    // A noter ici le return pour interrompre l'exécution du code
                    return res.status(404).json({ message });
                }
                // Définir un message pour l'utilisateur de l'API REST
                const message = `Le pokemon ${updatedProduct.name} dont l'id vaut ${updatedProduct.id} a été mis à jour avec succès !`
                // Retourner la réponse HTTP en json avec le msg et le pokemon créé
                res.json(success(message, updatedpokemon));
            });
        })
        .catch((error) => {const message = "Le pokemon n'a pas pu être mis à jour. Merci de réessayer dans quelques instants.";
            res.status(500).json({ message, data: error });
        });
});

// Supprimer un pokemon.
pokemonsRouter.delete("/:id", (req, res) => {
    pokemon.findByPk(req.params.id)
        .then((deletedpokemon) => {
            if (deletedpokemon === null) {
                const message =
                    "Le pokemon demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
                // A noter ici le return pour interrompre l'exécution du code
                return res.status(404).json({ message });
            }
            return pokemon.destroy({
                where: { id: deletedpokemon.id -1 },
            }).then((_) => {
                // Définir un message pour le consommateur de l'API REST
                const message = `Le pokemon ${deletedpokemon.name} a bien été supprimé !`;
                // Retourner la réponse HTTP en json avec le msg et le pokemon créé
                res.json(success(message, deletedpokemon));
            });
        })
        .catch((error) => {const message = "Le pokemon n'a pas pu être supprimé. Merci de réessayer dans quelques instants.";
            res.status(500).json({ message, data: error });
        });
});

export { pokemonsRouter };
