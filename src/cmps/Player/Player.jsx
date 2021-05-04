import './Player.scss';
import { useState } from 'react';
import Lottie from 'react-lottie';
import * as playJSON from '../../assets/animations/play.json';
import * as startJSON from '../../assets/animations/start.json';
import ReactPlayer from 'react-player/soundcloud';

export default function Player({ song }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isAniRunned, setIsAniRunned] = useState(false);

  const playerOpts = {
    loop: false,
    autoplay: true,
    animationData: playJSON.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const startOpts = {
    loop: false,
    autoplay: true,
    animationData: startJSON.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  function onSongClick() {
    setIsPlaying(!isPlaying);
    setIsClicked(true);
    setTimeout(() => {
      setIsAniRunned(true);
    }, 2000);
  }

  return (
    <div className="player-container">
      <div className="title">{song.title}</div>
      <div className="prev-img fade-in" onClick={onSongClick}>
        {!isClicked && <div className="click-to-play">Click To Play</div>}
        {isClicked && !isAniRunned && (
          <div className="start-animation fade-in">
            <Lottie options={startOpts} height={100} width={100} />
          </div>
        )}
        {song.img ? (
          <img src={song.img} alt={song.title} srcSet="" width="100" />
        ) : (
          <div className="no-img">
            <h3>No Image</h3>
            <Lottie options={playerOpts} height={200} width={200} />
          </div>
        )}
      </div>
      <ReactPlayer
      className="soundcloud-player"
      width="10"
      height="10"
        url={song.url}
        playing={isPlaying}
      />
    </div>
  );
}
