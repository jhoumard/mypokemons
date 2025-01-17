// Auteur : Anderson Mendes
// Date : 17 janvier 2025
// Thème : Les Pokémons 2
// Language : Javascript

import express from "express";
import { Pokemon } from "../db/sequelize.mjs";
import { success } from "./helpers.mjs";
import {pokemons} from "../db/mock-pokemon.mjs";

const pokemonsRouter = express();
const CofffeRouter = express();

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

CofffeRouter.get("/", (req, res) => {
    cofffe.findAll()
        .then(Cofffe => {
            const message = "La liste des cofffe a bien été récupérée !";
            res.json(success(message, Cofffe));
        })
        .catch(error => {
            const message = "Erreur 500: La liste des cofffe n'a pas pu être récupérée. Merci de réessayer plus tard.";
            res.status(500).json({ message, data: error });
        });
});
// Obtenir un pokemon en particulier.
pokemonsRouter.get("/:id", (req, res) => {
    pokemons.findAll()
        .then((pokemons) => {
            const message = "La liste des pokemons a bien été récupérée.";
            res.json(success(message, pokemons));
        })
        .catch((error) => {
            const message = "La liste des pokemons n'a pas pu être récupérée. Merci de réessayer dans quelques instants.";
            res.status(500).json({ message, data: error });
        });
});

// Ajouter un pokemon.
pokemonsRouter.post("/", (req, res) => {
    pokemons.create(req.body)
        .then((createdpokemons) => {
// Définir un message pour le consommateur de l'API REST
            const message = `Le produit ${createdpokemons.name} a bien été créé !`;
// Retourner la réponse HTTP en json avec le msg et le produit créé
            res.json(success(message, createdpokemons));
        })
});

// Modifier un pokemon.
pokemonsRouter.put("/:id", (req, res) => {
    const pokemonsId = req.params.id;
    pokemons.update(req.body, { where: { id: pokemonsId } })
        .then((_) => {
            pokemons.findByPk(pokemonsId)
                .then((updatedpokemons) => {
                    if (updatedpokemons === null) {
                        const message =
                            "Le pokemons demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
// A noter ici le return pour interrompre l'exécution du code
                        return res.status(404).json({ message });
                    }
// Définir un message pour l'utilisateur de l'API REST
                    const message =
                        `Le pokemons ${updatedpokemons.name} dont l'id vaut ${updatedpokemons.id} a été mis à jour avec succès`

// Retourner la réponse HTTP en json avec le msg et le pokemons créé
                    res.json(success(message, updatedpokemons));
                })
                .catch((Forbidden) => {
                    const message =
                        "Le pokemons n'a pas pu être mis à jour. Merci de réessayer dans quelques instants.";
                    res.status(403).json({ message, data: Forbidden });
                });
        })

});

// Supprimer un pokemon.
pokemonsRouter.delete("/:id", (req, res) => {
    pokemons.findByPk(req.params.id)
        .then((deletedpokemons) => {
            if (deletedpokemons === null) {
                const message =
                    "Le pokemons demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
// A noter ici le return pour interrompre l'exécution du code
                return res.status(404).json({ message });
            }
            return pokemons.destroy({
                where: { id: deletedpokemons.id },
            }).then((_) => {
// Définir un message pour le consommateur de l'API REST
                const message =
                    `Le pokemons ${deletedpokemons.name} a bien été supprimé !`;
// Retourner la réponse HTTP en json avec le msg et le pokemons créé
                res.json(success(message, deletedpokemons));
            });
        })
        .catch((Forbidden) => {
            const message =
                "Le pokemons n'a pas pu être supprimé. Merci de réessayer dans quelques instants.";
            res.status(403).json({ message, data: Forbidden });
        });
});

export { pokemonsRouter };
