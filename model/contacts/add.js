const getAll = require("./getAll");
const updateContacts = require("./updateContacts");

const add = async(data) => {
    try {
        const contacts = await getAll();
        const nextId = contacts.length + 1;
        const newContact = {id: nextId, ...data };
        contacts.push(newContact);
        await updateContacts(contacts);
        return newContact;
    }
    catch(error){
        throw error;
    }
};

module.exports = add;