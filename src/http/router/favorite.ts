import { Router } from "express";
import { AddFavorite, ListFavorites } from "../handlers";
import asyncHandler from "express-async-handler";
import { UserAuthMiddleware } from "../middleware";

const router = Router();

router.post("/", UserAuthMiddleware, asyncHandler(AddFavorite));

router.get("/", UserAuthMiddleware, asyncHandler(ListFavorites));

export default router;
