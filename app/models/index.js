const dbConfig = require('../config/configdb')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host    : dbConfig.HOST,
    dialect : dbConfig.dialect,
    operatorAliases : false,
    pool : {
        min : dbConfig.pool.min,
        max : dbConfig.pool.max,
        acquire : dbConfig.pool.acquire,
        idle : dbConfig.pool.idle,
    }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.kategories = require('./kategorie.model')(sequelize, Sequelize)
db.posts = require('./post.model')(sequelize, Sequelize)
db.comments = require('./comment.model')(sequelize, Sequelize)

module.exports = db
