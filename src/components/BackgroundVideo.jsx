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
        <source src="/Coraline Ambience_ Sounds from the Other World _ LAIKA Studios.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
    </div>
  );
};

export default BackgroundVideo;
