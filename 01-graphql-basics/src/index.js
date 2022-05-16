const { ApolloServer, gql } = require("apollo-server");

const users = [
    {id: "101", name : "john", email:"john@test", age: 32},
    {id: "102", name : "james", email:"james@test", age: 34},
    {id: "103", name : "jenny", email:"jenny@test", age: 35},
]

// Structure
const typeDefs = gql`
    type Query {
        me: User! 
        users(query: String): [User!]!
    }
    type User {
        id:ID!
        name: String!
        email: String!
        age: Int
    }
`

// Behaviour
const resolvers = {
    Query : {
        users(parent, args, ctx, info){
            if(args.query){
                return users.filter(user => user.name.toLowerCase().includes(args.query.toLowerCase()))
            }
            return users;
        },
        me(){
            return {
                id : "1",
                name : "Alice Doe",
                email: "alice@test.com"
            }
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