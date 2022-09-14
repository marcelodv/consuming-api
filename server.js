const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')

app.use(cors())

const port = 3003

app.get('/', async (req, res) => {
    try {
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')
        return res.json(data)
    } catch (error) {
        console.error(error)
    }
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port} \n`)
})