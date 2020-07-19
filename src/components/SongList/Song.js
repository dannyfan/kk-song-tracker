import React from "react";

const Song = (props) => {
    const imageSrc = require(`../../assets/images/${props.data.name}.png`);
    const isExclusive = props.data.kk_exclusive ? "is-Exclusive" : "";
    return (
        <div className={`Song ${isExclusive}`}>
            <input type="checkbox" id={props.number} name={props.number} value={props.number}/>
            <label htmlFor={props.number}>
                <img src={imageSrc} alt={props.data.name}/>
                <div>{props.number}. {props.data.name}</div>
            </label>
        </div>
    )
}

export default Song;