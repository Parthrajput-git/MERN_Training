// The Posts Project
// Based on REST concept
const express = require("express");
const app = express();
let port = 3000;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

// All data 
let posts = [
    {
        id: uuidv4(),
        username: "Parth Rajput",
        content: "I love Coding!",
    },
    {
        id: uuidv4(),
        username: "Shory Sharma",
        content: "Hard work is important to achieve success",
    },
    {
        id: uuidv4(),
        username: "Atharv Rajput",
        content: "I got selected for my 1st internship! ",
    },
];

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content })
    res.redirect("/posts");

});
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post })
});

app.patch("/posts/:id", (req, res) => {
    console.log("REQ.BODY =", req.body);
    let { id } = req.params;
    let newContent = req.body.content;

    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");

});

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
});

app.delete("/posts/:id",(req,res)=>{
      let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
     res.redirect("/posts");
});

app.listen(port, () => {
    console.log("listening are port : 3000 ");
});



