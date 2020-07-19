import React from "react";

const Song = (props) => {
    const imageSrc = require(`../../assets/images/${props.data.name}.png`);
    return (
        <div className="Song">
            <input type="checkbox" id={props.number} name={props.number} value={props.number}/>
            <label for={props.number}>
                <img src={imageSrc} alt={props.data.name}/>
                <h1>{props.number}. {props.data.name}</h1>
            </label>
        </div>
    )
}

export default Song;