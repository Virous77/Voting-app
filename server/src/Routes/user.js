import express from "express";
import { createUser } from "../Controllers/user.js";
import { AuthValidate } from "../middleware/validate.js";

const router = express.Router();

router.post("/user", AuthValidate, createUser);

export default router;
