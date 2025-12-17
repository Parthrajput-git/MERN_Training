// array method 

// First step.
let  arr=[1,2,3,4,5];

let result=function(arr){
    console.log(`Hii, i am ${arr}`);
    console.log(arr);
}
arr.forEach(result);

// Second step.
let  arr1=[1,2,3,4,5];
arr1.forEach((arr1)=>{
   console.log(`Hii, i am ${arr1}`);
});

// Third step array of object.
let arr2=[{
    fname : "Meera",
    work: "Bhakti"
},{
    Sname: "Raghav",
    work: "Help"
},{
    Kname:"Trust",
    work:"Break"
},{
    Lname:"Death",
    work : "peace"
}];

arr2.forEach((el)=>{
    console.log(el.work);
    
});


// map method
let arr4=[23,45,76,34,35];

let fun=arr4.map((el)=>{
   return el-1;
});
console.log(fun);

// Second step
let more=arr4.map((l)=>{
    return l;
})
console.log(more);
console.log(arr4);


// reduce method are take a two values
const arr9=[1,2,3,4,5];

let result=arr9.reduce((prev,curr)=>{
   return prev+curr;
});
console.log(result);

// Some Practice  

// filter method
// let even=[1,2,3,4,5,6,7,8,9,10];

// let ans=even.filter((el)=>{
//     return el%2==0;
// })
// console.log(ans);
// console.log(even);
// console.log(even.indexOf(3));

//Every & Sum

// let arr6=[1,2,3,4,5];

// console.log(arr6.every());
// Resuce use to solve max number  
 let max=[1,2,5,3,91,7,8];

 let res=max.reduce((pre,curr)=>{
      if(pre<curr){
         return curr;
      }else{
         return pre;
      }
 });
 console.log(res);
  // default parameters

 function getvalue(a,b=19){
   return a+b;
 }
 getvalue(6);


// Spread 
let pre=[1,2,3,4,5];
let copy=[...pre];

console.log(copy.push(4));
console.log(copy);
console.log(pre);

let  str="Hello";
let prev =[1,2,3,4,5];
let allCopy=[...str,...prev];

console.log(allCopy);


// second oparation
const data = {
   Fname: "Prinsh Yadav",
   age: 20,
   Work: "study"
}

const dCopy={...data,id: 21};
console.log(dCopy);
// Third oparation
let hel="Hello"

const d=[...hel];
console.log(d);


// Destructuring  
let des = ["Prita", "Avi", "Aarogy", "samay", "Mahavinashak"];

let [...all] = des;
console.log(all);

//second use  
let des = ["Prita", "Avi", "Aarogy", "samay", "Mahavinashak"];

let [firend,siblings,...all] = des;
console.log(firend);

console.log(all);


//Third used
const dataObj={
   fname:"rita",
   study:"B.Tech",
   year:3,
   college:"abcd"
}

let {city="Indore"}=dataObj;//default value
// console.log(copyobj);
console.log(city);























