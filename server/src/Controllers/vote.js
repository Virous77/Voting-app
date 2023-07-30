import { createError } from "../utils/utils.js";
import Vote from "../Models/Vote.js";

export const createVote = async (req, res, next) => {
  try {
    const vote = new Vote(req.body);
    await vote.save();

    res.status(201).json(vote);
  } catch (error) {
    next(error);
  }
};
