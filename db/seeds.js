const mongoose = require('./connection')
var Post = mongoose.model('Post')
var Comment = mongoose.model('Comment')

joePost = new Post({
    name: 'joeshmo',
    title: 'My First Post',
    content: 'Writing a post is so much fun',
    tags: ['post', 'fun', 'joe'],

})
moePost = new Post({
    name: 'moeshmo',
    title: 'My Post is better than Joes',
    content: 'Joe sucks I am so much better.',
    tags: ['post', 'better', 'moe'],

})
woahPost = new Post({
    name: 'woahshmo',
    title: 'Chill guys',
    content: 'Joe and Moe, guys its nbd',
    tags: ['post', 'chill', 'woah'],
})

sallyComment = new Comment({
    name: 'sallyp',
    content: 'I agree with Moe, Joe sucks.',
    post: moePost._id
})
jayComment = new Comment({
    name: 'Jay',
    content: 'Sally, Joe isnt that bad he only kinda sucks',
    post: woahPost._id
})
joeComment = new Comment({
    name: 'joeshmo',
    content: 'nah guys moes the worst',
    post: woahPost._id
})

commentSeeds = [sallyComment, jayComment, joeComment]

postSeeds = [joePost, moePost, woahPost]

Post.remove({}).then(() => {
    Post.collection.insert(postSeeds)
    }).then(() => {
        Comment.remove({}).then(() => {
            Comment.collection.insert(commentSeeds)
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