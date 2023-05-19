const mongoose = require('mongoose') ;

const urlSchema = mongoose.Schema({
    originalURL : {
        type : String ,
    } , 
    shortURL : {
        type : String 
    }
})

const urldb = mongoose.model('urldb' , urlSchema) ;
module.exports = urldb ; 