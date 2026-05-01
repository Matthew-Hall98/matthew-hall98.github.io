
// Types and configs for coin components

export type CoinPosition = {
  top: number;
  left: number;
};

export type Coin = {
  id: number;
  section: string;
  collected: boolean;
  position: CoinPosition;
};

// Coin pixel art definition
export const coinArt = [
  [' ', '1', '1', ' '],
  ['1', '2', '2', '1'],
  ['1', '2', '2', '1'],
  [' ', '1', '1', ' '],
];

export const coinColors = {
  '1': '#FFD700', // Gold outline
  '2': '#FFC107', // Inner gold
  ' ': 'transparent',
};

// New big gold coin with shine for the treasure dialog
export const bigCoinArt = [
  [' ', ' ', '1', '1', '1', '1', ' ', ' '],
  [' ', '1', '3', '2', '2', '3', '1', ' '],
  ['1', '2', '2', '2', '2', '2', '2', '1'],
  ['1', '3', '2', '2', '2', '2', '3', '1'],
  ['1', '2', '2', '2', '2', '2', '2', '1'],
  ['1', '3', '2', '2', '2', '2', '3', '1'],
  [' ', '1', '2', '2', '2', '2', '1', ' '],
  [' ', ' ', '1', '1', '1', '1', ' ', ' '],
];

export const bigCoinColors = {
  '1': '#FFD700', // Gold outline
  '2': '#FFC107', // Inner gold
  '3': '#FFEA00', // Shine highlights
  ' ': 'transparent',
};
