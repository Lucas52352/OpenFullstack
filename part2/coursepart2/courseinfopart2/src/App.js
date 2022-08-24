import React from "react"
import Course from "./Course/Course"

const App = () => {
  const course = [
  {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4,
      }
    ],
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1,
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2,
      },
    ],
  },
]

  
  
  const sum = course[0].parts.reduce(
  (previousValue, currentValue) => {
    return previousValue + currentValue.exercises 
  }, 0
  );

  const sum2 = course[1].parts.reduce(
    (previousValue, currentValue) => {
      return previousValue + currentValue.exercises 
    }, 0
    );
  

  return (
    <div>


      <Course course={course} sum={sum} sum2={sum2}/> 
       
    </div>
  
  )
}

export default App;
