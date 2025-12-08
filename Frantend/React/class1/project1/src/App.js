import './App.css';

function App() {
//   return  <p>Hello</p>;
// }

// export default App;
import { useState } from "react";

// function App() {

//   const [userN, setUserN] = useState("Parth");
//   function ChangeName() {
//     console.log("click me")
//     setUserN("Parth Rajput")
//     console.log(userN)
//   }

//  console.log(userN)
//   return (
//     <div>
//       <p>my name is {userN}</p>
//       <button onClick={ChangeName}>change name</button>
//     </div>
//   );
// }

// function App(){
//   const [age, setAge] = useState("Parth");
//    age=29;
//  setage(35);
//  console.log(setage);
// }



// let obj={
//   id : 12,
//   fname : "Ram"
// }
// function App(){
//   const [data,setObj]=useState(obj);
  
// console.log(data);

// }

// let arr=[1,2,3,4,5];
// function App(){
//   const [data,setObj]=useState(arr);
  
// console.log(data);

// }


function App(){
  const [data,setObj]=useState({id : 101 , Fname: "Parth"});
  
console.log(data);

}

export default App;
