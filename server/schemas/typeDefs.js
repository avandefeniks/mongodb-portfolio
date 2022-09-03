// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Contact {
    _id: ID
    name: String
    email: String
    message: String
    createdAt: String
},

type Query {
    contacts: [Contact]
},

type Mutation {
    addContact(name: String!, email: String!, message: String!): Contact
}
`;

// export the typeDefs
module.exports = typeDefs;