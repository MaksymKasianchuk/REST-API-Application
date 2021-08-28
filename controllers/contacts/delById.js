const {Contact} = require("../../models");

const delById = async (req, res)=> {
    try {
        const {id} = req.params;
        const deleteContact = await Contact.findByIdAndDelete(id);
        if(!deleteContact) {
            return res.status(404).json({
                "message": "Not found"
            });
        }
        res.json({
            deleteContact
        })
    }
    catch(error){
        next(error);
    }
};

module.exports = delById;