import studentModel from '../models/students.js'
class studentController{
    static createDoc=async (req,res)=>{
        //console.log(req.body);
        //res.redirect('/student');
        try{
            
            const {name, age, fees}=req.body;
            const student=new studentModel({name, age, fees});
            const result=await student.save();
            //console.log(result);
            res.redirect('/student');
        } catch(error){
            console.log(error);
        } 
    }

    static getAllDoc=async (req,res) =>{
        const result=await studentModel.find();
        console.log(result);
        res.render('index',{data:result}); //sending result value in index page
    }
    
    static editDoc=async(req,res) =>{
        //console.log(req.params.id);
        try{
            const id=req.params.id;
            const result=await studentModel.findById(id);
            //console.log(result);
            res.render('edit',{data:result});
        } catch(error){
            console.log(error);
        }
    }

    static updateDocbyId=async(req,res) =>{
        const id = req.params.id;
        const {name, age, fees}=req.body;
        console.log(req.body);
        try{
            const result=await studentModel.findByIdAndUpdate(id,req.body);
        }catch(error){
            console.log(error);
        }

        res.redirect('/student');
        /* studentModel.updateOne({_id:id},{name, age, fees}).then(()=>{
            console.log('student data updated successfully');
            res.redirect('/student');
        }).catch((err)=>{
            console.log(err);
        }); */

    }

    static deleteDocbyId=async(req,res) =>{
        try{
            const id=req.params.id;
            const result=await studentModel.findByIdAndDelete(id);
        }catch(error){
            console.log(error);
        }
        res.redirect('/student');
    }
}
export {studentController}