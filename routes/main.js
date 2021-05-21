const app = require("express").Router()
const MainController = require("../controller/mainController")

// app.get('/', (req, res) =>{
//     res.render('main')
// })
app.get('/', MainController.show)
app.get('/:id', MainController.open)

module.exports = app