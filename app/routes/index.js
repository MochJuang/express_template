module.exports = app => {
    require('./kategorie.route')(app)   
    require('./post.route')(app)   
    require('./comment.route')(app)   
}