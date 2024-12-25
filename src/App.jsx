import { Route, Routes } from "react-router-dom";
import InputFormConteiner from "./components/InputForm/InputFormConteiner";
import StartGmae from "./components/pages/StartGame";
import PlayGmae from "./components/pages/PlayGmae";
import Home from "./components/pages/Home";
 
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<StartGmae />} />
        <Route path="/play" element={<PlayGmae />} />
       </Routes>
    </div>
  );
}

export default App;

// <div>
//   <Button text="click me" styleType="warning" />
//   <Button text="click me" styleType="primery" />
//   <Button
//     text="sign in"
//     styleType="error"
//     onclickk={() => console.log("hello")}
//   />
//   <StartGmae/>
//   <InputText label="Enter someting" onchangehendler={(e)=>console.log(e.target.value) }/>
// </div>
