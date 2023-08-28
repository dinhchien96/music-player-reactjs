import Thumb from "./thumb";
import Control from "./control";

import "./css/player.css";

function Player({
  isPlaying,
  setIsPlaying,
  setCurrentIndex,
  songPlayer,
  dataLength,
  currentIndex,
}) {
  return (
    <div className="player">
      <Thumb isPlaying={isPlaying} songPlayer={songPlayer} />
      <Control
        playing={isPlaying}
        setPlaying={setIsPlaying}
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
        currentPlayer={songPlayer.path}
        dataLength={dataLength}
      />
    </div>
  );
}

export default Player;
