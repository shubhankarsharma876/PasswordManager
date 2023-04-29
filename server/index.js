const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const PORT = 3001;

app.use(cors()); // this will allow use to make connection between two servers in local machine.
app.use(express.json()); //this will make the use of json file using express

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root",
    database: "passwordmanager",
})

app.post("/addpassword",(req,res)=>{
    const {password,title} =req.body;

    db.query("INSERT INTO passwords (password,title) VALUES (?,?)",[password,title],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Success");
        }
    })
})
app.listen(PORT,()=>{
    console.log("server is running")
})