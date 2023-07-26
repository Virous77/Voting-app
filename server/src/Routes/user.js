import express from "express";
import { checkRegister, createUser, getUser } from "../Controllers/user.js";
import { AuthValidate } from "../middleware/validate.js";

const router = express.Router();

router.post("/user", AuthValidate, createUser);
router.get("/register/:address", checkRegister);
router.get("/user/:id", getUser);

export default router;
