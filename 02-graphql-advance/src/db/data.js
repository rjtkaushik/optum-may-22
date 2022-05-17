let users = [
    { id: "101", name: "john", email: "john@test", age: 32 },
    { id: "102", name: "james", email: "james@test", age: 34 },
    { id: "103", name: "jenny", email: "jenny@test", age: 35 },
]

let posts = [
    { id: "201", title: "GraphQL 101", body: "Good post", published: false, authorId: "101" },
    { id: "202", title: "GraphQL for Beginners", body: "Nice post", published: true, authorId: "101" },
    { id: "203", title: "GraphQL Mastering", body: "I Like it", published: false, authorId: "102" },
    { id: "204", title: "GraphQL for All", body: "Awesome Course", published: true, authorId: "103" },
]

let comments = [
    { id: "301", text: "Awesome Post", commentedBy: "103", postId: "201" },
    { id: "302", text: "Nice Post", commentedBy: "103", postId: "203" },
    { id: "303", text: "I Love it", commentedBy: "101", postId: "204" },
    { id: "304", text: "Just like that", commentedBy: "102", postId: "201" },
]

module.exports = {
    users, posts, comments
}