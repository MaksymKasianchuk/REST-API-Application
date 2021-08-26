const contactsOperations = require("../../model/contacts");

const delById = async (req, res)=> {
    try {
        const {id} = req.params;
        const deleteContact = await contactsOperations.del(Number(id));
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