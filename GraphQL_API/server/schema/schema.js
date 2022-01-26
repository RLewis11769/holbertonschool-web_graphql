const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt
} = require('graphql');
const lodash = require('lodash');

// Task data as defined in TaskType
const tasks = [
  {
  id: '1',
  title: 'Create your first webpage',
  weight: 1,
  description: 'Create your first HTML file 0-index.html with: -Add the doctype on the first line (without any comment) -After the doctype, open and close a html tag Open your file in your browser (the page should be blank)'
  },
  {
    id: '2',
    title: 'Structure your webpage',
    weight: 1,
    description: 'Copy the content of 0-index.html into 1-index.html Create the head and body sections inside the html tag, create the head and body tags (empty) in this order'
  }
]

// Schema definition for tasks
const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString }
  })
});

// Root query for defining types of queries
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    task: {
      type: TaskType,
      args: { id: { type: GraphQLString } },
      resolve: (parent, args) => lodash.find(tasks, { id: args.id })
    }
  })
});

// Schema definition for queries based on RootQuery fields
const schema = new GraphQLSchema({
  query: RootQuery
});

module.exports = schema;
