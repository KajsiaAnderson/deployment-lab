const express = require("express")
const cors = require("cors")
require('dotenv').config()


const app = express()

app.use(express.json())
app.use(cors())

const {home, design, mouse} = require("./controllers/pageCtrl")

app.get("/", home)

app.get('/css', design)
app.get('/js', mouse)


const {PORT} = process.env

app.listen(PORT, () => console.log(`Server is on ${PORT}`))