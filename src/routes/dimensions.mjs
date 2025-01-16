/*
Auteur: Vikki Dolt
Date: 20.12.2024
*/ 

import express from "express";
import { dimensions } from "../db/mock-dimension.mjs";
import { pokemons } from "../db/mock-pokemon.mjs"

const dimensionsRouter = express();

dimensionsRouter.get("/", (req, res) => {
    const message = "La liste des dimensions a bien été récupérée !";
    res.json({ message, data: dimensions });
});

dimensionsRouter.get("/:id", (req, res) => {
    const dimensionId = req.params.id;
    const dimension = dimensions.find((dimension) => dimension.id == dimensionId);
    const message = `La dimension dont l'id vaut ${dimensionId} a bien été récupéré.`;
    res.json({ message, data: dimension });
});

dimensionsRouter.get("/:id/pokemons", (req, res) => {
    const dimensionId = req.params.id;
    const dimensionName = req.params.name;
    const dimensionPokemon = pokemons.filter((pokemon) => pokemon.dimensionId == dimensionId);
    const message = `La liste des pokemons à dimension #${dimensionId} (${dimensionName}) a bien été récupérée !`;
    res.json({ message, data: dimensionPokemon });
});


export { dimensionsRouter };
