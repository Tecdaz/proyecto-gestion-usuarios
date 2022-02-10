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