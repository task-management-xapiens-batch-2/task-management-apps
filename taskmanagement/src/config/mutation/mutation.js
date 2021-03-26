import {gql} from '@apollo/client';

const LOGIN_WORKER = gql`
  mutation($email: String!, $password: String!) {
    Login(email: $taksId, password: $password) {
      id
      fullname
      password
      role
    }
  }
`;
export {LOGIN_WORKER};
