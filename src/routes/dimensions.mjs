/*
NOM : Léo del Duca
DATE : 17.01.2025
*/

import express from "express";
import { dimensions, getDimension } from "../db/mock-dimension.mjs";
import { pokemons } from "../db/mock-pokemon.mjs";

const dimensionsRouter = express();

dimensionsRouter.get("/", (req, res) => {
    const message = "La liste des dimensions a bien été récupérée !";
    res.json({ message, data: dimensions });
});

// Obtenir une dimension en particulier.
dimensionsRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    const dim = getDimension(id);
    const message = `La dimension dont l'id vaut ${id} a bien été récupérée.`;
    res.json({ message, data: dim });
});

// Obtenir les pokemons d’une dimension en particulier.
dimensionsRouter.get("/:id/pokemons", (req, res) => {
    const dim_id = req.params.id;
    const dim = getDimension(dim_id);
    const dim_pokemons = pokemons.filter(x => x.dimensionId == dim_id);
    const message = `La liste des pokemons à dimension #${dim_id} (${dim.name}) a bien été récupérée!`;
    res.json({ message, data: dim_pokemons });
});

export { dimensionsRouter };
