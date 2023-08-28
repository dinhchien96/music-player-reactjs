import { useRef, useState } from "react";

import BtnControl from "./button";
import TimeProgress from "./time-progress";
import { PREV_SONG, NEXT_SONG } from "component/constant";

function Control({
  playing,
  setPlaying,
  setCurrentIndex,
  currentIndex,
  currentPlayer,
  dataLength,
}) {
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef();
  const handlePlay = () => {
    if (playing) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setPlaying((prevState) => !prevState);
  };

  const handleForwardSong = (forward) => {
    switch (forward) {
      case PREV_SONG:
        if (currentIndex === 0) {
          setCurrentIndex(dataLength - 1);
        } else {
          setCurrentIndex((prevState) => prevState - 1);
        }
        break;
      case NEXT_SONG:
        if (currentIndex === dataLength - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex((prevState) => prevState + 1);
        }
        break;
      default:
    }
    setCurrentTime(0);
    setPlaying(false);
    // audioRef.current?.play();
  };

  return (
    <div className="control">
      <BtnControl
        playing={playing}
        handlePlay={handlePlay}
        handleForwardSong={handleForwardSong}
      />
      <TimeProgress
        currentPlayer={currentPlayer}
        handleForwardSong={handleForwardSong}
        setCurrentTime={setCurrentTime}
        currentTime={currentTime}
        ref={audioRef}
      />
    </div>
  );
}

export default Control;
