
import { useDispatch, useSelector } from "react-redux";
import { changeUserName, defaultName } from "./redux/slices/userSlice";
function App() {
  // const {userName} = useSelector((state) => state.user);
  const userName = useSelector((state) => state.userSlice.userName);
  // console.log(userName)
  const dispatch = useDispatch();

  function handleData() {
    console.log("click karo ")
    dispatch(changeUserName("syam"))
    //slice ke function ko direct call nhi kr sakte Dispatchh ki jarurat hoti hai
    // changeUserName("syam")
  }

  function resetData() {
    console.log("click karo ")
    dispatch(defaultName())
    // defaultName()
  }
  return (
    <div className="App">
      <p>This is your redux data==={userName}</p>
      <button onClick={handleData}>Change Data</button>
      <button onClick={resetData}>ResetData</button>
    </div>
  );
}

export default App;
