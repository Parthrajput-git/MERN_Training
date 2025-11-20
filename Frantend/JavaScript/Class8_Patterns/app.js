// Patterns 
// ****
// ****
// ****
// ****           
for(let i=0; i<=3;i++){
    let ans = "";
    for(let j=0;j<=3;j++){
        ans += "*"
    }
     console.log(ans);
}


// *
// **
// ***
// ****
// for(let i=0;i<5;i++){
    // let ans="";
    // for(let j=0;j<=i;j++){
        ans+="*";
    }
    console.log(ans);
}


// *****
// ***
// **
// *
for(let i=0;i<=5;i++){
    let ans="";
    for(let j=0;j<5-i;j++){
        ans+="*"
    }
    console.log(ans);
}

// // 12345
// // 1234
// // 123
// // 12
// // 1

// // 54321
// // 5432
// // 543
// // 54
// // 5

for(let i=1;i<=5;i++){
    let ans="";
    for(let j=5;j>=i;j--){
     ans+=j;
}
console.log(ans);
}
//

for(let i=0;i<=5;i++){
    let ans="";
    let spa="";
    for(let j=0;j<5-i;j++){
     ans+=j;
}
console.log(ans);
}
