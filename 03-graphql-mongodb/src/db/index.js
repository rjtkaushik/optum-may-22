const { connect } = require("mongoose");

const MongoURI = "mongodb://localhost:27017/optum-db"

connect(MongoURI)
    .then(conn => {
        console.log("Mongo Connected")
    }).catch(console.log)