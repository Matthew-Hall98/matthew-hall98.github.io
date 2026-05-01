
import React from 'react';

type PixelArtProps = {
  art: string[][];
  colorMap: Record<string, string>;
  pixelSize?: number;
  className?: string;
};

const PixelArt: React.FC<PixelArtProps> = ({ 
  art, 
  colorMap, 
  pixelSize = 4,
  className = ""
}) => {
  // Early return if art is undefined or empty
  if (!art || art.length === 0 || !art[0]) {
    return null;
  }

  return (
    <div 
      className={`inline-block ${className}`}
      style={{ 
        display: 'grid',
        gridTemplateRows: `repeat(${art.length}, ${pixelSize}px)`,
        gridTemplateColumns: `repeat(${art[0].length}, ${pixelSize}px)`,
      }}
    >
      {art.flatMap((row, y) => 
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

export default PixelArt;
