import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link} from "react-router-dom"; //import Routes and Route from react router dom 

import Home from "./pages/home"; // import each page up here in this format that links to file folder
import Start from './pages/start';


function App() {
  

  return (
    <>
      <h1>Testing! Is this thing on?</h1>
      <h2>What is this thing?</h2>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/start">Let's Get Started!</Link>

          </li>
        </ul>
      </nav>

      {/* Wrap Routes in Routes tag and add each page as a route path in return */}
      <Routes> 
        <Route path="/" element={<Home />}  />
        <Route path="/start" element={<Start />}  />



      </Routes>



    </>
  );
}

export default App
