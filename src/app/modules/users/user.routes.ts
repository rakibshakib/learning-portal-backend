import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.get("/users/:id", UserController.getSingleUserById);
router.get("/users", UserController.getAllUsers);
router.post("/register", UserController.registerUser)
router.post("/login", UserController.loginUser)
router.post("/users-update", UserController.approvedUsers)

export const UserRoutes = router;