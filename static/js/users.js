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

// eslint-disable-next-line no-unused-vars
function updateUser(name, email, id) {
    console.log(name, email, id)
    //Ubica el usuario en el archivo
    let user = document.getElementById(id)
    let boton = document.getElementById(`btn-modificar-${id}`)
    boton.style.display = "none"

    user.innerHTML = user.innerHTML + 
    `<form action="/api/update/${id}" method="POST" id="formulario">
        <input type="text" name="name" value="${name}">
        <input type="email" name="email" value="${email}">
        <button>Enviar</button>
    </form>`
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
        users.innerHTML = users.innerHTML + `<div class="user" id="${user.id}">
                        <p class = "name">${user.name}</p>
                        <p>${user.email}</p>
                        <button id="btn-modificar-${user.id}" onClick=" updateUser('${user.name}','${user.email}',${user.id})">Modificar</button>
                        <button class="delete" onClick="deleteUser(${user.id})">Eliminar</button>
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
