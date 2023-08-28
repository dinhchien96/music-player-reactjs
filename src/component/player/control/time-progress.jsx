import { forwardRef } from "react";

import { NEXT_SONG } from "component/constant";

function TimeProgress(
  { currentPlayer, handleForwardSong, setCurrentTime, currentTime },
  ref
) {
  function handleProgressTimer() {
    if (ref.current?.duration) {
      const progressPersent = Math.floor(
        (ref.current?.currentTime / ref.current?.duration) * 100
      );
      setCurrentTime(progressPersent);
    }
  }

  function handleClickProgress(event) {
    const seekTime = (event.target.value * ref.current?.duration) / 100;
    ref.current.currentTime = seekTime;
  }

  return (
    <div className="timeProgress">
      <input
        type="range"
        className="slicer"
        min={0}
        max={100}
        value={currentTime}
        step={1}
        onInput={handleClickProgress}
      />
      <audio
        ref={ref}
        src={currentPlayer}
        onEnded={() => handleForwardSong(NEXT_SONG)}
        onTimeUpdate={handleProgressTimer}
      ></audio>
    </div>
  );
}

export default forwardRef(TimeProgress);
