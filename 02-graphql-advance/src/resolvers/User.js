module.exports = {
    posts(parent, args, {db}, info) {
        return db.posts.filter(post => post.authorId === parent.id)
    },
    comments(parent, args, {db}, info) {
        return db.comments.filter(comment => comment.commentedBy === parent.id)
    }
}