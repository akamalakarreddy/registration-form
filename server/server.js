let express = require("express");

let mysql = require ("mysql");

let cors = require ("cors");

let bodyparser = require("body-parser");

let app = express();

app.use(cors());

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended:false}));

let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"test",
    database:"interceptor"
})

connection.connect();

app.post("/insert",(req,res)=>{
    connection.query(`select * from login_details`,(err,records)=>{
        if(err){
            throw err;
        }else{
            res.send(records);
        }
    });
});


app.listen("8080");
console.log("this is port 8080");