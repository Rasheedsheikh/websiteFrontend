import React, { useRef, useEffect, useState } from 'react';

function VideoPlayer() {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const updateTextElements = () => {
      const video = videoRef.current;
      const text1 = document.getElementById("text1");
      const text2 = document.getElementById("text2");
      const text3 = document.getElementById("text3");

      if (video.currentTime >= 10 && video.currentTime < 30) {
        text1.style.display = "block";
        text2.style.display = "none";
        text3.style.display = "none";
      } else if (video.currentTime >= 30 && video.currentTime < 50) {
        text1.style.display = "none";
        text2.style.display = "block";
        text3.style.display = "none";
      } else if (video.currentTime >= 50) {
        text1.style.display = "none";
        text2.style.display = "none";
        text3.style.display = "block";
      } else {
        text1.style.display = "none";
        text2.style.display = "none";
        text3.style.display = "none";
      }
    };

    const video = videoRef.current;
    video.addEventListener('timeupdate', updateTextElements);

    return () => {
      video.removeEventListener('timeupdate', updateTextElements);
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} width="640" height="360" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
      <div id="text1">This text will appear at 10 seconds</div>
      <div id="text2">This text will appear at 30 seconds</div>
      <div id="text3">This text will appear at 50 seconds</div>
    </div>
  );
}

export default VideoPlayer;
