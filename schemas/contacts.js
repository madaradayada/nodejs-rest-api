const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().trim().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const schemaUpdateFavorite = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  addSchema,
  schemaUpdateFavorite,
};
