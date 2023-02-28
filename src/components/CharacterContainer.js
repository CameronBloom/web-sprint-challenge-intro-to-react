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
  console.log(props.characters);

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        {
          props.characters.map((character, idx) => {
            return <Character character={character} index={idx + 1} />;
          })
        }
      </Accordion>
    </div>
  );
}