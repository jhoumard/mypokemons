/*
Author : Jérémie Chevalley
Date : 20.12.2024
Description : Routes des dimensions
*/

import express from "express";
import { dimensions } from "../db/mock-dimension.mjs";
import { success, getUniqueId } from "./helper.mjs";

const dimensionsRouter = express();

dimensionsRouter.get("/", (req, res) => {
    const message = "La liste des dimensions a bien été récupérée !";
    res.json({ message, data: dimensions });
});

// Obtenir une dimension par ID
dimensionsRouter.get("/:id", (req, res) => {
    const dimensionId = req.params.id;
    const dimension = dimensions.find((dimension) => dimension.id == dimensionId);
    const message = `Le dimension dont l'id vaut ${dimensionId} a bien été récupéré.`;
    res.json(success(message, dimension));
});

export { dimensionsRouter };
