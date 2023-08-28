export default function CdThumb({ isPlaying, songPlayer }) {
  return (
    <>
      <div className="player__song">
        <div className="player__song__title">Now playing:</div>
        <div className="player__song__name">{songPlayer.name}</div>
        <div className="player__song__singer">{songPlayer.singer}</div>
      </div>
      <div className="cd">
        <img
          className={`cd__img play ${isPlaying === false ? "paused" : ""}`}
          src={songPlayer.image}
          alt=""
        />
      </div>
    </>
  );
}
