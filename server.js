"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const Config = require('./config');
const cors = require('cors');
const request = require('request');
const Logic = require('./logic');
const path = require('path');
const logger = require('morgan');


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "client", "out")))

app.post('/', (req, res)=>{
    if(!req.query.url) return res.send({status:"error", message:"invalid parameters"});
    request(decodeURIComponent(req.query.url), function(err, data){
        if(err){
            console.log(err)
            return res.send({status:"error", message:err.message});
        }
        
        let pData = null;

        if(req.query.q && !isNaN(parseInt(req.query.q)))
            pData = Logic.processWords(data.body, parseInt(req.query.q));
        else
            pData = Logic.processWords(data.body);  //will return top 10 most used words by default
        
        return res.send({status:"success", data:pData});
    });
});


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "out", "404.html"));
});

app.listen(Config.API_PORT, () => console.log(`LISTENING ON PORT ${Config.API_PORT}`));