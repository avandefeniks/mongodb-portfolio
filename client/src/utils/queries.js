import { gql } from '@apollo/client';

export const CONTACT = gql`
{
  contacts {
    _id
    name
    email
    message
    createdAt
  }
}
`;