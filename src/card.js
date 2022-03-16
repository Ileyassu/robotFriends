import React from "react";

const Card = (props) => {
        return(
             <div className="bg-light-green dib br3 ma3 grow bw shadow-5 tc">
            <div>
                <img src={`https://robohash.org/${props.id}?200x200`}/>
            </div>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
            </div>
        );
    
}

export default Card;