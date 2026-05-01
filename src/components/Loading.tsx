
import { useState, useEffect } from 'react';
import PixelArt from './PixelArt';

interface LoadingProps {
  onLoadComplete: () => void;
  fadeOut?: boolean;
}

const Loading = ({ onLoadComplete, fadeOut = false }: LoadingProps) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  // Loading text typing effect
  useEffect(() => {
    const fullText = "LOADING...";
    if (loadingText.length < fullText.length) {
      const timer = setTimeout(() => {
        setLoadingText(fullText.slice(0, loadingText.length + 1));
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [loadingText]);
  
  // Blinking cursor effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);
  
  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (Math.random() * 5);
        if (newProgress >= 100) {
          clearInterval(interval);
          // Give a slight delay after reaching 100% before completing
          setTimeout(() => {
            onLoadComplete();
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 200);
    
    return () => clearInterval(interval);
  }, [onLoadComplete]);
  
  // Pixel art character
  const character = [
    [' ', ' ', 'B', 'B', 'B', ' ', ' '],
    [' ', 'B', 'G', 'G', 'G', 'B', ' '],
    ['B', 'G', 'G', 'G', 'G', 'G', 'B'],
    ['B', 'G', 'E', 'G', 'E', 'G', 'B'],
    ['B', 'G', 'G', 'N', 'G', 'G', 'B'],
    ['B', 'G', 'M', 'G', 'M', 'G', 'B'],
    [' ', 'B', 'G', 'G', 'G', 'B', ' '],
    [' ', ' ', 'B', 'B', 'B', ' ', ' '],
  ];

  const characterColors = {
    'B': '#000000', // Black outline
    'G': '#50C878', // Green for character
    'E': '#FFFFFF', // White eyes
    'N': '#000000', // Black nose
    'M': '#000000', // Black mouth
    ' ': 'transparent',
  };

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-retro-navy transition-opacity duration-700 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="animate-bounce-slow">
        <PixelArt 
          art={character} 
          colorMap={characterColors} 
          pixelSize={8} 
          className="mb-8"
        />
      </div>
      
      <div className="font-press-start text-xl mb-6 text-retro-green">
        {loadingText}<span className="inline-block">{showCursor ? '_' : '\u00A0'}</span>
      </div>
      
      {/* Progress bar */}
      <div className="w-64 h-6 bg-retro-black border-2 border-retro-blue mb-2 pixel-borders">
        <div 
          className="h-full bg-retro-green transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="font-pixel text-retro-white mt-2">
        {Math.floor(progress)}%
      </div>
    </div>
  );
};

export default Loading;
