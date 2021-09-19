const bcrypt = require("bcryptjs");
const fs = require("fs/promises");
const path = require("path");
const {Conflict} = require("http-errors");
const gravatar = require("gravatar");

const {User} = require("../../models");

const avatarsDir = path.join(__dirname, "../../", "public/avatars");

const register = async(req, res, next) => {
    
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user){
        throw new Conflict("Already register");
    }

    const avatarImage = gravatar.url(req.body.email, {s: "250"}, true);
    
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const result = await User.create({email, password: hashPassword, avatar: avatarImage});
    const id = result._id.toString();
    const dirPath = path.join(avatarsDir, id);
    await fs.mkdir(dirPath);
    res.status(201).json({
        status: "success",
        code: 201,
        message: "Success register"
    })
};

module.exports = register;