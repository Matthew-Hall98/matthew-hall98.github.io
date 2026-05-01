
import { useState, useEffect, useRef } from 'react';
import { Coin } from './coins/CoinData';
import { setupCoinPositions } from './coins/CoinPositioner';
import CoinItem from './coins/CoinItem';
import CoinCounter from './coins/CoinCounter';
import TreasureDialog from './coins/TreasureDialog';

const CoinAnimation = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [coinCount, setCoinCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const totalCoins = 5;
  const setupComplete = useRef(false);
  
  // Set up the coins in specific sections - only once
  useEffect(() => {
    // Check if we've already set up the coins to avoid respawning
    if (setupComplete.current) return;
    
    const setupCoins = () => {
      const positions = setupCoinPositions();
      if (positions.length > 0) {
        setCoins(positions);
        setupComplete.current = true; // Mark setup as complete
        console.log("Coins setup complete with positions:", positions);
      } else {
        // Retry after a short delay if positions couldn't be determined
        setTimeout(setupCoins, 100);
      }
    };

    // Initial setup without the long delay
    setupCoins();

    // Update coin positions on window resize
    const handleResize = () => {
      // Only reposition if we've already set up coins
      if (setupComplete.current) {
        setupComplete.current = false; // Allow repositioning
        setupCoins();
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (coinCount === totalCoins) {
      // Show easter egg after a short delay
      setTimeout(() => {
        setShowEasterEgg(true);
      }, 500);
    }
  }, [coinCount, totalCoins]);

  const handleCoinClick = (id: number) => {
    setCoins(prevCoins => 
      prevCoins.map(coin => {
        if (coin.id === id && !coin.collected) {
          // Try to play coin sound, but don't fail if it doesn't work
          try {
            const coinSound = new Audio('/coin-sound.mp3');
            coinSound.volume = 0.5;
            coinSound.play().catch(e => console.log("Error playing sound:", e));
          } catch (error) {
            console.log("Could not create audio:", error);
          }
          
          // No toast notification, just update the counter
          setCoinCount(prev => prev + 1);
          return { ...coin, collected: true };
        }
        return coin;
      })
    );
  };

  return (
    <>
      {/* Render all coins */}
      {coins.map(coin => (
        <CoinItem 
          key={coin.id} 
          coin={coin} 
          onCollect={handleCoinClick}
        />
      ))}
      
      {/* Coin counter */}
      <CoinCounter collected={coinCount} total={totalCoins} />

      {/* Easter egg dialog */}
      <TreasureDialog 
        open={showEasterEgg} 
        onOpenChange={setShowEasterEgg} 
      />
    </>
  );
};

export default CoinAnimation;
