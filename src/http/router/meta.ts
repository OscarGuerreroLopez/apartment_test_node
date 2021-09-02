import { Router } from "express";
import { getMeta } from "../handlers";

const router = Router();

router.get("/", getMeta);

export default router;
