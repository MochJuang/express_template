const kategoriFactory = require('./kategorie.seeder')
const postFactory = require('./post.seeder')
const commentFactory = require('./comment.seeder')

module.exports = () => {
    kategoriFactory(7)
    postFactory(15)
    commentFactory(22)
}