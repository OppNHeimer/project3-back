const mongoose = require('./connection')
var Post = mongoose.model('Post')
var Comment = mongoose.model('Comment')

Comment.remove({}).then(() => process.exit())
Post.remove({}).then(() => process.exit())
    
sallyComment = new Comment({
    name: 'sallyp',
    content: 'I agree with Moe, Joe sucks.'
})
jayComment = new Comment({
    name: 'Jay',
    content: 'Sally, Joe isnt that bad he only kinda sucks'
})
joeComment = new Comment({
    name: 'joeshmo',
    content: 'nah guys moes the worst'
})

joePost = new Post({
    name: 'joeshmo',
    title: 'My First Post',
    content: 'Writing a post is so much fun',
    tags: ['post', 'fun', 'joe'],
    comments: [jayComment._id]
})
moePost = new Post({
    name: 'moeshmo',
    title: 'My Post is better than Joes',
    content: 'Joe sucks I am so much better.',
    tags: ['post', 'better', 'moe'],
    comments: [sallyComment._id]
})
woahPost = new Post({
    name: 'woahshmo',
    title: 'Chill guys',
    content: 'Joe and Moe, guys its nbd',
    tags: ['post', 'chill', 'woah'],
    comments: [joeComment._id]
})



console.log(joePost.comments)
// joePost.comments.push(jayComment)
// moePost.comments.push(joeComment)
sallyComment.save()
jayComment.save()
joeComment.save()

joePost.save((err, post) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(post);
    }
})
moePost.save((err, post) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(post);
    }
})
woahPost.save((err, post) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(post);
    }
})







