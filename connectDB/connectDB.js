const mongoose = require('mongoose')
const connectDB = async()=>{
    const connect = await mongoose.connect('mongodb://localhost:27017/crud_node');
    if(connect){
        console.log('Connection Successfull...')
    }else{
        console.log("Connection Failed ...")
    }
}

module.exports = connectDB;