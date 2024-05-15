import React from 'react';
import { useState, useEffect } from 'react';
import { link } from "react-router-dom";
import { useParams } from 'react-router-dom';


export default function start() {
    const { id } = useParams();
    const [ steps, setSteps ] = useState({});

    useEffect(() => {
        fetch(`/api/steps/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setSteps(data);
            });
    }, [id]);



  return (
    <>
    <div>Let's Get Started!</div>
    <h1>Follow me to paint some {steps.description} </h1>

    </>
  )
}
