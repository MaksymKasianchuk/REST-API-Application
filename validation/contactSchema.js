const Joi = require("joi");

const joiContactSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    // phone: Joi.string().pattern(new RegExp('^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$'))
    phone: Joi.string()
});

module.exports = joiContactSchema;