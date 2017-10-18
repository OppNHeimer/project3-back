// AS: Make sure to remove unused code!
const express = require('express')
const parser = require('body-parser')
let mongoose = require('./db/connection.js')
const cors = require('cors')
const app = express()

const Post = mongoose.model('Post')
const Comment = mongoose.model('Comment')
const Tag = mongoose.model('Tag')

app.use(parser.json())
app.use(cors())

// AS: make sure spacing is consistent throughout!
// Also, your comments are pretty well handled by your
// function declarations, so they are unneeded

// AS: for UI reasons, I would keep urls kebab case instead
// of camel case - no shift key needed!

// AS: since your lines are pretty short, I would keep the .then on the same line

// AS: Other than that, this looks 💯
app.post('/create-comment', (req, res) => {
    Comment.create(req.body).then((comment) => {
        res.json(comment)
    })
})


app.get('/', (req, res) => {
    Post.find({}).then((posts) => {
        res.json(posts)
    })
})


app.get('/tags', (req, res) => {
    Tag.find({}).then((tags) => {
        res.json(tags)
    })
})


app.post('/postCreate', (req, res) => {
    Post.create(req.body).then((post) => {
        res.json(post)
    })
})


app.get('/:postId', (req, res) => {
    Post.findOne({_id: req.params.postId}).then((post) => {
        res.json(post)
    })
})


app.post('/:postId/updatePost', function(req,res){
  Post.findOneAndUpdate({_id: req.params.postId}, req.body, {new: true})
      .then((post) => {
          res.json(post)
  })
})


app.post('/:postId/deletePost', function(req, res){
  Post.findOneAndRemove({_id: req.params.postId}, function(){
    res.json("/")
  })
})


app.get('/:postId/comments', (req, res) => {
    Comment.find({post: req.params.postId}).then((comments) => {
        res.json(comments)
    })
})


app.get('/:post/comments/:commentId', (req, res) => {
    Comment.find({_id: req.params.commentId}).then((comment) => {
        res.json(comment)
    })
})


app.post('/createtag', (req, res) => {
    Tag.create(req.body).then((tag) => {
            res.json(tag)
        })
})


app.get('/:postId/tags', (req, res) => {
    Tag.find({post: req.params.postId}).then((tags) => {
        res.json(tags)
    })
})


app.get('/tags/:searchTag', (req, res) => {
  Tag.find({name: req.params.searchTag}).then((tags) => {
      res.json(tags)
  })
})


app.listen(4000, () => {
    console.log('app listening on port 4000')
})
