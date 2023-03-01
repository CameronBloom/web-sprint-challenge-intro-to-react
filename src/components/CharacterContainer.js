import React, { useState } from 'react';
import { Accordion } from 'reactstrap';
import { Character } from './Character';

export default function CharacterContainer(props) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };
  
  return (
    <div className="accordian">
        {
          props.characters.map((character, idx) => {
            return <div>{character.name}</div>;
          })
        }
      <Accordion open={open} toggle={toggle}>
        {
          props.characters.map((character, idx) => {
            const keyId = (idx + 1).toString();
            return <Character character={character} key={keyId} index={keyId} worlds={props.worlds} films={props.films} species={props.species} starships={props.starships} vehicles={props.vehicles}/>;
          })
        }
      </Accordion>
    </div>
  );
}