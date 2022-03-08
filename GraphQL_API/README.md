# GraphQL API

## Installation

### /server

1. Install dependencies

2. Make sure MongoDB is connected with:
```
mongo
```

If not, start MongoDB instance with:
```
mongod
```

For missing file errors, try:
```
sudo touch /data/db/mongod.lock
sudo chmod 0777 /data/db/mongod.lock
```

3. Add .env file including MONGO_DB or uncomment localhost connection in app.js

4. Run with:
```
nodemon app.js
```

5. GraphiQL interface available at:
```
localhost:4000/graphiql
```

### /client

1. Install dependencies

2. Run React with:
```
npm start
```

## GraphiQL

Notice that the server/schema/ directory includes sample GraphiQL queries.

If using schema_orig.js, can use the exact queries for individual project/task with project(id:"1") for example. If using schema.js with database, id is of type MongoDB ObjectId, such as task(id:"6226feb8fcbbf3df2cf632e1"). Connect to Mongoose or run projects/tasks query to find existing ids.

client/src/queries contains queries used by frontend defined in GQL language.

## React

This project was assigned before any React projects. Therefore, the React was not written by me although I did attempt to explain everything in comments. Any GraphQL portions were added around existing/supplied components.

The purpose of this project was to:

1. Learn GraphQL
2. Learn ApolloClient, which is better in React although it does exist with vanilla JS
3. Get exposed to functional components, since React coursework includes slightly-outdated class components only
