const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const { application } = require('express');

const app = express();

app.use(cors());

app.use(bodyparser.json());

// //Connection Mysql
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'studentmanage',
    port: 3306

})


// // check database connection
db.connect(err => {
    if (err) console.log(err)
    else console.log('DataBase Connection Successfull')
})


// //Home
app.get('/', (req, res) => {
    res.send('home');
});

//----------------------------------


//admin Login
app.post('/loginAdmin', (req, res) => {

    console.log(JSON.stringify(req.body) + "Post successfull.....");

    let qrid = req.body.username;
    let pass = req.body.password;


    let qrr = `SELECT * FROM loginadmin where username='${qrid}'`;
    console.log(qrr);
    db.query(qrr, (err, result) => {
        if (err) {
            console.log("Error in fetch data");
            res.send({
                message: "Error"
            });
        }
        else {
            if (result.length > 0) {

                let temp = result;
                console.log(JSON.stringify(result));

                if (result[0].password === pass) {
                    res.send({
                        message: "True",
                        Data: temp
                    })
                } else {
                    res.send({
                        message: "False"
                    });
                }



            } else {
                res.send({
                    message: "False"
                });
            }

        }
    })
})


//LoginProfessor
app.post('/loginProf', (req, res) => {

    console.log(JSON.stringify(req.body) + "Post successfull.....");

    let qrid = req.body.username;
    let pass = req.body.password;


    let qrr = `SELECT * FROM loginprof where Pid='${qrid}'`;
    console.log(qrr);
    db.query(qrr, (err, result) => {
        if (err) {
            console.log("Error in fetch data");
            res.send({
                message: "Error"
            });
        }
        else {
            if (result.length > 0) {

                let temp = result;
                console.log(JSON.stringify(result));

                if (result[0].password === pass) {
                    res.send({
                        message: "True",
                        Data: temp
                    })
                } else {
                    res.send({
                        message: "False"
                    });
                }



            } else {
                res.send({
                    message: "False"
                });
            }

        }
    })
})


//Login Student
app.post('/loginStudent', (req, res) => {

    console.log(JSON.stringify(req.body) + "Post successfull.....");

    let qrid = req.body.username;
    let pass = req.body.password;


    let qrr = `SELECT * FROM students where usn='${qrid}'`;
    console.log(qrr);
    db.query(qrr, (err, result) => {
        if (err) {
            console.log("Error in fetch data");
            res.send({
                message: "Error"
            });
        }
        else {
            if (result.length > 0) {

                let temp = result;
                console.log(JSON.stringify(result));

                if (result[0].DOB === pass) {
                    res.send({
                        message: "True",
                        Data: temp
                    })

                } else {
                    res.send({
                        message: "False"
                    });
                }

            } else {
                res.send({
                    message: "False"
                });
            }

        }
    })
})

//---------------------------------------
//Get All Student
app.get('/students', (req, res) => {

    let qrr = "Select * from students";
    db.query(qrr, (err, result) => {
        if (err) {
            console.log(err);
            res.send({
                message: 'Error',
            })

        } else {
            res.send({
                message: 'All students',
                Data: result
            })
        }
    })

});


//Get Single Student
app.get('/student/:id', (req, res) => {

    let usn=req.params.id;

    let qrr = `Select * from students where usn='${usn}'`;
    console.log(qrr);
    db.query(qrr, (err, result) => {
        if (err) {
            console.log(err);
            res.send({
                message: 'Error',
            })

        } else {
            if(result.length>0){
                res.send({
                    message: 'All students',
                    Data: result
                })
            }else{
                res.send({
                    message: 'Data Not Found',
                })
            }

            
        }
    })

});



//delete student
app.delete('/studentD/:id',(req,res)=>{
    console.log(req.params.id)
    let qrid=req.params.id;

    let qrr=`DELETE FROM students WHERE usn='${qrid}'`;
    console.log(qrr);

    db.query(qrr,(err,result)=>{
        if(err){
            console.log("err to Delete"+err);
            res.send({
                message:"Deletion Failed..."
            });
        }else{
            console.log(result);
            if(result.affectedRows>0){
                res.send({
                    message:"Deletion successfull..."
                });
            }else{
                res.send({
                    message:"No record Found........"
                });
            }
               
        }
    })
})

