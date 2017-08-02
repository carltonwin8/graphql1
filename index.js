#!/usr/bin/env node

import express from 'express';
import graphQLHTTP from 'express-graphql';
import DataLoader from 'dataloader';

import schema from './schema';

import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:8765'

function getPersonByURL(relativeURL) {
  return fetch(`${BASE_URL}${relativeURL}`)
    .then(res => res.json());
}

const app = express();
const port = 9876;
app.use(graphQLHTTP(req => {
  const personLoader = new DataLoader(
    keys => Promise.all(keys.map(getPersonByURL))
  );
  const loaders = {
    person: personLoader,
  };
  return {
    context: {loaders},
    schema,
    graphiql: true,
  }
}))
app.listen(port);
