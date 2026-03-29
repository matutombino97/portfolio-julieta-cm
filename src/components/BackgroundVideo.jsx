import React from 'react';
import './BackgroundVideo.css';

const BackgroundVideo = () => {
  return (
    <div className="video-background-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-background-element"
      >
        <source src="https://drive.google.com/uc?export=download&id=1D4iM28DRq0icxWw54n8gAxbWqFVViKEp" type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
    </div>
  );
};

export default BackgroundVideo;
