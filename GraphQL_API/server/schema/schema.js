const graphQL = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphQL;

const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString }
  })
});
