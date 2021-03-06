const express = require('express')
const path = require('path')
const UserController = require('../controllers/users')

function views(document) {
    // eslint-disable-next-line no-undef
    return path.join(__dirname, '../views', document)
}

const router = express.Router()
const userController = new UserController()

router.get('/registro', (req, res) => {
    return res.sendFile(views('registro.html'))
})

router.post('/registro', async (req, res) => {
    const user = await userController.create(req.body)

    if (user.success) {
        return res.redirect('/')
    } else {
        return res.redirect('/registro')
    }
})

router.get('/users', (req, res) => {
    return res.sendFile(views('users.html'))
})

router.get('/api/users', async (req, res) => {
    var users = await userController.readAll()
    return res.json(users)
})

router.delete('/api/users/:id', async (req, res) => {
    const id = req.params.id
    let user = await userController.delete(id)
    return res.json(user)
})

router.post('/api/update/:id', async (req, res) =>{
    const id = req.params.id
    const user = await userController.update(req.body, id)
    if (user.success) {
        return res.redirect('/users')
    } else {
        return res.send(user)
    }
    
})


module.exports = router