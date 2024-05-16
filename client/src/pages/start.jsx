import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';


export default function start() {





  return (
    <>

      
    
      <div>
          <h1 className='start-title' >Let's Get Started!</h1>
          <p className='start-prompt'>Choose Your Substrate:</p>
      </div>

      <h1 className='start-selct' >Follow me to paint some <br />  
      <Link className='start-link' to="/steps/1">STEEL</Link></h1> 

    

    </>
  )
}
