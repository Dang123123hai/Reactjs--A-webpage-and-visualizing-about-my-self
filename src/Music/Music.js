import React, { Component } from 'react'
import { useState, useEffect } from "react";
import a from './TTWOV.mp3'
import b from '../App.css'
const useAudio = url => {
  const [audio] = useState(new Audio(a));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause(); 
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Music = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div className='music'>
      <button title='Turn on the 🔊 to enjoy the 🎶' onClick={toggle}  >{playing ? "Pause" : "Play Music 🎵 "}</button>
    </div>
  );
};

export default Music;