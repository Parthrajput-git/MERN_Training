// array method 

// First step
let  arr=[1,2,3,4,5];

let result=function(arr){
    console.log(`Hii, i am ${arr}`);
    console.log(arr);
}
arr.forEach(result);

// Second step
let  arr1=[1,2,3,4,5];
arr1.forEach((arr1)=>{
   console.log(`Hii, i am ${arr1}`);
});

// Third step array of object
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


