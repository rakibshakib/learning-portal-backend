import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/register", UserController.registerUser)
router.post("/login", UserController.loginUser)
router.get("/users", UserController.getAllUsers)
router.post("/users-update", UserController.approvedUsers)

export const UserRoutes = router;