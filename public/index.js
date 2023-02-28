let todaydate = document.querySelector("#date");
setInterval(()=>{
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
if(month<10){
  month = "0"+month;
}
let year = date.getFullYear();
let hours = date.getHours();
let minutes = date.getMinutes();
let sec = date.getSeconds();
let period = "A.M";
if(hours>11){
  period = "P.M";
}
if(hours>12){
  period = "P.M";
  hours = hours-12;
}
if(minutes<10){
  minutes = "0"+minutes;
}
if(sec<10){
  sec = "0"+sec;
}
  let currentDate = `${day}-${month}-${year} | ${hours}:${minutes}:${sec} ${period}`;
  todaydate.innerHTML = currentDate;
},1000)

var cityInput = document.querySelector("#city"); //input
var cityName = document.querySelector("#cityName") //to be changed
var btn = document.querySelector("#searchbtn")

btn.addEventListener("click",function(){
  let city  = cityInput.value;
  if(city===""){
    alert("Please enter a valid city");
  }

  
});