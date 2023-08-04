import { Request, Response } from "express";
import getServicesController from "../../controllers/servicesControllers/getServicesController";

const getServicesHandler = async (req: Request, res: Response) => {
    try {
        const services = await getServicesController();
        return res.status(200).json(services);
    } catch (error: any) {
        return res.status(400).json({ Error: error.message });
    }
};

export default getServicesHandler;