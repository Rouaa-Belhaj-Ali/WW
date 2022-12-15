const express = require ('express');
const app = express();
const port = 3000;

const https = require("https");

const apiKey = "976295dfb1731886cde5e37dd8d0d2b0";
const Location = "Tunisia";
const api = "https://api.openweathermap.org/data/2.5/weather?q=" +Location + "&appid=" + apiKey;


app.get("/",function(req, res){

   https.get(api ,function (response){
      console.log(response.statusCode);
      response.on("data", function(data){
         const weatherData = JSON.parse(data);
         console.log(weatherData);
      
   });
   res.send("server is running!!");
});
app.listen(port, function(){
   console.log("Server is running on port " + port +",");
}
)})
//connect api weather with node.js
