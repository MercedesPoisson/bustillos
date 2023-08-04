import { Router } from "express";
import getServicesHandler from "../../handlers/servicesHandlers/getServicesHandler";

const servicesRoutes = Router();

servicesRoutes.get("/", getServicesHandler);


export default servicesRoutes;