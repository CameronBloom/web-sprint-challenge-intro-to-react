import React, { useState } from 'react';
import { Accordion } from 'reactstrap';
import { Character } from './Character';

export default function CharacterContainer(props) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  
  return (
    <div className="accordian">
      <Accordion open={open} toggle={toggle}>
        {
          props.characters.map((character, idx) => {
            return <Character character={character} key={idx + 1} index={(idx + 1).toString()} worlds={props.worlds} films={props.films} starships={props.starships} vehicles={props.vehicles}/>;
          })
        }
      </Accordion>
    </div>
  );
}