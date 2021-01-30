module.exports = app => {
    const comment = require('../controllers/comment.controller')
    const router = require('express').Router()

    router.get('/' , comment.findAll )

    app.use('/api/comment', router) // /api/post/create .......
}