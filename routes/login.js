const app = require("express").Router()
const sequelize = require("sequelize")
const LoginController = require("../controller/loginController")

app.get("/", (req, res) =>{
    res.render("login",{err:null})
})

app.post('/', LoginController.login)

module.exports = app