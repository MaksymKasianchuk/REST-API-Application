const {Contact} = require("../../models");

const delById = async (req, res)=> {
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
};

module.exports = delById;