const express = require('express')
const path = require('path')
const app = express()

const userRoutes = require('./routes/users')

function views(document) {
    // eslint-disable-next-line no-undef
    return path.join(__dirname, "views", document)
}


//Midlewares
app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, "static")))

app.use(userRoutes)

app.get('/', (req, res) => {
    return res.sendFile(views('index.html'))
})

app.listen(4000, () => {
    console.log('Working... http://localhost:4000')
})
