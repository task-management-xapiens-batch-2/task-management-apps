import {gql} from '@apollo/client';
const QUERY_USERS = gql`
  query MyQuery {
    user {
      userName
      userId
    }
  }
`;
// const QUERY_TASKS = (id) => gql`
//   query MyQuery {
//     task(where: {Users: {userId: {_eq: ${id}}}}) {
//       taskId
//       userId
//       taskStatus
//       taskName
//       taskExpired
//     }
//   }
// `;
// const QUERY_DELETE_TASK = (userId, taskId) => gql`
//   mutation MyMutation {
//     delete_task(where: {Users: {userId: {_eq: ${userId}}, Task: {taskId: {_eq: ${taskId}}}}}) {
//       returning {
//         taskName
//         taskStatus
//         taskId
//         taskExpired
//         userId
//       }
//     }
//   }
// `;
// const QUERY_UPDATE_TASK = (userId) => gql`
//   mutation MyMutation {
//     update_task(where: {Users: {userId: {_eq: ${userId}}}}) {
//       affected_rows
//       returning {
//         taskStatus
//       }
//     }
//   }
// `;
const QUERY_CREATE_TASK = (id) => gql``;

export {
  QUERY_USERS
};

export default {};
