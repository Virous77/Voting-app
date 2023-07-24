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
  console.log(req.params.address.toLowerCase());
  try {
    const findUser = await User.findOne({
      wallet_address: req.params.address,
    });

    console.log(findUser);

    if (findUser) {
      res.status(200).json({ status: true });
    } else {
      res.status(200).json({ status: false });
    }
  } catch (error) {
    next(error);
  }
};
