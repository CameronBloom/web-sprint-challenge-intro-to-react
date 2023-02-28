import React from 'react';
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

// Write your Character component here
export function Character(props) {
  console.log(props.worlds);
  console.log(props.films);
  console.log(props.starships);
  console.log(props.vehicles);
  return (
    <AccordionItem>
      <AccordionHeader targetId={props.index}>{props.character.name}</AccordionHeader>
      <AccordionBody accordionId={props.index}>
        <div className="column">
          <div className="row record-content">
            <div className="char-info">
              <p><strong>Full Name:</strong> <a href={props.character.url} target="_blank" rel="noreferrer">{props.character.name}</a></p>
              <p><strong>Gender:</strong> {props.character.gender}</p>
              <p><strong>Height:</strong> {props.character.height}</p>
              <p><strong>Mass:</strong> {props.character.mass}</p>
              <p><strong>Birth Year:</strong> {props.character.birth_year}</p>
              <p><strong>Eye Color:</strong> {props.character.eye_color}</p>
              <p><strong>Hair Color:</strong> {props.character.hair_color}</p>
              <p><strong>Skin Color:</strong> {props.character.skin_color}</p>
            </div>
            <div className="char-arrays">
              <p><strong>Home World:</strong> {props.character.homeworld}</p>
              {props.character.films.map((film, idx) => {
                return <p><strong>Film {idx + 1}:</strong> {film}</p>
              })}
              {props.character.species.map((species, idx) => {
                return <p><strong>Species {idx + 1}:</strong> {species}</p>
              })}
              {props.character.starships.map((starship, idx) => {
                return <p><strong>Starship {idx + 1}:</strong> {starship}</p>
              })}
              {props.character.vehicles.map((vehicle, idx) => {
                return <p><strong>Vehicle {idx + 1}:</strong> {vehicle}</p>
              })}
            </div>
          </div>
          <div className="row record-details">
            <div className="left record-info"><strong>Created On: </strong><p>{props.character.created}</p></div>  
            <div className="right record-info"><strong>Edited On: </strong><p>{props.character.edited}</p></div>  
          </div>
        </div>
      </AccordionBody>
    </AccordionItem>
  )
}