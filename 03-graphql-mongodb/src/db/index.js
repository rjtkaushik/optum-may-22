const { connect } = require("mongoose");

connect("mongodb://localhost:27017/optum-db")
    .then(conn => {
        console.log("Mongo Connected")
    }).catch(console.log)