import React from 'react'

export default function Search(props) {

  const { setSearch } = props
  const changeHandler = event => {
    const searchTerm = event.target.value
    setSearch(searchTerm)
    console.log(searchTerm);
  }

  return (
    <div className='search-characters'>
      <input onChange={changeHandler} />
    </div>
  )
}