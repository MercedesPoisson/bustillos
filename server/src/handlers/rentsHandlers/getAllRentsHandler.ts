import { Request, Response } from "express";
import getAllRentsController from "../../controllers/rentsControllers/getAllRentsController";

const getAllRentsHandler = async (req: Request, res: Response) => {
    try {
        const rents = await getAllRentsController();
        res.json(rents);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las reservas" })
    }
}

export default getAllRentsHandler;