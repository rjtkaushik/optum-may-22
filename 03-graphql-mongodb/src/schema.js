const { gql } = require("apollo-server");

module.exports = gql`
type Query {
   users: [User!]!
}
type Mutation {
   createUser(data: CreateUserInput):User!
   deleteUser(id: ID!) : User!
   updateUser(id: ID!, data: UpdateUserInput ): User!
}
input UpdateUserInput {
   name: String
   email: String
   age: Int
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