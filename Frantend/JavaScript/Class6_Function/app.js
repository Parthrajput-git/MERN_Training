// Freeze method help object

const obj = {
    fname : "Rohan",
      age : 80
}
console.log("Original  object is",obj);
obj.lname="Mahi";

Object.freeze(obj);
obj.id="23";
console.log("After the  object is",obj);
