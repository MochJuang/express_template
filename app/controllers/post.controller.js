const db = require('../models/index')
const Post = db.posts
const Option = db.Sequelize.Op

// create
exports.create = (req, res) => {
    if(!req.body.title || !req.body.description ){
        res.send('your data has not required')
        return 
    }
    const post = {
        title       : req.body.title,
        description : req.body.description,
        published   : req.body.published ? true : false
    }
    Post.create(post)
        .then(result => res.status(200).send({
            message : 'success',
            'data' : result
        })).catch(err => res.status(500).send({
            message : err.message || 'sorry your data has in table'
        }))
}

// Retrieve all
exports.findAll = (req, res) => {
    const title = req.body.title
    let condition = title ? {title : {[Option.like] : `%${title}%`} } : null
    
    Post.findAll({where : condition}) 
        .then(result => res.status(200).send({
            message : 'Data has in table',
            data    : result
        }))
        .catch(err => res.status(500).send({message : err.message ||'data hasn\'n in table'}))
}

// Find One
exports.findOne = (req, res) => {
    // find by primay key
    Post.findByPk(req.params.id)
        .then(result => res.status(200).send({
            message : 'Data has in table where id = '+ req.params.id ,
            data    : result
        }))
        .catch(err => res.status(500).send({message : err.message ||'data hasn\'n in table with id='+req.params.id }))
}

// Update with id
exports.update = (req, res) => {
    Post.update(req.body, {
        where : {id : req.params.id}
    }).then(result => res.status(200).send({
        message : 'Data has update where id='+req.params.id ,
        data    : result
    }))
    .catch(err => res.status(500).send({message : err.message ||'data hasn\'t update where id='+req.params.id }))
}

// delete with id
exports.delete = (req, res) => {
    Post.destroy({where : {id : req.params.id}})
    .then(result => res.status(200).send({
        message : 'Data has delete where id='+req.params.id ,
    }))
    .catch(err => res.status(500).send({message : err.message ||'data hasn\'t delete where id='+req.body.id }))
}

// delete All
exports.deleteAll = (req, res) => {
    Post.destroy({ where : {}, truncate : false })
    .then(result => res.status(200).send({
        message : 'Data has delete all success' ,
    }))
    .catch(err => res.status(500).send({message : err.message ||'data hasn\'t delete all failed' }))   
}

// find where published 
exports.findAllPublished = (req, res) => {
    Post.findAll({where : { published : true }}) 
        .then(result => res.status(200).send({
            message : 'Data has published',
            data    : result
        }))
        .catch(err => res.status(500).send({message : err.message ||'cannot data published'}))   
}