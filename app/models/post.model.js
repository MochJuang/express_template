modul.exports = (sequelize, Sequelize) => sequelize.define('post',{
    title       : { type : Sequelize.STRING },
    description : { type : Sequelize.STRING },
    published   : { type : Sequelize.BOOLEAN },
})