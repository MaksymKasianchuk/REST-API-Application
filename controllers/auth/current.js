const {User} = require("../../models");
const {Unauthorized} = require("http-errors");

const current = async (req, res) => {
    const [bearer, token] = req.headers.authorization.split(" ");
    const user = await User.findOne({token});
    if(!user){
       throw new Unauthorized();
    } else{
        res.json({
            status: "success",
            code: 200, 
            user
        })
    }
};

module.exports = current;