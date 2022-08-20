import React from "react";


const Total=(props)=> {
    console.log(props)
    return(
        <div>
            <p>
               Total: {props.sum}
            </p>
        </div>
    )
}

export default Total;