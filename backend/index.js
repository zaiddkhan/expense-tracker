const express = require('express')
const cors = require('cors')
const app = express();
require('dotenv').config()  
const  { readdirSync} = require('fs')
const {db} = require('./db/db')


app.use(express.json())
app.use(cors())
const PORT = process.env.PORT


readdirSync('./routes').map((route) => 
    app.use('/api/v1',require('./routes/'+ route))
)
app.get('/',(req,res) => {
    res.send('You have visited the best website in the world')
})
const server = () => {
    db()
    app.listen(PORT,() => {
        console.log(`agdam bagdam ${PORT}`)
    })
}

server()