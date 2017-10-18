const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

// AS: Changed some formatting, otherwise looks good!

const PostSchema = new Schema({
    name: String,
    title: String,
    content: String,
    tags: Array,
}, { 
    timestamps: true 
})


const CommentSchema = new Schema({
    name: String,
    content: String,
    post: {
        type: Schema.ObjectId,
        ref: 'Post'
    },
}, {
    timestamps: true
})


const TagSchema = new Schema({
    name: String,
    post: {
        type: Schema.ObjectId,
        ref: 'Post'
    },
}, {
    timestamps: true
})


// AS: Put your DB path in a .env file and gitignore! Don't let people mess with your data!!!
let uri = 'mongodb://localhost/aha'

mongoose.connect(uri, function(err, db) {
    if(err) {
        console.log('Error, unable to connect to db')
        return
    }
})


const Post = mongoose.model('Post', PostSchema)
const Comment = mongoose.model('Comment', CommentSchema)
const Tag = mongoose.model('Tag', TagSchema)

module.exports = mongoose
