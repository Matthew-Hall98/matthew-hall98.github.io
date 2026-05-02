
import { useEffect, useState } from 'react';
import PixelArt from './PixelArt';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "HELLO WORLD!\nI'M MATTHEW HALL";
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  useEffect(() => {
    if (text.length < fullText.length) {
      const timer = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [text]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  const handleStartGameClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    setIsButtonHovered(true);
    
    setTimeout(() => {
      const aboutSection = document.querySelector('#about');
      if (aboutSection) {
        const viewportHeight = window.innerHeight;
        const elementRect = aboutSection.getBoundingClientRect();
        const absoluteElementTop = window.pageYOffset + elementRect.top;
        const middleScrollPosition = absoluteElementTop - (viewportHeight / 2) + (elementRect.height / 2);
        
        window.scrollTo({
          top: middleScrollPosition,
          behavior: 'smooth',
        });
      }
      setIsButtonHovered(false);
    }, 300);
  };

  const cloud = [
    [' ', ' ', '1', '1', '1', ' ', ' ', ' ', ' '],
    [' ', '1', '1', '1', '1', '1', '1', '1', ' '],
    ['1', '1', '1', '1', '1', '1', '1', '1', '1'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ];

  const cloudColors = {
    '1': '#FFFFFF',
    ' ': 'transparent',
  };

  const star = [
    [' ', ' ', '1', ' ', ' '],
    [' ', '1', '1', '1', ' '],
    ['1', '1', '1', '1', '1'],
    [' ', '1', '1', '1', ' '],
    [' ', ' ', '1', ' ', ' '],
  ];

  const starColors = {
    '1': '#FFD700',
    ' ': 'transparent',
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/c108577a-2093-496d-ac59-b028dc07c405.png" 
          alt="Pixel art landscape" 
          className="w-full h-full object-cover"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
      
      <div className="relative w-full max-w-5xl px-4 py-12 z-10">
        <div className="absolute top-10 left-1/4 animate-float">
          <PixelArt art={cloud} colorMap={cloudColors} pixelSize={6} />
        </div>
        <div className="absolute top-20 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
          <PixelArt art={cloud} colorMap={cloudColors} pixelSize={8} />
        </div>
        
        <div className="absolute top-40 right-1/3 animate-pulse" style={{ animationDelay: '0.5s' }}>
          <PixelArt art={star} colorMap={starColors} pixelSize={5} />
        </div>
        <div className="absolute bottom-40 right-1/4 animate-pulse" style={{ animationDelay: '1.5s' }}>
          <PixelArt art={star} colorMap={starColors} pixelSize={4} />
        </div>
        
        <div className="flex justify-center items-center">
          <div className="text-center bg-retro-navy bg-opacity-80 p-6 rounded pixel-borders z-10 relative max-w-2xl mx-auto">
            <div className="font-press-start text-sm sm:text-base md:text-lg text-retro-green mb-4 animate-pulse">
              PRESS START
            </div>
            <h1 className="font-press-start text-lg sm:text-xl md:text-2xl mb-4 whitespace-pre-line">
              {text}
              <span className="inline-block w-[0.6em]">{showCursor ? '_' : '\u00A0'}</span>
            </h1>
            <div className="font-pixel text-lg mb-6 animate-fade-in" style={{ animationDelay: '2s' }}>
              Software Developer | Melbourne, Australia
            </div>
            
            <div className="mt-4">
              <a 
                href="#about" 
                className={`pixel-btn inline-block z-20 relative transition-all duration-300 ${
                  isButtonHovered ? 'bg-retro-blue text-retro-white transform scale-110' : 'bg-retro-blue text-retro-white animate-bounce-very-slow'
                }`}
                onClick={handleStartGameClick}
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
              >
                START GAME
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
