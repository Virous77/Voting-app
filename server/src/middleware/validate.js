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

export const VoteValidate = async (req, res, next) => {
  try {
    const schema = joi
      .object({
        admin: joi.string().trim().required(),
        admin_address: joi.string().trim().required(),
        start_time: joi.string().trim().required(),
        end_time: joi.string().trim().required(),
        term: joi.boolean().truthy().required(),
        for_vote: joi
          .array()
          .items(
            joi.object({
              candidate: joi.string().trim().required(),
              candidate_address: joi.string().trim().required(),
            })
          )
          .required(),
      })
      .options({ stripUnknown: true });

    const result = await schema.validateAsync(req.body);
    if (result) next();
  } catch (error) {
    next(error.details[0].message);
  }
};
