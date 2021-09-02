import { Router } from "express";

import meta from "./meta";
import user from "./user";
import apartment from "./apartment";
import favorite from "./favorite";

const router = Router();

// routes
router.use("/meta", meta);
router.use("/user", user);
router.use("/apartment", apartment);
router.use("/favorite", favorite);

export default router as Router;
