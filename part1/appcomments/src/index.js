import React, {useState} from 'react'
import ReactDOM from  'react-dom'
import Button from './Statistics/Button'
import Statistics from './Statistics/Statistics'




const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = [good,neutral,bad]
  const average = ((good-bad)/(good+neutral+bad))
  const positive = ((good)/(good+neutral+bad)*100)


  let sum = 0;
  for(let i = 0; i< total.length; i++) {
    sum += total[i]
  }

  

  return (
    <div>
      <h1>App Comments</h1>
      
      <Button onClick={() => setGood(good + 1)} text="Good"/>
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral"/>
      <Button onClick={() => setBad(bad + 1)} text="Bad"/>
      
     <h2>Statistics</h2>

       

      {good===0 && neutral===0 && bad===0 ? <p>No feedback given</p> :
      <div>
      <Statistics text="Good" value={good}/>
      <Statistics text="Neutral" value={neutral}/>
      <Statistics text="Bad" value={bad}/>
      <Statistics text="Total" value={sum}/>
      <Statistics text="Average" value={average}/>
      <Statistics text="Positive" value={positive}/>
      </div>
      }
      
  
    </div>
  )

}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;