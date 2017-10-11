const mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

// db.categories.insert({
//     _id: "Class",
//     children: ["Students"]
// })
// db.categories.insert({
//     _id: "Student",
//     children: ["Posts", "Comments"]
// })
// db.categories.insert({
//     _id: "Posts",
//     children: ["Comments"]
// })

const PostSchema = new Schema({
    name: String,
    title: String,
    content: String,
    tags: Array,
},
{
    timestamps: true
}
)

const CommentSchema = new Schema({
    name: String,
    content: String,
    post: {
        type: Schema.ObjectId,
        ref: 'Post'
    },
},
{
    timestamps: true
}
)

const TagSchema = new Schema({
    name: String,
    post: {
        type: Schema.ObjectId,
        ref: 'Post'
    },
},
{
    timestamps: true
}
)

// let uri = 'mongodb://aha:project3@ds041526.mlab.com:41526/aha'
let uri = 'mongodb://localhost/aha'

mongoose.connect(uri, function(err, db) {
    if(err) {
        console.log('Error, unable to connect to db')
        return
    }
})


// mongoose.connect('mongodb://localhost/project3-back')
var Post = mongoose.model('Post', PostSchema)
var Comment = mongoose.model('Comment', CommentSchema)
var Tag = mongoose.model('Tag', TagSchema)

module.exports = mongoose
