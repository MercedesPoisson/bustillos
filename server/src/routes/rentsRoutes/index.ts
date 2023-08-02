import { Router } from "express";
import createRentHandler from "../../handlers/rentsHandlers/createRentHandler";
import deleteRentHandler from "../../handlers/rentsHandlers/deleteRentHandler";
import getAllRentsHandler from "../../handlers/rentsHandlers/getAllRentsHandler";
import updateRentHandler from "../../handlers/rentsHandlers/updateRentHandler";

const rentRoutes = Router();

rentRoutes.post("/", createRentHandler);
rentRoutes.delete("/:id", deleteRentHandler);
rentRoutes.get("/", getAllRentsHandler);
rentRoutes.put("/update/:id", updateRentHandler);

export default rentRoutes;