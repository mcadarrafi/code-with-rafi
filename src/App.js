
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (type, msg) => {
    setAlert({
      message: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <div className="App">
      

      <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />

        {/* <h2>welcome to my website</h2> */}
        <Alert alert={alert} />
        {/* <About /> */}

        <Routes>

          <Route path="/about" element={<About />} />
          {/* or you can redirect the page using below code*/}
          <Route path='/redirect' element={<Navigate to="/about" />} />
          <Route path="/" element={<TestForm mode={mode} showAlert={showAlert} /> } />
        
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
