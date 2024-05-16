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

  
{/* <div className="bg-cover bg-center h-screen" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1657880150007-a99d4cccaeaa")'}}>
    <h1 className='text-7xl font-bold underline'>Hello Testing! </h1> */}

      
      

      <Routes> 
        <Route path="/" element={<Start />}  />
        <Route path="/steps/:id" element={<Step />}  />
      </Routes>

    
{/* </div> */}

    </>
  );
}

export default App
