import joi from "joi";

export const AuthValidate = async (req, res, next) => {
  try {
    const schema = joi
      .object({
        name: joi.string().trim().required(),
        wallet_address: joi.string().trim().required(),
        chain: joi.string().trim().required(),
      })
      .options({ stripUnknown: true });

    const result = await schema.validateAsync(req.body);
    if (result) next();
  } catch (error) {
    next(error.details[0].message);
  }
};
