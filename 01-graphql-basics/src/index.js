const { ApolloServer, gql } = require("apollo-server");

const users = [
    { id: "101", name: "john", email: "john@test", age: 32 },
    { id: "102", name: "james", email: "james@test", age: 34 },
    { id: "103", name: "jenny", email: "jenny@test", age: 35 },
]

const posts = [
    { id: "201", title: "GraphQL 101", body: "Good post", published: false, authorId: "101" },
    { id: "202", title: "GraphQL for Beginners", body: "Nice post", published: true, authorId: "101" },
    { id: "203", title: "GraphQL Mastering", body: "I Like it", published: false, authorId: "102" },
    { id: "204", title: "GraphQL for All", body: "Awesome Course", published: true, authorId: "103" },
]

const comments = [
    { id: "301", text: "Awesome Post", commentedBy: "103", postId: "201" },
    { id: "302", text: "Nice Post", commentedBy: "103", postId: "203" },
    { id: "303", text: "I Love it", commentedBy: "101", postId: "204" },
    { id: "304", text: "Just like that", commentedBy: "102", postId: "202" },
]

// Structure
const typeDefs = gql`
    type Query {
        me: User! 
        users(query: String, min: Int): [User!]!
        posts(search:String): [Post!]!
        comments: [Comment!]!
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

// Behaviour
const resolvers = {
    Query: {
        posts(parent, args, ctx, info) {
            if (args.search) {
                return posts.filter(post => {
                    const titleMatch = post.title.toLowerCase().includes(args.search.toLowerCase())
                    const bodyMatch = post.body.toLowerCase().includes(args.search.toLowerCase())
                    return titleMatch || bodyMatch
                })
            }
            return posts;
        },
        users(parent, args, context, info) {
            if (args.query) {
                return users.filter(user => user.name.toLowerCase().includes(args.query.toLowerCase()))
            }
            if (args.min) {
                return users.filter(user => user.age >= args.min)
            }
            return users;
        },
        comments(parent, args, ctx, info) {
            return comments;
        },
        me() {
            return {
                id: "1",
                name: "Alice Doe",
                email: "alice@test.com"
            }
        }
    },
    Comment: {
        creator(parent, args, ctx, info) {
            return users.find(user => user.id === parent.commentedBy)
        },
        post(parent, args, ctx, info){
            return posts.find(post => post.id == parent.postId)
        }
    },
    Post: {
        author(parent, args, ctx, info) {
            const userFound = users.find(user => user.id === parent.authorId)
            return userFound;
        },
        comments(parent, args, ctx, info){
            return comments.filter(comment => comment.postId === parent.id)
        }
    },
    User: {
        posts(parent, args, ctx, info) {
            return posts.filter(post => post.authorId === parent.id)
        },
        comments(parent, args, ctx, info) {
            return comments.filter(comment => comment.commentedBy === parent.id)
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()
    .then(({ url }) => console.log("Server is listening on " + url))
    .catch(console.log)