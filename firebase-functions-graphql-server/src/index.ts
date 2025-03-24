import { https } from "firebase-functions";
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
import { Cat } from "./type";
import { getCat, updateCat, removeCat, createCat } from "./core";

admin.initializeApp({
  credential: admin.credential.cert(ACCOUNT_KEY as ServiceAccount),
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

  input CatInput {
    name: String
    lifespan: String
    weight: String
    description: String
  }

  # the schema allows the following query:
  type Query {
    cats: [Cat]
  }

  # this schema allows the following mutation:
  type Mutation {
    createCat(input: CatInput!): [Cat]
    updateCat(input: CatInput!): [Cat]
    removeCat(input: String!): String
  }
`;

const resolvers = {
  // this resolvers allows the following query operation:
  Query: {
    cats: getCat,
  },

  // this resolvers allows the following mutation operation:
  Mutation: {
    createCat: async (_: any, { input: cat }: { input: Cat }) => {
      await createCat(cat);
      return getCat();
    },
    updateCat: async (_: any, { input: cat }: { input: Cat }) => {
      await updateCat(cat);
      return getCat();
    },
    removeCat: async (_: any, { input: name }: { input: string }) => {
      await removeCat(name);
      return name;
    },
  },
};

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });
server
  .start()
  .then(() => server.applyMiddleware({ app, path: "/", cors: true }));

export const graphql = https.onRequest(app);
