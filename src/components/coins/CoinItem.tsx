
import React from 'react';
import PixelArt from '../PixelArt';
import { Coin } from './CoinData';
import { coinArt, coinColors } from './CoinData';

interface CoinItemProps {
  coin: Coin;
  onCollect: (id: number) => void;
}

const CoinItem: React.FC<CoinItemProps> = ({ coin, onCollect }) => {
  if (coin.collected) return null;
  
  return (
    <div 
      className="absolute animate-bounce-slow z-40 cursor-pointer hover:scale-125 transition-transform"
      style={{ 
        top: `${coin.position.top}px`,
        left: `${coin.position.left}px`,
        width: '24px',
        height: '24px',
      }}
      onClick={() => onCollect(coin.id)}
    >
      <div className="relative">
        <div 
          className="absolute inset-0 bg-yellow-300 rounded-full filter blur-sm opacity-30 animate-pulse"
          style={{ transform: 'scale(1.3)' }} // Reduced glow effect
        ></div>
        <PixelArt 
          art={coinArt}
          colorMap={coinColors}
          pixelSize={6}
        />
      </div>
    </div>
  );
};

export default CoinItem;
