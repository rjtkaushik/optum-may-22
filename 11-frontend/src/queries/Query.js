const {gql} = require("@apollo/client");

const GET_USERS = gql`
    query {
        users {
            _id
            name
            email
            age
        }
    }
`

module.exports = {
    GET_USERS
}