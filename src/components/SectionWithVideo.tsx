'use client';

import { motion } from 'framer-motion';

interface SectionWithVideoProps {
  title: string;
  content: string;
  youtubeVideoId: string;
  fallbackVideoSrc?: string;
  titleColor?: string;
  dividerColor?: string;
}

export default function SectionWithVideo({
  title,
  content,
  youtubeVideoId,
  fallbackVideoSrc = '/videos/hero-background.mp4',
  titleColor = 'text-white',
  dividerColor = 'bg-primary'
}: SectionWithVideoProps) {
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&start=0&end=0`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative text-center"
    >
      {/* Video Background */}
      <div className="absolute inset-0 -m-12 rounded-2xl overflow-hidden">
        {/* YouTube Video as Background */}
        <iframe
          className="absolute inset-0 w-full h-full pointer-events-none opacity-90"
          src={youtubeEmbedUrl}
          title={`${title} Background Video`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          style={{
            transform: 'scale(1.2)',
            transformOrigin: 'center center',
            width: '120%',
            height: '120%',
            left: '-10%',
            top: '-10%'
          }}
        />
        
        {/* Fallback: Local Video (if YouTube fails) */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          autoPlay
          muted
          loop
          playsInline
          style={{ display: 'none', zIndex: 1 }}
        >
          <source src={fallbackVideoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-12 text-white">
        <h2 className={`text-5xl lg:text-6xl font-bold mb-8 ${titleColor}`}>
          {title}
        </h2>
        <div className={`w-24 h-1 ${dividerColor} mx-auto mb-8`}></div>
        <div 
          className="text-2xl leading-relaxed font-medium"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </motion.div>
  );
}