const { default: mongoose } = require('mongoose');
const mongo = require('mongoose');

const db = async() => {
    try{
        mongoose.set('strictQuery',false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('mongo is connected')
    }catch(err){
        console.log('db connection error')
    }
}

module.exports =  { db }