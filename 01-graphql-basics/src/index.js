const { ApolloServer } = require("apollo-server");
const db = require("./db/data");
const typeDefs = require("./schema");
const resolvers = require("./resolvers/index");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context :{ 
        db
    }
})

server.listen()
    .then(({ url }) => console.log("Server is listening on " + url))
    .catch(console.log)