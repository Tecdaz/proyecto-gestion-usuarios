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

    async delete(id){
        const user = await database.del('users', id)
        return user
    }

    async update(data){
        const user = await database.update('users', data)
        return user
    }
}

module.exports = UserController