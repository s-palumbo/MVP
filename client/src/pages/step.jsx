import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams} from "react-router-dom";

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
  
    <h1>{step.Description}</h1>

    {/* <button onClick={handleClick}>{step.Text_1}</button> */}

    {step.Next_1 ? <ButtonLink to={`/steps/${step.Next_1}`}>{step.Text_1}</ButtonLink> : 
    <ButtonLink to={`/`}> ALL DONE!! </ButtonLink> }
    {step.Next_2 ? <ButtonLink to={`/steps/${step.Next_2}`}>{step.Text_2}</ButtonLink> : " " }
    {step.Next_3 ? <ButtonLink to={`/steps/${step.Next_3}`}>{step.Text_3}</ButtonLink> : " " }
        



    </>
  )
}
