#!/usr/bin/env node

import express from 'express';
import graphQLHTTP from 'express-graphql';

import schema from './schema';

const app = express();
const port = 9876;
app.use(graphQLHTTP({
  schema,
  graphiql: true,
}))
app.listen(port);
