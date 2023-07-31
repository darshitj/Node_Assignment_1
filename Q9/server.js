const express = require('express');
const app = express();
const path = require('path');
const conn = require('./connection');

const static_path = path.join(__dirname,"/public");
app.use(express.static(static_path));
app.use(express.urlencoded({ extended: false }));



app.get('/display',(req,res)=>{
    conn.query("select * from student_test",function(err,data){
        if(err) throw err; 
        res.send(data);
    });
});

app.post('/insert',(req,res)=>{
    var name = req.body.name;
    var roll = req.body.roll;
    var marks= req.body.marks;
    conn.query(`insert into student_test(name,rollno,marks) values('${name}','${roll}',${marks})`,(err,data)=>{
        if(err) throw err;
        else
        {
            if(data)
            {
                res.redirect('/display');
           }
        }
     
    })
});

app.listen(8000,()=>{
    console.log('Server run on 8000 port');
});
