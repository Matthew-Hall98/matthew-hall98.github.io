
import React from 'react';
import PixelArt from '../PixelArt';
import { bigCoinArt, bigCoinColors } from './CoinData';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";

interface TreasureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TreasureDialog: React.FC<TreasureDialogProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-retro-navy border-4 border-retro-yellow">
        <DialogHeader>
          <DialogTitle className="text-retro-yellow font-press-start text-center">CONGRATULATIONS!</DialogTitle>
          <DialogDescription className="font-pixel text-retro-white text-center">
            You've found all the hidden coins!
          </DialogDescription>
        </DialogHeader>
        
        <div className="p-6 flex flex-col items-center">
          <div className="animate-float mb-4 relative">
            {/* Add enhanced glow around the big coin */}
            <div 
              className="absolute inset-0 bg-yellow-300 rounded-full filter blur-lg opacity-40 animate-pulse"
              style={{ transform: 'scale(1.2)' }}
            ></div>
            <PixelArt 
              art={bigCoinArt}
              colorMap={bigCoinColors}
              pixelSize={8}
            />
          </div>
          
          <div className="dialog-box text-center mt-4">
            <p className="font-pixel text-lg">Secret message unlocked!</p>
            <p className="font-pixel mt-2">Thanks for exploring every corner of my portfolio. You've discovered the hidden treasure!</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TreasureDialog;
