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

export { dimensionsRouter };
