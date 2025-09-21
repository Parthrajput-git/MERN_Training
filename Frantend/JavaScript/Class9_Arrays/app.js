// array splice method

// let arr=[1,2,3,4,5];
// let res=arr.splice(3);
// console.log(res);

let arr=[1,2,3,4,5];
arr.splice(3);
console.log(arr);
// // Array important methods 
// // push () add to end

let arr0=[ "Ram", "Purva" ,"Raghav", "Megha" ,"ved"];

let ar=[ "Student1", "Student2"];

arr.push("Prachi");
console.log(arr);

// Unshift()  add to start

arr.unshift("Vidhi");
console.log(arr);

// // pop() delete end and return it
arr.pop();
console.log(arr);

// shift() delete start and return it
arr.shift();
console.log(arr);

// // concat arrays
 console.log(arr1.concat(arr));


// // reverse()
console.log(arr.reverse());

// slice()
console.log(arr.slice(2));
 
console.log(arr.slice(2,4));

//splice()
//// Q.1 

let  arr4= ['January','July','March','august','student1','student2'];

console.log(arr.shift());
console.log(arr.shift());
console.log(arr.unshift('June'));
console.log(arr.unshift('july'));
console.log(arr);

// indexof() and includes

console.log(arr.indexOf("august"));

console.log(arr.includes("March"));

console.log(arr.reverse());


console.log(arr.slice(2));

console.log(arr.slice(1,2));

console.log(arr);

console.log(arr.splice(4));
console.log(arr.splice(1,4));

console.log(arr.splice(0,2,2));
console.log(arr);


let  arr= ['January','July','March','august','student1','student2'];

//// sort  method in array

let arr1=[1,3,4,2,6,4,5,8,0];
console.log(arr1.sort());

let arr2=['a','b','d','c','f','d'];
console.log(arr2.sort());

console.log(arr.splice(0,2,"july","june"));
console.log(arr);

console.log(arr.reverse().indexOf('March'));
console.log(arr);

Q 1
let arr5=[7,9,0,-2];
let n=3;
console.log(arr.slice(0,length));

// Q 2
let arr6=[7,9,0,-2];
 let n1=3;
 console.log(arr5.slice(arr5.length-n));
 console.log(arr5);

 // Q 3
let str=prompt("Enter your String");

if(str.length==0){
    console.log("String is emty  :");
    
}else{
console.log("String is not emty",str);
}

Q 4
let char="ABCdEfg";
let n2=4;
if(char[n2]==char[n2].toLowerCase()){
    console.log("Charater is lowercasse  :");
    
}else{
    console.log("Charater is not lowercasse  :");
}
