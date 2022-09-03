// import model
const Contact = require('../models');

const resolvers = {
    Query: {
        // get all contacts
        contacts: async () => {
            return Contact.find();
        }
    },
    Mutation: {
        // create contact
        addContact: async(parent, args) => {
            const contact = await Contact.create(args);
            return contact;
        }
    }
}

 module.exports = resolvers;