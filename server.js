const express = require("express")

const app = express()
const routes = require("./routes/index")

app.set("view engine", "ejs")
app.get('/', (req, res) => {
    res.render("home.ejs")
})
app.use(express.urlencoded({extended:true}))
app.use(routes)
app.use( express.static( "public" ) );

app.listen(3003)
console.log('listening on port 3003');