const { ApolloClient, InMemoryCache, gql } = require("@apollo/client");
const { CREATE_USER } = require("../queries/Mutation");
const { GET_USERS } = require("../queries/Query");

const client = new ApolloClient({
    uri: "http://localhost:4040/graphql",
    cache: new InMemoryCache()
})

window.onload = function(){
    const txtName = document.getElementById("txtName")
    const txtEmail = document.getElementById("txtEmail")
    const txtPassword = document.getElementById("txtPassword")
    const userList = document.getElementById("user-list")
    const btnSignup = document.getElementById("btnSignup")

    client.query({
        query : GET_USERS
    }).then(result => {
        result.data.users.forEach(user => {
            const liElements = document.createElement("li");
            liElements.innerHTML = `
                ${user.name} | ${user.age}
            `
            liElements.className = "list-group-item"
            userList.appendChild(liElements);
        })
    }).catch(console.log)

    btnSignup.addEventListener("click", event => {
        event.preventDefault();
        // console.log(txtName.value, txtEmail.value, txtPassword.value)
        client.mutate({
            mutation : CREATE_USER,
            variables : {
                name : txtName.value,
                email : txtEmail.value,
                password : txtPassword.value
            }
        }).then(console.log).catch(console)
    })
}
