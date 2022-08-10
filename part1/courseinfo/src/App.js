import React, { Components } from 'react';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Total from './Components/Total';
import Part from './Components/Part';


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of component',
    exercises: 14
  }
]
  
  return (
    <div>
      <Header course={course} />
      {parts[0].name} {parts[0].exercises} <br/>
      {parts[1].name} {parts[1].exercises} <br/>
      {parts[2].name} {parts[2].exercises} <br/>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
    </div>
  )
}



export default App;

