import { Request, Response } from "express";
import deactivateAppController from "../../controllers/apartmentControllers/deactivateAppController";

const deactivateAppHandler = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await deactivateAppController(Number(id));
        res.status(200).json({ message: "Departamento desactivado"});
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).send({ error: errorMessage });        
    }
}

export default deactivateAppHandler;

