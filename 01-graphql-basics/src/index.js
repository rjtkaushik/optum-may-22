const { ApolloServer, gql } = require("apollo-server");

// Structure
const typeDefs = gql`
    type Query {
        hello: String
        me: String! 
        age: Int!
    }
`

// Behaviour
const resolvers = {
    Query : {
        hello () {
            return null
        },
        me(){
            return "I'm Sumit K"
        },
        age(){
            return 36
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