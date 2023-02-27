// Write your Character component here
export function Character(props) {
  return (
    <div>
      <div>Hello</div>
      {console.log(props.character)}
      {console.log(props.character.name)}
      {console.log(props.character.birth_year)}
      {console.log(props.character.height)}
      <div>Hello</div> 
    </div>
  )
}