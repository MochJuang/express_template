module.exports = (sequelize, Sequelize) => sequelize.define('comments',{
    comment       : { type : Sequelize.STRING },
})