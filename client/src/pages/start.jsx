import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';



export default function start() {





  return (
    <>
<div className='grid grid-cols-4 grid-rows-8 gap-2 m-4 h-96'>
  <div className='col-start-2 col-span-2 row-span-8 p-4 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-md shadow-sharp' >
    <div className='text-center leading-relaxed font-major-mono'>
      <p className='text-2xl font-semibold m-4'  >SO YOU NEED TO PAINT SOMETHING?!</p>
      <p className='m-4 font-bold'>Let's Get Started!</p>
      <p className='font-extrabold'>Choose Your Substrate beLoW</p>
    </div>
  </div>
</div>

<div className='grid grid-cols-4 grid-rows-8 gap-2 m-4 h-32'>
  <div className='col-span-2 col-start-2 row-start-2 row-span-8 bg-white bg-opacity-50 backdrop-blur-md flex items-center justify-center shadow-sharp '>
    <div className='text-center leading-relaxed font-major-mono'>
      <p className='font-extrabold'>Follow me to paint some</p>
      <p><Link className='font-extrabold text-2xl' to="/steps/1">STEEL</Link></p>
    </div>   
  </div>
</div>


    </>
  )
}
