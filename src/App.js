import React from 'react';
// my imports
import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterContainer from './components/CharacterContainer';
import { Character } from './components/Character';
import Search from './components/Search';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people`)
      .then(res => {
        setPeople(res.data.results);
      })
      .catch(err => console.log(err))
  }, []);

  // console.log(people);

  const getFilteredCharacters = () => {
    const searchNormalized = search.trim().toLowerCase();
    if (!searchNormalized) return people
    return people.filter(character => {
      return character.name.toLowerCase().includes(searchNormalized)
    })
  }

  return (
    <div className="App">
      <h1 className="Header">{"React Wars >"}</h1>
      <Search setSearch={setSearch} />
      <CharacterContainer characters={getFilteredCharacters()} />
    </div>
  );
}

export default App;