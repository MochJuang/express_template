const db = require('../models/index')
const Kategori = db.kategories
const Post = db.posts
const Comment = db.comments
const Option = db.Sequelize.Op
const faker = require('faker/locale/id_ID')

Kategori.hasMany(Post)

exports.findAll = (req, res) => {
    
    Kategori.findAll({
        include : [{
            model : Post,
            include : [Comment]
        }]
    }).then(result => res.status(200).send({
        message : 'Data has in table',
        data    : result
    }))
    .catch(err => res.status(500).send({message : err.message})) 
        
}

exports.getIdAll = (req, res) => {
    Kategori.findAll({ attributes : ['id'] })
        .then( result =>  res.send(result.map(item => item.id)))
        .catch( err => res.send({message : err}) )
}

exports.dummy = (req, res) => {
    Kategori.create({  kategories : faker.name.title() })
        .then( result => res.status(200).send({message : 'success make dummy data kategories'}) )
        .catch( err => res.status(200).send({message : err.message || 'failed make dummy data kategories'}) )
}