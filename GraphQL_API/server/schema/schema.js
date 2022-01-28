const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');
const lodash = require('lodash');
const Project = require('../models/project');
const Task = require('../models/task');

// Root query for defining types of queries
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    task: {
      type: TaskType,
      args: { id: { type: GraphQLString } },
      resolve: (parent, args) => lodash.find(Task, { id: args.id })
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => lodash.find(Project, { id: args.id })
    },
    tasks: {
      type: new GraphQLList(TaskType),
      resolve: () => tasks
    },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve: () => projects
    }
  })
});

// Schema definition for tasks
const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString },
    project: {
      type: TaskType,
      resolve(parent, args) {
        return lodash.find(Project, { id: parent.projectId });
      }
    },
  })
});

const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString },
    tasks: {
      type: new GraphQLList(TaskType),
      resolve(parent, args) {
        return lodash.filter(Task, { projectId: parent.id });
      }
    },
  })
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addProject: {
      type: ProjectType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        weight: { type: new GraphQLNonNull(GraphQLInt) },
        description: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => {
        const proj = new Project({
          title: args.title,
          weight: args.weight,
          description: args.description,
        });
        return proj.save();
      }
    },
    addTask: {
      type: TaskType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        weight: { type: new GraphQLNonNull(GraphQLInt) },
        description: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => {
        const tsk = new Task({
          title: args.title,
          weight: args.weight,
          description: args.description,
        });
        return tsk.save();
      }
    },
  })
});

// Schema definition for queries based on RootQuery fields
const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

module.exports = schema;
