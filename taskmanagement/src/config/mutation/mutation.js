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

const SET_ISREAD = gql`
  mutation($id: Int!) {
    updateIsRead(id: $id) {
      status
      is_read
      id
      title
    }
  }
`;

const SET_STATUS = gql`
  mutation($id: Int!, $status: String!) {
    updateTaskWorker(id: $id, status: $status) {
      status
      id
      title
    }
  }
`;

export {LOGIN_WORKER, SET_ISREAD, SET_STATUS};