// //Insert Student using port Method
app.post('/studentI',(req,res)=>{
    // console.log(JSON.stringify(req.body)+"Post successfull.....");

    let qrr=`INSERT INTO students  VALUES ('${req.body.usn}','${req.body.name}','${req.body.DOB}',${req.body.sem},${req.body.oomdAtt},${req.body.oomdTAd},${req.body.cnAtt},${req.body.cnTAt},${req.body.dipAtt},${req.body.dipTAt},${req.body.dmAtt},${req.body.dmTAt},${req.body.adsAtt},${req.body.adsTAt},'${req.body.dept}')`;
    console.log(qrr);
    
    db.query(qrr,(err,result)=>{
        if(err){
            console.log("err to insert");

            res.send({
                message:"Data allreadry Exists",
                status:"False"
            });
        }else{
                res.send({
                    message:"Insertion successfull...",
                    status:"True"
                });
        }
    })
});

//Update Student
app.put('/studentU/',(req,res)=>{
    console.log(JSON.stringify(req.body)+"Post successfull.....");

    
  
    let qrr = ` UPDATE students SET name='${req.body.name}',DOB='${req.body.DOB}',sem=${req.body.sem}, oomdAtt=${req.body.oomdAtt},oomdTAd=${req.body.oomdTAd},cnAtt=${req.body.cnAtt},cnTAt=${req.body.cnTAt},dipAtt=${req.body.dipAtt},dipTAt=${req.body.dipAtt},dmAtt=${req.body.dmAtt},dmTAt=${req.body.dmTAt},adsAtt=${req.body.adsAtt},adsTAt=${req.body.adsTAt},dept='${req.body.dept}' where usn='${req.body.usn}'`;

    console.log(qrr);

    db.query(qrr,(err,result)=>{
        if(err){
            console.log("err to Update");
            res.send({
                message:"Data Updation Failed...",
                status:"False"
            });
        }else{
                console.log(result.affectedRows);

                if(result.affectedRows>0){
                    res.send({
                        message:"Data Updated successfuly...",
                        status:"True"
                    });
                }else{
                    res.send({
                        message:"Data Not Found",
                        status:"False"
                    });
                }

                
        }
    })

});



//-------------------------------------------------
//Get All Proffesors
app.get('/profesors', (req, res) => {

    let qrr = "Select * from loginprof";
    db.query(qrr, (err, result) => {
        if (err) {
            console.log(err);
            res.send({
                message: 'Error',
            })

        } else {
            res.send({
                message: 'All proffesors',
                Data: result
            })
        }
    })

});


//Get Single Professor
app.get('/professor/:id', (req, res) => {

    let Pid=req.params.id;

    let qrr = `Select * from loginprof where Pid='${Pid}'`;
    console.log(qrr);
    db.query(qrr, (err, result) => {
        if (err) {
            console.log(err);
            res.send({
                message: 'Error',
            })

        } else {
            if(result.length>0){
                res.send({
                    message: 'All students',
                    Data: result
                })
            }else{
                res.send({
                    message: 'Data Not Found',
                })
            }

            
        }
    })

});



//Delete Professor
app.delete('/professorD/:id',(req,res)=>{
    console.log(req.params.id)
    let qrid=req.params.id;

    let qrr=`DELETE FROM loginprof WHERE Pid='${qrid}'`;
    console.log(qrr);

    db.query(qrr,(err,result)=>{
        if(err){
            console.log("err to Delete"+err);
            res.send({
                message:"Deletion Failed..."
            });
        }else{
            console.log(result);
            if(result.affectedRows>0){
                res.send({
                    message:"Deletion successfull..."
                });
            }else{
                res.send({
                    message:"No record Found........"
                });
            }
               
        }
    })
})


