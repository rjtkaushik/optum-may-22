const express = require("express");
const { createServer } = require("http");
const { WebSocketServer } = require("ws");
const { useServer } = require("graphql-ws/lib/use/ws")
const { ApolloServer } = require("apollo-server-express");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const db = require("./db/data");
const typeDefs = require("./schema");
const resolvers = require("./resolvers/index");

const app = express();
const httpServer = createServer(app)
const PORT = process.env.PORT || 4001

const schema = makeExecutableSchema({ typeDefs, resolvers })


// WebSocketServer Created
const wsServer = new WebSocketServer({
    path: "/graphql",
    server: httpServer
})

useServer({
    schema, 
    context: {
        db
    }
}, wsServer);

// Apollo Server Created
const server = new ApolloServer({
    schema,
    context: {
        db
    }
})

server.start()
    .then(() => server.applyMiddleware({ app }))
    .catch(console.log)

httpServer.listen(PORT, () => console.log(`GraphQL Server running on http://localhost:${PORT}${server.graphqlPath}`))