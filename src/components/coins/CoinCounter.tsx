
import React from 'react';
import PixelArt from '../PixelArt';
import { coinArt, coinColors } from './CoinData';

interface CoinCounterProps {
  collected: number;
  total: number;
}

const CoinCounter: React.FC<CoinCounterProps> = ({ collected, total }) => {
  if (collected === 0) return null;
  
  return (
    <div className="fixed bottom-4 right-4 bg-retro-black border-2 border-retro-yellow p-2 flex items-center z-40 animate-pop">
      <PixelArt 
        art={coinArt}
        colorMap={coinColors}
        pixelSize={4}
      />
      <span className="font-press-start text-xs ml-2 text-retro-yellow">
        x{collected}/{total}
      </span>
    </div>
  );
};

export default CoinCounter;
