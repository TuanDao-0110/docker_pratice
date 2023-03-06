const express = require('express')
const app = express()
const PORT = 5000
const HOST = "0.0.0.0"
app.get('/', (req, res) => {
    return res.status(200).send('welcome')
})


app.listen(PORT, HOST,)
 console.log(`listening server HOST ${HOST} at port ${PORT}....`)