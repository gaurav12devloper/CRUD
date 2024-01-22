import mongoose from "mongoose";
// define schema
const studentSchema=new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    age:{type:Number,required:true,min:18,max:60},
    fees:{type:mongoose.Decimal128, required:true,validate:(value)=>value>=5000.5} // Decimal128 is used for decimal values
    //validate is used for validation(userdefined validation function)
});

//model

const Student=new mongoose.model('Student',studentSchema);
export default Student;




/* const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    rollno: {
        type: Number,
        unique: true,
        required: true
    },

});

const Student = mongoose.model('Student', studentSchema);
export default Student; */