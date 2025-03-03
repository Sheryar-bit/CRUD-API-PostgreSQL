const joi = require('joi');


//defining how our email and name should bew 
const userSchema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
})

const validateUser = function(req, res, next) {
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).send({ message: error.details[0].message });
    };
    next();
}

module.exports= validateUser;