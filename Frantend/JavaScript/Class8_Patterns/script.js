// // Pattern prints level-(01)

// *
// **
// ***
// ****
// *****
for(let i=1;i<=5;i++){
    let emt="";
    for(let j=1;j<=i;j++){
        emt+="*"
    }
    console.log(emt);
}

// ****
// ***
// **
// *
for(let i=1;i<=4;i++){
    let emty="";
    for(let j=1;j<=4-i+1;j++){
          emty+=j;
    }
    console.log(emty);
    
}

// 1
// 12
// 123
// 1234
for(let i=1;i<=4;i++){
    let emty="";
    for(let j=1;j<=i;j++){
    emty+=j;
    }
    console.log(emty); 
}

// A
// B C
// D E F
// GHIJ 
let ch=65;
for(let i=1;i<=4;i++){
    let emty="";
    for(let j=1;j<=i;j++){ 
        emty+=String.fromCharCode(ch);
        ch++;
    }
    console.log(emty);
 }

// ******
// *    *
// *    *
// *    *
// ******
for(let i=1;i<=4;i++){
    let emty="";
    for(let j=1;j<=5;j++){
        if(i==1 || i==4 || j==1 ||  j==5){
             emty+="*";
        }
        else{
             emty+=" ";
        }
    }
    console.log(emty);
}

//      *
//     **
//    ***
//   ****
for(let i=1;i<=4;i++){
    let emty="";
    for(let j=1;j<=4-i;j++){
        emty+=" ";
    }
    for(let j=1;j<=i;j++){
        emty+="*";
    }
    console.log(emty);
    
}


// 12345
// 1234
// 123
// 12
// 1
for(let i=1;i<=5;i++){
    emty="";
    for(let j=1;j<=5-i+1;j++){
        emty+=j;
    }
console.log(emty);
}

// 1
// 2 3
// 4 5 6
// 7 8 9 10
let count=1;
for(let i=1;i<=5;i++){
    let emty="";
    for(let j=1;j<=i;j++){
       emty+=count+" ";
       count++;
    }
    console.log(emty);
    
}

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1


for(let i=5;i>=1;i--){
    emty="";
    for(let j=5;j>=1;j--){
        emty+=j;
    }
console.log(emty);
}


// A
// B B
// C C C
// D D D D
// let ch=65;
for(let i=1;i<=4;i++){
    let emty="";
    for(let j=1;j<=i;j++){ 
        emty+=" "+String.fromCharCode(64+i);
    }
    console.log(emty);
 }


// 1
// 2 3
// 4 5 6
// 7 8 9 10
for(let i=1;i<=5;i++){
    let emty="";
    space="";
    for(let j=1;j<=5-i;j++){
       emty+=" ";
    }
    console.log(emty);
    
}
