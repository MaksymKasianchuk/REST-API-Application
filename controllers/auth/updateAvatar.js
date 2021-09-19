const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");
const {Unauthorized} = require("http-errors");

const {User} = require("../../models");

const avatarsDir = path.join(__dirname, "../../", "public/avatars");

const updateAvatar = async(req, res) => {
    try {
        const [bearer, token] = req.headers.authorization.split(" ");
        const user = await User.findOne({token});
        if(!user){
            throw new Unauthorized();
        }
        const { _id } = user;
        const { originalname, destination } = req.file;
        const imgPath = destination + "\\" + originalname;
        const uploadPath = path.join(String(avatarsDir), String(_id), String(originalname));
        const file = await Jimp.read(imgPath);
        await file.resize(255, 255).write(imgPath);
        await fs.rename(imgPath, uploadPath);
        const avatar = `/avatars/${_id}/${originalname}`;
        await User.findByIdAndUpdate(_id, {avatar});
        res.json({
            status: "success",
            code: 200,
            data: {
                result: avatar
            }
        })
    }
    catch(error){
        throw error;
    }
};

module.exports = updateAvatar;