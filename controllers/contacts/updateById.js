const {contactSchema} = require("../../validation");
const contactsOperations = require("../../model/contacts");

const updateById = async (req, res)=> {
    try {
        const {error} = contactSchema.validate(req.body);
        if(error){
            return res.status(400).json({
                message: error.message
            })
        }
        const {id} = req.params;
        const updateContact = await contactsOperations.update(Number(id), req.body);
        if(!updateContact) {
            return res.status(404).json({
                "message": "Not found"
            });
        }
        res.json({
            updateContact
        })
    }
    catch(error){
        next(error);
    }
};

module.exports = updateById;