import {gql} from '@apollo/client';
const QUERY_USERS = gql`
  query MyQuery {
    user {
      userName
      userId
    }
  }
`;

const QUERY_TASKS = gql`
  query findWorker {
    findAllTaskWorker {
      id
      project_id
      title
      assignee
      description
      start_date
      due_date
      status
      attachment
    }
  }
`;

export {QUERY_USERS, QUERY_TASKS};

export default {};
