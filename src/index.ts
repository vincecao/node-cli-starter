import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { ServiceAccount } from "firebase-admin";
import * as express from "express";

/* eslint-disable */
const { ApolloServer, gql } = require("apollo-server-express");
/* eslint-enable */

import {
  database_url as DATABASE_URL,
  account_key as ACCOUNT_KEY,
} from "./database_environment.json";

function createResolvers(name: string) {
  return {
    Query: {
      [name]: () => {
        return (
          admin
            .database()
            .ref(name)
            .once("value")
            /* eslint-disable */
            .then((snap: any) => snap.val())
            .then((val: any) => Object.keys(val).map((key) => val[key]))
        );
        /* eslint-enable */
      },
    },
  };
}

admin.initializeApp({
  credential: admin.credential.cert(ACCOUNT_KEY as string | ServiceAccount),
  databaseURL: DATABASE_URL,
});

// Create your own typeDefs
const typeDefs = gql`
  type Cat {
    name: String
    lifespan: String
    weight: String
    description: String
  }

  type Query {
    cats: [Cat]
  }
`;

const resolvers = createResolvers('cats');

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });
server
  .start()
  .then(() => server.applyMiddleware({ app, path: "/", cors: true }));

export const graphql = functions.https.onRequest(app);
