module.exports = {
    creator(parent, args, {db}, info) {
        return db.users.find(user => user.id === parent.commentedBy)
    },
    post(parent, args, {db}, info) {
        return db.posts.find(post => post.id == parent.postId)
    }
}