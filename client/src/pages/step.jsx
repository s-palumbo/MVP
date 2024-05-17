import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams} from "react-router-dom";
import Paper from '@mui/material/Paper';
// import './App.css'
// import './index.css'


export default function start() {
    const { id } = useParams();
    // const history =  useHistory();
    const [ step, setStep ] = useState({});
    

    useEffect(() => {
        fetch(`/api/steps/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setStep(data);
            });
    }, [id]);

    // const handleClick = () => {
    //     const nextStep = parseInt(id, 10) + 1;
    //     history.push(`/steps/${nextStep}`);
    // }

    function ButtonLink({ to, children }) {
        return <Link to={to}><button>{children}</button></Link>;
    }





  return (
    <>
  <div className='h-screen flex flex-col justify-center items-center'>
    <div className='grid grid-cols-6 grid-rows-6 m-4 p-4 gap-0 bg-orange-600 bg-opacity-50 items-center justify-center'>
      <div className='col-span-6 row-span-6 flex items-center justify-center h-50'>
      <p className='text-center'> {step.Description} </p>
      </div>
      
    </div>
    
    
    <div className='grid grid '>

    {step.Next_1 ? <ButtonLink to={`/steps/${step.Next_1}`}>{step.Text_1}</ButtonLink> : 
    <ButtonLink to={`/`}> ALL DONE!! </ButtonLink> }
    {step.Next_2 ? <ButtonLink to={`/steps/${step.Next_2}`}>{step.Text_2}</ButtonLink> : " " }
    {step.Next_3 ? <ButtonLink to={`/steps/${step.Next_3}`}>{step.Text_3}</ButtonLink> : " " }
    
    <ButtonLink to={-1}> Take me Back </ButtonLink>
    {/* <ButtonLink to={"/"} >Home</ButtonLink> */}

    </div>

    <div className='staticLinks'>
      <nav>
        <ul>
          <li></li>
        </ul>
      </nav>
    </div>
  
  
  </div>      



    </>
  )
}
