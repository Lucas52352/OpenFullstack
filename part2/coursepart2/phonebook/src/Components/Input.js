import React from "react";

const Input = (props) => {
    return (
        <div>
            <input onChange={props.onChange} value={props.value} ></input>
        </div>
    )
}

export default Input;