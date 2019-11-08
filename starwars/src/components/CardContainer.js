import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';


const CardContainer = () => {
    const [people, fetchPeople] = useState([]);


useEffect (() => {

    axios.get('https://swapi.co/api/people/')
          .then(responce => {
              console.log(responce.data.results);
              fetchPeople(responce.data.results);
          })
          .catch(error => {
              console.log(error);
          })
}, [])

  return (
    <div className="CardContainer">
     {
         people.map((people, index) => {
             return(
                 <Card key={index}/>
             )
         })
     }
    </div>
  );
}

export default CardContainer ;