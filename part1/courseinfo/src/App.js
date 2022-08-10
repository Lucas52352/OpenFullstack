import React, { Components } from 'react';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Total from './Components/Total';
import Part from './Components/Part';


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of component',
    exercises: 14
  }
  return (
    <div>
      <Header course={course} />
      {part1.name} {part1.exercises} <br/>
      {part2.name} {part2.exercises} <br/>
      {part3.name} {part3.exercises}
    </div>
  )
}



export default App;

