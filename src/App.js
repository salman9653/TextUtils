import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
  const [mode , setMode] = useState("light");
  const[alert, setAlert] = useState(null);
  function showAlert(message,type){
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  function toggleMode(){
    if(mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#243743";
      showAlert("Dark mode Applied" , "success");
     }else {
       setMode("light");
       document.body.style.backgroundColor = "white";
       showAlert("Light mode Applied" , "success");
     }
  }
  return (
    <div>
        <Navbar title="TeXt-Utils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-5">
          <TextForm heading="Enter Your Text" alert={showAlert} mode={mode} />
        </div>
    </div>
  );
}

export default App;
