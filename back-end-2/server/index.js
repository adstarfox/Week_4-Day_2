const express = require(`express`)
const cors = require(`cors`)

const app = express()

app.use(express.json())
app.use(cors())

let {getHouses, deleteHouse, createHouse, updateHouse} = require(`./controller.js`)

app.get(`/api/houses`, getHouses)
app.post(`/api/houses`, createHouse)
app.delete(`/api/houses/:id`, deleteHouse)
app.put(`/api/houses/:id`, updateHouse)





app.listen(4004, console.log(`Serving is running in port 4004`))