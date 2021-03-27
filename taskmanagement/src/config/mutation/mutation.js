import {gql} from '@apollo/client';

const LOGIN_WORKER = gql`
  mutation($email: String!, $password: String!) {
    Login(email: $email, password: $password) {
      id
      fullname
      email
      password
      role
    }
  }
`;

export {LOGIN_WORKER};
