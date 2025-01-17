import express from "express";
import { Pokemon } from "../db/sequelize.mjs";
import { success } from "./helpers.mjs";
import {ValidationError} from "sequelize"

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
        .then((pokemons) => {
            if (pokemons === null) {
                const message =
                    "Le produit demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
// A noter ici le return pour interrompre l'exécution du code
                return res.status(404).json({ message });
            }
            const message = `Le produit dont l'id vaut ${pokemons.id} a bien été récupéré.`;
            res.json(success(message, pokemons));
        })
        .catch((error) => {
            const message =
                "Le produit n'a pas pu être récupéré. Merci de réessayer dans quelques instants.";
            res.status(500).json({ message, data: error });
        });
});

// Ajouter un pokemon.
pokemonsRouter.post("/", (req, res) => {
    Pokemon.create(req.body)
        .then((createdPokemons) => {
// Définir un message pour le consommateur de l'API REST
            const message = `Le produit ${createdPokemons.name} a bien été créé !`;
// Retourner la réponse HTTP en json avec le msg et le produit créé
            res.json(success(message, createdPokemons));
        })
        .catch((error) => {
            if (error instanceof ValidationError) {
                return res.status(400).json({ message: error.message, data: error });
            }
            const message =
                "Le produit n'a pas pu être ajouté. Merci de réessayer dans quelques instants.";
            res.status(500).json({ message, data: error });
        });
});

// Modifier un pokemon.
pokemonsRouter.put("/:id", (req, res) => {
    res.status(403).json({ message, data: error });
});

// Supprimer un pokemon.
pokemonsRouter.delete("/:id", (req, res) => {
    res.status(403).json({ message, data: error });
});

export { pokemonsRouter };
