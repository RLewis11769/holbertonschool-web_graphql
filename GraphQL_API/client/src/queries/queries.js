import { gql } from 'apollo-boost';

const getTasksQuery = gql
`{
  tasks {
    id
    title
  }
}`;

const getProjectsQuery = gql
`{
  projects {
    id
    title
  }
}`;

export { getTasksQuery, getProjectsQuery };
