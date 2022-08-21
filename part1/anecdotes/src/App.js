import React, { useState } from 'react';
import Button from './Adds/Button';


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 })
  const copy = {...votes}
  const handleOnClick = () => {
     setSelected(Math.floor(Math.random() * 6));
  
  
     
  }

  const handleOnVote = () => {
    copy[selected] += 1
    setVotes(copy) 
  }

  
  let max = 0;
  for (let x in votes) {
    max = votes[x] > max ? votes[x] : max
  }
  let maxKey = 0 ;
  for (let x in votes) {
    if (votes[x] === max) {maxKey = x}

  }

  return(
    <div>

      <h1>Anecdotes of the day</h1>

      {props.anecdotes[selected]} <br/>
      
      <Button text="Vote" onClick={handleOnVote}/>   
      Has {copy[selected]} votes.
      <br/>
       
      <Button text="Next Anecdote" onClick={handleOnClick}/>
      
      <h2>Anecdote with most votes</h2>

      {props.anecdotes[maxKey]} <br/>
      Has {max} votes.


    </div>
  )
}





export default App;
