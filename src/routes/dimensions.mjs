import express from "express";
import { dimensions } from "../db/mock-dimension.mjs";

const dimensionsRouter = express();

dimensionsRouter.get("/", (req, res) => {
    const message = "La liste des dimensions a bien été récupérée !";
    res.json({ message, data: dimensions });
});

dimensionsRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    const dim = dimensions.find(x => x.id == id);
    const message = `La dimension dont l'id vaut ${id} a bien été récupérée.`;
    res.json({ message, data: dim });
});

export { dimensionsRouter };
