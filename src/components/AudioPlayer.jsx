import React, { useState, useRef, useEffect } from 'react';
import {TbMusicOff,TbMusic} from 'react-icons/tb'
function AudioPlayer({ src }) {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='audio-player'>
      <button className='play-btn' onClick={togglePlay}>{isPlaying ? <TbMusicOff/>: <TbMusic/>}</button>
      <audio ref={audioRef} src={src} loop  />
    </div>
  );
}

export default AudioPlayer;
