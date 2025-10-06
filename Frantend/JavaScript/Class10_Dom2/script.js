// Selectors
let dir=document.getElementById(".box")

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
// first append();
let btn=document.createElement("button");
btn.innerText="clik me";
console.log(btn);

let diiv=document.querySelector("div");
diiv.append(btn);

// second prepend();
let btn2=document.createElement("button");
btn2.innerText="Cheak up";

let box2=document.querySelector("#box2");
box2.prepend(btn2);

// third before();
let btn3=document.createElement("button");
btn3.innerText="Cheak up";

let box3=document.querySelector("#box2");
box2.before(btn3);

// four after();
// second prepend();
let btn4=document.createElement("button");
btn4.innerText="Cheak up";

let box4=document.querySelector("#box2");
box4.after(btn4);

// shorthand;
let btn5=document.createElement("h1");
btn5.innerHTML="<i>Hii hello</i>";

document.querySelector("body").prepend(btn5);

// delete ();

let del=document.querySelector("p");
del.remove();

// use many selectors
let button=document.createElement("button");
button.innerText="click me!";

button.style.color="white";
button.style.backgroundColor="red";

document.querySelector("body").append(button);


//add Class List
let parag=document.querySelector("p");
parag.classList.add("newClass");

// practice
// Selectors
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
// first append();
let btn=document.createElement("button");
btn.innerText="clik me";
console.log(btn);

let diiv=document.querySelector("div");
diiv.append(btn);

// second prepend();
let btn2=document.createElement("button");
btn2.innerText="Cheak up";

let box2=document.querySelector("#box2");
box2.prepend(btn2);

// third before();
let btn3=document.createElement("button");
btn3.innerText="Cheak up";

let box3=document.querySelector("#box2");
box2.before(btn3);

// four after();
// second prepend();
let btn4=document.createElement("button");
btn4.innerText="Cheak up";

let box4=document.querySelector("#box2");
box4.after(btn4);

// shorthand;
let btn5=document.createElement("h1");
btn5.innerHTML="<i>Hii hello</i>";

document.querySelector("body").prepend(btn5);

// delete ();

let del=document.querySelector("p");
del.remove();

// use many selectors
let button=document.createElement("button");
button.innerText="click me!";

button.style.color="white";
button.style.backgroundColor="red";

document.querySelector("body").append(button);


//add Class List
// let parag=document.querySelector("p");
// parag.classList.add("newClass");

let parag=document.querySelector("p");
parag.classList.add("newClass");



























