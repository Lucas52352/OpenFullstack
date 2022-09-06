import React from "react";

const Search = (props) => {
    return (
        <div>
            <input onChange={props.onChange} placeholder={props.placeholder}></input>
        </div>
    )
}

export default Search;
