const { gql } = require("apollo-server");

module.exports = gql`
type Query {
   users: [User!]!
}
type Mutation {
   createUser(data: CreateUserInput):User!
}
type User{
   _id: ID!
   name: String!
   email: String!
   password: String!
   age: Int
}
input CreateUserInput{
   name: String!
   email: String!
   password: String!
   age: Int
}
`