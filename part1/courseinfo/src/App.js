import React, { Components } from 'react';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Total from './Components/Total';
import Part from './Components/Part';


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div>
      <Header course={course} />
      <Content part={[part1, part2, part3]}    exercises={[exercises1, exercises2, exercises3]} />
      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  )
}



export default App;

