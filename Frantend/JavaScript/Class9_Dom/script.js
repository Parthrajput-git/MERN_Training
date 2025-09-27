//Practic
let dir=document.getElementById(".box");

console.log(dir);

let man=document.querySelector(".box2");

console.log(man);

// getAttribute selector
let div=document.querySelector("div");
let id=div.getAttribute("id");
console.log(id);

let para=document.querySelector("p");
let p=para.setAttribute("Para","written")

console.log(p);

// node.style
let divn=document.querySelector("div");
let pri=divn.style.backgroundColor="red";
