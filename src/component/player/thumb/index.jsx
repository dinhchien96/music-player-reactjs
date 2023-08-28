import CdThumb from "./CdThumb";

export default function Thumb({ isPlaying, songPlayer }) {
  return (
    <div className="thumb">
      <CdThumb isPlaying={isPlaying} songPlayer={songPlayer} />
    </div>
  );
}
