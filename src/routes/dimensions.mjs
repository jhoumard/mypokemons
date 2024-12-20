import express from "express";
import { dimensions } from "../db/mock-dimension.mjs";

const dimensionsRouter = express();

dimensionsRouter.get("/", (req, res) => {
    const message = "La liste des dimensions a bien été récupérée !";
    res.json({ message, data: dimensions });
});

dimensionsRouter.get("/:id", (req, res) => {
    const dimensionId = req.params.id;
    const dimension = dimensions.find((dimension) => dimension.id == dimensionId);
    const message = `La dimension dont l'id vaut ${dimensionId} a bien été récupérée !`;
    res.json({ message, dimension });
});

export { dimensionsRouter };
