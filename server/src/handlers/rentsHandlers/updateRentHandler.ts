import { Request, Response } from "express";
import updateRentController from "../../controllers/rentsControllers/updateRentController";

const updateRentHandler = async (req:Request, res: Response) => {
    const { id } = req.params;
    const updatedValues = req.body;
    try {
        await updateRentController(Number(id), updatedValues);
        res.status(200).json({  message: "Reserva Alctualizada"});
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).send({ error:errorMessage });
    }
};

export default updateRentHandler;