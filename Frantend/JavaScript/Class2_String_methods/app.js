//String methods
//(01) slice
let stri="  HelloWorld  ";
//(01.1)
console.log(stri.slice(0,5));
//(01.2)
console.log(stri.slice(5,stri.length));
//(01.3)
console.log(stri.slice(-3));//10-3=7

//(02)
console.log(stri.toLowerCase());

//(03)
console.log(stri.toUpperCase());

//(04)
let res= "   Bye"
console.log(res.trim());

//(05)
console.log(stri.replace("ll","ld"));
console.log(stri);//String is not mutable

// (06)
console.log(stri.repeat(4));

// Freeze method

const obj = {
    fname : "Rohan",
      age : 80
}
console.log("Original  object is",obj);
obj.lname="Mahi";

Object.freeze(obj);
obj.id="23";
console.log("After the  object is",obj);










