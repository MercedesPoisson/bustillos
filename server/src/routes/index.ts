import { Router } from "express";
import apartmentsRoutes from "./apartmentsRoutes/index";
import rentsRoutes from "./rentsRoutes/index";
import servicesRoutes from "./servicesRoutes";

const router: Router = Router();

router.use("/apartments", apartmentsRoutes);
router.use("/rents", rentsRoutes);
router.use("/services", servicesRoutes)

export default router;