import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

// express-graphql connects GraphQL with Express and graphql-tools  creates our schema
import expressGraphQL from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';
// Note: you can also use { graphqlExpress } from 'apollo-server-express' instead of express-graphql

/* Add our files needed to make a GraphQL schema: 1) type defs, and 2) resolvers
Type definitions (for GraphQL to check against our data) and resolvers (queries/mutations of our data, which will reach out to our database) */

import typeDefs from './schema';
import resolvers from './resolvers';

// Brings together the type defs and resolvers and turns them into a usable schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// Establish connection with Mongo
mongoose.connect('mongodb://localhost/test');
mongoose.connection
  .once('open', () => console.log('Connected to Mongo'))
  .on('error', error => console.error(`Error connecting to Mongo ${error}`));

// Define our model for Mongo (here it is only a couple of data fields, 'name' and 'lives')
const Cat = mongoose.model('Cat', { name: String, lives: { type: Number, default: 0 } });

const app = express();

// For necessary parsing of JSON
app.use(bodyParser.json());

/* The expressGraphQL() middleware below does three things (in this app): 
1) Pass in created schema to GraphQL by means of expressGraphQL
2) It provides context for our database model where we can pass in all our models (if we had more than one)
3) Creates GraphiQL app at /graphql (for interacting with our data) */

app.use('/graphql', expressGraphQL({ 
  schema, 
  context: { Cat },
  graphiql: true 
}));

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});