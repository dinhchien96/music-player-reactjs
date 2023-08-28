import { PREV_SONG, NEXT_SONG } from "component/constant";

function BtnControl({ playing, handleForwardSong, handlePlay }, ref) {
  return (
    <>
      <div className="control__btn">
        <div onClick={() => handleForwardSong(PREV_SONG)} className="prev__btn">
          <i className="fa-solid fa-backward-step" />
        </div>
        <div onClick={() => handlePlay(1)} className="play__btn">
          <i className={`fa-solid ${playing ? "fa-pause" : "fa-play"}`} />
        </div>
        <div onClick={() => handleForwardSong(NEXT_SONG)} className="next__btn">
          <i className="fa-solid fa-forward-step" />
        </div>
      </div>
    </>
  );
}

export default BtnControl;
