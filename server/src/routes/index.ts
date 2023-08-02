import { Router } from "express";
import apartmentsRoutes from "./apartmentsRoutes/index";
import rentsRoutes from "./rentsRoutes/index";

const router: Router = Router();

router.use("/apartments", apartmentsRoutes);
router.use("/rents", rentsRoutes);

export default router;