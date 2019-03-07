const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dbConnect= require("./dbConnect");
const Visitor = require("./models/visitor");

const app = express();
const port = process.env.PORT || 1234;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use("/",express.static(__dirname+"/views"));
app.use(express.static(path.join(__dirname,'/build')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
})
// post method
app.post('/', (req, res) => {
	var user = new Visitor();
    user.fname = req.body.fname;
    user.lname = req.body.lname;
    user.email = req.body.email;
    user.subject = req.body.subject;
    user.message = req.body.message;
    
    user.save(function(err){
        if(err){
            throw err;
        }
        else{
            // res.sendFile(__dirname + '/views/thankyou.html');
            res.json({"status":"success"});
        }
    });
})

app.listen(port, ()=> console.log(`server running on ${port}`));