const { ApolloServer, gql } = require("apollo-server");

// Structure
const typeDefs = gql`
    type Query {
        hello: String!
        me: String! 
    }
`

// Behaviour
const resolvers = {
    Query : {
        hello () {
            return "World"
        },
        me(){
            return "I'm Sumit K"
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()
    .then(({url}) => console.log("Server is listening on " + url))
    .catch(console.log)