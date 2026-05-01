
/**
 * Preloads a list of images by creating Image objects and waiting for them to load
 */
export const preloadImages = (imageSources: string[]): Promise<void[]> => {
  const imagePromises = imageSources.map(src => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve();
      img.onerror = () => {
        console.error(`Failed to load image: ${src}`);
        resolve(); // We still resolve so one failed image doesn't block the entire site
      };
    });
  });
  
  return Promise.all(imagePromises);
};
