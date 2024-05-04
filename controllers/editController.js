const studentModel = require('../models/studentSchema')

const editController = async(req,res)=>{
    try{
        //console.log(req.params.id)
        const record = await studentModel.findById({'_id':req.params.id})
        if(record){
            res.render('edit', {'record':record}) 
        }else{
            res.render('edit')
        }
    }catch(error){
        console.log(error.message)
    }
}


const updateController = async(req,res)=>{
    try{
        
        const updateRecord = await  studentModel.findByIdAndUpdate(req.params.id, req.body);
        if(updateRecord){
            res.redirect('/read');
        }else{
            res.redirect('read')
        }
    }catch(error){
        console.log(error.message)
    }
}


// delete

const deleteController = async(req,res)=>{
    try {
      const deleterecord =   await studentModel.findByIdAndDelete(req.params.id);
      //const deletedRecord = await studentModel.findByIdAndDelete(req.params.id);
        if(deleterecord){
            res.redirect('/')
        }else{
            res.redirect('read')
        }
      
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = {editController, updateController, deleteController};