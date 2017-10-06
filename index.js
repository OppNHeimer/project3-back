const express = require('express')
const parser = require('body-parser')
// const mongoose = require('./db/connections.js')
const cors = require('cors')
const app = express()

app.use(parser.json())
app.use(cors())

//index posts
app.get('/', (req, res) => {
    res.send('index post')
})

//show post
app.get('/:post', (req, res) => {
    res.send(`show ${req.params.post}`)
})

//index comments
app.get('/:post/comments', (req, res) => {
    res.send(`comments of ${req.params.post}`)
})

//show comment
app.get('/:post/comments/:comment', (req, res) => {
    res.send(`comment: ${req.params.comment} of post: ${req.params.post}`)
})


app.listen(4000, () => {
    console.log('app listening on port 4000')
})