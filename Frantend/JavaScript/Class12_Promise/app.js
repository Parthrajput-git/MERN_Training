// This is Promises..
let promise = new Promise((resolve,reject)=>{
    let age = Math.floor((Math.random(0,10)*100));
    if(age>=18){
        console.log("able to voting");    
    }
    else{
        console.log("rejected");
    }
  });
