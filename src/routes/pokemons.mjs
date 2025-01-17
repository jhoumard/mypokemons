//Nom : Alonzo Pinto
//date : 17.01.2025
//Version : 1


import express from "express";
import { Pokemon } from "../db/sequelize.mjs";
import { success } from "./helpers.mjs";
import {pokemons} from "../db/mock-pokemon.mjs";

const pokemonsRouter = express();

// Obtenir la liste des pokemons.
pokemonsRouter.get("/", (req, res) => {
    Pokemon.findAll().then(pokemons => {
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
                "Le pokemons demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
// A noter ici le return pour interrompre l'exécution du code
            return res.status(404).json({ message });
        }
        const message = `Le pokemons dont l'id vaut ${pokemons.id} a bien été récupéré.`;
        res.json(success(message, pokemons));
    })
        .catch((error) => {
            const message =
                "Le pokemon n'a pas pu être récupéré. Merci de réessayer dans quelques instants.";
            res.status(500).json({ message, data: error });
        });
});

// Ajouter un pokemon.
pokemonsRouter.put("/", (req, res) => {
    const pokemon = req.body;
    Pokemon.create(pokemon).then(pokemons => {
            const message = "Le pokemon a bien été ajouté.";
            res.json(success(message, pokemons));
        })
        .catch(error => {
            const message = "Erreur 500: Le pokemon n'a pas pu'être ajouté. Merci de réessayer plus tard.";
            res.status(500).json({ message, data: error });
        });
})

// Exemple de route POST pour ajouter un nouveau Pokémon
pokemonsRouter.post("/", (req, res) => {
    const { name, type, level } = req.body;

    // Vérification des données
    if (!name || !type || level === undefined) {
        return res.status(400).json({ error: "Veuillez fournir un nom, un type et un niveau pour le Pokémon." });
    }

    // Exemple : Ajout du Pokémon dans un tableau ou une base de données
    const newPokemon = {
        id: Math.floor(Math.random() * 10000), // ID généré aléatoirement
        name,
        type,
        level,
    };

    // Supposons que "pokemons" soit un tableau ou un simulateur de BD
    pokemons.push(newPokemon);

    // Réponse avec confirmation
    res.status(201).json({
        message: "Nouveau Pokémon créé avec succès !",
        pokemon: newPokemon,
    });
});

// Modifier un pokemon.
pokemonsRouter.put("/:id", (req, res) => {
    const { id } = req.params; // Récupération de l'identifiant du Pokémon depuis l'URL
    const { name, type, level } = req.body; // Récupération des données mises à jour du corps de la requête

    // Vérification que l'ID est valide
    const pokemonIndex = pokemons.findIndex((pokemon) => pokemon.id === parseInt(id));
    if (pokemonIndex === -1) {
        return res.status(404).json({ error: "Pokémon non trouvé avec cet ID." });
    }

    // Mise à jour des propriétés du Pokémon existant
    if (name !== undefined) pokemons[pokemonIndex].name = name;
    if (type !== undefined) pokemons[pokemonIndex].type = type;
    if (level !== undefined) pokemons[pokemonIndex].level = level;

    // Réponse avec les détails mis à jour
    res.status(200).json({
        message: "Pokémon mis à jour avec succès !",
        pokemon: pokemons[pokemonIndex],
    });
});

// Supprimer un pokemon.
pokemonsRouter.delete("/:id", (req, res) => {
    const { id } = req.params; // Récupération de l'identifiant du Pokémon depuis l'URL

    // Recherche de l'index du Pokémon
    const pokemonIndex = pokemons.findIndex((pokemon) => pokemon.id === parseInt(id));

    // Vérification si le Pokémon existe
    if (pokemonIndex === -1) {
        return res.status(404).json({ error: "Pokémon non trouvé avec cet ID." });
    }

    // Suppression du Pokémon
    const deletedPokemon = pokemons.splice(pokemonIndex, 1); // Retire le Pokémon du tableau

    // Réponse avec confirmation
    res.status(200).json({
        message: "Pokémon supprimé avec succès !",
        pokemon: deletedPokemon[0], // Retourne les informations du Pokémon supprimé
    });
});
pokemonsRouter.get("/coffe", (req, res) => {

});

export { pokemonsRouter };