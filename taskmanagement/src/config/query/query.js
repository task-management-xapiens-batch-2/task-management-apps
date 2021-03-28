import {gql} from '@apollo/client';
const QUERY_USERS = gql`
  query MyQuery {
    user {
      userName
      userId
    }
  }
`;
// const QUERY_TASKS = gql`
//   query listTask($assignee:Int!) {
//     listTaskWorker(assignee:$assignee){
//       id,
//       project_id,
//       assignee,
//       title,
//       description,
//       start_date,
//       due_date,
//       attachment,
//       status,
//       is_read
//     }
//   }
// `;

const QUERY_TASKS = gql`
  query{
    findAllTask{
      id,
      project_id,
      assignee,
      title,
      description,
      start_date,
      due_date,
      attachment,
      status,
      is_read
    }
  }
`;

export {QUERY_USERS, QUERY_TASKS};

export default {};
