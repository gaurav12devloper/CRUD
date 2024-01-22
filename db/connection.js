import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

let db = ()=>{
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log('MongoDB connected');
    }).catch((err)=>{
        console.log(err);
    });
}
//setup database
db();
export default db;