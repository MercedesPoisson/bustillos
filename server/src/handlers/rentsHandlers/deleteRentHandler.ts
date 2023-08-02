import { Request, Response } from "express";
import deleteRentController from "../../controllers/rentsControllers/deleteRentController";

const deleteRentHandler = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10); // Convert to integer
    try {
        const deleteRent = await deleteRentController(id);
        res.status(200).json(deleteRent);      
    } catch (error) {
        res.status(400).json({ error: "Error al borrar la Reserva" });
    }
}

export default deleteRentHandler;