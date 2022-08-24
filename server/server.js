const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const port = 5000 || process.env.PORT
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })
require('./db/connect')


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: true, credentials: true }))

app.use(routes)

app.listen(port, () => {
    console.log(`Server is active on port ${port}`)
})