const mongoose = require('./connection')
var Post = mongoose.model('Post')
var Comment = mongoose.model('Comment')



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
commentSeeds = [sallyComment, jayComment, joeComment]

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

postSeeds = [joePost, moePost, woahPost]

Comment.remove({}).then(() => {
    Comment.collection.insert(commentSeeds)
    }).then(() => {
        Post.remove({}).then(() => {
            Post.collection.insert(postSeeds)
        }).then(() => process.exit())
    })













// Post.remove({}).then(() => {
//     sallyComment.save((err, comment) => {
//         console.log(sallyComment)
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log(comment);
//         }
//     })
//     jayComment.save((err, comment) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log(comment);
//         }
//     })
//     joeComment.save((err, comment) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log(comment);
//         }
//     })
//     joePost.save((err, post) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log(post);
//         }
//     })
//     moePost.save((err, post) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log(post);
//         }
//     })
//     woahPost.save((err, post) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log(post);
//         }
//     })