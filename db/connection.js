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

const PostSchema = new mongoose.Schema({
    name: String,
    title: String,
    content: String,
    tags: Array,
    comments: { type: Schema.ObjectId, ref: 'Comment'},
},
{
    timestamps: true
}
)

const CommentSchema = new mongoose.Schema({
    name: String,
    content: String,
},
{
    timestamps: true
}
)


mongoose.connect('mongodb://localhost/project3-back')
var Post = mongoose.model('Post', PostSchema)
var Comment = mongoose.model('Comment', PostSchema)

module.exports = mongoose