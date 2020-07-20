import React, { useState } from "react";

const Song = (props) => {
    const imageSrc = require(`../../assets/images/${props.data.name}.png`);
    const isExclusive = props.data.kk_exclusive ? "is-Exclusive" : "";
    const [ checked, setChecked ] = useState(props.checked);

    const haveSong = (event) => {
        setChecked(event.target.checked);
        if (event.target.checked) {
            props.setObtained((prevArray) => [...prevArray, props.number]);
        } else {
            props.setObtained(
                props.obtained.filter((number) => number !== props.number)
            );
        }
    };

    return (
        <div className={`Song ${isExclusive}`}>
            <input
                type="checkbox"
                checked={checked}
                id={props.number}
                name={props.number}
                value={props.number}
                onChange={haveSong}
            />
            <label htmlFor={props.number}>
                <img src={imageSrc} alt={props.data.name} />
                <div>
                    {props.number}. {props.data.name}
                </div>
            </label>
        </div>
    );
};

export default Song;
