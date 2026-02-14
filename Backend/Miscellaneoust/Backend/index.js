// Create a backend server
const express = require("express");
const app = express();
let port = 3000;// This is port number

app.use(express.urlencoded({ extended: true }));// parse data. 
app.use(express.json());


app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(`Standard GET response ${user}`);
});

//Post route
app.post("/register", (req, res) => {
    let { user, password } = req.body;
    res.send(`Standard POST response, Welcome @${user}`);
});

app.listen(port, () => {
    console.log("Port are listening :");

});




