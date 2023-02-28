import React from 'react';
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

// Write your Character component here
export function Character(props) {
  return (
    <AccordionItem>
      <AccordionHeader targetId={props.index}>{props.character.name} - {props.index}</AccordionHeader>
      <AccordionBody accordionId={props.index}>
        <div className="column">
          <div className="row record-content">
            <div className="char-info">
              <p><strong>Gender:</strong> {props.character.gender}</p>
              <p><strong>Height:</strong> {props.character.height}</p>
              <p><strong>Mass:</strong> {props.character.mass}</p>
              <p>{props.character.birth_year}</p>
              <p>{props.character.eye_color}</p>
              <p>{props.character.hair_color}</p>
              <p>{props.character.skin_color}</p>
            </div>
            <div className="char-arrays">
              <p>{props.character.homeworld}</p>
              {props.character.films.map((film, idx) => {
                return <p>Film {idx + 1}: {film}</p>
              })}
              {props.character.species.map((species, idx) => {
                return <p>Species {idx + 1}: {species}</p>
              })}
              {props.character.starships.map((starship, idx) => {
                return <p>Starship {idx + 1}: {starship}</p>
              })}
              {props.character.vehicles.map((vehicle, idx) => {
                return <p>Vehicle {idx + 1}: {vehicle}</p>
              })}
            </div>
          </div>
          <div className="record-details">
            <p>{props.character.created}</p>
            <p>{props.character.edited}</p>
          </div>
        </div>
        <div></div>
        
        

        
      <a href={props.character.url} target="_blank" rel="noreferrer">{props.character.name}</a>
        
        
        
        
        
      </AccordionBody>
    </AccordionItem>
    // <div>
    //   <div>Hello</div>
    //   {/* {console.log(props.character)}
    //   {console.log(props.character.name)}
    //   {console.log(props.character.birth_year)}
    //   {console.log(props.character.height)} */}
    //   {/* <div>Hello</div>  */}
    // </div>
  )
}