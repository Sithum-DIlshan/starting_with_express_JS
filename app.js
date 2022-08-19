const express = require('express')
const app = express()
const port = 9000

app.use(express.json())

app.get('/', (req, res) => {
    console.log(req.body)
    res.send('Hello World!')
})

app.get('/customer', (req, res) => {
    res.send('Hello Customer!')
})

app.get('/item', (req, res) => {
    res.send('Hello Item!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
