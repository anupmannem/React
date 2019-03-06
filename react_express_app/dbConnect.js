const mongoose = require("mongoose");

module.exports= mongoose.connect('mongodb://localhost/visitor',{ useNewUrlParser: true },function(err){
    if(err){
        throw err;
    }
    else{
        console.log("Successfully Connected to the DataBase");
    }
})
