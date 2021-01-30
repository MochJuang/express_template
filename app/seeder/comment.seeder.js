const db = require('../models/index')
const Kategori = db.kategories
const Post = db.posts
const Comment = db.comments
const Option = db.Sequelize.Op
const faker = require('faker/locale/id_ID')

const postId = Post.findAll( {attributes : ['id']} ).then( post =>  post.map(post.id))

module.exports = (num = 1) => {
    for(i = 0; i < num; i++){
        Comment.create({
            comments : faker.lorem.paragraph(8),
            postId   : faker.random.arrayElement([1,2,3,4,5,6,7,8,9,10,12,13,14,15])
        })
    }
}