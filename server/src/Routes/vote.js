import express from "express";
import { createVote, getVote } from "../Controllers/vote.js";
import { VoteValidate } from "../middleware/validate.js";

const router = express.Router();

router.post("/vote", VoteValidate, createVote);
router.get("/vote", getVote);

export default router;
