import React, { useState, useEffect } from "react";
import Song from "./Song";
import songData from "../../data.json";
import "./Song.scss";

const SongList = () => {
    const initialSongs = localStorage.getItem("songs")
        ? JSON.parse(localStorage.getItem("songs"))
        : [];
    const [obtained, setObtained] = useState(initialSongs);

    useEffect(() => {
        if (obtained >= 1) {
            localStorage.setItem("songs", JSON.stringify(obtained));
        }
    });

    return (
        <div className="SongList">
            {Object.entries(songData).map((values, key) => {
                const number = values[0];
                const data = values[1];
                const checked = initialSongs.includes(number);
                return (
                    <Song
                        key={key}
                        checked={checked}
                        data={data}
                        number={number}
                        obtained={obtained}
                        setObtained={setObtained}
                    />
                );
            })}
            <div className="SongList-number">{obtained.length}</div>
        </div>
    );
};

export default SongList;
