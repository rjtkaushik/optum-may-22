const { gql } = require("@apollo/client")

const CREATE_USER = gql`
mutation CreateNewUser($name: String!, $email: String!, $password: String!){ 
    createUser(data : {
        name : $name,
        email : $email,
        password : $password
    }){
        _id
        name
        email
        password
    }
}
`

module.exports = {
    CREATE_USER
}