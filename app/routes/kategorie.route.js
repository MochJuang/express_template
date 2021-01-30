module.exports = app => {
    const kategori = require('../controllers/kategorie.controller')
    const router = require('express').Router()

    router.get('/' , kategori.findAll )
    router.get('/id' , kategori.getIdAll )
    router.post('/' , kategori.dummy )

    app.use('/api/kategori', router) // /api/post/create .......
}