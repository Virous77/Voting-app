import express from "express";
import { checkRegister, createUser } from "../Controllers/user.js";
import { AuthValidate } from "../middleware/validate.js";

const router = express.Router();

router.post("/user", AuthValidate, createUser);
router.get("/register/:address", checkRegister);

export default router;
