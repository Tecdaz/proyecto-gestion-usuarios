//Fetch de ir y traer algo
var usersData = []

let users = document.getElementById('users')

// eslint-disable-next-line no-unused-vars
function deleteUser(id) {
    fetch(`api/users/${id}`, {
        method: "DELETE"
    })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            filterUser(parseInt(data.data))
            renderUsers()
        })
}

function filterUser(id) {
    let newUsers = []
    for (let i = 0; i < usersData.length; i++) {
        if (usersData[i].id !== id) {
            newUsers.push(usersData[i])
        }
    }
    usersData = newUsers
}

function renderUsers() {
    users.innerHTML = ""
    for (let user of usersData) {
        users.innerHTML = users.innerHTML + `<div class="user">
                        <p class = "name">${user.name}</p>
                        <p>${user.email}</p>
                        <button onClick="deleteUser(${user.id})">Eliminar</button>
                        </div>`
    }
}
fetch("/api/users")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        usersData = data
        console.log(usersData)
        renderUsers()
    })
