import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link} from "react-router-dom"; //import Routes and Route from react router dom 

// import each page here in this format that links to file folder for that page
import Start from './pages/start';
import Step from './pages/step';


function App() {
  

  return (
    <>
      {/* Wrap Routes in Routes tag and add each page as a route path in return */}
      <Routes> 
        <Route path="/" element={<Start />}  />
        <Route path="/steps/:id" element={<Step />}  />


      </Routes>



    </>
  );
}

export default App
