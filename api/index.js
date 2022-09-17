import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import dbConnection from '../driver/mongo-connection.js';
import { tipos } from '../graphql/types.js';
import { resolvers } from '../graphql/resolvers.js';
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";


const app = express();

app.use(express.json());

app.use(cors());

const httpServer = http.createServer(app);

const server = new ApolloServer({
    typeDefs: tipos,
    resolvers: resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
});

app.listen({ port: process.env.PORT || 4000 }, async () => {
    await dbConnection();
    await server.start();

    server.applyMiddleware({ app });
    
    console.log('Server is running');
});

export default httpServer;