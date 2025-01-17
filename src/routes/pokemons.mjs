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
    Pokemon.findByPk(req.params.id).then((pokemon) => {
        const message = `Le pokemon dont l'id vaut ${pokemon.id} a bien été récupéré.`;
        res.json(success(message, pokemon));
    });
});

// Ajouter un pokemon.
pokemonsRouter.post("/", (req, res) => {
    Pokemon.create(req.body).then((createdPokemon) => {
// Définir un message pour le consommateur de l'API REST
        const message = `Le produit ${createdPokemon.name} a bien été créé !`;
// Retourner la réponse HTTP en json avec le msg et le produit créé
        res.json(success(message, createdPokemon));
    });
});

// Modifier un pokemon.
pokemonsRouter.put("/:id", (req, res) => {
    const message =
    "Vous ne pouvez pas modifier un pokemon.";
    return res.status(403).json({ message });

});

// Supprimer un pokemon.
pokemonsRouter.delete("/:id", (req, res) => {
    const message =
        "Vous ne pouvez pas effacer des pokemons.";
    return res.status(403).json({ message });
});

export { pokemonsRouter };
