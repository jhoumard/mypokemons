/*
Author: Marco Mascellino
Date: 17.01.2025
*/


import express from "express";
import { Pokemon } from "../db/sequelize.mjs";
import { success } from "./helpers.mjs";

const pokemonsRouter = express();
let counteur = 0;
// Obtenir la liste des pokemons.
pokemonsRouter.get("/", (req, res) => {
    counteur++
    console.log(`${counteur} requete de la liste des pokemons`)
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
            if (pokemon) {
                const message = "Le pokemon a bien été récupéré !";
                res.json(success(message, pokemon));
            } else {
                const message = "Erreur 404: Le pokemon n'a pas été trouvé.";
                res.status(404).json({ message });
            }
        })
        .catch(error => {
            // Afficher lerreur
            const message = "Erreur 500: Le pokemon n'a pas pu être récupéré. Merci de réessayer plus tard.";
            res.status(500).json({ message, data: error });
        });
});

// Ajouter un pokemon.
pokemonsRouter.post("/", (req, res) => {
    const data = req.body;

    // Creation d' un pokemon
    Pokemon.create(data)
        .then(pokemon => {
            const message = "Le pokemon a bien été ajouté !";
            res.json(success(message, pokemon));
        })
        .catch(error => {
            // Afficher lerreur
            const message = "Erreur 500: Le pokemon n'a pas pu être ajouté. Merci de réessayer plus tard.";
            res.status(500).json({ message, data: error });
        });
});

// Modifier un pokemon.
pokemonsRouter.put("/:id", (req, res) => {
    //Afficher l'erreur
    return res.status(403).json("403 Forbidden")
});

// Supprimer un pokemon.
pokemonsRouter.delete("/:id", (req, res) => {
    //Afficher l'erreur
    return res.status(403).json("403 Forbidden")
});

export { pokemonsRouter };
