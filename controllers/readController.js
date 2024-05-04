const studentModel = require('../models/studentSchema')


const readController = async(req,res)=>{
    try{
        const records = await studentModel.find({})
        if(records){
            //console.log("This is read file")
            res.render('read',{'records':records})
        }else{
            res.render('read');
        }
    }catch(error){
        console.log(error.message)
    }
}

module.exports = readController;