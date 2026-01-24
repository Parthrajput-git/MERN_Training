const express = require("express");
const app = express();
const path = require("path");

let port = 3000; 

app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});


app.get("/ig/:username", (req, res) => {
    let followers=["Pop","Rem","Som","Mona","Joy"];
    let { username } = req.params;
    res.render("instagram.ejs",{username,followers})

})


app.get("/roll", (req, res) => {
    let disVal = Math.floor(Math.random() * 6) + 1;
    res.render("home.ejs", { disVal })
});



app.listen(port, () => {
    console.log(`Port are listening ${port}`);


})
