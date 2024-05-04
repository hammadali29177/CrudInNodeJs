const studentModel =  require('../models/studentSchema.js')

const homeController = async(req,res)=>{
    //res.send("I am Controller")
    res.render('index')
}

const createController = async(req,res)=>{
    //res.send(req.body)
    //console.log(req.body)
    record = await studentModel({
        name:req.body.name,
        city:req.body.city,
        email:req.body.email,
        contact:req.body.contact,
    });
    if(record){
        await record.save();
        console.log("Data Saved..")
    }else{
        console.log("Data not saved!..")
    }
    //res.render('index')
    res.redirect('read')
}

//Create 

module.exports = {homeController, createController};