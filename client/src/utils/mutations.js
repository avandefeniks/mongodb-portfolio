import { gql } from '@apollo/client';

export const ADD_CONTACT = gql`
mutation addContact($name: String!, $email: String!, $message: String!) {
  addContact(name: $name, email: $email, message: $message) {
    _id
    name
    email
    message
    createdAt
  }
}
`;