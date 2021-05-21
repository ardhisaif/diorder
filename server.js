const express = require("express")

const app = express()
const routes = require("./routes/index")
const port = process.env.PORT || 4000

app.set("view engine", "ejs")
app.get('/', (req, res) => {
    res.render("home.ejs")
})
app.use(express.urlencoded({extended:true}))
app.use(routes)
app.use( express.static( "public" ) );

app.listen(port, function () {
    console.log(`server start on ${port}`);
})
console.log('listening on port 3003');