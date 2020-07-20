import React from "react";
import SongList from "../SongList";
import "./App.scss";

const App = () => {
    return <div className="App">
        <p>Just click on the songs you have obtained and the app will remember it the next time you check on your device.</p>
        <p>Gold bordered songs are songs that can only be obtained by requesting it from KK slider.</p>
        <SongList/>
    </div>;
};

export default App;
