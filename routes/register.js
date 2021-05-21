const app = require("express").Router()

app.get("/", (req, res) =>{
    res.render("register")
})


module.exports = app