const app = require("express").Router()
const MainController = require("../controller/mainController")

// app.get('/', (req, res) => {
//     res.render('shopingCart')
// })
app.get('/', MainController.shop)
app.get('/:id', MainController.insert)

module.exports = app