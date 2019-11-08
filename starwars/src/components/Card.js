import React from 'react';
import StyledCard from './StyledCard';

const Card = (props) => {


  return (
    
    <StyledCard>
      <h1>{props.people.name}</h1>
      <h2>Birth year: {props.people.birth_year}</h2>
      <h2>Gender: {props.people.gender}</h2>
      <h2>Hair color: {props.people.hair_color}</h2>
      <h2>Height: {props.people.height}</h2>
      <h2>Mass: {props.people.mass}</h2>
      <h2>Skin color: {props.people.skin_color}</h2>
      
      </StyledCard>
  );
}

export default Card ;