const { gql } = require("apollo-server");

module.exports = gql`
type Query {
    me: User! 
    users(query: String, min: Int): [User!]!
    posts(search:String): [Post!]!
    comments: [Comment!]!
}
type Mutation {
    createUser(name: String!, email: String!) : User!
    createPost(data: CreatePostInput): Post!
    createComment(data: CreateCommentInput ): Comment!
}
input CreateCommentInput{
    text: String!
    authorId: ID!
    postId: ID!
}
input CreatePostInput{
    title: String!
    body: String!
    published: Boolean
    authorId: ID!
}
type Comment {
    id: ID!
    text: String!
    creator: User!
    post: Post!
}
type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
    comments: [Comment!]!
}
type User {
    id:ID!
    name: String!
    email: String!
    age: Int
    posts: [Post!]!
    comments: [Comment!]!
}
`