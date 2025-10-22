import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Home from "./components/Home";
import React , { useState } from "react";
import { Routes, Route } from "react-router-dom";
function App() {  // props k use karne bhi dark mode ko impliment karenge bad me 
 
  const [myStyle, setStyle] = useState({
    color: 'white',
    backgroundColor: 'black',
  });

  const togglefuntion = () => {
    if ((myStyle.color === 'white')) {
       setStyle ( {
        color: 'black',
        backgroundColor: 'white',
      });
    }
    else{
      setStyle ({
        color: 'white',
        backgroundColor: 'black',
      });
    }
   
  };
  return (
    <>
      <div style={myStyle}>
        <Navbar  name ="Aditya" option="Home"/>
        <Routes>
          <Route path="/Home" element={< Home/>} />
          <Route path="/TextForm" element={< TextForm/>} />
        </Routes>
        <button onClick={togglefuntion} type="button">Unble dark mode</button>
      </div>
    </>
  );
}

export default App;
