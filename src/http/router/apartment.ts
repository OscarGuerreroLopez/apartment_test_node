import { Router } from "express";
import { AddApartment, ListApartment, ListApartments } from "../handlers";
import asyncHandler from "express-async-handler";
import { QueryMiddleware, UserAuthMiddleware } from "../middleware";

const router = Router();

router.post(
  "/",
  QueryMiddleware,
  UserAuthMiddleware,
  asyncHandler(AddApartment)
);
router.get(
  "/",
  QueryMiddleware,
  UserAuthMiddleware,
  asyncHandler(ListApartment)
);
router.get(
  "/all",
  QueryMiddleware,
  UserAuthMiddleware,
  asyncHandler(ListApartments)
);

export default router;
