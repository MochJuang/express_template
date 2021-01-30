const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./app/models/index')
const app = express()

// client apa saja yang diperbolehkan untuk request
let whiteList = [
    'http://localhost:8081'
]
let corsOption = {
    origin : (origin, callback) => {
        if(whiteList.indexOf(origin) != -1 || !origin ){
            callback(null,true)
        }else{
            callback(new Error('Not allowed by CORS'))
        }
    }
}
//  Untuk perizinan cors saat request
app.use(cors(corsOption))
// untuk parse request application/json x-www-form-urlencode
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// migrate/ sync database
db.sequelize.sync()

// route
require('./app/routes/index')(app)

// factory seeder fake data
// require('./app/seeder/index')()

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log('server running on port http://localhost:'+ PORT))

