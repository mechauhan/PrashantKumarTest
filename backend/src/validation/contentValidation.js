const Joi = require("joi");

exports.contentValidation = (req, res, next) => {
  const contentSchema = Joi.object({
    exerciseName: Joi.string().required(),
    images: Joi.array().items(Joi.string()),
  });

  const validation = contentSchema.validate(req.body);
  let { error } = validation;

  if (error) {
    error.status = 422;
    next(error);
  }
  next();
};
