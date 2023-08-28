export default function MusicItem({
  imgThumb,
  name,
  singer,
  activeItem,
  handleClick,
}) {
  return (
    <div
      onClick={handleClick}
      className={`playlist__item ${activeItem ? "active" : ""}`}
    >
      <div className="playlist__thumb">
        <img className="playlist__img" src={imgThumb} alt="" />
      </div>
      <div className="playlist__songDetail">
        <div className="playlist__songName">{name}</div>
        <div className="playlist__songSinger">{singer}</div>
      </div>
    </div>
  );
}
