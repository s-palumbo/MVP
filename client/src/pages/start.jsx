import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';



export default function start() {





  return (
    <>

    {/* <body class="bg-fixed" style="background-image:url(https://images.unsplash.com/photo-1657880150007-a99d4cccaeaa)" > */}
      
    

      
    
      <div className='startCard'>
          <h1 className='start-title' >Let's Get Started!</h1>
          <p className='start-prompt'>Choose Your Substrate:</p>
      </div>

      <h1 className='start-select' >Follow me to paint some</h1>   
      <Link className='start-link' to="/steps/1">STEEL</Link>

    {/* </body> */}

    </>
  )
}
