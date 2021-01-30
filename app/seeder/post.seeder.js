const db = require('../models/index')
const Kategori = db.kategories
const Post = db.posts
const Comment = db.comments
const Option = db.Sequelize.Op
const faker = require('faker/locale/id_ID')

const kategoriId = Kategori.findAll( {attributes : ['id']} ).then( kategori =>  kategori.map(kategori.id))
module.exports = (num = 1) => {
    for(i = 0; i < num; i++){
        Post.create({
            title       : faker.name.title(),
            description : faker.lorem.paragraph(8),
            published   : faker.random.arrayElement([0,1]),
            kategoryId  : faker.random.arrayElement([1,2,3,4,5,6,7])
        })
    }
}