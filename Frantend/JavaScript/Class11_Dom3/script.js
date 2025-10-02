// Dom 
let para=document.createElement("p");
para.innerText="Hey i am red";
para.style.color="red";

let body=document.querySelector("body");

body.append(para);

let h3=document.createElement("h3");
h3.innerText="i'm a blue h3!";
h3.style.color="blue";

body.append(h3);

// Practice in Dom

let div=document.createElement("div");

div.style.border="2px solid black";
div.style.backgroundColor="pink"
div.innerText="Div"
body.append(div);

let pa=document.createElement("p");
pa.innerText="ME TOO!";
div.append(pa);

let h1=document.createElement("h1");
h1.innerText="I'm in a div";
div.append(h1);

pa.insertAdjacentElement('beforebegin',h1);


//Q.2 Create the some opration
let body=document.querySelector("body");
let btn=document.createElement("button");
let input=document.createElement("input");
let p=document.createElement("p");
btn.innerText="Click me";
body.append(input);
body.append(btn)

input.setAttribute("pleaceholder","Username");
btn.setAttribute("id","btn");

p.innerHTML="Hello world <b>This is me<b>";

body.append(p);


// Dom Events
let btn = document.querySelector("button");

btn.onclick=function(){
   alert("Button was Clicked");
   console.log("Button wass Clicked");

}

// second onclick
function get(){
    console.log("Button was Clicked");

}
btn.onclick=get;

// third onmouseenter
function value() {
    console.log("Hello i am  button");

}
btn.onmouseenter=value;

//Practice Dom
let body=document.querySelector("body");
let btn=document.createElement("button");
btn.innerText="Click me";

btn.addEventListener("click",()=>{
    btn.style.backgroundColor="green";
})

body.append(btn);










