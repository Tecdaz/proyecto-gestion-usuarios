const database = require('../database')

class UserController{
    async create(user){
        const result = await database.insert('users', user)
        return result
    }

    async readAll(){
        const users = await database.query('SELECT * FROM users')
        return users
    }
}

module.exports = UserController