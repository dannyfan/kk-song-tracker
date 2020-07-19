import React from "react";
import Song from "./Song";
import songData from "../../data.json";

const SongList = () => {
    return (
        <div className="SongList">
            {Object.entries(songData).map((values, key) => {
                const number = values[0];
                const data = values[1];
                return <Song key={key} data={data} number={number}/>
            })}
        </div>
    )
}

export default SongList;