const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsOptions={
    origin:"http://localhost:8081"
};
app.use(cors(corsOptions));  
app.use(bodyParser.json());                       // parse requests of content-type - application/json
app.use(bodyParser.urlencoded({extended:true}));  // parse requests of content-type -application/x-www-form-urlencode
app.get("/",(req,res) =>{                         // simple route
    res.json({message:"Welcome to bezkoder application."});
});
const PORT=process.env.PORT || 8080;              // set port,listen for requests
app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}.`);
});
