import express from "express";
import { createVote } from "../Controllers/vote.js";
import { VoteValidate } from "../middleware/validate.js";

const router = express.Router();

router.post("/vote", VoteValidate, createVote);

export default router;
