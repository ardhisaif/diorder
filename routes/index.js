const route = require('express').Router()

const routeLogin = require('./login')
const routeMain = require('./main')
const routeRegister = require('./register')
const routeShoping = require('./shopingCart')
 
route.get('/', (req, res) =>{
    res.render('home')
})


route.use('/login', routeLogin)
route.use('/main', routeMain)
route.use('/register', routeRegister)
route.use('/shopingCart', routeShoping)

module.exports = route
