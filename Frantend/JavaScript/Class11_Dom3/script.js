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
