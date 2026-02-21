//Error Hnadling
const express = require("express");
const app = express();
const ExpressError=require("./ExpressError")

app.use("/random", (req, res, next) => {
    console.log("I am only fot random");
    next();
})

// Conditional Code
const checkToken = ("/api", (req, res, next) => {
    let { token } = req.query;
    if (token === "access") {
        res.send("Important Data");
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED!")
});


app.get("/api", checkToken, (req, res) => {
    res.send("Important Data");
})

app.get("/", (req, res) => {
    res.send("I am root");
});

app.get("/random", (req, res) => {
    res.send("This is a random page");
});

// Page not found!
// app.use((req, res) => {
//     res.send("Page not found");
//     next();
// });

app.get("/err",(req,res)=>{
    abcd=abcd;
});

app.get("/admin",(req,res)=>{
  throw new ExpressError(403,"Access to admin is Forbidden");
});

app.use((err, req, res, next) => {
    console.log("------ERROR------");
    let {status=500,message="Some Error Occured"}=err;
  //  next(err);
  res.status(status).send(message);
});

// app.use((err, req, res, next) => {
//     console.log("------ERROR2------");
//     next(err);

// });

app.listen(8080, () => {
    console.log("Server are listing post 8080");


});

