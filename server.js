const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html");
});


app.post("/", function(req, res){
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var n3 = Number(n2*n2);
  var result = (n1/n3);
  console.log(req.body.num1, req.body.num2);
  res.send("Your BMI is " + result);
});



app.listen(3000 , function(){
  console.log("Server has started on port 3000");
});
