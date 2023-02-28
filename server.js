const express = require("express");
const https = require("https");
const app = express();
const path = require('path');
var exphbs  = require('express-handlebars');

app.use(express.static(path.join(__dirname,"public")));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

// set view engine
app.set("view engine","hbs");
let curr_temp = 0;
let cityInput = "Chennai";
app.post("/",(req,res)=>{
    let city = req.body.city;
    cityInput = city;
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=d7341b26674f21af2d9ec5d64717913b';
    https.get(url,(response)=>{
        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const temperature= weatherData.main.temp;
            curr_temp = temperature;
            // res.write("temp is "+temperature);
            res.redirect('/');
        });
    });
})

// template engine route
app.get("/",(req,res)=>{
    res.render("index",
    {temp: curr_temp+" C" ,cityName: cityInput } );

})

// app.get("/",function(req,res){
//     res.sendFile(__dirname,"public","index.html");
// })


app.listen(3000,()=>{
    console.log("Weather forecast started at port 3000");
})