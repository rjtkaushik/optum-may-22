module.exports = {
    posts(parent, args, {db}, info) {
        if (args.search) {
            return db.posts.filter(post => {
                const titleMatch = post.title.toLowerCase().includes(args.search.toLowerCase())
                const bodyMatch = post.body.toLowerCase().includes(args.search.toLowerCase())
                return titleMatch || bodyMatch
            })
        }
        return db.posts;
    },
    users(parent, args, {db}, info) {
        if (args.query) {
            return db.users.filter(user => user.name.toLowerCase().includes(args.query.toLowerCase()))
        }
        if (args.min) {
            return db.users.filter(user => user.age >= args.min)
        }
        return db.users;
    },
    comments(parent, args, {db}, info) {
        return db.comments;
    },
    me() {
        return {
            id: "1",
            name: "Alice Doe",
            email: "alice@test.com"
        }
    }
}