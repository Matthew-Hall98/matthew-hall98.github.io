
import React from 'react';
import PixelArt from './PixelArt';

const BackgroundElements = () => {
  // Pixel art bird
  const bird = [
    [' ', '1', ' ', ' ', ' '],
    ['1', '1', '1', ' ', ' '],
    [' ', '1', '1', '1', '1'],
    [' ', ' ', '1', ' ', ' '],
  ];

  const birdColors = {
    '1': '#1E90FF', // Blue for bird
    ' ': 'transparent',
  };

  // Pixel art mountain
  const mountain = [
    [' ', ' ', ' ', '1', ' ', ' ', ' '],
    [' ', ' ', '1', '1', '1', ' ', ' '],
    [' ', '1', '1', '1', '1', '1', ' '],
    ['1', '1', '1', '1', '1', '1', '1'],
  ];

  const mountainColors = {
    '1': '#808080', // Gray for mountain
    ' ': 'transparent',
  };

  // Pixel art mushroom
  const mushroom = [
    [' ', '1', '1', ' '],
    ['1', '1', '1', '1'],
    [' ', ' ', '2', ' '],
    [' ', ' ', '2', ' '],
  ];

  const mushroomColors = {
    '1': '#FF0000', // Red for cap
    '2': '#FFFFFF', // White for stem
    ' ': 'transparent',
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ height: '100vh' }}>
      {/* These elements won't interfere with clicks since pointer-events-none is applied */}
      <div className="absolute top-[15%] left-[8%] animate-float" style={{ animationDelay: '1.2s' }}>
        <PixelArt art={bird} colorMap={birdColors} pixelSize={5} />
      </div>
      <div className="absolute top-[25%] right-[15%] animate-float-slow" style={{ animationDelay: '3.5s' }}>
        <PixelArt art={bird} colorMap={birdColors} pixelSize={4} />
      </div>
      <div className="absolute bottom-[35%] left-[20%] animate-float" style={{ animationDelay: '2.7s' }}>
        <PixelArt art={mountain} colorMap={mountainColors} pixelSize={8} />
      </div>
      <div className="absolute bottom-[25%] right-[5%] animate-float-slow" style={{ animationDelay: '1.8s' }}>
        <PixelArt art={mushroom} colorMap={mushroomColors} pixelSize={5} />
      </div>
      <div className="absolute top-[45%] left-[25%] animate-float-slow" style={{ animationDelay: '4.2s' }}>
        <PixelArt art={mushroom} colorMap={mushroomColors} pixelSize={6} />
      </div>
    </div>
  );
};

export default BackgroundElements;
