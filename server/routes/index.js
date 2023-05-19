const express = require('express') ;
const router = express.Router() ;
const ShortUniqueId = require('short-unique-id');
const uid = new ShortUniqueId({ length: 10 });
const urldb= require('../models/url') ;





router.post('/shorturl' , async (req , res) => {
    const url = req.query.url ; 
    const id = uid();
    const shortUrlObject = {
        originalURL : url , 
        shortURL : id 
    }
   
    const newUrl = await urldb.create(shortUrlObject) ;
    const sUrl = "http://localhost:8001/" + id ; 
    return res.json({
        success : true  ,
        message : "Short url is ready",
        url : sUrl  
    })
})

router.post('/customshorturl' , async (req , res) => {
    console.log(req.query);
    const { url , curl } = req.query ;

    const checkIfCurlPresent = await urldb.findOne({shortURL : curl}) ;
    
    if(checkIfCurlPresent){
        return res.json({
            success : false  ,
            message : "Custom URL already taken. Try Something else"
        })
    }
    const shortUrlObject = {
        originalURL : url , 
        shortURL : curl
    }

    const newUrl = await urldb.create(shortUrlObject) ;
    const sUrl = "http://localhost:8001/" + curl ; 
    return res.json({
        success : true  ,
        message : "Short url is ready",
        url : sUrl  
    })
})

router.post('/updateurl' , async (req , res) => {
    console.log(req.query);
    const { ourl , nurl } = req.query ;

    const checkIfourlPresent = await urldb.findOne({originalURL : ourl}) ;
    
    if(!checkIfourlPresent){
        return res.json({
            success : false  ,
            message : "This URL is not present"
        })
    }
    const newUrl = await urldb.findOne({originalURL : ourl}) ;
    newUrl.originalURL = nurl ; 
    await newUrl.save() ;
    const sUrl = "http://localhost:8001/" + newUrl.shortURL ; 
    return res.json({
        success : true  ,
        message : "New URL is updated, try using short Url : " + sUrl,
        url : sUrl  
    })
})

router.get('/delete' , async (req , res) => {
    console.log(req.query);
    const { url } = req.query ;

    const checkIfurlPresent = await urldb.findOne({originalURL : url}) ;
    
    if(!checkIfurlPresent){
        return res.json({
            success : false  ,
            message : "No record for this URL"
        })
    }
    await urldb.deleteOne({originalURL : url}) ;
    return res.json({
        success : true  ,
        message : "URL is deleted"
    })
})

router.get('/:id' ,async  (req , res) => {

    const shortUrl = await urldb.find({shortURL : req.params.id}) ;
    if(shortUrl.length === 0){
        return  res.redirect('http://localhost:3000'); 
    }else{
        return res.redirect(`${shortUrl[0].originalURL}`) ;
    }
})

router.get('/' , (req , res) => {
    return  res.redirect('http://localhost:3000'); 
}) ;

module.exports = router ; 