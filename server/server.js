require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
app.use(express.json())
app.use(cors())

const {
    bookTrip,
    ticketInfo,
    seed
} = require('./controller')

app.post("/api/jetGalactic/seed",seed)

app.post("/api/jetGalactic/", bookTrip)

app.get("/api/jetGalactic/", ticketInfo)

app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));