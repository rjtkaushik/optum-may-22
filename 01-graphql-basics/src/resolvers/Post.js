module.exports = {
    author(parent, args, {db}, info) {
        const userFound = db.users.find(user => user.id === parent.authorId)
        return userFound;
    },
    comments(parent, args, {db}, info) {
        return db.comments.filter(comment => comment.postId === parent.id)
    }
}