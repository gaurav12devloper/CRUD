import express from 'express';
const app = express();
const port=process.env.PORT || 3000;
import {join} from 'path'; // to join path
import web from './routes/web.js';
//import logger from './middlewares/logger-middleware.js';
//import User from './model/user.js';
import db from './db/connection.js';

//import Student from './models/students.js';


app.use(express.urlencoded({extended:false})); // to get data from form, extended:false means we are not using any library to get data from form
// exteded:true means we are using library to get data from form
app.use(express.json());

//setup template engine to use
app.set('view engine','ejs');

// setup for static files
app.use(express.static(join(process.cwd(),'public'))); // now you can access public folder files


//load router
app.use('/student',web);



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});




/*
//create in database
app.post('/vishal',async(req,res)=>{
    const {name , email , rollno , phone} = req.body;
    const student = new Student({name , email , rollno , phone});

    await student.save().then(()=>{
        res.send('student data inserted successfully');
    }).catch((err)=>{
        console.log(err);
    });
});

//read from database
app.get('/vishal',async(req,res)=>{
    await Student.find().then((students)=>{
        res.json(students);
    }).catch((err)=>{
        res.json(err);
    });
});

//update in database
app.put('/vishal/:id',async(req,res)=>{
    const id = req.params.id;
    const {name , email , rollno , phone} = req.body;

    await Student.updateOne({_id:id},{name , email , rollno , phone}).then(()=>{
        res.send('student data updated successfully');
    }).catch((err)=>{
        console.log(err);
    });
});

//delete from database
app.delete('/vishal/:id',async(req,res)=>{
    const id = req.params.id;
    await Student.deleteOne({_id:id}).then(()=>{
        res.send('student data deleted successfully');
    }).catch((err)=>{
        console.log(err);
    });
});
*/