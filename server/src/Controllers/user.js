import User from "../Models/User.js";
import { createError } from "../utils/utils.js";

export const createUser = async (req, res, next) => {
  try {
    const findUser = await User.findOne({
      wallet_address: req.body.wallet_address,
    });

    if (findUser) {
      next(createError({ message: "User already exists", status: 400 }));
    } else {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).json({ message: "User created successfully" });
    }
  } catch (error) {
    next(error);
  }
};
