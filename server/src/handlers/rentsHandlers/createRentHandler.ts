import { Request, Response } from "express";
import createRentController from "../../controllers/rentsControllers/createRentController";

const rentArray: string[] = [
    "id_rent",
    // "id_user",
    "name",
    "surname",
    "phone",
    "mail",
    "id_apartment",
    "start_date",
    "end_date",
    "guests_number",
    "amount",
    "payment_status",
    "payment_date",
    "review_status",
    "creation_date",
    "is_active",
    "source"
];

const createRentHandler = async (req: Request, res: Response) => {
    try {
        const rentData = req.body;
        const missingParams: string[] = rentArray.filter((param) => !rentData.hasOwnProperty(param));
        if (missingParams.length > 0) {
            return res.status(400).json({ error: `Missing the following parameters: ${missingParams.join(", ")}` });
        }

        const newRent = await createRentController(rentData);
        res.status(201).json(newRent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear una reserva" });
    }
};

export default createRentHandler;