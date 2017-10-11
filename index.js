const express = require('express')
const parser = require('body-parser')
let mongoose = require('./db/connection.js')
// const mongoose = require('./db/connections.js')
const cors = require('cors')
const app = express()

const Post = mongoose.model('Post')
const Comment = mongoose.model('Comment')
const Tag = mongoose.model('Tag')

app.use(parser.json())
app.use(cors());


//create comment
app.post('/createComment', (req, res) => {
    Comment.create(req.body)
        .then((comment) => {
            res.json(comment)
        })
})

//index posts
app.get('/', (req, res) => {
    Post.find({})
    .then((posts) => {
        res.json(posts)
    })
})
// index tags
app.get('/tags', (req, res) => {
    Tag.find({})
    .then((tags) => {
        res.json(tags)
    })
})

//create new post
app.post('/postCreate', (req, res) => {
    Post.create(req.body)
    .then((post) => {
        res.json(post)
    })
})


//show post
app.get('/:postId', (req, res) => {
    Post.findOne({_id: req.params.postId})
    .then((post) => {
        res.json(post)
    })
})

//edit post
app.post('/:postId/updatePost', function(req,res){
  Post.findOneAndUpdate({_id: req.params.postId},req.body,{new: true})
      .then((post) => {
          res.json(post);
  })
})

//delete post
app.post('/:postId/deletePost', function(req, res){
  Post.findOneAndRemove({_id: req.params.postId}, function(){
    res.json("/")
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

//create new tag
app.post('/createtag', (req, res) => {
    Tag.create(req.body)
        .then((tag) => {
            res.json(tag)
        })
})

//index post's tags
app.get('/:postId/tags', (req, res) => {
    Tag.find({post: req.params.postId})
    .then((tags) => {
        res.json(tags)
    })
})

app.get('/tags/:searchTag', (req, res) => {
  Tag.find({name: req.params.searchTag})
  .then((tags) => {
      res.json(tags)
  })
})


app.listen(4000, () => {
    console.log('app listening on port 4000')
})
