const { v4 } = require("uuid");

module.exports = {
    createUser(parent, args, {db}, info) {
        const isEmailFound = db.users.some(user => user.email === args.email)
        if (isEmailFound) {
            throw new Error("Email already taken")
        } else {
            let newUser = {
                id: v4(),
                name: args.name,
                email: args.email
            }
            db.users.push(newUser)
            return newUser;
        }
    },
    createPost(parent, args, {db}, info) {
        const userFound = db.users.some(user => user.id === args.data.authorId)
        if (userFound) {
            let newPost = {
                id: v4(),
                title: args.data.title,
                body: args.data.body,
                published: args.data.published ? args.data.published : false,
                authorId: args.data.authorId
            }
            db.posts.push(newPost)
            return newPost;
        } else {
            throw new Error("User not found.")
        }
    },
    createComment(parent, args, {db}, info){
        const {text, authorId, postId} = args.data;
        const isUserMatch = db.users.some(user => user.id === authorId)
        const isPostMatch = db.posts.some(post => post.id === postId && post.published)
        if(isUserMatch && isPostMatch){
            let newComment = {
                id: v4(),
                text,
                commentedBy : authorId,
                postId
            }
            db.comments.push(newComment);
            return newComment;
        }else{
            throw new Error("Either post/user not found")
        }
    }
}