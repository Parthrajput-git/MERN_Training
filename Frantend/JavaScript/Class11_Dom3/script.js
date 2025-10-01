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




