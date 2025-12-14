'use client';

import { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  videoSrc: string;
  fallbackImageSrc?: string;
  overlayColor?: string;
  overlayOpacity?: number;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoSrc,
  fallbackImageSrc,
  overlayColor = 'rgba(0, 0, 0, 0.5)',
  overlayOpacity = 0.5,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.autoplay = true;
      video.loop = true;
      video.playsInline = true;
      
      // Try to play the video
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise
          .catch(error => {
            console.error('Auto-play was prevented:', error);
            // Show fallback image if available
          });
      }
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      <video
        ref={videoRef}
        className="absolute inset-0 min-w-full min-h-full object-cover w-full h-full"
        muted
        autoPlay
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {fallbackImageSrc && (
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url(${fallbackImageSrc})`, display: 'none' }}
          aria-hidden="true"
        />
      )}
      
      <div 
        className="absolute inset-0 z-10" 
        style={{ 
          backgroundColor: overlayColor,
          opacity: overlayOpacity 
        }}
        aria-hidden="true"
      />
    </div>
  );
};

export default VideoBackground;