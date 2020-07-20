import React from "react";
import SongList from "../SongList";
import "./App.scss";

const App = () => {
    return <div className="App">
        <p>Gold bordered songs are songs that can only be obtained by requesting it from KK slider.</p>
        <SongList/>
    </div>;
};

export default App;
