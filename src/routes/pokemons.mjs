//Artur Tudor
//17.01.2025
//Fichier: pokemons.mjs

import express from "express";

import { Pokemon } from "../db/sequelize.mjs";

import { success } from "./helpers.mjs";
import { ValidationError } from "sequelize";

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
    .then((pokemon) => {
        if(pokemon === null ) {
            const message = 
                "Error 404: Le produit demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
            return res.status(404).json({ message });
        }
        const message = `Le Pokemon dont l'id vaut ${pokemon.id} a bien été récupéré.`;
        res.json(success(message, pokemon));
        })
        .catch((error) => {
            const message = 
                "Error 500: Le Pokemon n'a pas pu être récupéré. Merci de réessayer dans quelques instants.";
            res.status(500).json({message, data: error});
        });
});

// Ajouter un pokemon.
pokemonsRouter.post("/", (req, res) => {
    Pokemon.create(req.body)
    .then((createdPokemon) => {
        const message = `Le Pokemon ${createdPokemon.name} a bien été créé !`;

        res.json(success(message, createdPokemon));
    })
    .catch((error) =>{
        if (error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
        }
        const message =
        "Le Pokemon n'a pas pu être ajouté. Merci de réessayer dans quelques instants.";
        res.status(500).json({ message, data: error });
    });
});

// Modifier un pokemon.
pokemonsRouter.put("/:id", (req, res) => {
    const pokemonId = req.params.id;
    Pokemon.update(req.body, {where: {id: pokemonId} })
    .then((_) =>{
        const message = 
        "exercise ne permets pas"
        return res.status(403).json({ message});
    })
    .catch((error) =>{
        const message =
        "Il n'est pas possible d'acceder à la base de données Pokemon. "
        res.status(500).json({message, data:error});
    });
});

// Supprimer un pokemon.
pokemonsRouter.delete("/:id", (req, res) => {
    Pokemon.findByPk(req.params.id)
    .then(() => {
        const message =
        "La base de données de Pokemon ne peut pas etre accedée. "
        res.status(500).json({ message, data: error})
    })
    .catch((error) => {
        const message = 
        "Le Pokemon n'a pas pu être supprimé. Merci de réessayer dans quelques instants.";
        res.status(403).json({ message, data: error});
    });
});

export { pokemonsRouter };
