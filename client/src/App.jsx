import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import { Routes, Route, Link} from "react-router-dom"; //import Routes and Route from react router dom 

// import each page here in this format that links to file folder for that page
import Start from './pages/start';
import Step from './pages/step';


function App() {
  

  return (
    <>

  
<div className="bg-cover bg-repeat bg-center h-screen flex flex-col" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1622542796254-5b9c46ab0d2f")'}}>
  <div className='flex-grow'>
    <Routes> 
      <Route path="/" element={<Start />}  />
      <Route path="/steps/:id" element={<Step />}  />
    </Routes>
  </div>
</div> 

    </>
  );
}

export default App
