module.exports = (sequelize, Sequelize) => sequelize.define('posts',{
    title       : { type : Sequelize.STRING },
    description : { type : Sequelize.STRING },
    published   : { type : Sequelize.BOOLEAN },
})