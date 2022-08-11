import React, { Components } from 'react';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Total from './Components/Total';
import Part from './Components/Part';


const App=()=>{
  const course={
    cname: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of Component',
        exercises: 14
      }
    ]
  }

  let sum = 0;
  for(let i = 0; i < course.parts.length; i++) {
    sum += course.parts[i].exercises
  }


  return (
    <div>
     <Header course={course.cname}/>
     <Content parts={course.parts}/>
     <Total sum={sum} />
    </div>
  )
}



export default App;

