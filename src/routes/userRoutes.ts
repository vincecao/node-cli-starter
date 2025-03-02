import { getUsers, getUserById, createUser, updateUser, deleteUser } from "../controllers/userController";
import { Router } from 'express';

const router = Router();

// User routes
router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
