
import { useState, useEffect } from 'react';

const PixelCharacter = () => {
  const [frame, setFrame] = useState(0);
  
  // Simple character animation
  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(prev => (prev + 1) % 2);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  // Character colors
  const colorMap: Record<string, string> = {
    'B': '#000000', // Black (outline)
    'S': '#0047AB', // Blue (shirt)
    'P': '#FFA07A', // Light Coral (skin)
    'H': '#8B4513', // SaddleBrown (hair)
    'J': '#1E90FF', // DodgerBlue (jeans)
    ' ': 'transparent', // Transparent
  };
  
  // Character frames for animation
  const characterFrames = [
    [
      [' ', ' ', 'B', 'B', 'B', 'B', ' ', ' '],
      [' ', 'B', 'H', 'H', 'H', 'H', 'B', ' '],
      [' ', 'B', 'P', 'P', 'P', 'P', 'B', ' '],
      [' ', 'B', 'P', 'P', 'P', 'P', 'B', ' '],
      [' ', 'B', 'S', 'S', 'S', 'S', 'B', ' '],
      [' ', 'B', 'S', 'S', 'S', 'S', 'B', ' '],
      ['B', 'B', 'J', 'J', 'J', 'J', 'B', 'B'],
      ['B', 'J', 'J', 'J', 'J', 'J', 'J', 'B'],
      ['B', 'J', 'J', 'B', 'B', 'J', 'J', 'B'],
      ['B', 'P', 'P', 'B', 'B', 'P', 'P', 'B'],
      [' ', 'B', 'B', ' ', ' ', 'B', 'B', ' '],
    ],
    [
      [' ', ' ', 'B', 'B', 'B', 'B', ' ', ' '],
      [' ', 'B', 'H', 'H', 'H', 'H', 'B', ' '],
      [' ', 'B', 'P', 'P', 'P', 'P', 'B', ' '],
      [' ', 'B', 'P', 'P', 'P', 'P', 'B', ' '],
      [' ', 'B', 'S', 'S', 'S', 'S', 'B', ' '],
      ['B', 'B', 'S', 'S', 'S', 'S', 'B', 'B'],
      ['B', 'J', 'J', 'J', 'J', 'J', 'J', 'B'],
      ['B', 'J', 'J', 'J', 'J', 'J', 'J', 'B'],
      ['B', 'J', 'J', 'B', 'B', 'J', 'J', 'B'],
      [' ', 'B', 'B', ' ', ' ', 'B', 'B', ' '],
      ['B', ' ', ' ', ' ', ' ', ' ', ' ', 'B'],
    ]
  ];

  const pixelSize = 6;
  const currentFrame = characterFrames[frame];
  
  return (
    <div 
      className="inline-grid"
      style={{ 
        gridTemplateRows: `repeat(${currentFrame.length}, ${pixelSize}px)`,
        gridTemplateColumns: `repeat(${currentFrame[0].length}, ${pixelSize}px)`,
      }}
    >
      {currentFrame.flatMap((row, y) => 
        row.map((pixel, x) => (
          <div
            key={`${x}-${y}`}
            style={{
              width: `${pixelSize}px`,
              height: `${pixelSize}px`,
              backgroundColor: colorMap[pixel] || 'transparent',
            }}
          />
        ))
      )}
    </div>
  );
};

export default PixelCharacter;
