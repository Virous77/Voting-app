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

export const getVote = async (req, res, next) => {
  const { admin_address, status } = req.query;
  console.log(admin)

  try {
    const votes = await Vote.find({
      admin_address: admin_address,
      status: status,
    });

    res.status(200).json(votes);
  } catch (error) {
    next(error);
  }
};
