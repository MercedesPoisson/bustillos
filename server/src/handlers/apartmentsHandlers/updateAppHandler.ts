import { Request, Response } from "express";
import updateAppController from "../../controllers/apartmentControllers/updateAppController";

const updateAppHandler = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedValues = req.body;
    try {
        await updateAppController(Number(id), updatedValues);
        res.status(200).json({ message: "Departamento Actualizado" });
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).send({ error: errorMessage });
    }
}

export default updateAppHandler;