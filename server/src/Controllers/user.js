import User from "../Models/User.js";
import { createError } from "../utils/utils.js";

export const createUser = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const checkRegister = async (req, res, next) => {
  try {
    const findUser = await User.findOne({
      wallet_address: req.params.address,
    });

    if (findUser) {
      res.status(200).json({ status: true });
    } else {
      res.status(200).json({ status: false });
    }
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ wallet_address: req.params.id });

    if (!user)
      return next(createError({ message: "User don't exists.", status: 400 }));

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
