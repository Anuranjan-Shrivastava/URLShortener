const express = require('express') ;
const app = express() ;
const port = 8001 ; 
const cors = require('cors') ;
const db = require('./config.js/mongoose');
const routes = require('./routes/index') ;


//Using MiddleWare
app.use(cors()) ;
app.use(routes) ;


//Server
app.listen(port , (error) => {
    if(error){
        console.log("There is an error : " , error); return ;
    }

    console.log("Server is up & listening at : " , port) ;
})
