const express = require("express");
const app = express();

let port = 3000;
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

app.use((req,res)=>{
    console.log("request received ");
    res.send("Hii this is my fist sever !");
})

app.get("/", (req, res) => {
    res.send("You contacted root path!");

});
app.get("/second", (req, res) => {
    res.send("You contacted second path!");

});


app.get("/third", (req, res) => {
    res.send("You contacted third path!");

});
//This is all path root not exist
// app.get("*", (req,res) => {
//     res.send("This path does not exist ");

// });

app.post("/",(req,res)=>{
    res.send("You send a post request to root");
})
