import React from 'react';
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

// Write your Character component here
export function Character(props) {
  // const dataWorlds = props.worlds.map((world, idx) => {
  //   return {id: idx+1, world: world.name};
  // });
  // const dataFilms = props.films.map((film, idx) => {
  //   return {id: idx+1, title: film.title};
  // });
  // const dataSpecies = props.species.map((species, idx) => {
  //   return {id: idx+1, name: species.name};
  // });
  // const dataStarships = props.starships.map((starship, idx) => {
  //   return {id: idx+1, name: starship.name};
  // });
  // const dataVehicles = props.vehicles.map((vehicle, idx) => {
  //   return {id: idx+1, name: vehicle.name};
  // });


  // The first Character object generates a unique "key" prop warning.
  // None of the subsequent Character object generate a prop warning.
  return (
    
    <AccordionItem key={props.index}>
      <AccordionHeader targetId={props.index}>{props.character.name}</AccordionHeader>
      <AccordionBody accordionId={props.index}>
        <div className="column">
          <div className="row record-content">
            <div className="char-info">
              <p>{props.character.name}</p>
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