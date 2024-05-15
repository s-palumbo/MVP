import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';


export default function start() {




  return (
    <>
    <div>
        <h1>Let's Get Started!</h1>
        <p>Choose Your Substrate:</p>
    </div>
    <h1>Follow me to paint some <br />  <Link to="/steps/1">STEEL</Link></h1> 

    </>
  )
}
