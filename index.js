const express = require('express')
const parser = require('body-parser')
let mongoose = require('./db/connection.js')
// const mongoose = require('./db/connections.js')
const cors = require('cors')
const app = express()

const Post = mongoose.model('Post')
const Comment = mongoose.model('Comment')

app.use(parser.json())
app.use(cors())

//index posts
app.get('/', (req, res) => {
    Post.find({})
    .then((posts) => {
        res.json(posts)
    })
})

//show post
app.get('/:postId', (req, res) => {
    Post.findOne({_id: req.params.postId})
    .then((post) => {
        res.json(post)
    })
})

//create new post
app.post('/postCreate', (req, res) => {
    Post.create(req.body)
    .then((post) => {
        res.json(post)
    })
})

//index post's comments
app.get('/:postId/comments', (req, res) => {
    Comment.find({post: req.params.postId})
    .then((comments) => {
        res.json(comments)
    })
})

//show single comment
app.get('/:post/comments/:commentId', (req, res) => {
    Comment.find({_id: req.params.commentId})
    .then((comment) => {
        res.json(comment)
    })
})

//create comment
app.post('/:postId/createComment'), (req, res) => {
    Comment.create(req.body)
    .then((comment) => {
        res.json(comment)
    })
}


app.listen(4000, () => {
    console.log('app listening on port 4000')
})