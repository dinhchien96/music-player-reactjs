import MusicItem from "./MusicItem";
import "./css/listMusic.css";

export default function ListMusic({ listSong, currentIndex, setCurrentIndex }) {
  let activeItem = false;

  const handleClick = (i) => {
    setCurrentIndex(i);
  };

  return (
    <div className="playlist">
      {listSong.map((item, index) => {
        currentIndex === index ? (activeItem = true) : (activeItem = false);
        return (
          <MusicItem
            activeItem={activeItem}
            imgThumb={item.image}
            name={item.name}
            singer={item.singer}
            handleClick={() => handleClick(index)}
            key={index}
          />
        );
      })}
    </div>
  );
}
