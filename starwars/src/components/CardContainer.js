import React, { useEffect } from 'react';
import Card from './Card';
import axios from 'axios';


const CardContainer = () => {


useEffect (() => {

    axios.get('https://swapi.co/api/people/')
          .then(responce => {
              console.log(responce);
          })
          .catch(error => {
              console.log(error);
          })
}, [])

  return (
    <div className="CardContainer">
     <Card /> 
     <Card /> 
     <Card /> 
    </div>
  );
}

export default CardContainer ;