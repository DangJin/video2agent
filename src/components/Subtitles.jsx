import React from 'react';
import { useCurrentFrame, spring, interpolate } from 'remotion';

const Subtitles = ({ text = '', style, durationPerChar = 5 }) => {
  const frame = useCurrentFrame();
  const textArray = text.split('\n');
  const animations = textArray.map((line, index) => {
    const delay = index * 20 ; // 每行字幕的延迟时间
    const animatedValue = spring({
      frame: frame - delay,
      fps: 30,
      config: {
        damping: 10,
        stiffness: 100,
      },
    });

    const opacity = interpolate(animatedValue, [0, 1], [0, 1]);
    const transform = interpolate(animatedValue, [0, 1], [20, 0]);

    return { opacity, transform };
  });

  return (
    <div style={style}>
      {textArray.map((line, index) => (
        <p 
          key={index} 
          style={{ 
            margin: 0, 
            opacity: animations[index].opacity, 
            transform: `translateY(${animations[index].transform}px)` 
          }}
        >
          {line}
        </p>
      ))}
    </div>
  );
};

export default Subtitles;
