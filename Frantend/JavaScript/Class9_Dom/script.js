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

// Insart Elements
let btn=document.createElement("button");
btn.innerText="clik me";
console.log(btn);


let diiv=document.querySelector("div");
diiv.append(btn);




