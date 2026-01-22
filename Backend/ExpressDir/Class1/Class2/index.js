// Path Parameters 
const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`Port are listening ${port}`);
});

app.get("/", (req, res) => {
    console.log("Request are sumbit");
    res.send("Hello this is root path");
});

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    res.send(`Welcome the page of @ ${username}.`);
});
// first 
// app.get("/:username/:id",(req,res)=>{
//       console.log(req.params);
//       res.send("I am your root !");


// });
// query Strings

app.get("/search",(req,res)=>{
       let {q}=req.query;
       if(!q){
        res.send("Not found this result");
       }
       res.send(`These are result for ${q} `);
});