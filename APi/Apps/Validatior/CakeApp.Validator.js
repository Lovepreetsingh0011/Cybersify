import Joi from "joi";

const Name = Joi.string().required().label("Name");
const Batterid = Joi.string().required().label("Batterid");
const Toppingid = Joi.string().required().label("Toppingid");

const CakeValidor = Joi.object({
  Name,
  Batterid,
  Toppingid,
});
const BatterValidator = Joi.object({
  Name,
});
const ToppingValidator = Joi.object({
  Name,
});

export { BatterValidator, CakeValidor, ToppingValidator };
