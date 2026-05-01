
import React from 'react';
import PixelArt from './PixelArt';

const PixelPortrait = () => {
  // Pixel art portrait - simple character representation
  const portrait = [
    [' ', ' ', 'B', 'B', 'B', 'B', 'B', ' ', ' '],
    [' ', 'B', 'H', 'H', 'H', 'H', 'H', 'B', ' '],
    ['B', 'H', 'P', 'P', 'P', 'P', 'P', 'H', 'B'],
    ['B', 'P', 'P', 'E', 'P', 'E', 'P', 'P', 'B'],
    ['B', 'P', 'P', 'P', 'N', 'P', 'P', 'P', 'B'],
    ['B', 'P', 'P', 'M', 'M', 'M', 'P', 'P', 'B'],
    [' ', 'B', 'P', 'P', 'P', 'P', 'P', 'B', ' '],
    [' ', ' ', 'B', 'B', 'B', 'B', 'B', ' ', ' '],
  ];

  const portraitColors = {
    'B': '#000000', // Black outline
    'H': '#8B4513', // Brown hair
    'P': '#FFA07A', // Light coral skin
    'E': '#0047AB', // Blue eyes
    'N': '#000000', // Black nose
    'M': '#FF0000', // Red mouth
    ' ': 'transparent',
  };

  // Text bubble with arrow pointing to portrait
  const textBubble = [
    [' ', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', ' '],
    ['B', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'B'],
    ['B', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'B'],
    ['B', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'B'],
    ['B', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'B'],
    ['B', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'B'],
    [' ', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'B', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'B', ' ', ' ', ' '],
  ];

  const textBubbleColors = {
    'B': '#000000', // Black outline
    'W': '#d8d4d4', // Updated to off-white color
    ' ': 'transparent', 
  };

  return (
    <div className="relative">
      {/* Portrait */}
      <div className="relative z-10">
        <PixelArt 
          art={portrait} 
          colorMap={portraitColors} 
          pixelSize={8} 
          className="pixel-borders bg-retro-black p-2"
        />
      </div>
      
      {/* Text bubble */}
      <div className="absolute top-[-110px] left-[-60px] z-20">
        <div className="relative">
          <PixelArt 
            art={textBubble} 
            colorMap={textBubbleColors} 
            pixelSize={5}
          />
          <div className="absolute top-[20px] left-[20px] right-[20px] text-xs font-press-start text-retro-black">
            Hi! I'm Matthew!<br />
            Welcome to my portfolio!
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelPortrait;
