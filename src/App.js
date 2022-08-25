import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route
// } from "react-router-dom";


function App() {

    const [mode, setMode] = useState('light') // dark mode enabled or not

    const toggleMode = () => {
        if (mode === 'light') {

            setMode('dark')
            document.body.style.backgroundColor = '#562b5c'
            document.title = "TextUtils - Dark"
        }
        else {
            setMode('light')
            document.body.style.backgroundColor = 'white';
            document.title = "TextUtils - Light"
        }
    }
    return (

        <>
            {/* <Router> */}
                <Navbar title="TextUtils Blog" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
                <div className="container my-3">
                    {/* <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/" element= />
                       
                    </Routes> */}
                    {<TextForm heading="Enter the text to analyze below" mode={mode} />}
                </div>
            {/* </Router> */}
        </>
    );
}

export default App;
