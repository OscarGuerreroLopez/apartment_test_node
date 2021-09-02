import { Router } from "express";
import { AddUser, ListUser, ListUsers, LoginUser } from "../handlers";
import asyncHandler from "express-async-handler";
import {
  QueryMiddleware,
  AdminAuthMiddleware,
  UserAuthMiddleware
} from "../middleware";

const router = Router();

router.post("/register", QueryMiddleware, asyncHandler(AddUser));
router.get("/", QueryMiddleware, UserAuthMiddleware, asyncHandler(ListUser));
router.get(
  "/all",
  QueryMiddleware,
  AdminAuthMiddleware,
  asyncHandler(ListUsers)
);
router.post("/login", QueryMiddleware, asyncHandler(LoginUser));
export default router;
