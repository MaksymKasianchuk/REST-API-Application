const contactsOperations = require("../../model/contacts");

const getAll = async (req, res, next)=> {
    try {
        const contacts = await contactsOperations.getAll();
        res.json({
            contacts
        });
        // res.json({
        //     status: "success",
        //     code: 200,
        //     data: {
        //         result: contacts
        //     }
        // });
    }
    catch(error){
        next(error);
    }
}

module.exports = getAll;