// //Insert professor using port Method
app.post('/professorI',(req,res)=>{
    // console.log(JSON.stringify(req.body)+"Post successfull.....");

    let qrr=`INSERT INTO loginprof VALUES ('${req.body.Pid}', '${req.body.password}', '${req.body.name}', '${req.body.DOB}', '${req.body.Dept}', '${req.body.Course}', '${req.body.sem}', '${req.body.TClass}');`;
    console.log(qrr);
    
    db.query(qrr,(err,result)=>{
        if(err){
            console.log("err to insert");

            res.send({
                message:"Data allreadry Exists"
            });
        }else{
                res.send({
                    message:"Insertion successfull..."
                });
        }
    })
});

//Update Professor
app.put('/professorU',(req,res)=>{    
    
    let qrr = ` UPDATE loginprof SET password='${req.body.password}',name='${req.body.name}',DOB='${req.body.DOB}',Dept='${req.body.Dept}',Course='${req.body.Course}',sem=${req.body.sem},TClass=${req.body.TClass} WHERE Pid='${req.body.Pid}'`;

    console.log(qrr);

    db.query(qrr,(err,result)=>{
        if(err){
            console.log("err to Update");
            res.send({
                message:"Data Updation Failed...",
                Status:"False"
            });
        }else{
                console.log(result.affectedRows);

                if(result.affectedRows>0){
                    res.send({
                        message:"Data Updated successfuly...",
                        Status:"True"
                    });
                }else{
                    res.send({
                        message:"Data Not Found",
                        Status:"False"
                    });
                }

                
        }
    })

});


app.post('/attendance',(req,res)=>{
    let qrr=`INSERT INTO attendance VALUES ('${req.body.Pid}','${req.body.date}',${req.body.attendance} )`;
    console.log(qrr);
    
    db.query(qrr,(err,result)=>{
        if(err){
            console.log("err to insert");

            res.send({
                message:"Data allreadry Exists",
                Status:"False"
            });
        }else{
                res.send({
                    message:"Insertion successfull...",
                    Status:"True"
                });
        }
    })
})


app.post('/attendanceC',(req,res)=>{

    let qrr=`SELECT count(date) as count FROM attendance WHERE date='${req.body.date}' AND Pid='${req.body.Pid}' GROUP BY date`;

    console.log(qrr);
    
    db.query(qrr,(err,result)=>{
        if(err){
            console.log("err to insert");

            res.send({
                message:"Data allreadry Exists",
                Status:"False"
            });
        }else{
            console.log(result)

            if(result.length > 0){
                if(result[0].count > 0){
                    res.send({
                        message:"Data Exists",
                        Status:"False"
                    });
                }else{
    
                    res.send({
                        message:"Data Didn't Exists",
                        Satus:"True"
                    });
                }

            }else{
                res.send({
                    message:"Data Didn't Exists",
                    Satus:"True"
                });
            }
            
                
        }
    })
})






//------------------------------------------------------

//get All Admins

app.get('/admins', (req, res) => {

    let qrr = "Select * from loginadmin";
    db.query(qrr, (err, result) => {
        if (err) {
            console.log(err);
            res.send({
                message: 'Error',
            })

        } else {
            res.send({
                message: 'All Admins',
                Data: result
            })
        }
    })

});



//----------------------

//update Student and proffessor classes
app.post('/updateClass',(req,res)=>{





    
});





//----------------------------------





// //Delete data
// app.post('/userD',(req,res)=>{

//     let uid=req.body.id;

//     let qrr=`delete from users where id='${uid}'`;
//     console.log(qrr);

//     db.query(qrr,(err,result)=>{
//         if(err){
//             console.log("err to Delete"+err);
//             res.send({
//                 message:"Deletion Failed..."
//             });
//         }else{
//                 res.send({
//                     message:"Deletion successfull..."
//                 });
//         }
//     })

// })


// // Deleting by id
// app.delete('/user/:id',(req,res)=>{
//     console.log(req.params.id)
//     let qrid=req.params.id;

//     let qrr=`delete from users where id='${qrid}'`;
//     console.log(qrr);

//     db.query(qrr,(err,result)=>{
//         if(err){
//             console.log("err to Delete"+err);
//             res.send({
//                 message:"Deletion Failed..."
//             });
//         }else{
//                 res.send({
//                     message:"Deletion successfull..."
//                 });
//         }
//     })
// })


let port = 3050;
app.listen(port, () => {
    console.log(`Server is running on port number ${port}`);
})


