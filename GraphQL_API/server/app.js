// Set up Express.js server listening at port 4000
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
// const schema = require('./schema/schema');
const schema = require('./schema/schema_orig');
const mongoose = require('mongoose');

const app = express();

// Set up GraphQL server at /graphql endpoint
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, ()=> {
  console.log('now listening for request on port 4000')
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost/graphql');
mongoose.connection.on('error', (error) => {
  console.error(error);
});
mongoose.connection.once('open', () => {
  console.log('connected to database');
});
