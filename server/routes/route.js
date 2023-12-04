import express from "express";
import { loginUser, singupUser } from "../controllers/user-controller.js";

const router = express.Router();

router.post("/signup", singupUser);
router.post("/login", loginUser);

export default router;
