const {Contact} = require("../../models");

const updateById = async (req, res)=> {
    const {id} = req.params;
    const updateContact = await Contact.findByIdAndUpdate(id, req.body, {new: true});
    if(!updateContact) {
        return res.status(404).json({
            "message": "Not found"
        });
    }
    res.json({
        updateContact
    })
};

module.exports = updateById;