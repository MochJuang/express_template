const db = require('../models/index')
const Kategori = db.kategories
const Post = db.posts
const Comment = db.comments
const Option = db.Sequelize.Op

Comment.belongsTo(Post)

exports.findAll = (req, res) => {
    
    Comment.findAll({
        include : [{
            model : Post,
            include : [Kategori]
        }]
    }).then(result => res.status(200).send({
        message : 'Data has in table',
        data    : result
    }))
    .catch(err => res.status(500).send({message : err.message})) 
        
}
