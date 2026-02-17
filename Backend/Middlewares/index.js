const express = require("express");
const app = express();

// app.use((req, res, next) => {
//     console.log("Hi, i am 1st Middlewares");
//     next();
// });

// app.use((req,res,next)=>{
//   console.log("Hii, i am 2nd Middlewares");
//   next()
// });

app.use((req, res, next) => {
    let time = new Date();
    console.log(req.method, req.path, req.hostname, req, time);
    next();
});


app.get("/api",checkToken,(req,res)=>{
     res.send("Important Data");
})

app.get("/", (req, res) => {
    res.send("I am root");
});

app.get("/random", (req, res) => {
    res.send("This is a random page");
});

// Page not found!
app.use((req, res) => {
    res.send("Page not found");
})

app.listen(8080, () => {
    console.log("Server are listing post 8080");


});

