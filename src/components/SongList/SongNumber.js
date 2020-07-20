import React from "react";

const SongNumber = (props) => {
    const style = {
        width: ((props.current / props.max) * 100) + "%"
    }
    return (
        <div className="Song-Number">
            <div className="Song-NumberBar" style={style}></div>
            <div className="Song-Track">{props.current}/{props.max}</div>
        </div>
    )
}

export default SongNumber;