const database = {
    users: []
}

getData()

function getData() {
    fetch('http://localhost:3000/user/3')
        .then(res => res.json())
        .then(function (data) {
            database.users = data
            printUsers()
        })
    // printUsers()
}

// printUsers()

function printUsers() {
    const ul = document.createElement('ul')

    for (let i = 0; i < database.users.length; i++) {
        let user = database.users[i]

        let li = document.createElement('li')
        li.innerText = (i + 1) + ". id: " + user.id + ", email" + user.email
        ul.append(li)
    }
    const userListElem = document.querySelector('#usersList')
    userListElem.innerHTML = "";
    userListElem.appendChild(ul)
}


document.querySelector('#btn1').addEventListener("click", function () {
    var email = document.querySelector('#inputEmail').value
    var password = document.querySelector('#inputPass').value
    var id = document.querySelector('#inputId').value

    var newUser = createUser(id, password, email)
    database.users.push(newUser)
    printUsers()
})

function createUser(id, password, email) {
    return {
        id: id,
        password: password,
        email: email
    }
}
