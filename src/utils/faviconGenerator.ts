
// Function to generate a favicon from the pixel portrait data
export const generateFavicon = () => {
  // Pixel art portrait data from PixelPortrait component
  const portrait = [
    [' ', ' ', 'B', 'B', 'B', 'B', 'B', ' ', ' '],
    [' ', 'B', 'H', 'H', 'H', 'H', 'H', 'B', ' '],
    ['B', 'H', 'P', 'P', 'P', 'P', 'P', 'H', 'B'],
    ['B', 'P', 'P', 'E', 'P', 'E', 'P', 'P', 'B'],
    ['B', 'P', 'P', 'P', 'N', 'P', 'P', 'P', 'B'],
    ['B', 'P', 'P', 'M', 'M', 'M', 'P', 'P', 'B'],
    [' ', 'B', 'P', 'P', 'P', 'P', 'P', 'B', ' '],
    [' ', ' ', 'B', 'B', 'B', 'B', 'B', ' ', ' '],
  ];

  const portraitColors = {
    'B': '#000000', // Black outline
    'H': '#8B4513', // Brown hair
    'P': '#FFA07A', // Light coral skin
    'E': '#0047AB', // Blue eyes
    'N': '#000000', // Black nose
    'M': '#FF0000', // Red mouth
    ' ': 'transparent',
  };

  // Create a canvas element to draw the favicon
  const canvas = document.createElement('canvas');
  const size = portrait[0].length * 4; // 4 pixels per cell
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return;

  // Draw the pixel art on the canvas
  portrait.forEach((row, y) => {
    row.forEach((pixel, x) => {
      const color = portraitColors[pixel] || 'transparent';
      if (color !== 'transparent') {
        ctx.fillStyle = color;
        ctx.fillRect(x * 4, y * 4, 4, 4);
      }
    });
  });

  // Convert canvas to a data URL
  const faviconUrl = canvas.toDataURL('image/png');
  
  // Set the favicon
  const faviconElement = document.getElementById('favicon') as HTMLLinkElement;
  if (faviconElement) {
    faviconElement.href = faviconUrl;
  }
};
