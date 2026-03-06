const express=require("express");
const app=express();
let port=8080;

app.listen(port,()=>{
    console.log(`Listening are port  : ${port}`);
    
});

app.get("/",(req,res)=>{
      res.send("Server are working ");

});


