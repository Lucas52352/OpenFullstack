import React from "react";




const Course=(props)=> {

    return (
    <div>

        <h1>Web development Curriculum</h1>

        <h3 style={{fontSize: 17}}>{props.course[0].name}</h3>

        {props.course[0].parts.map((part) =>
         <li key={part.id}>{part.name}: {part.exercises}</li>)
        }

        Total of {props.sum} exercises. 

        <h3 style={{fontSize: 17}}>{props.course[1].name}</h3>

        {props.course[1].parts.map((part) =>
         <li key={part.id}>{part.name}: {part.exercises}</li>)
        }

        <p>Total of {props.sum2} exercises.</p>
    </div>
    )
}

export default Course;