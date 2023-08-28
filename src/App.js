import { useState } from "react";

import Player from "component/player";
import PlayList from "component/listMusic";
import dataSongs from "component/data.js";

import "App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const dataLength = dataSongs.length;

  return (
    <main className="container">
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
        songPlayer={dataSongs[currentIndex]}
        dataLength={dataLength}
      />
      <PlayList
        listSong={dataSongs}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </main>
  );
}

export default App;
