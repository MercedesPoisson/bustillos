import { Request, Response } from "express";
import getAllAppController from "../../controllers/apartmentControllers/getAllAppController";

const getAllAppHandler = async (req: Request, res: Response) => {
    try {
        const app = await getAllAppController();
        res.json(app);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los departamentos" });
    }
}

export default getAllAppHandler;