
import React from 'react';

const AnimatedEmoji = ({ emoji, startX, startY, randomDuration, randomDelay, randomScale, t1, t2, t3, t4 }) => {
  const style = {
    position: 'absolute',
    left: 0,
    top: 0,
    fontSize: '2rem',
    pointerEvents: 'none',
    animation: `emoji-fly ${randomDuration}s linear infinite ${randomDelay}s`,
    transform: `translate(${startX}px, ${startY}px) scale(${randomScale})`,
    '--start-x': `${startX}px`,
    '--start-y': `${startY}px`,
    '--x1': t1.x,
    '--y1': t1.y,
    '--r1': t1.r,
    '--x2': t2.x,
    '--y2': t2.y,
    '--r2': t2.r,
    '--x3': t3.x,
    '--y3': t3.y,
    '--r3': t3.r,
    '--x4': t4.x,
    '--y4': t4.y,
    '--r4': t4.r,
    '--scale': randomScale,
  };

  return (
    <span style={style} role="img" aria-label="animated emoji">
      {emoji}
    </span>
  );
};

export default AnimatedEmoji;
