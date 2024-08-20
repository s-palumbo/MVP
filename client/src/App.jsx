import './App.css'
import './index.css'
import { Routes, Route } from "react-router-dom"; //import Routes and Route from react router dom 

// import each page here in this format that links to file folder for that page
import Start from './pages/start';
import Step from './pages/step';
import FooterNavbar from './components/FooterNavbar';


function App() {
  
return (
<>   

<div className="bg-cover bg-repeat bg-center min-h-screen flex flex-col" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1622542796254-5b9c46ab0d2f")'}}>
  <div className='flex-grow overflow-auto pb-20'>
    <Routes> 
      <Route path="/" element={<Start />}  />
      <Route path="/steps/:id" element={<Step />}  />
    </Routes>
  </div>
  <FooterNavbar />
</div> 

</>

  );
}

export default App
