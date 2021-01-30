const db = require('../models/index')
const Kategorie = db.kategories
const Post = db.posts
const Comment = db.comments
const Option = db.Sequelize.Op
const faker = require('faker/locale/id_ID')

module.exports = (num = 1) => {
    for(i = 0; i < num; i++){
        Kategorie.create({
            'kategories' : faker.name.jobTitle()
        })
    }
}