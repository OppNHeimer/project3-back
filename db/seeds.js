const mongoose = require('./connection')
var Post = mongoose.model('Post')
var Comment = mongoose.model('Comment')

Comment.remove({}).then(() => process.exit())
Post.remove({}).then(() => process.exit())

joePost = {
    name: 'joeshmo',
    title: 'My First Post',
    content: 'Writing a post is so much fun',
    tags: ['post', 'fun', 'joe'],
    comments: []
}
moePost = {
    name: 'moeshmo',
    title: 'My Post is better than Joes',
    content: 'Joe sucks I am so much better.',
    tags: ['post', 'better', 'moe'],
    comments: []
}
woahPost = {
    name: 'woahshmo',
    title: 'Chill guys',
    content: 'Joe and Moe, guys its nbd',
    tags: ['post', 'chill', 'woah'],
    comments: []
}


sallyComment = {
    name: 'sallyp',
    content: 'I agree with Moe, Joe sucks.'
}
jayComment = {
    name: 'Jay',
    content: 'Sally, Joe isnt that bad he only kinda sucks'
}
joeComment = {
    name: 'joeshmo',
    content: 'nah guys moes the worst'
}

joePost.comments.push(sallyComment, jayComment)
moePost.comments.push(joeComment)

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







