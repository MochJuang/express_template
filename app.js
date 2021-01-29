const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

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

// route
app.get('/' , (req,res) => {
    res.json({
        message : 'Hello Word'
    })
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log('server running on port http://localhost:'+ PORT))

