const mongoose = require('./connection')
const Post = mongoose.model('Post')
const Comment = mongoose.model('Comment')
const Tag = mongoose.model('Tag')

// AS: Changed some formatting, otherwise looks good! 

joePost = new Post({
    name: 'joeshmo',
    title: 'My good Post',
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
    name: 'sallyS',
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

jayTag = new Tag({
    name: 'Test',
    post: woahPost._id
})

testTag = new Tag({
    name: 'Dia',
    post: moePost._id
})

const commentSeeds = [sallyComment, jayComment, joeComment]

const postSeeds = [joePost, moePost, woahPost]

const tagSeeds = [jayTag, testTag]

Post.remove({}).then(() => {
    Post.collection.insert(postSeeds)
})

Comment.remove({}).then(() => {
    Comment.collection.insert(commentSeeds)
})

Tag.remove({}).then(() => {
    Tag.collection.insert(tagSeeds).then(() => {
        process.exit()
    })
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
