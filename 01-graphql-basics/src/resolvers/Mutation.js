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
    deleteUser(parent, args, {db}, info){
       const position = db.users.findIndex(user => user.id === args.userId)
       if(position >= 0){
            db.comments = db.comments.filter(comment => comment.commentedBy !== args.userId)
            db.posts = db.posts.filter(post => {
                const isMatch = post.authorId === args.userId
                if(isMatch){
                    db.comments = db.comments.filter(comment => comment.postId !== post.id)
                }
                return !isMatch
            })
            const [deletedUser] = db.users.splice(position, 1)
            return deletedUser;
       }else{
           throw new Error("User not found")
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
    deletePost(parent, args, {db}, info){
        const position = db.posts.findIndex(post => post.id === args.postId)
        if(position >= 0){
            db.comments = db.comments.filter(comment => comment.postId !== args.postId)
            const [deletedPost] = db.posts.splice(position, 1)
            return deletedPost;
        }else{
            throw new Error("Post not found")
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
    },
    deleteComment(parent, args, {db}, info){
        const position = db.comments.findIndex(comment => comment.id === args.id)
        if(position >= 0){
            const [deletedComment] = db.comments.splice(position, 1)
            return deletedComment;
        }else{
            throw new Error("Comment not found")
        }
    }
}
