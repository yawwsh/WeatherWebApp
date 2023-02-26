const express = require("express");
const https = require("https");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

let city = "Chennai";
const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=d7341b26674f21af2d9ec5d64717913b';

app.post("/",(req,res)=>{
    city = req.body.city;
    let temperature = req.body.temp; 
    https.get(url,(response)=>{
        response.on("data",(data)=>{
            let weatherData = JSON.parse(data);
            temperature= weatherData.main.temp;
            
        })
    })
    res.send("lol");
})

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})


app.listen(3000,()=>{
    console.log("Weather forecast started at port 3000");
})