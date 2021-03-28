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

const UPDATE_STATUS_TASK = gql`
  mutation(
    $id: Int!
    $project_id: Int!
    $assignee: Int!
    $title: String!
    $description: String!
    $start_date: String!
    $due_date: String!
    $attachment: String!
    $status: String!
    $is_read: String!
  ) {
    updateTaskWorker(id: $id, status: $status) {
      id
      project_id
      assignee
      title
      description
      start_date
      due_date
      attachment
      status
      is_read
    }
  }
`;

export {LOGIN_WORKER, UPDATE_STATUS_TASK};
