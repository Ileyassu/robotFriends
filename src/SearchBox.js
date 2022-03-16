import React from "react";

const SearchBox = (props) => {
    return(
        <input 
        className="pa3 ba b--green bg-lightest-blue"
        type='search' 
        placeholder="search Robots"
        onChange={props.searchChange} />
    )
}

export default SearchBox;